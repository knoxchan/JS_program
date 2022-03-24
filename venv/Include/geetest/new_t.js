let md5 = require('./md5.js');

// console.log(md5('12345'));


function t() {
    p = {
        "$_FGX": {
            "$_FHp": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
            "$_FIg": ".",
            "$_FJm": 7274496,
            "$_GAV": 9483264,
            "$_GBW": 19220,
            "$_GCY": 235,
            "$_GDj": 24
        },
        "$_FHp": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
        "$_FIg": ".",
        "$_FJm": 7274496,
        "$_GAV": 9483264,
        "$_GBW": 19220,
        "$_GCY": 235,
        "$_GDj": 24,
        "$_GEW": function (e) {
            for (var t = [], n = 0, r = e["length"]; n < r; n += 1) t["push"](e["charCodeAt"](n));

            return t;
        },
        "$_GFv": function (e) {
            for (var t = "", n = 0, r = e["length"]; n < r; n += 1) t += String["fromCharCode"](e[n]);

            return t;
        },
        "$_GGr": function (e) {
            var t = this["$_FHp"];
            return e < 0 || e >= t["length"] ? "." : t["charAt"](e);
        },
        "$_GHZ": function (e) {
            return this["$_FHp"]["indexOf"](e);
        },
        "$_GIs": function (e, t) {
            return e >> t & 1;
        },
        "$_GJq": function (e, o) {
            var i = this;
            o || (o = i);

            for (var t = function (e, t) {
                for (var n = 0, r = o["$_GDj"] - 1; 0 <= r; r -= 1) 1 === i["$_GIs"](t, r) && (n = (n << 1) + i["$_GIs"](e, r));

                return n;
            }, n = "", r = "", s = e["length"], a = 0; a < s; a += 3) {
                var c;
                if (a + 2 < s) c = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], n += i["$_GGr"](t(c, o["$_FJm"])) + i["$_GGr"](t(c, o["$_GAV"])) + i["$_GGr"](t(c, o["$_GBW"])) + i["$_GGr"](t(c, o["$_GCY"])); else {
                    var _ = s % 3;

                    2 == _ ? (c = (e[a] << 16) + (e[a + 1] << 8), n += i["$_GGr"](t(c, o["$_FJm"])) + i["$_GGr"](t(c, o["$_GAV"])) + i["$_GGr"](t(c, o["$_GBW"])), r = o["$_FIg"]) : 1 == _ && (c = e[a] << 16, n += i["$_GGr"](t(c, o["$_FJm"])) + i["$_GGr"](t(c, o["$_GAV"])), r = o["$_FIg"] + o["$_FIg"]);
                }
            }

            return {
                "res": n,
                "end": r
            };
        },
        "$_HAl": function (e) {
            var t = this["$_GJq"](this["$_GEW"](e));
            return t["res"] + t["end"];
        },
        "$_HBh": function (e) {
            var t = this["$_GJq"](e);
            return t["res"] + t["end"];
        },
        "$_HCe": function (e, i) {
            var s = this;
            i || (i = s);

            for (var t = function (e, t) {
                if (e < 0) return 0;

                for (var n = 5, r = 0, o = i["$_GDj"] - 1; 0 <= o; o -= 1) 1 === s["$_GIs"](t, o) && (r += s["$_GIs"](e, n) << o, n -= 1);

                return r;
            }, n = e["length"], r = "", o = 0; o < n; o += 4) {
                var a = t(s["$_GHZ"](e["charAt"](o)), i["$_FJm"]) + t(s["$_GHZ"](e["charAt"](o + 1)), i["$_GAV"]) + t(s["$_GHZ"](e["charAt"](o + 2)), i["$_GBW"]) + t(s["$_GHZ"](e["charAt"](o + 3)), i["$_GCY"]),
                    c = a >> 16 & 255;

                if (r += String["fromCharCode"](c), e["charAt"](o + 2) !== i["$_FIg"]) {
                    var _ = a >> 8 & 255;

                    if (r += String["fromCharCode"](_), e["charAt"](o + 3) !== i["$_FIg"]) {
                        var l = 255 & a;
                        r += String["fromCharCode"](l);
                    }
                }
            }

            return r;
        },
        "$_HDX": function (e) {
            var t = 4 - e["length"] % 4;
            if (t < 4) for (var n = 0; n < t; n += 1) e += this["$_FIg"];
            return this["$_HCe"](e);
        },
        "$_HEq": function (e) {
            return this["$_HDX"](e);
        }
    };
    i = {};
    s = 282922;
    i["$_CEEm"] = "";
    i["$_CCET"] = "6298!!8650!!CSS1Compat!!2!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!2!!3!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!1!!-1!!-1!!-1!!0!!0!!0!!0!!1280!!577!!1280!!680!!zh-CN!!zh-CN,zh,en!!-1!!1.5!!24!!Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36!!1!!1!!1280!!720!!1280!!680!!1!!1!!1!!-1!!Win32!!0!!-8!!96af1dcd38f7a626f558049399d0cd72!!0!!internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer!!0!!-1!!0!!8!!Arial,ArialBlack,ArialNarrow,Calibri,Cambria,CambriaMath,ComicSansMS,Consolas,Courier,CourierNew,Georgia,Helvetica,Impact,LucidaConsole,LucidaSansUnicode,MicrosoftSansSerif,MSGothic,MSPGothic,MSSansSerif,MSSerif,PalatinoLinotype,SegoePrint,SegoeScript,SegoeUI,SegoeUILight,SegoeUISemibold,SegoeUISymbol,Tahoma,Times,TimesNewRoman,TrebuchetMS,Verdana,Wingdings!!1647309093052!!-1!!-1!!-1!!17!!-1!!-1!!-1!!5!!-1!!-1";
    i["$_CEFh"] = {
        "v": "9.0.9",
        "$_BBn": false,
        "te": false,
        "$_BCU": true,
        "ven": "Google Inc. (Intel)",
        "ren": "ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.100.7988)",
        "fp": ["move", 457, 326, 1647317693035, "pointermove"],
        "lp": ["up", 483, 311, 1647317693748, "pointerup"],
        "em": {"ph": 0, "cp": 0, "ek": "11", "wd": 1, "nt": 0, "si": 0, "sc": 0},
        "tm": {
            "a": 1647317689154,
            "b": 1647317692164,
            "c": 1647317692164,
            "d": 0,
            "e": 0,
            "f": 1647317689155,
            "g": 1647317689155,
            "h": 1647317689155,
            "i": 1647317689155,
            "j": 1647317689155,
            "k": 0,
            "l": 1647317689162,
            "m": 1647317689327,
            "n": 1647317689329,
            "o": 1647317692167,
            "p": 1647317692511,
            "q": 1647317692511,
            "r": 1647317692514,
            "s": 1647317692578,
            "t": 1647317692578,
            "u": 1647317692582
        },
        "by": 0
    }
    o = {
        "$_BJIQ": 1647309093669,
        "protocol": "https://",
        "gt": "019924a82c70bb123aae90d483087f94",
        "challenge": "19e93e22907a99e0510e3c2c237642a5",
        "offline": false,
        "new_captcha": true,
        "product": "float",
        "width": "300px",
        "https": true,
        "api_server": "api.geetest.com",
        "type": "fullpage",
        "static_servers": ["static.geetest.com", "dn-staticdown.qbox.me"],
        "beeline": "/static/js/beeline.1.0.1.js",
        "voice": "/static/js/voice.1.2.0.js",
        "click": "/static/js/click.3.0.2.js",
        "fullpage": "/static/js/fullpage.9.0.9.js",
        "pencil": "/static/js/pencil.1.0.3.js",
        "slide": "/static/js/slide.7.8.6.js",
        "geetest": "/static/js/geetest.6.0.9.js",
        "aspect_radio": {"slide": 103, "click": 128, "voice": 128, "pencil": 128, "beeline": 50},
        "cc": 8,
        "supportWorker": true,
        "$_FCd": {"pt": 0},
        "aeskey": "884bba1697e8c84c",
        "theme": "wind",
        "theme_version": "1.5.8",
        "logo": true,
        "feedback": "https://www.geetest.com/contact#report",
        "c": [12, 58, 98, 36, 43, 95, 62, 15, 12],
        "s": "6b324c2a",
        "i18n_labels": {
            "copyright": "由极验提供技术支持",
            "error": "网络不给力",
            "error_content": "请点击此处重试",
            "error_title": "网络超时",
            "fullpage": "智能检测中",
            "goto_cancel": "取消",
            "goto_confirm": "前往",
            "goto_homepage": "是否前往验证服务Geetest官网",
            "loading_content": "智能验证检测中",
            "next": "正在加载验证",
            "next_ready": "请完成验证",
            "read_reversed": false,
            "ready": "点击按钮进行验证",
            "refresh_page": "页面出现错误啦！要继续操作，请刷新此页面",
            "reset": "请点击重试",
            "success": "验证成功",
            "success_title": "通过验证"
        }
    };
    e = 'M-k1p8Pjp-.*M,I9b5,,,If(b(,9)((-:*iYj11KhMbOEK,O0S)*0S)O,O)*2M9MO.K/)*2K2KDMMM9ODNNS0ZGE9N))7M,Jee((BB@5((b88b8((8cj-/O),1-3O))A6CS)-9.)II.c8E-7O))Q1c(MME-P?)(E-(3)(1-)MM9N*)(E/(-Q1d8)ME-((((((qM,l8(,(BBD9,(()5((((5,8d9-b9P),WdQD))TXN-J1*5W3cnAb9n@d2D)MM?YXnnPS)*.RkWjJC5N7)(?(E-(0)(Y1)M9)qqqj(((*'
    r = 'SPAN_0';
    t = 'M(*((1((M(('
    n = '6298magic data8650magic dataCSS1Compatmagic data2magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data2magic data3magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data1magic data-1magic data-1magic data-1magic data0magic data0magic data0magic data0magic data1280magic data577magic data1280magic data680magic datazh-CNmagic datazh-CN,zh,enmagic data-1magic data1.5magic data24magic dataMozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36magic data1magic data1magic data1280magic data720magic data1280magic data680magic data1magic data1magic data1magic data-1magic dataWin32magic data0magic data-8magic data96af1dcd38f7a626f558049399d0cd72magic data0magic datainternal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewermagic data0magic data-1magic data0magic data8magic dataArial,ArialBlack,ArialNarrow,Calibri,Cambria,CambriaMath,ComicSansMS,Consolas,Courier,CourierNew,Georgia,Helvetica,Impact,LucidaConsole,LucidaSansUnicode,MicrosoftSansSerif,MSGothic,MSPGothic,MSSansSerif,MSSerif,PalatinoLinotype,SegoePrint,SegoeScript,SegoeUI,SegoeUILight,SegoeUISemibold,SegoeUISymbol,Tahoma,Times,TimesNewRoman,TrebuchetMS,Verdana,Wingdingsmagic data1647309093052magic data-1magic data-1magic data-1magic data17magic data-1magic data-1magic data-1magic data5magic data-1magic data-1'

    for (var a = [["lang", o["lang"] || "zh-cn"], ["type", "fullpage"], ["tt", function (e, t, n) {
        if (!t || !n)
            return e;
        var r,
            o = 0,
            i = e,
            s = t[0],
            a = t[2],
            c = t[4];

        while (r = n["substr"](o, 2)) {
            o += 2;

            var _ = parseInt(r, 16),
                l = String["fromCharCode"](_),
                u = (s * _ * _ + a * _ + c) % e["length"];

            i = i["substr"](0, u) + l + i["substr"](u);
        }
        console.log(i)
        return i;
    }(e, o["c"], o["s"]) || -1], ["light", r || -1], ["s", md5(p["$_HAl"](t))], ["h", md5(p["$_HAl"](n))], ["hh", md5(n)], ["hi", md5(i["$_CCET"])], ["vip_order", i["vip_order"] || -1], ["ct", i["ct"] || -1], ["ep", i["$_CEFh"] || -1], ["passtime", s || -1], ["rp", md5(o["gt"] + o["challenge"] + s)]], c = 0; c < a["length"]; c++) {
        console.log(a[c])
        i["$_CEEm"] += "\"" + a[c][0] + "\":" + JSON.stringify(a[c][1]) + ",";
    }
    ;
    console.log(i)
}

t()