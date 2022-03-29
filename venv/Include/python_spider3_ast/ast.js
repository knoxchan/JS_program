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
            y[path.node.expression.left.property.value] = path.node.expression.right
            // eval(path.toString())
            path.remove()
        }
    },
    // 分类讨论 - 字符串 二项式 函数
    // 字符串
    MemberExpression(path) {
        if (path.node.object.name === 'A' && (path.inList || (path.parent.type == 'AssignmentExpression' || 'VariableDeclarator'))) {
            path.replaceWith(y[path.node.property.value]);
            // const y_code = y[path.node.property.value];
            // console.log(y_code)
            // if y_code.
        }
    },
    // 二项式
    CallExpression(path) {
        if (path.node.callee.object && path.node.callee.object.name === 'A') {
            const y_code = y[path.node.callee.property.value];
            if (y_code.body.body[0].argument.type === 'BinaryExpression') {
                const operator = y_code.body.body[0].argument.operator;
                path.replaceWith(t.BinaryExpression(operator, path.node.arguments[0], path.node.arguments[1]));
            } else if (y_code.body.body[0].argument.type == 'CallExpression') {
                // 函数情况
                const arg = path.node.arguments.slice(1);
                path.replaceWith(t.CallExpression(path.node.arguments[0], arg));
            }
        }
    },
    // 控制流 P

    // console['log'] --> console.log
    MemberExpression:{
        exit(path) {
            if (path.node.property.type === 'StringLiteral') {
                path.node.computed = false;
                path.node.property.type = 'Identifier';
                path.node.property.name = path.node.property.value;
                delete path.node.property.value;
            }
        }
    },


})

// console.log(y)


let code = generator(ast, {compact: true}).code
fs.writeFile('./new_t.js', code, (err) => {
});