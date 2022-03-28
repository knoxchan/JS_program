const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

const jscode = fs.readFileSync('./t.js', {encoding: 'utf-8'});

ast = parser.parse(jscode, {'sourceType': 'module'});

let member_code = "";
for (let i = 0; i < 3; i++) {
    member_code += generator(ast.program.body[i], {compact: true}).code
    delete ast.program.body[i]
}


eval(member_code)


traverse(ast, {
    // 还原$b
    CallExpression(path) {
        // console.log(path.toString())
        if (path.node.callee != undefined && t.isIdentifier(path.node.callee) && path.node.callee.name.startsWith('$b')) {
            path.replaceWith(t.valueToNode(eval(path.toString())))
        }
    },
    // 还原unicode和十六进制字符串
    StringLiteral(path) {
        if (path.node.extra != undefined && path.node.extra.raw.indexOf('\\') !== -1) {
            delete path.node.extra
        }
    },
    // 字符串合并
    BinaryExpression: {
        exit: function (path) {
            if (path.node.operator == '+' && t.isStringLiteral(path.node.left) && t.isStringLiteral(path.node.right)) {
                path.replaceWith(t.valueToNode(eval(path.toString())))
            }
        }
    },
})

// 获取y = xxx 解码 var A = y;
const y = {}
traverse(ast, {
    // 获取y = xxx函数 并删除
    ExpressionStatement(path) {
        if (t.isMemberExpression(path.node.expression.left) && t.isIdentifier(path.node.expression.left.object, {name: 'y'})) {
            eval(path.toString())
            // path.remove()
        }
    },
//    分类讨论 - A
    CallExpression(path) {
        if (t.isIdentifier(path.node.callee.object, {name: 'A'})) {
            const y_code = y[path.node.callee.property.value];
            console.log(y_code)
            // if y_code.
        }
    }


})

// console.log(y)


let code = generator(ast, {compact: true}).code
fs.writeFile('./new_t.js', code, (err) => {
});