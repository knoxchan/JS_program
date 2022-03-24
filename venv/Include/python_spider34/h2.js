var __Oxbb794 = ["", "\x6C\x65\x6E\x67\x74\x68", "\x63\x6F\x6E\x63\x61\x74", "\x3B\x20", "\x73\x70\x6C\x69\x74", "\x63\x6F\x6F\x6B\x69\x65", "\x3D", "yuanrenxue34", "iloveu=", "\x64\x6F\x6D\x61\x69\x6E", "\x2E", "\x72\x65\x70\x6C\x61\x63\x65", "\x67\x65\x74\x54\x69\x6D\x65", "\x73\x65\x74\x54\x69\x6D\x65", "\x3B\x20\x65\x78\x70\x69\x72\x65\x73\x3D", "\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67", "\x3B\x20\x70\x61\x74\x68\x3D\x2F", "\x3B\x20\x64\x6F\x6D\x61\x69\x6E\x3D", "\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74", "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65", "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46", "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", "\x63\x68\x61\x72\x41\x74", "\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2B\x2F", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6C\x6F\x67", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
var hexcase = 0;
var b64pad = __Oxbb794[0x0];
var chrsz = 8;

function hex_2(_0x6a8ax5) {
    return binb2hex(core_sha1(str2binb(_0x6a8ax5), _0x6a8ax5[__Oxbb794[0x1]] * chrsz))
}

function b64_sha1(_0x6a8ax5) {
    return binb2b64(core_sha1(str2binb(_0x6a8ax5), _0x6a8ax5[__Oxbb794[0x1]] * chrsz))
}

function str_sha1(_0x6a8ax5) {
    return binb2str(core_sha1(str2binb(_0x6a8ax5), _0x6a8ax5[__Oxbb794[0x1]] * chrsz))
}

function hex_hmac_sha1(_0x6a8ax9, _0x6a8axa) {
    return binb2hex(core_hmac_sha1(_0x6a8ax9, _0x6a8axa))
}

function b64_hmac_sha1(_0x6a8ax9, _0x6a8axa) {
    return binb2b64(core_hmac_sha1(_0x6a8ax9, _0x6a8axa))
}

function str_hmac_sha1(_0x6a8ax9, _0x6a8axa) {
    return binb2str(core_hmac_sha1(_0x6a8ax9, _0x6a8axa))
}

function core_sha1(_0x6a8axe, _0x6a8axf) {
    _0x6a8axe[_0x6a8axf >> 5] |= 0x80 << (24 - _0x6a8axf % 32);
    _0x6a8axe[((_0x6a8axf + 64 >> 9) << 4) + 15] = _0x6a8axf;
    var _0x6a8ax10 = Array(80);
    var _0x6a8ax11 = 1732584193;
    var _0x6a8ax12 = -271733879;
    var _0x6a8ax13 = -1732584194;
    var _0x6a8ax14 = 271733878;
    var _0x6a8ax15 = -1009589776;
    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8axe[__Oxbb794[0x1]]; _0x6a8ax16 += 16) {
        var _0x6a8ax17 = _0x6a8ax11;
        var _0x6a8ax18 = _0x6a8ax12;
        var _0x6a8ax19 = _0x6a8ax13;
        var _0x6a8ax1a = _0x6a8ax14;
        var _0x6a8ax1b = _0x6a8ax15;
        for (var _0x6a8ax1c = 0; _0x6a8ax1c < 80; _0x6a8ax1c++) {
            if (_0x6a8ax1c < 16) {
                _0x6a8ax10[_0x6a8ax1c] = _0x6a8axe[_0x6a8ax16 + _0x6a8ax1c]
            } else {
                _0x6a8ax10[_0x6a8ax1c] = rol(_0x6a8ax10[_0x6a8ax1c - 3] ^ _0x6a8ax10[_0x6a8ax1c - 8] ^ _0x6a8ax10[_0x6a8ax1c - 14] ^ _0x6a8ax10[_0x6a8ax1c - 16], 1)
            }
            ;var _0x6a8ax1d = safe_add(safe_add(rol(_0x6a8ax11, 5), sha1_ft(_0x6a8ax1c, _0x6a8ax12, _0x6a8ax13, _0x6a8ax14)), safe_add(safe_add(_0x6a8ax15, _0x6a8ax10[_0x6a8ax1c]), sha1_kt(_0x6a8ax1c)));
            _0x6a8ax15 = _0x6a8ax14;
            _0x6a8ax14 = _0x6a8ax13;
            _0x6a8ax13 = rol(_0x6a8ax12, 30);
            _0x6a8ax12 = _0x6a8ax11;
            _0x6a8ax11 = _0x6a8ax1d
        }
        ;_0x6a8ax11 = safe_add(_0x6a8ax11, _0x6a8ax17);
        _0x6a8ax12 = safe_add(_0x6a8ax12, _0x6a8ax18);
        _0x6a8ax13 = safe_add(_0x6a8ax13, _0x6a8ax19);
        _0x6a8ax14 = safe_add(_0x6a8ax14, _0x6a8ax1a);
        _0x6a8ax15 = safe_add(_0x6a8ax15, _0x6a8ax1b)
    }
    ;
    return Array(_0x6a8ax11, _0x6a8ax12, _0x6a8ax13, _0x6a8ax14, _0x6a8ax15)
}

