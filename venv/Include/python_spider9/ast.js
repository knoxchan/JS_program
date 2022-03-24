const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;


jscode = fs.readFileSync('./t.js',
    {
        encoding: 'utf-8'
    }
)
;

ast = parser.parse(jscode, {sourceType: 'module',});

let member_code = ''
for (i = 0; i < 2; i++) {
    member_code += generator(ast.program.body[i], {compact: true}).code
    delete ast.program.body[i]
}
eval(member_code)

traverse(ast, {
    // 字符反混淆
    StringLiteral(path) {
        if (path.node.extra && path.node.extra.raw.indexOf('\\') != -1) {
            delete path.node.extra
        }
    },
    // 第一二行函数还原
    CallExpression(path) {
        if (path.node.callee.name === '$_0x2214') {
            path.replaceInline(t.valueToNode(eval(path.toString())))
        }
    },
    // 处理字符串拼接
    BinaryExpression: {
        exit: function (path) {
            if (path.node.left.type == 'StringLiteral' && path.node.right.type == 'StringLiteral' && path.node.operator == '+') {
                path.replaceInline(t.valueToNode(path.node.left.value + path.node.right.value))
            }
        }
    },
    // 将第三段程序还原回去
})


// code = generator(ast,{compact: true}).code
code = generator(ast,).code

fs.writeFile('./new_t.js', code, (err) => {
});
