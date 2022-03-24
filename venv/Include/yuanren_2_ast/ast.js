const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

jscode = fs.readFileSync('./t.js', {
    encoding: 'utf-8'
});

ast = parser.parse(jscode, {'sourceType': 'module',});

let member_code  = ""
for (let i = 0;i<3;i++){
    member_code += generator(ast.program.body[i],{compact:true}).code
    // 读取之后删除节点
    ast.program.body[i].remove()
}
eval(member_code)

traverse(ast,{
    CallExpression(path){
        if(path.node.callee.name=='$b' && path.node.right.type =='StringLiteral')
            

    }
})

console.log($b('\x30\x78\x61\x65', '\x21\x77\x25\x33'))

let code = generator(ast).code

fs.writeFile('./new_t.js', code, (err) => {
});