function sha1_ft(_0x6a8ax1d, _0x6a8ax12, _0x6a8ax13, _0x6a8ax14) {
    if (_0x6a8ax1d < 20) {
        return (_0x6a8ax12 & _0x6a8ax13) | ((~_0x6a8ax12) & _0x6a8ax14)
    }
    ;
    if (_0x6a8ax1d < 40) {
        return _0x6a8ax12 ^ _0x6a8ax13 ^ _0x6a8ax14
    }
    ;
    if (_0x6a8ax1d < 60) {
        return (_0x6a8ax12 & _0x6a8ax13) | (_0x6a8ax12 & _0x6a8ax14) | (_0x6a8ax13 & _0x6a8ax14)
    }
    ;
    return _0x6a8ax12 ^ _0x6a8ax13 ^ _0x6a8ax14
}

function sha1_kt(_0x6a8ax1d) {
    return (_0x6a8ax1d < 20) ? 1518500249 : (_0x6a8ax1d < 40) ? 1859775393 : (_0x6a8ax1d < 60) ? -1894007588 : -899497514
}

function core_hmac_sha1(_0x6a8ax9, _0x6a8axa) {
    var _0x6a8ax21 = str2binb(_0x6a8ax9);
    if (_0x6a8ax21[__Oxbb794[0x1]] > 16) {
        _0x6a8ax21 = core_sha1(_0x6a8ax21, _0x6a8ax9[__Oxbb794[0x1]] * chrsz)
    }
    ;var _0x6a8ax22 = Array(16), _0x6a8ax23 = Array(16);
    for (var _0x6a8ax16 = 0; _0x6a8ax16 < 16; _0x6a8ax16++) {
        _0x6a8ax22[_0x6a8ax16] = _0x6a8ax21[_0x6a8ax16] ^ 0x36363636;
        _0x6a8ax23[_0x6a8ax16] = _0x6a8ax21[_0x6a8ax16] ^ 0x5C5C5C5C
    }
    ;var _0x6a8ax24 = core_sha1(_0x6a8ax22[__Oxbb794[0x2]](str2binb(_0x6a8axa)), 512 + _0x6a8axa[__Oxbb794[0x1]] * chrsz);
    return core_sha1(_0x6a8ax23[__Oxbb794[0x2]](_0x6a8ax24), 512 + 160)
}

function safe_add(_0x6a8axe, _0x6a8ax26) {
    var _0x6a8ax27 = (_0x6a8axe & 0xFFFF) + (_0x6a8ax26 & 0xFFFF);
    var _0x6a8ax28 = (_0x6a8axe >> 16) + (_0x6a8ax26 >> 16) + (_0x6a8ax27 >> 16);
    return (_0x6a8ax28 << 16) | (_0x6a8ax27 & 0xFFFF)
}

function rol(_0x6a8ax2a, _0x6a8ax2b) {
    return (_0x6a8ax2a << _0x6a8ax2b) | (_0x6a8ax2a >>> (32 - _0x6a8ax2b))
}

