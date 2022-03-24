var c = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36~~~false~~~zh-CN~~~24~~~8~~~8~~~-480~~~Asia/Shanghai~~~1~~~1~~~1~~~1~~~unknown~~~Win32~~~PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf,Chrome PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf,Chromium PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf,Microsoft Edge PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf,WebKit built-in PDF::Portable Document Format::application/pdf~pdf,text/pdf~pdf~~~canvas winding:yes~canvas fp:50d43704bdc015704f3490fbd50c725b~~~false~~~false~~~false~~~false~~~false~~~0;false;false~~~4;7;8~~~124.04347527516074'
var c = p(e, function (t) {
    return t.value
}).join("~~~");
var u = function (t) {
    function c(t, e) {
        return t << e | t >>> 32 - e
    }

    function u(t, e) {
        var n, r, o, a, i;
        return o = 2147483648 & t,
            a = 2147483648 & e,
            i = (1073741823 & t) + (1073741823 & e),
            (n = 1073741824 & t) & (r = 1073741824 & e) ? 2147483648 ^ i ^ o ^ a : n | r ? 1073741824 & i ? 3221225472 ^ i ^ o ^ a : 1073741824 ^ i ^ o ^ a : i ^ o ^ a
    }

    function e(t, e, n, r, o, a, i) {
        return u(c(t = u(t, u(u(e & n | ~e & r, o), i)), a), e)
    }

    function n(t, e, n, r, o, a, i) {
        return u(c(t = u(t, u(u(e & r | n & ~r, o), i)), a), e)
    }

    function r(t, e, n, r, o, a, i) {
        return u(c(t = u(t, u(u(e ^ n ^ r, o), i)), a), e)
    }

    function o(t, e, n, r, o, a, i) {
        return u(c(t = u(t, u(u(n ^ (e | ~r), o), i)), a), e)
    }

    function a(t) {
        var e, n = "", r = "";
        for (e = 0; e <= 3; e++)
            n += (r = "0" + (t >>> 8 * e & 255).toString(16)).substr(r.length - 2, 2);
        return n
    }

    var i, s, l, f, p, d, v, h, g, y = Array();
    for (y = function (t) {
        for (var e, n = t.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), a = Array(o - 1), i = 0, c = 0; c < n;)
            i = c % 4 * 8,
                a[e = (c - c % 4) / 4] = a[e] | t.charCodeAt(c) << i,
                c++;
        return i = c % 4 * 8,
            a[e = (c - c % 4) / 4] = a[e] | 128 << i,
            a[o - 2] = n << 3,
            a[o - 1] = n >>> 29,
            a
    }(t = function (t) {
        t = t.replace(/\r\n/g, "\n");
        for (var e = "", n = 0; n < t.length; n++) {
            var r = t.charCodeAt(n);
            r < 128 ? e += String.fromCharCode(r) : (127 < r && r < 2048 ? e += String.fromCharCode(r >> 6 | 192) : (e += String.fromCharCode(r >> 12 | 224),
                e += String.fromCharCode(r >> 6 & 63 | 128)),
                e += String.fromCharCode(63 & r | 128))
        }
        return e
    }(t)),
             d = 1732584193,
             v = 4023233417,
             h = 2562383102,
             g = 271733878,
             i = 0; i < y.length; i += 16)
        d = o(d = r(d = r(d = r(d = r(d = n(d = n(d = n(d = n(d = e(d = e(d = e(d = e(s = d, l = v, f = h, p = g, y[i + 0], 7, 3614090360), v = e(v, h = e(h, g = e(g, d, v, h, y[i + 1], 12, 3905402710), d, v, y[i + 2], 17, 606105819), g, d, y[i + 3], 22, 3250441966), h, g, y[i + 4], 7, 4118548399), v = e(v, h = e(h, g = e(g, d, v, h, y[i + 5], 12, 1200080426), d, v, y[i + 6], 17, 2821735955), g, d, y[i + 7], 22, 4249261313), h, g, y[i + 8], 7, 1770035416), v = e(v, h = e(h, g = e(g, d, v, h, y[i + 9], 12, 2336552879), d, v, y[i + 10], 17, 4294925233), g, d, y[i + 11], 22, 2304563134), h, g, y[i + 12], 7, 1804603682), v = e(v, h = e(h, g = e(g, d, v, h, y[i + 13], 12, 4254626195), d, v, y[i + 14], 17, 2792965006), g, d, y[i + 15], 22, 1236535329), h, g, y[i + 1], 5, 4129170786), v = n(v, h = n(h, g = n(g, d, v, h, y[i + 6], 9, 3225465664), d, v, y[i + 11], 14, 643717713), g, d, y[i + 0], 20, 3921069994), h, g, y[i + 5], 5, 3593408605), v = n(v, h = n(h, g = n(g, d, v, h, y[i + 10], 9, 38016083), d, v, y[i + 15], 14, 3634488961), g, d, y[i + 4], 20, 3889429448), h, g, y[i + 9], 5, 568446438), v = n(v, h = n(h, g = n(g, d, v, h, y[i + 14], 9, 3275163606), d, v, y[i + 3], 14, 4107603335), g, d, y[i + 8], 20, 1163531501), h, g, y[i + 13], 5, 2850285829), v = n(v, h = n(h, g = n(g, d, v, h, y[i + 2], 9, 4243563512), d, v, y[i + 7], 14, 1735328473), g, d, y[i + 12], 20, 2368359562), h, g, y[i + 5], 4, 4294588738), v = r(v, h = r(h, g = r(g, d, v, h, y[i + 8], 11, 2272392833), d, v, y[i + 11], 16, 1839030562), g, d, y[i + 14], 23, 4259657740), h, g, y[i + 1], 4, 2763975236), v = r(v, h = r(h, g = r(g, d, v, h, y[i + 4], 11, 1272893353), d, v, y[i + 7], 16, 4139469664), g, d, y[i + 10], 23, 3200236656), h, g, y[i + 13], 4, 681279174), v = r(v, h = r(h, g = r(g, d, v, h, y[i + 0], 11, 3936430074), d, v, y[i + 3], 16, 3572445317), g, d, y[i + 6], 23, 76029189), h, g, y[i + 9], 4, 3654602809), v = r(v, h = r(h, g = r(g, d, v, h, y[i + 12], 11, 3873151461), d, v, y[i + 15], 16, 530742520), g, d, y[i + 2], 23, 3299628645), h, g, y[i + 0], 6, 4096336452),
            v = o(v = o(v = o(v = o(v, h = o(h, g = o(g, d, v, h, y[i + 7], 10, 1126891415), d, v, y[i + 14], 15, 2878612391), g, d, y[i + 5], 21, 4237533241), h = o(h, g = o(g, d = o(d, v, h, g, y[i + 12], 6, 1700485571), v, h, y[i + 3], 10, 2399980690), d, v, y[i + 10], 15, 4293915773), g, d, y[i + 1], 21, 2240044497), h = o(h, g = o(g, d = o(d, v, h, g, y[i + 8], 6, 1873313359), v, h, y[i + 15], 10, 4264355552), d, v, y[i + 6], 15, 2734768916), g, d, y[i + 13], 21, 1309151649), h = o(h, g = o(g, d = o(d, v, h, g, y[i + 4], 6, 4149444226), v, h, y[i + 11], 10, 3174756917), d, v, y[i + 2], 15, 718787259), g, d, y[i + 9], 21, 3951481745),
            d = u(d, s),
            v = u(v, l),
            h = u(h, f),
            g = u(g, p);
    return (a(d) + a(v) + a(h) + a(g)).toLowerCase()
}(c + "hasaki");

console.log(u)