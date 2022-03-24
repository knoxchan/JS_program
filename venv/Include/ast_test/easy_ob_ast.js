const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

jscode = fs.readFileSync('./easy_ob.js', {
    encoding: 'utf-8'
});

ast = parser.parse(jscode, {'sourceType': 'module',});

// print(123)
let member_code = "";
for (let i = 0; i < 3; i++) {
    member_code += generator(ast.program.body[i], {compact: true}).code
    // 读取之后删除节点
    delete ast.program.body[i]
    console.log(1234)
    // ast.program.body[i]
}
eval(member_code)

let member_code2 = ""


traverse(ast, {
    BlockStatement(path) {
        member_code2 += generator(path.node.body[0], {compact: true}).code
        delete path.node.body[0]
    },
    CallExpression: {
        exit(path) {
            if (path.toString().indexOf('_0x') != -1 && path.toString().indexOf('console') == -1){
                eval(member_code2)
                path.replaceWith(t.valueToNode(eval(path.toString())))
            }
        }
    },
    MemberExpression(path) {
        const node = path.node;
        let property = path.get('property')
        if (t.isStringLiteral(path.node.property)) {
            let value = path.node.property.value;
            console.log(value)
            //原为true,改后的效果把[]变为.
            node.computed = false
            //如果写成path.replaceWith是将整个MemberExpression节点换为value，节点类型也变为Identifier，例：window.btoa变为btoa
            //我们仅需要替换property节点
            property.replaceWith(t.Identifier(value))
        }
    }
})


code = generator(ast).code

fs.writeFile('./new_easy_ob.js', code, (err) => {
});