function h(t, e) {
var n = (65535 & t) + (65535 & e);
return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
}
function a(t, e, n, i, o, s) {
return h((r = h(h(e, t), h(i, s))) << (a = o) | r >>> 32 - a, n);
var r, a
}
function p(t, e, n, i, o, s, r) {
return a(e & n | ~e & i, t, e, o, s, r)
}
function m(t, e, n, i, o, s, r) {
return a(e & i | n & ~i, t, e, o, s, r)
}
function l(t, e, n, i, o, s, r) {
return a(e ^ n ^ i, t, e, o, s, r)
}
function f(t, e, n, i, o, s, r) {
return a(n ^ (e | ~i), t, e, o, s, r)
}
function c(t, e) {
t[e >> 5] |= 128 << e % 32,
t[14 + (e + 64 >>> 9 << 4)] = e;
var n, i, o, s, r, a = 1732584193,
c = -271733879,
u = -1732584194,
d = 271733878;
for (n = 0; n < t.length; n += 16) a = p(i = a, o = c, s = u, r = d, t[n], 7, -680876936),
d = p(d, a, c, u, t[n + 1], 12, -389564586),
u = p(u, d, a, c, t[n + 2], 17, 606105819),
c = p(c, u, d, a, t[n + 3], 22, -1044525330),
a = p(a, c, u, d, t[n + 4], 7, -176418897),
d = p(d, a, c, u, t[n + 5], 12, 1200080426),
u = p(u, d, a, c, t[n + 6], 17, -1473231341),
c = p(c, u, d, a, t[n + 7], 22, -45705983),
a = p(a, c, u, d, t[n + 8], 7, 1770035416),
d = p(d, a, c, u, t[n + 9], 12, -1958414417),
u = p(u, d, a, c, t[n + 10], 17, -42063),
c = p(c, u, d, a, t[n + 11], 22, -1990404162),
a = p(a, c, u, d, t[n + 12], 7, 1804603682),
d = p(d, a, c, u, t[n + 13], 12, -40341101),
u = p(u, d, a, c, t[n + 14], 17, -1502002290),
a = m(a, c = p(c, u, d, a, t[n + 15], 22, 1236535329), u, d, t[n + 1], 5, -165796510),
d = m(d, a, c, u, t[n + 6], 9, -1069501632),
u = m(u, d, a, c, t[n + 11], 14, 643717713),
c = m(c, u, d, a, t[n], 20, -373897302),
a = m(a, c, u, d, t[n + 5], 5, -701558691),
d = m(d, a, c, u, t[n + 10], 9, 38016083),
u = m(u, d, a, c, t[n + 15], 14, -660478335),
c = m(c, u, d, a, t[n + 4], 20, -405537848),
a = m(a, c, u, d, t[n + 9], 5, 568446438),
d = m(d, a, c, u, t[n + 14], 9, -1019803690),
u = m(u, d, a, c, t[n + 3], 14, -187363961),
c = m(c, u, d, a, t[n + 8], 20, 1163531501),
a = m(a, c, u, d, t[n + 13], 5, -1444681467),
d = m(d, a, c, u, t[n + 2], 9, -51403784),
u = m(u, d, a, c, t[n + 7], 14, 1735328473),
a = l(a, c = m(c, u, d, a, t[n + 12], 20, -1926607734), u, d, t[n + 5], 4, -378558),
d = l(d, a, c, u, t[n + 8], 11, -2022574463),
u = l(u, d, a, c, t[n + 11], 16, 1839030562),
c = l(c, u, d, a, t[n + 14], 23, -35309556),
a = l(a, c, u, d, t[n + 1], 4, -1530992060),
d = l(d, a, c, u, t[n + 4], 11, 1272893353),
u = l(u, d, a, c, t[n + 7], 16, -155497632),
c = l(c, u, d, a, t[n + 10], 23, -1094730640),
a = l(a, c, u, d, t[n + 13], 4, 681279174),
d = l(d, a, c, u, t[n], 11, -358537222),
u = l(u, d, a, c, t[n + 3], 16, -722521979),
c = l(c, u, d, a, t[n + 6], 23, 76029189),
a = l(a, c, u, d, t[n + 9], 4, -640364487),
d = l(d, a, c, u, t[n + 12], 11, -421815835),
u = l(u, d, a, c, t[n + 15], 16, 530742520),
a = f(a, c = l(c, u, d, a, t[n + 2], 23, -995338651), u, d, t[n], 6, -198630844),
d = f(d, a, c, u, t[n + 7], 10, 1126891415),
u = f(u, d, a, c, t[n + 14], 15, -1416354905),
c = f(c, u, d, a, t[n + 5], 21, -57434055),
a = f(a, c, u, d, t[n + 12], 6, 1700485571),
d = f(d, a, c, u, t[n + 3], 10, -1894986606),
u = f(u, d, a, c, t[n + 10], 15, -1051523),
c = f(c, u, d, a, t[n + 1], 21, -2054922799),
a = f(a, c, u, d, t[n + 8], 6, 1873313359),
d = f(d, a, c, u, t[n + 15], 10, -30611744),
u = f(u, d, a, c, t[n + 6], 15, -1560198380),
c = f(c, u, d, a, t[n + 13], 21, 1309151649),
a = f(a, c, u, d, t[n + 4], 6, -145523070),
d = f(d, a, c, u, t[n + 11], 10, -1120210379),
u = f(u, d, a, c, t[n + 2], 15, 718787259),
c = f(c, u, d, a, t[n + 9], 21, -343485551),
a = h(a, i),
c = h(c, o),
u = h(u, s),
d = h(d, r);
return [a, c, u, d]
}
function u(t) {
var e, n = "";
for (e = 0; e < 32 * t.length; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
return n
}
function d(t) {
var e, n = [];
for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
for (e = 0; e < 8 * t.length; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
return n
}
function i(t) {
var e, n, i = "0123456789abcdef",
o = "";
for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n),
o += i.charAt(e >>> 4 & 15) + i.charAt(15 & e);
return o
}
function o(t) {
return unescape(encodeURIComponent(t))
}
function s(t) {
return u(c(d(e = o(t)), 8 * e.length));
var e
}
function r(t, e) {
return function(t, e) {
    var n, i, o = d(t),
    s = [],
    r = [];
    for (s[15] = r[15] = void 0, 16 < o.length && (o = c(o, 8 * t.length)), n = 0; n < 16; n += 1) s[n] = 909522486 ^ o[n],
    r[n] = 1549556828 ^ o[n];
    return i = c(s.concat(d(e)), 512 + 8 * e.length),
    u(c(r.concat(i), 640))
} (o(t), o(e))
}
function getpwd(t, e, n) {
return e ? n ? r(e, t) : i(r(e, t)) : n ? s(t) : i(s(t))
}