var _key = 'k1fsa01v';
var _iv = 'k1fsa01v';

let CryptoJS = require('./node_modules/crypto-js')

function encryptByDES(message) {
    var keyHex = CryptoJS.enc.Utf8.parse(_key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        iv: CryptoJS.enc.Utf8.parse(_iv),
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

function decryptByDES(ciphertext) {
    var keyHex = CryptoJS.enc.Utf8.parse(_key);
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
    }, keyHex, {
        iv: CryptoJS.enc.Utf8.parse(_iv),
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

// console.log(encryptByDES('zxcasdqwe123'))
// aSPd+Lk+Q1lyoN3twp4yqg==