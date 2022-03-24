
let cryptoJs = require('./crypto-js')

t = '{"lang":"zh-cn","userresponse":"606026066200f1ee","passtime":485,"imgload":92,"aa":"I---/-----/--o-/--!!Buszys(yyytyyttstssuusssssstsyyy((((((O(((((((tyyy(y(ystst!!(69111111Z111k111119119119111111111111111201111201201111111","ep":{"v":"7.8.6","$_BHR":false,"me":true,"tm":{"a":1646816807938,"b":1646816808207,"c":1646816808207,"d":0,"e":0,"f":1646816807946,"g":1646816807946,"h":1646816807946,"i":1646816807949,"j":1646816808062,"k":1646816807954,"l":1646816808062,"m":1646816808204,"n":1646816808205,"o":1646816808208,"p":1646816808697,"q":1646816808697,"r":1646816808699,"s":1646816808700,"t":1646816808700,"u":1646816808700},"td":-1},"sm7o":"9787205141","rp":"737f28a1fd802c60b2ebc550203ef4bf"}'

e = 'dc15c8dc896463f2'


var aes_encrypt = function (key,iv,l){
    var e = cryptoJs.enc.Utf8.parse(key);
    var iv = cryptoJs.enc.Utf8.parse(iv);
    var l = cryptoJs.enc.Utf8.parse(l);
    return cryptoJs.AES.encrypt(l,e,{
        mode:cryptoJs.mode.CBC,
        // padding:cryptoJs.pad.nod,
        iv:iv
    })
}

for (var r = aes_encrypt('dc15c8dc896463f2','0000000000000000',t), i = r["ciphertext"]["words"], o = r["ciphertext"]["sigBytes"], s = [], a = 0; a < o; a++) {
    var _ = i[a >>> 2] >>> 24 - a % 4 * 8 & 255;
    s["push"](_);
}
console.log(s)