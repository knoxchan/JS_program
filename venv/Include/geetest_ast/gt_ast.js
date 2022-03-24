const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

jscode = fs.readFileSync('./old.js', {
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

let member_code_2 = ""

traverse(ast, {
    // 字符串\x01 -> 字符串字符
    StringLiteral(path) {
        if (path.node.extra && path.node.extra.raw.indexOf('\\') != -1) {
            delete path.node.extra;
        }
    },
    // 变量混淆还原
    BlockStatement(path) {
        body = path.node.body
        if (body[0] != undefined && body[0].type == 'VariableDeclaration' && body[0].declarations.length == 3) {
            let _str = "";
            var code1 = "";
            for (let i = 0; i < 3; i++) {
                code1 = generator(body[i], {compact: true}).code
                if (i == 0 && code1.indexOf('=FAwFx.$_CQ,') == -1)
                    return
                if (i == 1 && code1.indexOf('.shift()') == -1)
                    return
                _str += code1
                // 加载出来之后 可以把他们删掉
                // delete body[i]
            }
            member_code_2 += _str;
            for (let i = 0; i < 3; i++) {
                // _str += generator(body[i], {compact: true}).code
                // 加载出来之后 可以把他们删掉
                delete body[i]
            }
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
eval(member_code_2)
traverse(ast, {
    CallExpression(path) {
        if (path.node.callee.type == 'Identifier' && path.node.callee.name.startsWith('$_')) {
            try{
            path.replaceInline(t.valueToNode(eval(path.toString())));
            }
            catch{
                console.log(path.toString())
            }
        }
    }
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

fs.writeFile('./new.js', code, (err) => {
});


