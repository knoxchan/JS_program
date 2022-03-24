const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;


// 字母串16进制加密
function hexEnc(code) {
    for (var hexStr = [], i = 0, s; i < code.length; i++) {
        s = code.charCodeAt(i).toString(16);
        hexStr += "\\x" + s;
    }
    return hexStr
}

// 把混淆方案的相关想实现方法封装成类
function ConfoundUtils(ast, encryptFunc) {
    this.ast = ast;
    this.bigArr = [];
    // 用于接收传入的字符串加密函数
    this.encryptFunc = encryptFunc;
}

//改变对象的访问方式 将console.log --> console['log']
ConfoundUtils.prototype.changeAccessMode = function () {
    traverse(this.ast, {
        MemberExpression(path) {
            if (t.isIdentifier(path.node.property)) {
                let name = path.node.property.name;
                path.node.property = t.stringLiteral(name);
            }
            path.node.computed = true
        }
    });
}

// 标准内置对象的处理
ConfoundUtils.prototype.changeBuiltinObjects = function () {
    traverse(this.ast, {
        Identifier(path) {
            let name = path.node.name;
            if ('eval|parseInt|encodeURIComponent|Object|Function|Boolean|Number|Math|Date|String|RegExp|Array'.indexOf(name) != -1) {
                path.replaceWith(t.memberExpression(t.identifier('window'), t.stringLiteral(name), true));
            }
        }
    });
}

// 数值常量加密
ConfoundUtils.prototype.numericEncrypt = function () {
    traverse(this.ast, {
        NumericLiteral(path) {
            let value = path.node.value;
            let key = parseInt(Math.random() * (999999 - 100000) + 100000, 10);
            let cipherNum = value ^ key;
            path.replaceWith(t.binaryExpression('^', t.numericLiteral(cipherNum), t.numericLiteral(key)));
            path.skip();
        }
    });
}

// 字符串加密 与 数组混淆
ConfoundUtils.prototype.arrayConfound = function () {
    let bigArr = [];
    let encryptFunc = this.encryptFunc;
    traverse(this.ast, {
        StringLiteral(path) {
            let bigArrIndex = bigArr.indexOf(encryptFunc(path.node.value));
            let index = bigArrIndex;
            if (bigArrIndex == -1) {
                let length = bigArr.push(encryptFunc(path.node.value));
                index = length - 1;
            }
            let encStr = t.callExpression(
                t.identifier('atob'), [t.memberExpression(t.identifier('arr'), t.numericLiteral(index), true)]);
            path.replaceWith(encStr);
        }
    });
    bigArr = bigArr.map(function (v) {
        return t.stringLiteral(v);
    });
    this.bigArr = bigArr;
}

// 数组乱序
ConfoundUtils.prototype.arrayShuffle = function () {
    (function (myArr, num) {
        var arrayShuffle = function (nums) {
            while (--nums) {
                myArr.unshift(myArr.pop());
            }
        };
        arrayShuffle(++num)
    }(this.bigArr, 0x10));
}

// 二项式转函数花指令
ConfoundUtils.prototype.binaryToFunc = function () {
    traverse(this.ast, {
        BinaryExpression(path) {
            let operator = path.node.operator;
            let left = path.node.left;
            let right = path.node.right;
            let a = t.identifier('a');
            let b = t.identifier('b');
            let funcNameIdentifier = path.scope.generateUidIdentifier('xxx')
            let func = t.functionDeclaration(
                funcNameIdentifier, [a, b], t.blockStatement([t.returnStatement(t.binaryExpression(operator, a, b))]));
            let BlockStatement = path.findParent(
                function (p) {
                    return p.isBlockStatement()
                });
            BlockStatement.node.body.unshift(func);
            path.replaceWith(t.callExpression(
                funcNameIdentifier, [left, right]));
        }
    });
}

// 十六进制字符串
ConfoundUtils.prototype.stringToHex = function () {
    function hexEnc(code) {
        for (var hexStr = [], i = 0, s; i < code.length; i++) {
            s = code.charCodeAt(i).toString(16);
            hexStr += '\\x' + s;
        }
        return hexStr;
    }

    traverse(this.ast, ? {
        MemberExpression(path) {
            if (t.isIdentifier(path.node.property)) {
                let ?
                name ? = ? path.node.property.name;
                path.node.property ? = ? t.stringLiteral(hexEnc(name));
            }
            path.name.computed ? = ? true;
        }
    });
}

// 标识符混淆
ConfoundUtils.prototype.renameIdentifier = function () {
    //标识符混淆之前先转成代码再解析，确保一些新产生的节点也被解析到
    let code = generator(this.ast).code;
    let newAst = parser.parse(code);

    // 生成标识符
    function generatorIdentifier(decNum) {
        let arr = ['0', 'o', 'O'];
        let retval = [];
        while (decNum > 0) {
            retval.push(decNum % 3);
            decNum = parseInt(decNum / 3);
        }
        let Identifier = retval.reverse().map(function (v) {
            return arr[v]
        });
    }
}

