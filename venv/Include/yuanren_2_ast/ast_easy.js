const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

jscode = fs.readFileSync('./easy_ob.js', {
    encoding: 'utf-8'
});

ast = parser.parse(jscode, {'sourceType': 'module',});

let member_code = ""
for (let i=0;i<3;i++){
    member_code += generator(ast.program.body[i],{compact:true}).code
}
eval(member_code)

console.log('asd')

traverse(ast, {})

let code = generator(ast).code

fs.writeFile('./new_easy.js', code, (err) => {
});




