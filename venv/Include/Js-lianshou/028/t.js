CryptoJS = require('../027/crypto-js')

const key = CryptoJS.enc.Utf8.parse("20171109124536982017110912453698");

const iv = CryptoJS.enc.Utf8.parse('2017110912453698'); //十六位十六进制数作为密钥偏移量

function encrypt(word){
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString().toUpperCase();
}

function passwordEncrypt(password){
    if (typeof password === 'undefined') return undefined
    if (!password) return ''
    return encrypt(password)
}

console.log(passwordEncrypt('13221'))

console.log('A5A0BC896E944BBECEDD86CBD274997B')