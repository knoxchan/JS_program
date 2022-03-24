const fs = require('fs');
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default();

const jscode = fs.readFileSync("./h1.js",{
    encodeing:'utf-8'
});

let ast = parser.parse(jscode);

// 读取第一行混淆数组
// for (let i =0;i<1;i++){
//     member_code += generator(ast.program.body[i], {compact: true}).code
// }
//
// eval(member_code)

let code = generator(ast).code;
fs.writeFile("./new_h1.js",code,(err)=>{});