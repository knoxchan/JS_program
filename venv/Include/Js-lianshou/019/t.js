// 翼龙贷 登录逆向 des
// https://cj.eloancn.com/user/login?service=https%3A%2F%2Fcj.eloancn.com%2Fpcgway%2Fapp001%2Fv1%2F02%3Fret%3DaHR0cHM6Ly9jai5lbG9hbmNuLmNvbQ%3D%3D&v=1627966930751

var DESkey = "e9284d45-cf2a-4e46-9367-f122413ca6b0";

let CryptoJS = require('./node_modules/crypto-js')

function encryptByDES(t, e) {
    var a = CryptoJS.enc.Utf8.parse(e);
    try {
        var s = CryptoJS.DES.encrypt(String(t), a, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        })
    } catch (t) {
        console.log(t)
    }
    return s.toString()
}

console.log(encryptByDES('123456',DESkey))
// 88Fypeu1fTg=