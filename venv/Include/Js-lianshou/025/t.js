// r.needRgfySignature &&
// (r.params ?
//         r.params.signature = y(r) :
//         (r.data.signature = y(r), r.data = f().stringify(r.data))
// ),
// r.needDocumentSignature &&
// (r.params ?
//         r.params.signature = d(r) :
//         (r.data.signature = d(r), r.data = f().stringify(r.data))
// ),
// r.needSignature &&
// (r.params.signature = function (e) {
//         var t = Object.values((0,
//             u.lM)(e.params || e.data)).join("");
//         return c()("".concat(e.url).concat(t, "7ece94d9f9c202b0d2ec557dg4r9bc")).toString()
//     }(r)
// )

r = {
    "url": "/dictionary/word/query/web",
    "baseURL": "//dict.iciba.com",
    "method": "GET",
    "timeout": 10000,
    "withCredentials": true,
    "needSignature": true,
    "params": {
        "client": 6,
        "key": 1000006,
        "timestamp": 1643353809878,
        "word": "%E4%BB%8A%E5%A4%A9%E5%A4%A9%E6%B0%94%E7%9C%9F%E5%A5%BD",
    }
}

function sdk(e) {
    var t = Object.values((0, _sort)(e.params || e.data)).join("");
    return c()("".concat(e.url).concat(t, "7ece94d9f9c202b0d2ec557dg4r9bc")).toString()
}

function _sort(e) {
    var t = Object.keys(e).sort()
        , r = {};
    return t.forEach((function (t) {
            r[t] = e[t]
        }
    )), r
}

function c() {
    return e  // 这个就是返回一个加密程序
}

sdk(r)