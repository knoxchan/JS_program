//https://www.oschina.net/home/login?goto_page=https%3A%2F%2Fwww.oschina.net%2F

//sha1 加密

let CryptoJS = require('./node_modules/crypto-js')

pwd = 'zxcasdqwe123'
console.log(CryptoJS.SHA1(pwd).toString())