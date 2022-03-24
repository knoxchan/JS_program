const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

jscode = fs.readFileSync('./t.js', {
    encoding: 'utf-8'
});

ast = parser.parse(jscode, {'sourceType': 'module',});

let member_code = ""
for (let i = 0; i < 5; i++) {
    member_code += generator(ast.program.body[i], {compact: true}).code
    // 加载出来之后 可以把他们删掉
    delete ast.program.body[i]
}
eval(member_code)
var _member_code = ''
traverse(ast, {
    FunctionDeclaration(path) {
        // 执行混淆的内容
        // let member_code = ""
        for (let i = 0; i < 3; i++) {
            _member_code += generator(path.node.body.body[i], {compact: true}).code
            delete path.node.body.body[i]
        }
        // eval(_member_code);
    },
    FunctionExpression(path){
        for (let i = 0; i < 3; i++) {
            _member_code += generator(path.node.body.body[i], {compact: true}).code
            delete path.node.body.body[i]
        }
    },

    CallExpression(path) {
        console.log(path.node.callee.type)
        if (path.node.callee.type == 'FunctionExpression') {
            for (let i = 0; i < 3; i++) {
                _member_code += generator(path.node.body.body[i], {compact: true}).code
                delete path.node.body.body[i]
            }
        }
        // eval(_member_code);
    },
    CallExpression(path) {
        console.log(path.node.callee.type)
        if (path.node.callee.type == 'FunctionExpression') {
            for (let i = 0; i < 3; i++) {
                _member_code += generator(path.node.callee.body.body[i], {compact: true}).code
                delete path.node.callee.body.body[i]
            }
        } else {
            eval(_member_code);
            try {
                if (path.node.callee.type == 'Identifier' && path.node.callee.name.indexOf("$_") != -1) {
                    path.replaceInline(t.valueToNode(eval(path.toString())));
                }
            } catch {
                console.log(1234)
            }
        }
    },
    // 字符串\x01 -> 字符串字符
    StringLiteral(path) {
        if (path.node.extra && path.node.extra.raw.indexOf('\\') != -1) {
            delete path.node.extra;
        }
    },
    // },
    // // 字符串合并
    // BinaryExpression: {
    //     exit: function (path) {
    //         if (path.node.left.type == 'StringLiteral' && path.node.right.type == 'StringLiteral' && path.node.operator == '+') {
    //             path.replaceInline(t.valueToNode(path.node.left.value + path.node.right.value))
    //         }
    //     }
    // },
})

let code = generator(ast).code

// fs.writeFile('./new_t3.js', code, (err) => {
// });

// const y = {};
// traverse(ast, {
//     // 花指令脱壳
//     // 1.将花指令代码 读取进入内存
//     AssignmentExpression(path) {
//         if (path.node.right.type === 'FunctionExpression' || path.node.right.type === 'StringLiteral') {
//             if (path.node.left.object.name === 'y'){
//                 y[path.node.left.property.value] = path.node.right;
//                 path.remove();
//             }
//         }
//     },
//     MemberExpression(path) {
//         if (path.node.object.name === 'A' && (path.inList || path.parent === 'AssignmentExpression' || 'VariableDeclaration')) {
//             path.replaceInline(y[path.node.property.value]);
//         }
//     },
//     CallExpression(path) {
//         if (path.node.callee.object && path.node.callee.object.name === 'A') {
//             // console.log(path.node.callee.property.value)
//             const y_node = y[path.node.callee.property.value];
//             //判断节点内部是不是二项式
//             if (y_node && y_node.body.body[0].argument.type === 'BinaryExpression') {
//                 const operator = y_node.body.body[0].argument.operator
//                 path.replaceInline(t.binaryExpression(operator, path.node.arguments[0], path.node.arguments[1]))
//             }
//             // 节点嵌套函数情况
//             else if (y_node && y_node.body.body[0].argument.type === 'CallExpression') {
//                 const arg = path.node.arguments.slice(1);
//                 path.replaceInline(t.callExpression(path.node.arguments[0], arg))
//                 // path.node.argument[0];
//             }
//         }
//     }
// })
// console.log(y)

code = generator(ast).code

fs.writeFile('./new_t.js', code, (err) => {
});


