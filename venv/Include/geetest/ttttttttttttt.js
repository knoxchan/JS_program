function get_r(e) {
    var t = function a(e, t) {
        var n = []
            , r = e.length - 1;
        while (0 <= r && 0 < t) {
            var o = e["charCodeAt"](r--);
            o < 128 ? n[--t] = o : 127 < o && o < 2048 ? (n[--t] = 63 & o | 128,
                n[--t] = o >> 6 | 192) : (n[--t] = 63 & o | 128,
                n[--t] = o >> 6 & 63 | 128,
                n[--t] = o >> 12 | 224);
        }
        n[--t] = 0;
        var i = new u()
            , s = [];
        while (2 < t) {
            s[0] = 0;
            while (0 == s[0])
                u_nextBytes(s);
            n[--t] = s[0];
        }
        return n[--t] = 2,
            n[--t] = 0,
            new w(n);
    }(e, 128);
    var n = this[doPublic](t);
    var r = n.toString(16);
    return 0 == (1 & r.length) ? r : '0' + r;
}

function u_nextBytes(e) {
    for (t = 0; t < e.length; ++t)
        e[t] = l();
}

function t_dopublic(t) {
    e = 65537
    var n;
    return n = e < 256 || t["isEven"]() ? new m(t) : new b(t),
        t_dopublic_exp(e, n, t);
}

function t_dopublic_b() {
    this['m'] = e,
        this['mp'] = e.invDigit(),
        this['mph'] = 32767 & this['mp'],
        this['mpl'] = this['mp'] >> 15,
        this['mt2'] = (1 << 28 - 15) - 1,
        this['um'] = 2 * e['t'];
}

function t_dopublic_exp(e, t, w) {
    var n = x()
        , r = x()
        , o = t['convert'](w)
        , i = 16;
    o['copyTo'](n);
    while (0 <= --i)
        if (t['sqrTo'](n, r),
        0 < (e & 1 << i))
            t['mulTo'](r, o, n);
        else {
            var s = n;
            n = r,
                r = s;
        }
    return t['revert'](n);
}

function o_copyTo(e) {
    for (var t = 36; 0 <= t; --t)
        e[t] = this[t];
    e["t"] = this["t"],
        e["s"] = this["s"]
}

// o 参数推测是随机生成的
o = [178, 222, 232, 144, 28, 135, 70, 81, 168, 184, 52, 150, 98, 72, 211, 204, 152, 251, 42, 108, 139, 168, 189, 136, 144, 125, 181, 116, 68, 68, 48, 88, 205, 189, 86, 173, 120, 157, 71, 73, 93, 252, 158, 79, 97, 135, 111, 144, 246, 44, 251, 145, 236, 250, 57, 144, 155, 68, 220, 188, 221, 127, 248, 193, 29, 4, 215, 247, 15, 211, 68, 113, 132, 102, 114, 126, 173, 12, 66, 41, 65, 54, 254, 165, 42, 184, 227, 17, 73, 230, 112, 172, 16, 236, 175, 215, 104, 40, 224, 170, 10, 32, 211, 232, 72, 148, 188, 159, 158, 138, 13, 143, 196, 129, 185, 104, 251, 155, 138, 36, 17, 143, 92, 248, 93, 148, 197, 224, 138, 9, 158, 234, 58, 10, 153, 216, 76, 166, 130, 6, 166, 15, 237, 161, 184, 67, 213, 219, 69, 22, 119, 57, 117, 6, 114, 87, 33, 14, 92, 213, 108, 55, 147, 217, 221, 96, 29, 226, 1, 136, 224, 66, 111, 56, 62, 244, 240, 103, 251, 40, 205, 174, 194, 9, 234, 179, 170, 104, 18, 27, 38, 234, 67, 12, 177, 125, 21, 73, 240, 172, 107, 4, 213, 6, 204, 207, 100, 255, 43, 142, 216, 116, 211, 188, 95, 95, 105, 83, 102, 185, 205, 14, 17, 6, 155, 186, 149, 192, 158, 209, 24, 50, 35, 61, 125, 236, 142, 208, 0, 180, 107, 51, 24, 35, 61, 156, 68, 208, 97, 19, 170, 155, 34, 40, 204, 62];
let _u_l_i = 0;
let _u_l_j = 0;

let l_array = [];

function get_l_array() {
    var t, n, r;
    for (t = 0; t < 256; ++t)
        l_array[t] = t;
    for (t = n = 0; t < 256; ++t)
        n = n + l_array[t] + o[t % o.length] & 255,
            r = l_array[t],
            l_array[t] = l_array[n],
            l_array[n] = r;
    return l_array;
}

l_array = get_l_array()

// console.log(l_array)


function l() {
    return _u_l_i = _u_l_i + 1 & 255,
        _u_l_j = _u_l_j + l_array[_u_l_i] & 255,
        e = l_array[_u_l_i],
        l_array[_u_l_i] = l_array[_u_l_j],
        l_array[_u_l_j] = e,
        l_array[e + l_array[_u_l_i] & 255]
}

function w(e) {
    var t = '256';
    var n;
    if (16 == t)
        n = 4;
    else if (8 == t)
        n = 3;
    else if (256 == t)
        n = 8;
    else if (2 == t)
        n = 1;
    else if (32 == t)
        n = 5;
    else {
        if (4 != t)
            return void this["fromRadix"](e, t);
        n = 2;
    }
    this["t"] = 0, this["s"] = 0;
    DB = 28;
    DM = 268435455;
    clamp = function () {
        var e = this["s"] & DM;
        while (0 < this["t"] && this[this["t"] - 1] == e)
            --this["t"];
    }
    var r, o, i = e.length, s = !1, a = 0;
    while (0 <= --i) {
        var c = 8 == n ? 255 & e[i] : (r = i,
            null == (o = g[e["charCodeAt"](r)]) ? -1 : o);
        c < 0 ? "-" == e["charAt"](i) && (s = !0) : (s = !1,
            0 == a ? this[this["t"]++] = c : a + n > DB ? (this[this["t"] - 1] |= (c & (1 << DB - a) - 1) << a,
                this[this["t"]++] = c >> DB - a) : this[this["t"] - 1] |= c << a,
        (a += n) >= DB && (a -= DB));
    }
    8 == n && 0 != (128 & e[0]) && (this["s"] = -1,
    0 < a && (this[this["t"] - 1] |= (1 << DB - a) - 1 << a)),
        clamp(),
    s && w["ZERO"]['subTo'](this, this);
}

e = '06f4ae610633ee79';
var t = function a(e, t) {
    var n = []
        , r = e.length - 1;
    while (0 <= r && 0 < t) {
        var o = e["charCodeAt"](r--);
        o < 128 ? n[--t] = o : 127 < o && o < 2048 ? (n[--t] = 63 & o | 128,
            n[--t] = o >> 6 | 192) : (n[--t] = 63 & o | 128,
            n[--t] = o >> 6 & 63 | 128,
            n[--t] = o >> 12 | 224);
    }
    n[--t] = 0;
    var s = [];
    while (2 < t) {
        s[0] = 0;
        while (0 == s[0])
            u_nextBytes(s);
        n[--t] = s[0];
    }
    return n[--t] = 2,
        n[--t] = 0,
        new w(n);
}(e, 128);
console.log(t)





