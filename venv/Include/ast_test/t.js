const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

const jscode = fs.readFileSync('./easy_ob.js', {encoding: 'utf-8'});

ast = parser.parse(jscode, {'sourceType': 'module',});


const visitor1 = {
    CallExpression = function (path) {
        console.log("i'm in path")
    }
}

const visitor2 = {
    CallExpression(path) {
        console.log("i'm in path")
    }
}

const visitor = {
    CallExpression(path) {
        path.replaceWith(t.valueToNode('XXX'))
    },
    CallExpression(path) {
        path.replaceWithMultiple([t.valueToNode('XXX'), t.returnStatement()])
    },
}

const visitor3 = {
    CallExpression: {
        enter(path) {
            console.log("i'm in enter path")
        },
        exit(path) {
            console.log("i'm in exit path")
        }
    }
}

let code = generator(ast, {conpact: true}).code
fs.writeFile('./new_easy_ob.js', code, (err) => {
});