//标识符混淆
Confoundutils.prototype.renameldentifier = function () {
    //标识符混淆之前先转成代码再解析,确保新生成的一些节点被解析到
    let code = generator(this.ast).code;
    let newAst = parser.parse(code);//生成标识符
    function generatorIdentifier(decNum) {
        let arr = ['O', 'o', 'O'];
        let retval = [];
        while (decNum > 0) {
            retval.push(decNum * 3);
            decNum = parseInt(decNum / 3);
            let Identifier = retval.reverse().map(function (v) {
                return arr[v]
            }).join('');
            Identifier.length < 6 ? (Identifier = ('00000o' + Identifier).substr(-6)) : Identifier[0] == 'O' && (Identifier = 'O' + Identifier);
            return Identifier;
        }

        function

        ? renameOwnBinding(path){
            let OwnBindingObj = {}, globalBindingObj = {}, i = 0;
            path.traverse({
                Identifier(p) {
                    let name = p.node.name;
                    let binding = p.scope.getOwnBinding(name);
                    binding && generator(binding.scope.block).code == path + '' ? (OwnBindingObj[name] = binding) : (globalBindingObj[name] = 1);
                }
            });
            for(let oldName in OwnBindingobj
    )
        {
            do {
                var newName = generatorIdentifier(i++);
            } while (globalBindingObj[newName]);
            OwnBindingObj[oldName].scope.rename(oldName, newName);
        }
    }
        traverse(newAst, {
            'Program|FunctionExpression|FunctionDeclaration'(path) {
                renameOwnBinding(path);
            }
        });
        this.ast = newAst;
    };
}

// let bigArr = [];
// traverse(ast, {
//     // 将引用加密 console.log --> console['log']
//     MemberExpression(path) {
//         if (t.isIdentifier(path.node.property)) {
//             let name = path.node.property.name;
//             path.node.property = t.stringLiteral(name);
//         }
//         path.node.computed = true;
//     },
//     // 对数字进行加密 将数字 变成 异或模式
//     NumericLiteral(path) {
//         let value = path.node.value;
//         let key = parseInt(Math.random() * (999999 - 100000) + 100000, 10);
//         let cipherNum = value ^ key;
//         path.replaceWith(t.binaryExpression('^', t.NumericLiteral(cipherNum), t.NumericLiteral(key)));
//         path.skip();
//     },
//     // 对字符串进行base64 加密
//     // StringLiteral(path) {
//     //     // 生成callExpression 参数就是字符串加密后的密文
//     //     let encStr = t.callExpression(
//     //         t.identifier('atob'),
//     //         [t.StringLiteral(base64Encode(path.node.value))]
//     //     );
//     //     path.replaceWith(encStr);
//     //     path.skip();
//     // },
//     // 实现数据混淆 合并 字符串加密一起实现
//     StringLiteral(path) {
//         let cipherText = base64Encode(path.node.value);
//         let bigArrIndex = bigArr.indexOf(cipherText);
//         let index = bigArrIndex
//         if (bigArrIndex == -1) {
//             let lenght = bigArr.push(cipherText);
//             index = lenght - 1;
//         }
//         // 生成callExpression 参数就是字符串加密后的密文
//         let encStr = t.callExpression(
//             t.identifier('atob'),
//             [t.memberExpression(t.identifier('arr'), t.numericLiteral(index), true)]
//         );
//         path.replaceWith(encStr);
//         // path.skip();
//     },
//     // 实现数组乱序
//
// });
// // 将大数组塞回 程序里面
// bigArr = bigArr.map(function (v) {
//     return t.stringLiteral(v);
// });
// bigArr = t.variableDeclarator(t.identifier('arr'), t.arrayExpression(bigArr));
// bigArr = t.variableDeclaration('var', [bigArr]);
// ast.program.body.unshift(bigArr);


// 字符串base64加密
function base64Encode(str) {
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
};

function main() {
    //读取要混淆的代码
    jscode = fs.readFileSync('./demo9.js', {
        encoding: 'utf-8'
    });
    // 解析成ast代码
    ast = parser.parse(jscode, {'sourceType': 'module',});

    let confoundAst = new ConfoundUtils(ast, base64Encode);
    // confoundAst.changeAccessMode();
    // confoundAst.changeBuiltinObjects();
    // confoundAst.numericEncrypt();
    // confoundAst.binaryToFunc();
    // confoundAst.stringToHex();

    // 将ast代码还原回js
    let code = generator(ast).code;

    fs.writeFile('./demoNew9.js', code, (err) => {
    });
}

main();
