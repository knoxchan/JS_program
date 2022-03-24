// 虾米音乐 搜索加密
// sha1 加密不知道怎么扣
s = {
    'c': "001002A",
    'f': "html",
    'k': "2ba4496b-e678-4395-832b-a011aeed1d77-n41643183403052",
    'keyword': "%E6%A2%A6%E6%83%B3%E5%BC%80%E6%80%80",
    's': "1643248638",
    'u': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36/220001",
    'v': "3.22.3"
}
t = {
    cfg: [],
    init: function (t) {
        this.cfg = this.cfg.extend(t),
            this.reset()
    },
    reset: function () {
        v.reset.call(this),
            this._doReset()
    },
    update: function (t) {
        return this._append(t),
            this._process(),
            this
    },
    finalize: function (t) {
        return t && this._append(t),
            this._doFinalize()
    },
    blockSize: 16,
    _createHelper: function(t) {
        return function(e, n) {
            return new t.init(n).finalize(e)
        }
    },
    _createHmacHelper: function (t) {
        return function (e, n) {
            return new g.HMAC.init(t, n).finalize(e)
        }
    }
}
function sdk(e) {
    var n = Object.keys(e).sort().map((function (t) {
            return "".concat(t).concat(e[t])
        }
    )).join("");
    return t._createHelper(encodeURIComponent(n)).toString()
}

var c = sdk(s)






console.log(c)
console.log('6cd47089d11cc74cf129bdb46c626d674c4cea67')