function sEnc() {
    var _0x6a8ax2d = document[__Oxbb794[0x5]][__Oxbb794[0x4]](__Oxbb794[0x3]);
    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8ax2d[__Oxbb794[0x1]]; _0x6a8ax16++) {
        var _0x6a8ax2e = _0x6a8ax2d[_0x6a8ax16][__Oxbb794[0x4]](__Oxbb794[0x6]);
        if (_0x6a8ax2e[0x0] == __Oxbb794[0x7]) {
            sct = unescape(_0x6a8ax2e[0x1]);
            var _0x6a8ax2f = __Oxbb794[0x8] + escape(hex_2(hex_1(sct)));
            var _0x6a8ax30 = new Date();
            var _0x6a8ax31 = 3600 * 24 * 30 * 1000;
            var _0x6a8ax32 = document[__Oxbb794[0x9]];
            _0x6a8ax32 = _0x6a8ax32[__Oxbb794[0xb]](_0x6a8ax32[__Oxbb794[0x4]](__Oxbb794[0xa])[0x0] + __Oxbb794[0xa], __Oxbb794[0x0]);
            _0x6a8ax30[__Oxbb794[0xd]](_0x6a8ax30[__Oxbb794[0xc]]() + _0x6a8ax31);
            _0x6a8ax2f += __Oxbb794[0xe] + _0x6a8ax30[__Oxbb794[0xf]]();
            _0x6a8ax2f += __Oxbb794[0x10];
            document[__Oxbb794[0x5]] = _0x6a8ax2f
        }
    }
}

function str2binb(_0x6a8ax34) {
    var _0x6a8ax35 = Array();
    var _0x6a8ax36 = (1 << chrsz) - 1;
    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8ax34[__Oxbb794[0x1]] * chrsz; _0x6a8ax16 += chrsz) {
        _0x6a8ax35[_0x6a8ax16 >> 5] |= (_0x6a8ax34[__Oxbb794[0x12]](_0x6a8ax16 / chrsz) & _0x6a8ax36) << (24 - _0x6a8ax16 % 32)
    }
    ;
    return _0x6a8ax35
}

function binb2str(_0x6a8ax35) {
    var _0x6a8ax34 = __Oxbb794[0x0];
    var _0x6a8ax36 = (1 << chrsz) - 1;
    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8ax35[__Oxbb794[0x1]] * 32; _0x6a8ax16 += chrsz) {
        _0x6a8ax34 += String[__Oxbb794[0x13]]((_0x6a8ax35[_0x6a8ax16 >> 5] >>> (24 - _0x6a8ax16 % 32)) & _0x6a8ax36)
    }
    ;
    return _0x6a8ax34
}

function binb2hex(_0x6a8ax39) {
    var _0x6a8ax3a = hexcase ? __Oxbb794[0x14] : __Oxbb794[0x15];
    var _0x6a8ax34 = __Oxbb794[0x0];
    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8ax39[__Oxbb794[0x1]] * 4; _0x6a8ax16++) {
        _0x6a8ax34 += _0x6a8ax3a[__Oxbb794[0x16]]((_0x6a8ax39[_0x6a8ax16 >> 2] >> ((3 - _0x6a8ax16 % 4) * 8 + 4)) & 0xF) + _0x6a8ax3a[__Oxbb794[0x16]]((_0x6a8ax39[_0x6a8ax16 >> 2] >> ((3 - _0x6a8ax16 % 4) * 8)) & 0xF)
    }
    ;
    return _0x6a8ax34
}

function binb2b64(_0x6a8ax39) {
    var _0x6a8ax3c = __Oxbb794[0x17];
    var _0x6a8ax34 = __Oxbb794[0x0];
    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8ax39[__Oxbb794[0x1]] * 4; _0x6a8ax16 += 3) {
        var _0x6a8ax3d = (((_0x6a8ax39[_0x6a8ax16 >> 2] >> 8 * (3 - _0x6a8ax16 % 4)) & 0xFF) << 16) | (((_0x6a8ax39[_0x6a8ax16 + 1 >> 2] >> 8 * (3 - (_0x6a8ax16 + 1) % 4)) & 0xFF) << 8) | ((_0x6a8ax39[_0x6a8ax16 + 2 >> 2] >> 8 * (3 - (_0x6a8ax16 + 2) % 4)) & 0xFF);
        for (var _0x6a8ax1c = 0; _0x6a8ax1c < 4; _0x6a8ax1c++) {
            if (_0x6a8ax16 * 8 + _0x6a8ax1c * 6 > _0x6a8ax39[__Oxbb794[0x1]] * 32) {
                _0x6a8ax34 += b64pad
            } else {
                _0x6a8ax34 += _0x6a8ax3c[__Oxbb794[0x16]]((_0x6a8ax3d >> 6 * (3 - _0x6a8ax1c)) & 0x3F)
            }
        }
    }
    ;
    return _0x6a8ax34
}