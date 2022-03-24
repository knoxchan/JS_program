CryptoJS = require('./crypto-js')

var _token = 'BhlaZFruOmTt7mNpq5oqhnTNoJnSdnkt7jraIxFA'


function aes(val) {
    var k = CryptoJS.enc.Utf8.parse('1234567890abcDEF');
    var iv = CryptoJS.enc.Utf8.parse('1234567890abcDEF');
    enc = CryptoJS.AES.encrypt(trim(val), k, {iv: iv, mode:CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding}).toString();
    return enc;
}

Xt = '/^[\\s\uFEFF\xA0]+|[\\s\uFEFF\xA0]+$/g'
trim = function(e) {
    return null == e ? "" : (e + "").replace(Xt, "")
}


console.log(aes('ZXCASD123'))
console.log('N451hs83lwWDtPiOBFgs5g==')

console.log(aes('13192290340'))
console.log('ACVvBjpNTM3MY5s0N6pBTg==')