抓包 - 极验流程图
    --- 进入 https://www.geetest.com/demo/slide-float.html ---
	1.demo/gt/register-slide?t=1646370204707 请求获得
		challenge:"90155bf283d979ec12f0f6f45518a9f0",
		gt:'019924a82c70bb123aae90d483087f94'
	2gettype.php
		提交了gt 拿js
		返回了 fullpage.9.0.9.js
	3.get.php
		提交了gt challenge w(加密代码)
	--- 点击按钮 ----
	4.ajax.php
		提交了gt challenge w(加密代码)
	    返回了 slide.7.8.6.js
	5.get.php
		提交了gt challenge
		返回了 原图(乱序)fullbg 缺口图(乱序)bg 滑块图slice 以及 一段奇怪的数组c [12, 58, 98, 36, 43, 95, 62, 15, 12]
        bg: "pictures/gt/7bfaaa72b/bg/3309a03eb.jpg"
        c: [12, 58, 98, 36, 43, 95, 62, 15, 12]
        challenge: "a3036fa1dbf70149dad347968562ac1c74"
        fullbg: "pictures/gt/7bfaaa72b/7bfaaa72b.jpg"
        fullpage: false
        gct_path: "/static/js/gct.79d2466c72ec4327a54871db50f7fbbb.js"
        gt: "019924a82c70bb123aae90d483087f94"
        id: "aa3036fa1dbf70149dad347968562ac1c"
        s: "7236584d"
    --- 进行滑块 ----
	6.ajax.php 进行滑块
		提交了gt challenge w(加密代码, 轨迹应该也在里面)
		返回了 validate: "034be50f464604fd2a16fc4cbf598291" 表示成功

调试:
	目的
		1.找到 并分析乱码原图 还原原图
			image_restore.py
		2.找到 并分析w生成
		    找到w生成点 - "\u0077": h + u  --- 由 h 和 u 组成

	        找到h u 生成点
	        var u = r[$_CAGEe(750)]()
                , l = V[$_CAGEe(342)](gt[$_CAGEe(209)](o), r[$_CAGEe(742)]())
                , h = m[$_CAGEe(733)](l)
            2.1 分析u生成
                u = new X()["encrypt"](this[$_CBEDU(742)](t))
                X Prototype 中 有setPublic方法 推测是rsa
                (this[$_CBEDU(742)](!0)) 方法 返回一个长度为16的动态字符串

                2.1.1 分析(this[$_CBEDU(742)](t)) 生成规则
                    由 - 4个t()构成 - 每个t生成长度为4的字符串
                    (65536 * (1 + Math["random"]()) | 0)["toString"](16)["substring"](1)
                2.1.2 想办法导出 或是 扣出 new X()["encrypt"] 这个方法
                    2.1.2.1 抠出X - 推测是rsa 优先 setPublic encrypt 方法
                        t = '00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81'
                    2.1.2.2 放弃抠出的想法 发现全部程序都在slide.js内 且闭包可以运行，可以使用方法导出
            2.2 分析l生成
                l = V[$_CAGEe(342)](gt[$_CAGEe(209)](o), r[$_CAGEe(742)]()) -->
                l = V["encrypt"](gt[$_CAGEe(209)](o), r[$_CAGEe(742)]())

                参数分析 V["encrypt"] 方法传入两个参数gt[$_CAGEe(209)](o)  r[$_CAGEe(742)]()

                首先第二个 r[$_CAGEe(742)]() --> f71377e46af4aee8 长度16的字符串 --> 上面的4个t()

                第一个gt[$_CAGEe(209)](o) --> o是个对象 经过这个方法之后 将对象转换成了字符串
                JSON.stringify(o) == gt[$_CAGEe(209)](o) --> true
                所以现在问题来到o对象 是如何生成的,以及o对象内容是什么
                                                                              o = {"lang": "zh-cn", "userresponse": "5dd58d58885d853003a", "passtime": 240, "imgload": 160,
                     "aa": "l(!l!Iswsvssssstytosystsstsqs(!!(0E912020:11941111120999", "ep": {"v": "7.8.6", "$_BHR": false, "me": true,
                                                                                              "tm": {"a": 1646728032192, "b": 1646728032316,
                                                                                                     "c": 1646728032317, "d": 0, "e": 0,
                                                                                                     "f": 1646728032193, "g": 1646728032193,
                                                                                                     "h": 1646728032193, "i": 1646728032193,
                                                                                                     "j": 1646728032193, "k": 0,
                                                                                                     "l": 1646728032195, "m": 1646728032313,
                                                                                                     "n": 1646728032314, "o": 1646728032317,
                                                                                                     "p": 1646728032509, "q": 1646728032509,
                                                                                                     "r": 1646728032511, "s": 1646728032511,
                                                                                                     "t": 1646728032511,
                                                                                                     "u": 1646728032511}, "td": -1},
                     "fk9t": "1841120131", "rp": "159b154a7c4bee0f14ec3e13358992fb"}
                lang:固定
                aa：加密参数 - 暂未分析是什么内容
                ep：涉及v和tm，v是js文件的版本，tm和window[“performance”][“timing”]相关，可以根据Performance.timing 时间产生的先后顺序以及时间间隔，用当前的时间戳减去相应的值来模拟
                imgload：图片加载时间，随机生成
                passtime：轨迹滑动总时长
                rp：加密参数 - 暂未分析是什么内容 - 对gt、challenge、passtime进行了md5加密
                userresponse：动态 - 有可能是随机数 有可能是加密参数- 对滑块距离和challenge进行了加密
                fk9t：固定

                o内部参数分析
                    userresponse: "\u0075\u0073\u0065\u0072\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065": H(t, i["challenge"]),
                        长度13的字符串
                        将t 和challenge 输入进行了加密
                        加密算法如下 --> e = 和challenge , t上一级传入
                        function get_userresponse(e, t) {
                            for (var n = e["slice"](-2), r = [], i = 0; i < n["length"]; i++) {
                                var o = n["charCodeAt"](i);
                                r[i] = 57 < o ? o - 87 : o - 48;
                            }
                            n = 36 * r[0] + r[1];
                            var s, a = Math["round"](t) + n, _ = [[], [], [], [], []], c = {}, u = 0;
                            i = 0;
                            for (var l = (e = e["slice"](0, -2))["length"]; i < l; i++)
                                c[s = e["charAt"](i)] || (c[s] = 1,
                                    _[u]["push"](s),
                                    u = 5 == ++u ? 0 : u);
                            var h, f = 476, d = 4, p = '', g = [1, 2, 5, 10, 50];
                            while (0 < f)
                                0 <= f - g[d] ? (h = parseInt(Math["random"]() * _[d]["length"], 10),
                                    p += _[d][h],
                                    f -= g[d]) : (_["splice"](d, 1),
                                    g["splice"](d, 1),
                                    d -= 1);
                            return p;
                        }
                    t --> 由上级代码传入 u = parseInt(t[$_CJJJd(916)]() - n[$_CJJIW(986)])
                    * 这里的t和后面的t不是一个东西 -> t是个pointer-events 鼠标相关时间 推测和滑动距离或时间有关系
                    ** 测试结果 -> t[$_CJJJd(916)]() - n[$_CJJIW(986)] 推测是滑动距离

                    aa: "\u0061\u0061": e,
                    e --> 由上级代码传入 l = n["$_CIBw"]['$_BBCA'](n['$_CIBw']['$_GEy'](), n['$_CIY']['c'], n['$_CIY']['s']);
                    * n['$_CIY']['c'] --> [12, 58, 98, 36, 43, 95, 62, 15, 12] 就是请求第五步get.php返回的奇怪数组 c
                    * n['$_CIY']['s'] --> 2e4e616f 就是请求第五步get.php返回的奇怪数字 s
                    * 拆分下来看 l = func1(func2(),c,s)
                    ** 问题1 func1 = n["$_CIBw"]['$_BBCA']是什么？
                    ** 问题2 func2 = n['$_CIBw']['$_GEy']() 是什么？

                    分析：
                    func1(func2,c,s) 执行结果 'Y..01213211101.*(!!Gxy((((((((N(())))y,s(!!o(.K01121013/126*127a)9$rD'
                    func2()          执行结果 'Y..01213211101.*(!!Gxy(((((((((())))y,s(!!(K01121013/126*127)9$rD'

                    func1(func2,c,s) 比 func2()  多了 N o . a 推测是将func2的结果 进一步的根据sc进行加密

                    * func1解析 --> t=func2(),e=c,n=s
                    function get_aa_func1(t, e, n) {
                        var r, i = 0, o = t, s = e[0], a = e[2], _ = e[4];
                        while (r = n['substr'](i, 2)) {
                            i += 2;
                            var c = parseInt(r, 16)
                                , u = String['fromCharCode'](c)
                                , l = (s * c * c + a * c + _) % t['length'];
                            o = o['substr'](0, l) + u + o['substr'](l);
                        }
                        return o
                    }

                    * func2解析
                        路径信息 数组
                        [[ 40, 39, 0 ], [ 1, 0, 5 ],
                         [ 2, 0, 16 ],  [ 1, 0, 9 ],
                         [ 2, 0, 7 ],   [ 3, 0, 9 ],
                         [ 2, 0, 7 ],   [ 3, 0, 9 ],
                         [ 4, 0, 7 ],   [ 5, 0, 8 ],
                         [ 6, 1, 8 ],   [ 7, 1, 8 ],
                         [ 5, 0, 8 ],   [ 4, 1, 8 ],
                         [ 6, 1, 8 ],   [ 4, 0, 8 ],
                         [ 5, 1, 8 ],   [ 2, 0, 8 ],
                         [ 3, 2, 8 ],   [ 1, 0, 8 ],
                         [ 1, 1, 8 ],   [ 0, 0, 8 ]]
                        输入程序 加密 输出 r i o 三个数组
                        例：
                        r = ['U', '-', '.', '/', '0', '.', '-', '/', '-', '.', ',', '(']
                        i = ['T', 's', 't', 's', 't', 'y', 't', 'y', '(', '(', ')', ')', '(', ')', ')', '(', ')', 't', '*', 's', 'v', '(']
                        o = ['(', '.', '9', '2', '0', '2', '0', '2', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
                        通过 r["join"]("") + "!!" + i["join"]($_BEGJJ(33)) + "!!" + o["join"](""); 进行拼接

                        加密部分
                        _sss = 加密数组
                        var r = [], i = [], o = [];
                        function n(t) {
                            var e = '()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqr'
                                , n = e['length']
                                , r = ''
                                , i = Math['abs'](t)
                                , o = parseInt(i / n);
                            n <= o && (o = n - 1),
                            o && (r = e['charAt'](o));
                            var s = '';
                            return t < 0 && (s += "!"), r && (s += "$"), s + r + e["charAt"](i %= n);
                        }
                        for (let t of _sss) {
                            // t = _sss[t]
                            var e = function (t) {
                                for (var e = [[1, 0], [2, 0], [1, -1], [1, 1], [0, 1], [0, -1], [3, 0], [2, -1], [2, 1]], n = 0, r = e["length"]; n < r; n++)
                                    if (t[0] == e[n][0] && t[1] == e[n][1])
                                        return 'stuvwxyz~'[n];
                                return 0;
                            }(t);
                            e ? i["push"](e) : (r["push"](n(t[0])),
                                i["push"](n(t[1]))),
                                o["push"](n(t[2]));
                        }

                    passtime: "\u0070\u0061\u0073\u0073\u0074\u0069\u006d\u0065": n,
                    分析：
                    *passtime看起来就很像通过时间
                    *代码中 是从一个位置获取的 n[$_CJJIW(840)] ,经过调试 发现将路径数组 _sss[x][2] 全部相加就可以得到

                    rp:  o[$_CAGDp(727)] = U(i[$_CAGEe(147)] + i[$_CAGEe(154)][$_CAGEe(126)](0, 32) + o[$_CAGEe(716)]);
                    整理后得到[位置就在h u 上面]
                    o["rp"] = U(i["gt"] + i["challenge"]["slice"](0, 32) + o["passtime"])
                    分析: rp值的长度 32 是将gt challenge 前32位 以及passtime拼接在一起通过U进行加密
                    推测 md5 --> 外部测试 普通md5
                    里面非常复杂的控制流平坦化 就不扣了 通过python还原

                V["encrypt"] 方法 参数(o对象的字符串化,4t组成的16位字符串)
                *进去一顿分析 发现几个有点标志性的参数 key iv [硬扣扣不出来]
                * 代码 t是要加密的数值 key是输入的4t iv是0000000000000000代码里面获取
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
            2.3 分析h生成
                h = m[$_CAGEe(733)](l)
                * 将上一步加密好的数组 传入 t --> 上一步加密的好
                var e = this[$_HAEV(240)](t);
                return e[$_HADy(228)] + e[$_HADy(291)];
                通过 this[$_HAEV(240)] 方法加密 然后将里面的返回值进行拼接
                ** this[$_HAEV(240)] 内部 一頓扣
                t = [135, 176, 183, 214, 13, 172, 132, 96, 32, 18, 62, 67, 232, 140, 160, 84, 178, 177, 191, 169, 121, 94, 255, 60, 162, 146, 166, 144, 40, 237, 222, 231, 235, 221, 180, 207, 174, 111, 210, 247, 84, 173, 150, 54, 159, 18, 161, 46, 249, 141, 140, 116, 88, 224, 215, 145, 29, 19, 57, 28, 99, 204, 139, 51, 103, 102, 235, 196, 95, 87, 238, 73, 229, 253, 4, 73, 195, 23, 139, 77, 123, 13, 214, 61, 99, 29, 81, 20, 189, 192, 69, 219, 149, 82, 47, 83, 47, 225, 200, 63, 190, 50, 75, 35, 247, 52, 35, 92, 220, 55, 121, 132, 196, 8, 51, 166, 64, 79, 92, 24, 62, 194, 113, 19, 29, 214, 25, 68, 226, 8, 77, 205, 2, 232, 37, 82, 23, 69, 21, 253, 177, 233, 156, 6, 196, 53, 17, 22, 242, 172, 22, 211, 162, 5, 36, 137, 45, 164, 12, 127, 43, 162, 48, 168, 181, 30, 28, 128, 139, 101, 104, 43, 174, 154, 25, 202, 114, 175, 55, 47, 149, 51, 77, 98, 32, 248, 154, 101, 186, 213, 64, 155, 233, 58, 89, 146, 68, 13, 227, 227, 118, 175, 179, 102, 29, 129, 20, 84, 31, 130, 107, 55, 44, 137, 246, 219, 160, 63, 213, 0, 222, 57, 255, 169, 90, 143, 146, 144, 153, 237, 135, 8, 196, 13, 214, 46, 97, 25, 92, 95, 119, 72, 25, 24, 219, 123, 230, 78, 115, 228, 62, 98, 41, 190, 254, 121, 155, 145, 182, 71, 182, 129, 242, 237, 163, 75, 26, 5, 100, 89, 221, 153, 181, 63, 13, 172, 145, 84, 26, 187, 199, 62, 97, 248, 15, 217, 116, 4, 70, 29, 104, 169, 46, 40, 2, 83, 231, 167, 104, 255, 94, 40, 119, 112, 211, 55, 6, 34, 24, 146, 73, 124, 178, 48, 57, 20, 149, 183, 183, 196, 112, 105, 15, 77, 108, 4, 223, 171, 117, 35, 0, 129, 12, 196, 144, 2, 4, 69, 187, 72, 215, 117, 34, 68, 39, 143, 102, 86, 195, 209, 137, 60, 174, 151, 189, 146, 146, 46, 66, 123, 129, 91, 201, 75, 217, 212, 103, 26, 102, 222, 167, 114, 115, 84, 122, 234, 65, 218, 41, 152, 90, 78, 193, 20, 169, 69, 68, 198, 81, 162, 249, 13, 184, 172, 115, 146, 203, 135, 77, 160, 44, 144, 60, 189, 239, 105, 201, 59, 23, 190, 79, 226, 168, 49, 239, 84, 248, 203, 200, 17, 158, 19, 173, 146, 10, 211, 93, 166, 235, 220, 46, 145, 126, 87, 117, 182, 68, 104, 48, 184, 41, 108, 11, 64, 72, 188, 8, 148, 158, 153, 208, 35, 58, 135, 187, 224, 137, 30, 159, 31, 2, 34, 29, 32, 102, 84, 158, 94, 186, 90, 230, 243, 154, 70, 215, 228, 83, 88, 197, 123, 137, 167, 21, 203, 214, 103, 221, 42, 181, 250, 103, 79, 222, 1, 93, 237, 181, 48, 209, 212, 99, 146, 37, 229, 82, 165, 9, 138, 98, 118, 186, 102, 156, 190, 186, 69, 37, 251, 60, 166, 134, 22, 34, 236, 48, 171, 43, 0, 156, 60, 29, 90, 167, 40, 13, 221, 243, 179, 223, 59, 98, 12, 243, 177, 213, 144, 107, 157, 154, 203, 96, 112, 26, 34, 186, 52, 65, 145, 130, 241, 43, 143, 50, 127, 71, 139, 236, 149, 53, 57, 59, 216, 78, 123, 240, 113, 184, 49, 100, 178, 111, 70, 24, 115, 194, 253, 243, 217, 100, 62, 219, 87, 134, 247, 148, 239, 6, 17, 12, 242, 83, 88, 178, 12, 247, 50, 194, 0, 219, 221, 17, 71, 155, 27, 184, 3, 208, 78, 250, 66, 86, 133, 172, 73, 162, 188, 10, 31, 91, 222, 68, 189, 124, 238, 97, 204, 255, 29, 238, 41, 48, 141, 156, 76, 251, 104, 44, 227, 115, 44, 70, 16, 99, 126, 28, 204, 58, 176, 165, 162, 44, 109, 132, 36, 34, 54, 131, 248, 243, 90, 62, 218, 201, 233, 206, 219, 1, 173, 113, 133, 113, 43, 198, 220, 196, 184, 119, 57, 21, 204, 139, 2, 173, 218, 153, 150, 139, 41, 119, 120, 229, 4, 134, 161, 130, 119, 161, 209, 100, 113, 26, 243, 52, 57, 7, 192, 252, 75, 65, 127, 38, 117, 156, 144, 148, 171, 114, 24, 230, 108, 81, 25, 57, 48, 129, 146, 94, 217, 177, 9, 3, 33, 144, 2, 239, 88, 239, 96, 52, 236, 107, 62, 106, 95, 18, 21, 144, 140, 84, 93, 147, 243, 18, 12, 205, 216, 180, 157, 43, 104, 42, 97, 157, 65, 249, 122, 143, 177, 166, 100, 15, 168, 82, 254, 114, 119, 141, 152, 249, 21, 105, 105, 106, 97, 121, 130, 157, 181, 217, 216, 104, 135, 51, 84, 183, 249, 147, 25, 129, 248, 193, 42, 199, 76, 59, 244, 61, 206, 162, 41, 176, 37, 138, 36, 115, 49, 166, 179, 21, 189, 174, 221, 90, 232, 23, 4, 31, 115, 107, 150, 173, 56, 90, 61, 100, 26, 161, 85, 62, 66, 83, 207, 216, 209, 99, 201, 120, 158, 171, 33, 171, 123, 111, 23, 166, 150, 126, 246, 188, 13, 17, 134, 17, 42, 42, 77, 29, 166, 91, 191, 188, 162, 31, 88, 247, 127, 181, 152, 174, 15, 104, 235, 60, 79, 212, 65, 79, 163, 115, 83, 34, 196, 5, 95, 99, 163, 186, 3, 77, 223, 24, 158, 123, 201, 198, 203, 169, 197, 127, 118, 182, 217, 175, 46, 130, 191, 87, 1, 63, 74, 135, 16, 208, 2, 73, 94, 38, 8, 54, 144, 135, 176, 215, 155]

                function get_h(t) {
                    function o232(t, e) {
                        return t >> e & 1;
                    }

                    // console.log(o232('7274496','23'))

                    function o219(t) {
                        var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()';
                        return t < 0 || t >= e["length"] ? '.' : e["charAt"](t);
                    }

                    for (var e = function (t, e) {
                        for (var n = 0, r = 23; 0 <= r; r -= 1)
                            1 === o232(e, r) && (n = (n << 1) + o232(t, r));
                        return n;
                    }, n = "", r = "", s = t["length"], a = 0; a < s; a += 3) {
                        var _;
                        if (a + 2 < s)
                            _ = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2],
                                n += o219(e(_, "7274496")) + o219(e(_, "9483264")) + o219(e(_, "19220")) + o219(e(_, "235"));
                        else {
                            var c = s % 3;
                            2 == c ? (_ = (t[a] << 16) + (t[a + 1] << 8), n += o219(e(_, "7274496")) + o219(e(_, "9483264")) + o219(e(_, "19220")),
                                r = '.') : 1 == c && (_ = t[a] << 16, n += o219(e(_, "7274496")) + o219(e(_, "9483264")), r = '..');
                        }
                    }
                    return n + r
                }


                test_result = 'HuDrmxVsEkgICXYT4pQokeKpf8Wduf)MSqJqA0R9u9s)t)B3el(y3zhtG3LnCcFO55Vk0Sw4n6HFDWXEzJwnTVta7pjXnd4V1v1ApIvDLh2fNLrNzDWREfUwlK)hiVeTfMk0ffaKrEP7UUPUs3OdEpgETdIQvDyEeYqZDTXyJRg6IB11CMxJiTNRFf2p5rRCknGBGepsGasqFFAldNBE)UcqQcTpOTQgLlkcbNamJY6afnNPF2NVyEC8K1mulwin5maVCxhFzsvafuNaNYHAkTci7HNMJvq3QnfxAL6N)8WWPqKgJ91jIJhFm1YZJTzX3QyFIa(f2h6b0nYaZPb(5aehWxvqBup9Tg(GFFiVt6XpfRVsBziGb5vOxOxHp3hAmDUcZlYMCCt7Xkz)uUTbwavLGEKECw3cS2CNEbHrX5iY5BdV8BD3bnkLAIFEkqACEBmvoLvZSBhLPlrSjqklcdbjd6KieAqfBi81rK3w3CZau9OazTie6gm2ZKSWuInAZhlQmikq5xWscmuirpNVQlSgcfV)5I2PHfZXysSJ)ji8royBOyNtCwaztdI)s1ah(TvZWxgcQeQN8AcQoPQEE7alg0OOHuc4JjbnPQIKNUBakbbWay56z6ZSn9iToZmfJtPBrrpbt0bp61tXuwHV9vGIh7gbC1F5idEFKkraa1rke(ZRVO)MWpLCSNyIbkcAM3TFqdMMNL27T7(PyBS7R7mg7LWmrkiYKUKuUQmhCukPPmLfnId8F3GNbaxW7eiZY2FYS19SIWsy9(u10Ha3nZL7E99CBRS6jSyqMPuKigC3tyFTLyesDKhW6wrSFtQVSvQGPS)2kPXc(kl0)zV(ZGBlMxy)4FQ7zVRSAUveMZyOQ9EqcF1gUELKDuy7qXa2ps12rwFtxZGZbJr0kuTbZTF0LgJtq6XiLkXb4dlAGsEi3cGx0GmGz3CNHIj8rAnfWHnkA7AvySR68CmFZWAhCz61RwUDRKAC)ix)wHB87HYevSLBA5TQtaO7CRR1o)DlbEwOxLUR525nR9JYPMSS(2rbNqS9FU0d6EmdCrXpp6wcHmPQX(2jJYG8hkZzsGf4dZ4qZOBJKlCbRdKrFfVuty48HRDHzU)idmSWdViGRjnOiCt3o6kbpmzmbkEv7V)DWrLe2)RFBZKBaEZVNdKXf)QqPSz7)fGkehcc7nRXkwlXTmuTSJhBvUsrawNVvyTm7Y1yrsVx)Xrqp9dOCvfTBHcWHiCwCA3WWATKA5Oon6c.'

                console.log(get_h(t) == test_result)


(65536 * (1 + Math["random"]()) | 0)["toString"](16)["substring"](1);