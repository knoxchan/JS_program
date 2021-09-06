!function () {
    var e, t = {
        1131: function (e, t, n) {
            "use strict";
            n.d(t, {
                l: function () {
                    return a
                }, T: function () {
                    return r.T
                }
            });
            var r = n(71504),
                a = new r.j({runtimeHookKeys: ["render", "rootContainer", "modifyClientRenderOpts", "ssr", "router", "dynamicPublicPath", "slardar"]})
        }, 45150: function (e, t, n) {
            "use strict";
            n(1131), n(10533)
        }, 46010: function (e, t, n) {
            "use strict";
            var r = {};
            n.r(r), n.d(r, {
                ENTER_FROM: function () {
                    return h
                }, LOG_PASS_THROW_PARAMS: function () {
                    return v
                }, PREVIOUS_PAGE: function () {
                    return g
                }
            });
            var a = {};
            n.r(a), n.d(a, {
                APP_ID: function () {
                    return N
                }, BASE_NAME: function () {
                    return T
                }, FEELGOOD_APP_KEY: function () {
                    return M
                }, SLARDAR_BID: function () {
                    return R
                }
            });
            var o = {};
            n.r(o), n.d(o, {
                LOG_CURRENT_PAGE: function () {
                    return le
                }, LOG_TRACE: function () {
                    return se
                }, LOG_TRACE_COUNT: function () {
                    return fe
                }, LogPageNameList: function () {
                    return ue
                }
            });
            var i = {};
            n.r(i), n.d(i, {
                ERROR_CODE: function () {
                    return st
                }, genNetError: function () {
                    return dt
                }
            });
            var c = {};
            n.r(c), n.d(c, {
                CHANNEL_PC_WEB: function () {
                    return pt
                }, COMMON_SEARCH_PARAMS: function () {
                    return vt
                }, DISABLE_SECRET_VIDEO_PARAMS: function () {
                    return ht
                }, getNavigatorParams: function () {
                    return gt
                }
            });
            var l = {};
            n.r(l), n.d(l, {
                COLOR_PRIMARY: function () {
                    return Et
                }, COLOR_TEXT_1: function () {
                    return bt
                }, COLOR_TEXT_2: function () {
                    return yt
                }, COLOR_TEXT_3: function () {
                    return wt
                }
            });
            var u = {};
            n.r(u), n.d(u, {
                CHANNEL_MENU: function () {
                    return Ft
                }, CHANNEL_REF: function () {
                    return zt
                }, COMMON_CHANNEL_MENU: function () {
                    return Dt
                }
            });
            var s = {};
            n.r(s), n.d(s, {
                channel: function () {
                    return u
                }, errorCode: function () {
                    return i
                }, pageNameMap: function () {
                    return Ut
                }, serviceParam: function () {
                    return c
                }, storage: function () {
                    return o
                }, styles: function () {
                    return l
                }, url: function () {
                    return r
                }, webapp: function () {
                    return a
                }
            });
            var f = {};
            n.r(f), n.d(f, {
                Context: function () {
                    return xn
                }, effect: function () {
                    return An
                }, initialData: function () {
                    return On
                }, reducer: function () {
                    return _n
                }
            });
            n(9875), n(11188), n(79012), n(30391), n(78055), n(17714);
            var d = n(71504), m = n(1131),
                p = (n(81299), n(45552), n(97950), n(88770), n(11062), n(52854), n(69529), n(94723), n(60509), n(49988), n(45250)),
                v = (n(29055), n(87155), n(72178), "extra_params"), g = "previous_page", h = "enter_from", b = {},
                y = "", w = function () {
                    return b
                }, E = function (e) {
                    Object.assign(b, e)
                }, x = function (e) {
                    y = e
                }, _ = n(2049);

            function A(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function (t) {
                        k(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function k(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function P(e) {
                var t, n;
                null === (t = (n = window).collectEvent) || void 0 === t || t.call(n, "config", e)
            }

            function j(e) {
                var t, n, r, a, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                x(e || ""), P({
                    user_id: e || (null === (t = w()) || void 0 === t ? void 0 : t.user_id),
                    user_is_login: Number(o),
                    user_type: null === (n = w()) || void 0 === n ? void 0 : n.user_type,
                    user_is_auth: null === (r = w()) || void 0 === r ? void 0 : r.user_is_auth,
                    user_unique_id: null === (a = w()) || void 0 === a ? void 0 : a.user_unique_id
                })
            }

            var S = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), k(this, "config", {}), k(this, "teaConfig", {}), this._initLog(t)
                }

                var t, n, r;
                return t = e, (n = [{
                    key: "sendLog", value: function (e) {
                        var t, n, r, a, o = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = i || {},
                            l = c.urlParamList,
                            u = null === (t = this.config[e]) || void 0 === t ? void 0 : t.eventName,
                            s = (null === (n = this.config[e]) || void 0 === n ? void 0 : n.params) || {}, f = {};
                        try {
                            f = (l || []).reduce((function (e, t) {
                                return t === v || e[t] || (e[t] = o._setpUrlParam(t), o._setpUrlParam(t) || delete e[t]), e
                            }), {})
                        } catch (e) {
                            f = {}
                        }
                        var d = {};
                        try {
                            d = JSON.parse(this._setpUrlParam(v))
                        } catch (e) {
                        }
                        delete i.urlParamList;
                        var m = C(C(C(C({}, s), d), f), i || {});
                        null === (r = (a = window).collectEvent) || void 0 === r || r.call(a, u, m)
                    }
                }, {
                    key: "setConfig", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Object.assign(this.teaConfig, e)
                    }
                }, {
                    key: "_setpUrlParam", value: function (e) {
                        return (0, _.parse)(window.location.search)[e]
                    }
                }, {
                    key: "_initLog", value: function (e) {
                        this.config = e
                    }
                }]) && A(t.prototype, n), r && A(t, r), e
            }();

            function I() {
                return "undefined" == typeof window
            }

            k(S, "logTrace", []);
            n(25224), n(61395), n(59821), n(72444), n(37946), n(78144);
            var N = 6383, R = "douyin_website", T = "", M = "cbae2a42b075f1dfc39b9e7df764637c821e7bf2";

            function L(e) {
                return function (e) {
                    if (Array.isArray(e)) return B(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return B(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return B(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var D = N;

            function F() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (window.byted_acrawler) try {
                    window.byted_acrawler.init({
                        aid: D,
                        dfp: !1,
                        boe: !1,
                        intercept: !0,
                        enablePathList: ["/aweme/v1/*", "/aweme/v2/*"].concat(L(e || []))
                    })
                } catch (e) {
                }
            }

            var z, U = n(32477), H = n.n(U);

            function W(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Q(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            W(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            W(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            H().create();
            var V = {host: null, next: null, captchaHost: null};

            function q(e, t) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = Q(regeneratorRuntime.mark((function e(t, r) {
                    var a, o, i, c = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return a = c.length > 2 && void 0 !== c[2] ? c[2] : null, e.next = 3, n.e(216).then(n.bind(n, 68484));
                            case 3:
                                o = e.sent, i = o.SsoInterfaceSdk, z || (z = new i({
                                    aid: N,
                                    isOversea: !1,
                                    isBoe: !0,
                                    region: "cn",
                                    appName: "抖音 Web 站",
                                    host: t,
                                    printLog: !0
                                })), V.host = t, V.next = r, V.captchaHost = a;
                            case 9:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function X(e) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = Q(regeneratorRuntime.mark((function e(t) {
                    var n, r, a;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                n = encodeURIComponent(t || "".concat(window.location.origin).concat(window.location.pathname)), r = encodeURIComponent("https://".concat(location.hostname, "/passport/web/logout/?next=").concat(n)), a = "https://sso.douyin.com/logout/?service=".concat(r, "&aid=6383"), location.href = a;
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Z(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            var J, G, $ = {
                router: {type: "browser", basename: T}, render: (J = regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (I()) {
                                    e.next = 6;
                                    break
                                }
                                return F(), e.next = 4, q("https://sso.douyin.com", "https://www.douyin.com");
                            case 4:
                                n = {
                                    app_id: N,
                                    channel: "cn"
                                }, r = void 0, a = void 0, o = void 0, i = void 0, /(googlebot|baiduspider)/i.test(navigator.userAgent) || (null === (r = (a = window).collectEvent) || void 0 === r || r.call(a, "init", n), null === (o = (i = window).collectEvent) || void 0 === o || o.call(i, "start")), document.cookie = "douyin.com";
                            case 6:
                                t();
                            case 7:
                            case"end":
                                return e.stop()
                        }
                        var n, r, a, o, i
                    }), e)
                })), G = function () {
                    var e = this, t = arguments;
                    return new Promise((function (n, r) {
                        var a = J.apply(e, t);

                        function o(e) {
                            Z(a, n, r, o, i, "next", e)
                        }

                        function i(e) {
                            Z(a, n, r, o, i, "throw", e)
                        }

                        o(void 0)
                    }))
                }, function (e) {
                    return G.apply(this, arguments)
                }), rootContainer: function (e) {
                    return p.createElement(p.Fragment, null, e)
                }, ssr: {helmet: !0}
            };
            m.l.register({apply: $, path: "/src/app.tsx"});
            n(18959), n(32730);
            var ee = m.l.applyPlugins({key: "dynamicPublicPath", type: d.T.modify, initialValue: []}),
                te = Object.values(ee).join("");
            te && (n.p = te);
            var ne, re, ae = n(19921), oe = n(72966), ie = n(78958), ce = (n(96325), n(81499)),
                le = (n(76874), n(17032), "LOG_CURRENT_PAGE"),
                ue = ["main_page", "video_detail", "personal_homepage", "others_homepage", "search_result", "live_detail"],
                se = "LOG_TRACE", fe = 20;

            function de(e) {
                ne = e
            }

            function me() {
                return ne
            }

            function pe() {
                if ("search_result" === ne) {
                    var e = (0, _.parse)(window.location.search).enter_from;
                    return ue.includes(e) ? e : "search_result"
                }
                return ne
            }

            function ve() {
                return (ve = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var ge = function (e) {
                return p.createElement("svg", ve({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), re || (re = p.createElement("path", {
                    d: "M22.133 23.776a1.342 1.342 0 101.898-1.898l-4.112-4.113 4.112-4.112a1.342 1.342 0 00-1.898-1.898l-4.112 4.112-4.113-4.112a1.342 1.342 0 10-1.898 1.898l4.113 4.112-4.113 4.113a1.342 1.342 0 001.898 1.898l4.113-4.113 4.112 4.113z",
                    fill: "#0A0C20"
                })))
            };
            n(64906);

            function he(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? he(Object(n), !0).forEach((function (t) {
                        ye(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ye(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function we(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            var Ee = function () {
                return p.createElement("div", {className: "web-login-scan-desc"}, p.createElement("p", null, "打开抖音APP 扫描二维码"), p.createElement("p", null, " 点击「首页」-「搜索」-「扫一扫」"))
            };

            function xe(e) {
                var t = e.config, r = e.destory, a = (0, p.useRef)(null), o = function () {
                    var e;
                    null === (e = a.current) || void 0 === e || e.call(a), null == r || r()
                }, i = p.useCallback(function () {
                    var e = function (e) {
                        return function () {
                            var t = this, n = arguments;
                            return new Promise((function (r, a) {
                                var o = e.apply(t, n);

                                function i(e) {
                                    we(o, r, a, i, c, "next", e)
                                }

                                function c(e) {
                                    we(o, r, a, i, c, "throw", e)
                                }

                                i(void 0)
                            }))
                        }
                    }(regeneratorRuntime.mark((function e(r) {
                        var i, c, l;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (r) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, n.e(216).then(n.bind(n, 39829));
                                case 4:
                                    c = e.sent.default, l = new c(be(be({}, t), {}, {
                                        success: function (e) {
                                            l.checkLogin().then((function (n) {
                                                null != e && e.redirect_url ? H().get(null == e ? void 0 : e.redirect_url).then((function (e) {
                                                    var n;
                                                    null == t || null === (n = t.success) || void 0 === n || n.call(t)
                                                })).catch((function (e) {
                                                    o()
                                                })) : o()
                                            })).catch((function (e) {
                                            })).finally((function () {
                                                o()
                                            }))
                                        }, ele: r
                                    })), a.current = l.init(), l.setTeaConfig(be({}, null == t || null === (i = t.teaConfig) || void 0 === i ? void 0 : i.config));
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), []);
                return p.createElement("div", {
                    className: "account-container", onClick: function (e) {
                        o()
                    }
                }, p.createElement("div", {
                    ref: i, onClick: function (e) {
                        e.stopPropagation()
                    }
                }), p.createElement("div", {className: "account-close"}, p.createElement(ge, {
                    fill: "#2F3035",
                    opacity: "0.4"
                })))
            }

            var _e, Ae = !1;

            function Oe(e) {
                var t = e.success, n = void 0 === t ? null : t, r = e.host, a = void 0 === r ? null : r, o = e.next,
                    i = void 0 === o ? null : o, c = e.enterMethod;
                if (!Ae) {
                    Ae = !0;
                    var l = function (e) {
                            var t = e.success, n = e.host, r = e.next, a = e.ScanCodeDescription, o = e.enterMethod;
                            return {
                                appName: "抖音 Web 站",
                                aid: 6383,
                                teaConfig: {
                                    appId: 6383,
                                    config: {
                                        evtParams: {
                                            page_type: me() || "",
                                            enter_method: o || "",
                                            enter_from: pe() || ""
                                        }
                                    }
                                },
                                isOversea: !1,
                                globalMobileSupport: !0,
                                region: "cn",
                                scope: "sso",
                                host: n || V.host || "https://sso.douyin.com",
                                next: r || V.next || "https://www.douyin.com/",
                                captchaHost: V.captchaHost,
                                loginType: ["LOGIN_MOBILE_CODE"],
                                ScanCodeDescription: a,
                                bindConflictType: "create_account",
                                rememberPwd: !0,
                                textConfig: {
                                    mobileCodeLoginText: {
                                        title: "验证码登录",
                                        mobilePlaceholder: "请输入手机号",
                                        codePlaceholder: "请输入验证码",
                                        buttonText: "登录"
                                    },
                                    scanCodeLoginText: {
                                        refreshCode: "二维码已失效",
                                        getCodeFailed: "二维码已失效",
                                        refreshBtnText: "点击刷新",
                                        codeFailedBtnText: "点击刷新"
                                    },
                                    passwordResetText: {
                                        newPwdPlaceholder: "请输入新密码",
                                        confirmPwdPlaceholder: "确认密码",
                                        codePlaceholder: "请输入验证码"
                                    },
                                    bindConflictText: {
                                        title: "",
                                        description: "检测到抖音授权的手机号注册的西瓜帐号已绑定另一个抖音帐号“{aweme_conflict_name}”，存在绑定冲突，请在下方选择解决方式",
                                        loginBtnText: "换绑并登录",
                                        unbindText: "解除绑定",
                                        backToLogin: "返回重新登录"
                                    },
                                    extraText: {otherLoginText: "其他方式："}
                                },
                                unionLoginPanel: !0,
                                linkAreaPosition: "top",
                                linkList: [{
                                    key: "login_mobile_code",
                                    existOn: ["LOGIN_ACCOUNT_PWD"],
                                    text: "验证码登录",
                                    type: "page",
                                    clickToPage: "LOGIN_MOBILE_CODE"
                                }, {
                                    key: "login",
                                    existOn: ["PASSWORD_RESET"],
                                    text: "返回登录",
                                    type: "page",
                                    clickToPage: "LOGIN_ACCOUNT_PWD"
                                }],
                                accountType: ["email", "mobile"],
                                success: t,
                                confirm: [{
                                    text: "服务协议",
                                    url: "https://www.douyin.com/agreements/?id=6773906068725565448"
                                }, {text: "隐私条款", url: "https://www.douyin.com/agreements/?id=6773901168964798477"}],
                                onPageChange: function (e) {
                                },
                                onPageBeforeChange: function (e) {
                                }
                            }
                        }({success: n, host: a, next: i, ScanCodeDescription: Ee, enterMethod: void 0 === c ? "" : c}),
                        u = document.createElement("div");
                    document.body.appendChild(u);
                    var s = function () {
                        document.body.style.overflow = "", ce.unmountComponentAtNode(u), document.body.removeChild(u)
                    };
                    return document.body.style.overflow = "hidden", ce.render(p.createElement(xe, {
                        config: l,
                        destory: function () {
                            Ae = !1, s()
                        }
                    }), u), s
                }
            }

            var Ce = "AUTO_LOGIN_PROMPT_TIMESTAMP";
            n(78585);
            var ke = n(1909), Pe = [{
                    url: "https://www.douyin.com/resource/douyin?source=dou",
                    title: "广告投放"
                }, {
                    url: "https://www.douyin.com/agreements/?id=6773906068725565448",
                    title: "用户服务协议"
                }, {
                    url: "https://www.douyin.com/agreements/?id=6773901168964798477",
                    title: "隐私政策"
                }, {
                    url: "https://www.douyin.com/recovery_account/",
                    title: "帐号找回"
                }, {
                    url: "https://www.douyin.com/aboutus/#contact",
                    title: "联系我们"
                }, {
                    url: "https://www.douyin.com/aboutus/#join",
                    title: "加入我们"
                }, {url: "https://www.douyin.com/business_license/", title: "营业执照"}], je = [[{
                    url: "https://www.piyao.org.cn/yybgt/index.htm",
                    title: "网络谣言曝光台 ｜ "
                }, {
                    url: "https://www.12377.cn/",
                    title: "网上有害信息举报"
                }, {title: "｜ 违法和不良信息举报：400-140-2108 ｜ 青少年守护专线：400-9922-556 ｜ 举报邮箱：jubao@douyin.com"}], [{
                    url: "https://beian.miit.gov.cn/",
                    title: "京ICP备16016397号-3"
                }, {
                    url: "https://lf3-static.bytednsdoc.com/obj/eden-cn/5201eh7bvoguloz/douyin_web/zhizuojingying.pdf",
                    title: " ｜ 广播电视节目制作经营许可证"
                }, {
                    url: "https://lf3-static.bytednsdoc.com/obj/eden-cn/5201eh7bvoguloz/douyin_web/zengzhixuke.pdf",
                    title: " ｜ 京B2-20170846"
                }, {
                    url: "https://lf3-static.bytednsdoc.com/obj/eden-cn/5201eh7bvoguloz/douyin_web/wangluowenhuajingying.jpg",
                    title: " ｜ 网络文化许可证-京网文-（2016）2282-264号 ｜ "
                }, {
                    icon: ke,
                    url: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002046",
                    title: "京公网安备 11000002002046号"
                }]], Se = "_475f2998adb4df826fd760aa46e20e9e-scss", Ie = "_2f6bc01d19a092f8f87e229419ced99c-scss",
                Ne = "_6d301eeb7054f87347c25fcdcdce9fae-scss", Re = "_6a030b36a466765902157948f344b6cf-scss",
                Te = "_6da824a94ca68395bb18325cb06c0545-scss", Me = "a45cef481368a263c9a7cb7a85b22b48-scss";

            function Le(e) {
                var t = e.linkItems, n = e.subLinkItems, r = t || Pe, a = n || je;
                return p.createElement("footer", null, p.createElement("div", {className: Se}, p.createElement("div", {className: Ie}, Boolean(r.length) && r.map((function (e, t) {
                    return p.createElement("div", {className: Ne, key: t}, p.createElement("a", {
                        href: e.url,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, e.title))
                }))), Boolean(a.length) && a.map((function (e, t) {
                    return p.createElement("div", {
                        key: "group_".concat(t),
                        className: Re
                    }, Boolean(e.length) && e.map((function (e, t) {
                        return p.createElement("div", {
                            className: Te,
                            key: t
                        }, e.icon && p.createElement("img", {
                            className: Me,
                            src: e.icon
                        }), e.url ? p.createElement("a", {
                            href: e.url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, e.title) : p.createElement("span", null, e.title))
                    })))
                }))))
            }

            var Be = n(5829), De = n.n(Be), Fe = "_9f1b1dc461877bc141b6e50012a13f5d-scss",
                ze = "_17a46973a75dd0d51a011c8f093bd3ce-scss", Ue = "b48f34fd3b3d967911ebb9f5e585d007-scss";

            function He() {
                return (He = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var We, Qe = function (e) {
                var t = e.src, n = e.width, r = void 0 === n ? 18 : n, a = e.height, o = void 0 === a ? 18 : a,
                    i = e.color, c = e.viewBox, l = e.className, u = void 0 === l ? "" : l, s = i ? {fill: i} : {};
                return p.createElement(t, He({
                    className: De()(i ? Ue : "", u),
                    width: r,
                    height: o,
                    viewBox: c || "0 0 36 36"
                }, s))
            }, Ve = p.memo(Qe);

            function qe(e) {
                if (e === window) {
                    var t = void 0 !== window.pageXOffset, n = "CSS1Compat" === (document.compatMode || "");
                    return {
                        x: t ? window.pageXOffset : n ? document.documentElement.scrollLeft : document.body.scrollLeft,
                        y: t ? window.pageYOffset : n ? document.documentElement.scrollTop : document.body.scrollTop
                    }
                }
                return {x: e.scrollLeft, y: e.scrollTop}
            }

            function Ke(e, t, n) {
                var r = qe(e), a = r.x, o = r.y, i = o - t;
                if (Math.abs(i) < 100 || n <= 0) e.scrollTo(a, t); else {
                    var c = 10 * i / n;
                    e.scrollTo(a, o - c), setTimeout((function () {
                        Ke(e, t, n - 50)
                    }), 10)
                }
            }

            function Xe() {
                return (Xe = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Ye = function (e) {
                return p.createElement("svg", Xe({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), We || (We = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11 8.36c0 .75.609 1.359 1.36 1.359h10.873a1.36 1.36 0 100-2.719H12.36C11.61 7 11 7.609 11 8.36zm.422 9.164a1.44 1.44 0 002.037 2.037l2.973-2.972V27.56a1.44 1.44 0 102.88 0V16.587l1.277 1.277 1.698 1.697a1.44 1.44 0 002.037-2.037l-5.238-5.238a1.715 1.715 0 00-2.426 0l-5.238 5.238z",
                    fill: "#0A0C20"
                })))
            };

            function Ze(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Je(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Je(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Je(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var Ge = Ke, $e = qe;

            function et(e) {
                var t = e.className, n = void 0 === t ? "" : t, r = e.showUpIconScrollY, a = e.children,
                    o = Ze((0, p.useState)(!1), 2), i = o[0], c = o[1];
                return (0, p.useEffect)((function () {
                    var e = function () {
                        $e(window).y > (r || 3 * window.innerHeight) ? !i && c(!0) : i && c(!1)
                    };
                    return document.addEventListener("scroll", e), function () {
                        document.removeEventListener("scroll", e)
                    }
                }), [r, i]), p.createElement("div", {className: De()(Fe, n)}, a, i && p.createElement("div", {
                    className: De()(ze),
                    onClick: function () {
                        Ge(window, 0, 200)
                    }
                }, p.createElement(Ve, {src: Ye, width: 36, height: 36})))
            }

            function tt(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function nt(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            tt(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            tt(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function rt() {
                var e = document.head || document.getElementsByTagName("head")[0], t = document.createElement("style");
                t.appendChild(document.createTextNode('\n    .athena-survey-widget[data-feelgood-task-id] {\n      border-radius: 4px;\n    }\n    .athena-survey-widget[data-feelgood-task-id] .athena-form {\n      color: #6C6F8D;\n      font-family: "PingFang SC", "DFPKingGothicGB-Regular", sans-serif !important;\n    }\n    .athena-survey-widget[data-feelgood-task-id] .fg-rating__center-label {\n      color: #6C6F8D;\n    }\n    .athena-survey-widget[data-feelgood-task-id] .athena-question-template__required::before {\n      background: #FE2C55;\n    }\n    .athena-survey-widget[data-feelgood-task-id] .athena-question-template__title .fg-question__title-rich-text > p {\n      color: #0A0C20 !important;\n      font-family: "PingFang SC", "DFPKingGothicGB-Medium", sans-serif !important;\n      font-weight: 500 !important;\n    }\n    .athena-survey-widget[data-feelgood-task-id] .athena-checkbox__input--wrapper.checked {\n      border-color: #FE2C55 !important;\n      background: #FE2C55 !important;\n    }\n    .athena-survey-widget[data-feelgood-task-id] .athena-checkbox__input--wrapper:hover {\n      border-color: #FE2C55 !important;\n    }\n    .athena-survey-widget[data-feelgood-task-id] .athena-short-answer .athena-short-answer__input {\n      border: none;\n      background: #F1F2F5;\n    }\n    .athena-survey-widget[data-feelgood-task-id] .text-area_input > textarea {\n      color: #0A0C20;\n      background: #F1F2F5;\n    }\n    .athena-survey-widget[data-feelgood-task-id] button.form-footer__submit {\n      background: #FE2C55;\n    }\n  ')), e.appendChild(t)
            }

            function at(e) {
                return ot.apply(this, arguments)
            }

            function ot() {
                return (ot = nt(regeneratorRuntime.mark((function e(t) {
                    var r, a;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.e(216).then(n.bind(n, 80095));
                            case 2:
                                return r = e.sent, a = r.default, rt(), a.init(t), e.abrupt("return", a);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            var it, ct, lt, ut, st = {
                ERROR_UNKONWN: -1,
                ERROR_401: -401,
                ERROR_403: -403,
                ERROR_404: -404,
                ERROR_501: -501,
                ERROR_502: -502,
                ERROR_NO_NETWORK: -999,
                ERROR_SERVICE_INTERNAL: 4,
                ERROR_INVALID_PARAM: 5,
                ERROR_USER_UNLOGIN: 8,
                ERROR_USER_FORBIDEN: 9,
                ERROR_USER_NOTFOUND: 3170
            }, ft = (it = {
                404: {status_code: -404, status_msg: "服务已下线"},
                501: {status_code: -501, status_msg: "啊哦，服务器打瞌睡了"},
                502: {status_code: -502, status_msg: "啊哦，服务器打瞌睡了"},
                401: {status_code: -401, status_msg: "服务未授权"},
                403: {status_code: -403, status_msg: "啊哦，服务器打瞌睡了"}
            }, ct = st.ERROR_NO_NETWORK, lt = {
                status_code: -999,
                status_msg: "网络出现问题"
            }, ct in it ? Object.defineProperty(it, ct, {
                value: lt,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : it[ct] = lt, it), dt = function (e) {
                return ft[e] ? ft[e] : {status_code: -1, status_msg: "啊哦，服务器打瞌睡了"}
            };

            function mt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var pt = "channel_pc_web",
                vt = (mt(ut = {}, "device_platform", "webapp"), mt(ut, "aid", N), mt(ut, "channel", pt), ut),
                gt = function () {
                    var e, t, n, r, a, o, i, c;
                    return {
                        cookie_enabled: null === (e = navigator) || void 0 === e ? void 0 : e.cookieEnabled,
                        screen_width: null === (t = screen) || void 0 === t ? void 0 : t.width,
                        screen_height: null === (n = screen) || void 0 === n ? void 0 : n.height,
                        browser_language: null === (r = navigator) || void 0 === r ? void 0 : r.language,
                        browser_platform: null === (a = navigator) || void 0 === a ? void 0 : a.platform,
                        browser_name: null === (o = navigator) || void 0 === o ? void 0 : o.appCodeName,
                        browser_version: null === (i = navigator) || void 0 === i ? void 0 : i.appVersion,
                        browser_online: null === (c = navigator) || void 0 === c ? void 0 : c.onLine
                    }
                }, ht = mt({}, "publish_video_strategy_type", 2), bt = "#4F5168", yt = "#6C6F8D", wt = "#A9AAB7",
                Et = "#FE2C55", xt = "live.douyin.com", _t = function (e) {
                    return "https://www.douyin.com".concat(T).concat(e)
                }, At = function (e, t) {
                    return "".concat(e).concat(t ? "?".concat(t) : "")
                }, Ot = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return At("/video/".concat(e), t)
                }, Ct = function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return At("/collection/".concat(e), "pos=".concat(t, "&").concat(n))
                }, kt = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return _t(Ot(e, t))
                }, Pt = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = t ? "".concat(t, "&enter_from=").concat(me()) : "enter_from=".concat(me());
                    return _t(At("/user/".concat(e), n))
                }, jt = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return _t(At("/channel/".concat(e), t))
                }, St = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return _t(At("/search/".concat(e || ""), t))
                }, It = function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return _t(Ct(e, t, n))
                }, Nt = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return _t(At("/", e))
                }, Rt = function (e) {
                    e.liveBase;
                    var t = e.uniqueId, n = e.shortId;
                    return "".concat("https://".concat(xt), "/").concat(t || n)
                }, Tt = function (e) {
                    var t, n = (0, ie.LX)(e, {path: "".concat(T, "/video/:id"), exact: !0, strict: !1});
                    return null == n || null === (t = n.params) || void 0 === t ? void 0 : t.id
                }, Mt = function (e) {
                    var t, n = (0, ie.LX)(e, {path: "".concat(T, "/user/:id"), exact: !0, strict: !1});
                    return null == n || null === (t = n.params) || void 0 === t ? void 0 : t.id
                }, Lt = function (e) {
                    var t, n = (0, ie.LX)(e, {path: "".concat(T, "/collection/:id"), exact: !0, strict: !1});
                    return null == n || null === (t = n.params) || void 0 === t ? void 0 : t.id
                }, Bt = function (e) {
                    var t;
                    return null === (t = (0, _.parse)(e)) || void 0 === t ? void 0 : t.pos
                };
            var Dt = [{value: "home", label: "全部", href: Nt(), route: "/", target: ""}, {
                value: "live",
                label: "直播",
                href: _t("/live"),
                route: "",
                target: ""
            }], Ft = [{
                value: "channel_300201",
                label: "娱乐",
                href: jt(300201),
                route: "/channel/300201",
                target: ""
            }, {
                value: "channel_300203",
                label: "知识",
                href: jt(300203),
                route: "/channel/300203",
                target: ""
            }, {
                value: "channel_300206",
                label: "二次元",
                href: jt(300206),
                route: "/channel/300206",
                target: ""
            }, {
                value: "channel_300205",
                label: "游戏",
                href: jt(300205),
                route: "/channel/300205",
                target: ""
            }, {
                value: "channel_300204",
                label: "美食",
                href: jt(300204),
                route: "/channel/300204",
                target: ""
            }, {
                value: "channel_300207",
                label: "体育",
                href: jt(300207),
                route: "/channel/300207",
                target: ""
            }, {
                value: "channel_300208",
                label: "时尚",
                href: jt(300208),
                route: "/channel/300208",
                target: ""
            }, {value: "channel_300209", label: "音乐", href: jt(300209), route: "/channel/300209", target: ""}], zt = {};
            [].concat(Dt, Ft).map((function (e) {
                zt[e.value] = e
            }));
            var Ut = {
                "^/$|^/channel/.*|^/hot$|^/live$": "main_page",
                "^/video/.*|^/collection/.*": "video_detail",
                "^/search/.*": "search_result",
                "^/category/.*": "main_category_page",
                "^/hot_live/?$": "hot_live_page"
            };

            function Ht(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Wt(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Ht(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Ht(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function Qt(e) {
                var t, n = {
                    commonOptions: {
                        aid: null == s || null === (t = a) || void 0 === t ? void 0 : t.APP_ID,
                        did: "0",
                        iid: "0"
                    }, captchaOptions: {host: "//verify.snssdk.com/", showMode: "mask", autoClose: !0}
                };
                e.init(n, (function () {
                }), (function (e) {
                }))
            }

            function Vt(e, t) {
                return qt.apply(this, arguments)
            }

            function qt() {
                return (qt = Wt(regeneratorRuntime.mark((function e(t, r) {
                    var a, o;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (a = r.headers["x-vc-bdturing-parameters"]) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", r);
                            case 3:
                                return e.next = 5, n.e(216).then(n.bind(n, 92106));
                            case 5:
                                return o = e.sent, e.abrupt("return", new Promise((function (e, n) {
                                    var i;
                                    a = atob(a), Qt(o), o.render({
                                        verify_data: a,
                                        captchaOptions: {
                                            host: "//verify.snssdk.com/",
                                            successCb: (i = Wt(regeneratorRuntime.mark((function n(a) {
                                                var o;
                                                return regeneratorRuntime.wrap((function (n) {
                                                    for (; ;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 3, t.request(r.config);
                                                        case 3:
                                                            o = n.sent, e(o);
                                                        case 5:
                                                        case"end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            }))), function (e) {
                                                return i.apply(this, arguments)
                                            }),
                                            errorCb: function (e) {
                                            },
                                            closeCb: function () {
                                                n(new Error("captcha close"))
                                            }
                                        }
                                    })
                                })));
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Kt(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Xt(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Kt(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Kt(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function Yt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Zt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Yt(Object(n), !0).forEach((function (t) {
                        Jt(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yt(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Jt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var Gt = H().create();

            function $t(e) {
                return en.apply(this, arguments)
            }

            function en() {
                return (en = Xt(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u, s, f, d, m, p, v, g, h, b, y, w, E, x, A, O = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (n = O.length > 1 && void 0 !== O[1] ? O[1] : {}, r = O.length > 2 && void 0 !== O[2] ? O[2] : {}, a = O.length > 3 && void 0 !== O[3] ? O[3] : "", o = O.length > 4 && void 0 !== O[4] ? O[4] : null, i = O.length > 5 && void 0 !== O[5] ? O[5] : {}, c = i.psm, l = void 0 === c ? "" : c, u = i.cluster, s = void 0 === u ? "" : u, e.prev = 5, !o) {
                                    e.next = 19;
                                    break
                                }
                                return v = "consul:".concat(l).concat(t, "?").concat((0, _.stringify)(n), "&version_code=160100&version_name=16.1.0"), g = {
                                    "content-type": "*/*",
                                    "device-platform": "web",
                                    "user-agent": o.request.headers["user-agent"],
                                    "x-use-ppe": o.request.headers["x-use-ppe"] || "",
                                    "x-use-boe": o.request.headers["x-use-boe"] || "",
                                    "x-tt-env": o.request.headers["x-tt-env"] || "",
                                    "X-Tlb-Cluster": "internal_lb_core_api",
                                    referer: "https://www.douyin.com/".concat((null == o || null === (f = o.request) || void 0 === f ? void 0 : f.path) || ""),
                                    cookie: null === (d = o.request.header) || void 0 === d ? void 0 : d.cookie
                                }, e.next = 11, o.fetch(v, Zt({
                                    method: "GET",
                                    handleMethod: t,
                                    consul: {cluster: s},
                                    timeout: 800,
                                    headers: Zt({}, g),
                                    ctx: {env: o.request.headers["x-tt-env"], handleMethod: t, logId: o.logId}
                                }, r));
                            case 11:
                                return h = e.sent, e.next = 14, h.json();
                            case 14:
                                return b = e.sent, null == o || null === (m = o.logger) || void 0 === m || null === (p = m.info) || void 0 === p || p.call(m, "Fetch Success: ", t), e.abrupt("return", b);
                            case 19:
                                return e.next = 21, Gt(Zt({
                                    url: t,
                                    method: "GET",
                                    baseURL: a,
                                    params: n,
                                    headers: {"Content-Type": "application/json", withCredentials: !0}
                                }, r));
                            case 21:
                                return y = e.sent, e.next = 24, Vt(Gt, y);
                            case 24:
                                return w = e.sent, e.abrupt("return", w.data);
                            case 26:
                                e.next = 34;
                                break;
                            case 28:
                                return e.prev = 28, e.t0 = e.catch(5), o && (null == o || null === (E = o.logger) || void 0 === E || null === (x = E.info) || void 0 === x || x.call(E, "Fetch Error: ", t, null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack)), null !== e.t0 && void 0 !== e.t0 && e.t0.response ? A = e.t0.response.status : null !== e.t0 && void 0 !== e.t0 && e.t0.request && (A = st.ERROR_NO_NETWORK), e.abrupt("return", dt(A));
                            case 34:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[5, 28]])
                })))).apply(this, arguments)
            }

            function tn(e, t) {
                var n = {statusCode: st.ERROR_UNKONWN};
                try {
                    n = t && t(e)
                } catch (e) {
                }
                return n
            }

            function nn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function rn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nn(Object(n), !0).forEach((function (t) {
                        an(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nn(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function an(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function on(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function cn(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            on(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            on(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            Gt.interceptors.request.use((function (e) {
                return e.params.version_code = "160100", e.params.version_name = "16.1.0", Object.assign(e.params, Zt({}, gt())), e
            }));
            var ln = vt, un = ht, sn = pt;

            function fn(e) {
                var t, n, r, a, o, i, c, l, u, s, f, d, m, p, v, g, h, b, y, w, E, x, _, A, O, C, k, P, j, S, I, N, R,
                    T, M, L, B, D, F, z = e.status_code, U = e.status_msg, H = e.user;
                return {
                    statusCode: z,
                    statusMsg: U,
                    logPb: e.log_pb,
                    user: (t = H, a = t || {}, o = a.uid, i = a.sec_uid, c = a.short_id, l = a.nickname, u = a.remark_name, s = a.signature, f = a.gender, d = a.avatar_thumb, m = a.follow_status, p = void 0 === m ? 0 : m, v = a.follower_status, g = a.aweme_count, h = void 0 === g ? 0 : g, b = a.following_count, y = void 0 === b ? 0 : b, w = a.follower_count, E = void 0 === w ? 0 : w, x = a.mplatform_followers_count, _ = a.favoriting_count, A = void 0 === _ ? 0 : _, O = a.total_favorited, C = void 0 === O ? 0 : O, k = a.unique_id, P = a.enterprise_verify_reason, j = a.custom_verify, S = a.secret, I = void 0 === S ? 0 : S, N = a.user_canceled, R = void 0 !== N && N, T = a.share_info, M = a.room_id, L = a.is_blocked, B = a.is_block, D = a.favorite_permission, F = a.show_favorite_list, {
                        uid: o,
                        secUid: i,
                        shortId: c,
                        nickname: u || l,
                        desc: s,
                        gender: f,
                        avatarUrl: (r = null == d ? void 0 : d.url_list[0], (r || "").replace(/^https?\:/i, "")),
                        followStatus: p,
                        followerStatus: v,
                        awemeCount: h,
                        followingCount: y,
                        followerCount: E,
                        mplatformFollowersCount: x,
                        favoritingCount: A,
                        totalFavorited: C,
                        uniqueId: k || c,
                        customVerify: j,
                        enterpriseVerifyReason: P,
                        secret: I,
                        userCanceled: R,
                        shareQrcodeUrl: (null == T || null === (n = T.share_qrcode_url) || void 0 === n ? void 0 : n.url_list[0]) || "",
                        roomId: M,
                        isBlocked: L,
                        isBlock: B,
                        favoritePermission: D,
                        showFavoriteList: F
                    })
                }
            }

            function dn() {
                return mn.apply(this, arguments)
            }

            function mn() {
                return (mn = cn(regeneratorRuntime.mark((function e() {
                    var t, n, r, a = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = a.length > 0 && void 0 !== a[0] ? a[0] : null, n = a.length > 1 && void 0 !== a[1] ? a[1] : void 0, e.next = 4, $t("/aweme/v1/web/user/profile/self/", rn(rn(rn({}, ln), un), {}, {source: sn}), {}, void 0, t, n);
                            case 4:
                                return r = e.sent, e.abrupt("return", tn(r, fn));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function pn(e) {
                return vn.apply(this, arguments)
            }

            function vn() {
                return (vn = cn(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = o.length > 1 && void 0 !== o[1] ? o[1] : null, r = o.length > 2 && void 0 !== o[2] ? o[2] : void 0, e.next = 4, $t("/aweme/v1/web/user/profile/other/", rn(rn(rn({}, ln), un), {}, {
                                    source: sn,
                                    sec_user_id: t
                                }), {}, void 0, n, r);
                            case 4:
                                return a = e.sent, e.abrupt("return", tn(a, fn));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function gn(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function hn(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            gn(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            gn(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function bn(e) {
                return yn.apply(this, arguments)
            }

            function yn() {
                return (yn = hn(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (!t) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 3, pn(t);
                            case 3:
                                if (n = e.sent, r = n.statusCode, a = n.user, 0 !== r || !a) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return", {user: a});
                            case 10:
                                return e.abrupt("return", {statusCode: r});
                            case 11:
                                return e.next = 13, dn();
                            case 13:
                                if (o = e.sent, i = o.statusCode, c = o.user, 0 !== i || !c) {
                                    e.next = 18;
                                    break
                                }
                                return e.abrupt("return", {isLogin: !0, user: c, statusCode: i});
                            case 18:
                                return e.abrupt("return", {isLogin: !1});
                            case 19:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function wn(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            var En, xn = (0, p.createContext)(null), _n = {
                setUserInfo: function (e, t) {
                    var n;
                    return j(null == t || null === (n = t.userInfo) || void 0 === n ? void 0 : n.uid, null == t ? void 0 : t.isLogin), {
                        isLogin: t.isLogin,
                        info: t.userInfo,
                        statusCode: t.statusCode
                    }
                }
            }, An = {
                updateUserInfo: (En = function (e) {
                    return function () {
                        var t = this, n = arguments;
                        return new Promise((function (r, a) {
                            var o = e.apply(t, n);

                            function i(e) {
                                wn(o, r, a, i, c, "next", e)
                            }

                            function c(e) {
                                wn(o, r, a, i, c, "throw", e)
                            }

                            i(void 0)
                        }))
                    }
                }(regeneratorRuntime.mark((function e(t, n, r) {
                    var a, o, i, c;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, bn();
                            case 2:
                                return a = e.sent, o = a.isLogin, i = a.user, c = a.statusCode, n({
                                    type: "setUserInfo",
                                    payload: {userInfo: i, isLogin: o, statusCode: c}
                                }), e.abrupt("return", {isLogin: o, user: i});
                            case 8:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))), function (e, t, n) {
                    return En.apply(this, arguments)
                })
            }, On = {isLogin: void 0, info: {}, statusCode: 0};

            function Cn(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function kn(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Pn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pn(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Pn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function jn(e, t) {
                var n, r = e.reducer, a = e.initialData, o = e.effect,
                    i = kn((0, p.useReducer)((n = r, function (e, t) {
                        if (!n[t.type]) throw new Error("No Action Handler:".concat(t.type));
                        return n[t.type](e, t.payload)
                    }), t || a), 2), c = i[0], l = i[1];
                return [c, function () {
                    var e = function (e) {
                        return function () {
                            var t = this, n = arguments;
                            return new Promise((function (r, a) {
                                var o = e.apply(t, n);

                                function i(e) {
                                    Cn(o, r, a, i, c, "next", e)
                                }

                                function c(e) {
                                    Cn(o, r, a, i, c, "throw", e)
                                }

                                i(void 0)
                            }))
                        }
                    }(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (o[t.type]) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("No Effect Handler:".concat(t.type));
                                case 2:
                                    return e.abrupt("return", o[t.type](t, l, c));
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()]
            }

            var Sn = n(10533);

            function In(e) {
                var t = e.slardar, n = e.level, r = e.value, a = e.tags;
                t && t("emit", "log", {level: n || "info", value: r, tags: a || {}})
            }

            var Nn = n(74765), Rn = n.n(Nn), Tn = w, Mn = function () {
                return y
            }, Ln = [];

            function Bn(e) {
                var t, n, r, a, i, c;
                try {
                    var l,
                        u = window.localStorage.getItem(null == s || null === (l = o) || void 0 === l ? void 0 : l.LOG_TRACE);
                    Ln = u ? JSON.parse(u) : []
                } catch (e) {
                }
                Ln && Ln.length >= (null == s || null === (t = o) || void 0 === t ? void 0 : t.LOG_TRACE_COUNT) && Ln.shift();
                var f = null == e || null === (n = e.data) || void 0 === n || null === (r = n.log_pb) || void 0 === r ? void 0 : r.impr_id,
                    d = null == e || null === (a = e.config) || void 0 === a ? void 0 : a.url, m = window.location.href;
                Ln.push({
                    time: Rn()(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                    wid: null === (i = Tn()) || void 0 === i ? void 0 : i.user_unique_id,
                    uid: Mn(),
                    logId: f,
                    url: d,
                    visit: m
                });
                var p = "";
                try {
                    p = JSON.stringify(Ln)
                } catch (e) {
                }
                window.localStorage.setItem(null == s || null === (c = o) || void 0 === c ? void 0 : c.LOG_TRACE, p)
            }

            var Dn = "ies.janus.proxy", Fn = "aweme_pc", zn = n(84818), Un = n.n(zn);

            function Hn(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Wn(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Hn(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Hn(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function Qn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Vn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Qn(Object(n), !0).forEach((function (t) {
                        qn(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qn(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function qn(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var Kn = H().create();

            function Xn(e) {
                return Yn.apply(this, arguments)
            }

            function Yn() {
                return (Yn = Wn(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u, s, f, d, m, p, v, g, h, b, y, w, E, x, A, O, C, k, P, j = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (n = j.length > 1 && void 0 !== j[1] ? j[1] : {}, r = j.length > 2 ? j[2] : void 0, a = j.length > 3 && void 0 !== j[3] ? j[3] : {}, o = a.options, i = void 0 === o ? {} : o, c = a.psm, l = void 0 === c ? Dn : c, u = a.cluster, s = void 0 === u ? Fn : u, f = a.origin, d = void 0 === f ? "" : f, e.prev = 3, !r) {
                                    e.next = 17;
                                    break
                                }
                                return g = "consul:".concat(l).concat(t, "?").concat(_.stringify(n), "&version_code=160100&version_name=16.1.0"), h = {
                                    "content-type": "*/*",
                                    "device-platform": "web",
                                    "user-agent": r.request.headers["user-agent"],
                                    "x-use-ppe": r.request.headers["x-use-ppe"] || "",
                                    "x-use-boe": r.request.headers["x-use-boe"] || "",
                                    "x-tt-env": r.request.headers["x-tt-env"] || "",
                                    "X-Tlb-Cluster": "internal_lb_core_api",
                                    referer: "https://www.douyin.com/".concat((null == r || null === (m = r.request) || void 0 === m ? void 0 : m.path) || ""),
                                    cookie: null === (p = r.request.header) || void 0 === p ? void 0 : p.cookie
                                }, e.next = 9, r.fetch(g, Vn({
                                    method: "GET",
                                    handleMethod: t,
                                    consul: {cluster: s},
                                    timeout: 800,
                                    cookie: null === (v = r.request.header) || void 0 === v ? void 0 : v.cookie,
                                    headers: Vn({}, h),
                                    ctx: {env: r.request.headers["x-tt-env"], handleMethod: t, logId: r.request.logId}
                                }, i));
                            case 9:
                                return b = e.sent, e.next = 12, b.text();
                            case 12:
                                return y = e.sent, w = Un().parse(y), e.abrupt("return", w);
                            case 17:
                                return e.next = 19, Kn(Vn({
                                    url: t,
                                    method: "GET",
                                    baseURL: d,
                                    params: n,
                                    headers: {"Content-Type": "application/json", withCredentials: !0},
                                    transformResponse: function (e, t) {
                                        if ("string" == typeof e) try {
                                            e = Un().parse(e)
                                        } catch (t) {
                                            e = JSON.parse(e)
                                        }
                                        return e
                                    }
                                }, i));
                            case 19:
                                return x = e.sent, e.next = 22, Vt(Kn, x);
                            case 22:
                                if (Bn(A = e.sent), null !== (E = A.data) && void 0 !== E && E.status_code) try {
                                    In({
                                        slardar: Sn.o,
                                        level: "error",
                                        value: "Erro: ".concat(null === (O = A.data) || void 0 === O ? void 0 : O.status_code, ", Result: ").concat(JSON.stringify(A.data), ", param: ").concat(JSON.stringify(n)),
                                        tags: {path: t}
                                    })
                                } catch (e) {
                                }
                                return e.abrupt("return", A.data);
                            case 26:
                                e.next = 33;
                                break;
                            case 28:
                                e.prev = 28, e.t0 = e.catch(3), r && (null === (k = r.logger) || void 0 === k || null === (P = k.info) || void 0 === P || P.call(k, "Fetch Error: ", t, null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack));
                                try {
                                    In({
                                        level: "error",
                                        value: "Erro: ".concat(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack, ", param: ").concat(JSON.stringify(n)),
                                        tags: {path: t}
                                    })
                                } catch (e) {
                                }
                                return e.abrupt("return", dt(null === e.t0 || void 0 === e.t0 || null === (C = e.t0.response) || void 0 === C ? void 0 : C.status));
                            case 33:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[3, 28]])
                })))).apply(this, arguments)
            }

            function Zn(e) {
                return Jn.apply(this, arguments)
            }

            function Jn() {
                return (Jn = Wn(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = c.length > 1 && void 0 !== c[1] ? c[1] : {}, r = c.length > 2 && void 0 !== c[2] ? c[2] : {}, a = c.length > 3 && void 0 !== c[3] ? c[3] : "", e.next = 5, Kn(Vn({
                                    url: t,
                                    method: "POST",
                                    baseURL: a,
                                    data: n,
                                    headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}
                                }, r));
                            case 5:
                                return o = e.sent, e.next = 8, Vt(Kn, o);
                            case 8:
                                return i = e.sent, e.abrupt("return", i.data);
                            case 10:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            Kn.interceptors.request.use((function (e) {
                var t;
                return e.params || (e.params = {}), e.params.version_code = "160100", e.params.version_name = "16.1.0", Object.assign(e.params, Vn({}, null == s || null === (t = c) || void 0 === t ? void 0 : t.getNavigatorParams())), e
            }));
            var Gn = i;

            function $n(e) {
                return (e || "").replace(/^https?\:/i, "")
            }

            function er(e, t) {
                var n = {statusCode: Gn.ERROR_CODE.ERROR_UNKONWN};
                try {
                    n = t && t(e)
                } catch (e) {
                }
                return n
            }

            function tr(e) {
                var t = e.url_list;
                return Array.isArray(t) && 0 !== t.length ? $n(t[0]) : ""
            }

            function nr(e) {
                return {
                    uid: e.uid,
                    secUid: e.sec_uid,
                    nickname: e.nickname,
                    avatarUri: tr(e.avatar_thumb),
                    followerCount: e.follower_count,
                    totalFavorited: e.total_favorited,
                    followStatus: e.follow_status,
                    followerStatus: e.follower_status,
                    enterpriseVerifyReason: e.enterprise_verify_reason,
                    customVerify: e.custom_verify
                }
            }

            function rr(e) {
                return e && Array.isArray(e) ? e.map((function (e) {
                    var t = e.start, n = e.end, r = e.type, a = e.hashtag_id, o = void 0 === a ? "" : a,
                        i = e.hashtag_name, c = void 0 === i ? "" : i, l = e.aweme_id, u = void 0 === l ? "" : l,
                        s = e.user_id, f = void 0 === s ? "" : s, d = e.is_commerce;
                    return {
                        start: t,
                        end: n,
                        type: r,
                        hashtagId: o,
                        hashtagName: c,
                        awemeId: u,
                        userId: f,
                        isCommerce: void 0 !== d && d
                    }
                })) : []
            }

            function ar(e) {
                var t = e || {}, n = t.width, r = t.height, a = t.ratio, o = t.duration, i = t.play_addr, c = t.cover,
                    l = t.dynamic_cover, u = t.origin_cover;
                return {
                    width: n,
                    height: r,
                    ratio: a,
                    duration: o,
                    playAddr: ((null == i ? void 0 : i.url_list) || []).map((function (e) {
                        return {src: $n(e)}
                    })),
                    cover: c && tr(c),
                    dynamicCover: l && tr(l),
                    originCover: u && tr(u)
                }
            }

            function or(e) {
                var t, n, r, a, o, i, c;
                return {
                    cover: (null == e || null === (t = e.cover_url) || void 0 === t || null === (n = t.url_list) || void 0 === n ? void 0 : n[0]) || "",
                    mixId: null == e ? void 0 : e.mix_id,
                    mixName: null == e ? void 0 : e.mix_name,
                    status: (null == e || null === (r = e.status) || void 0 === r ? void 0 : r.status) || -1,
                    playVV: null == e || null === (a = e.statis) || void 0 === a ? void 0 : a.play_vv,
                    collectVV: null == e || null === (o = e.statis) || void 0 === o ? void 0 : o.collect_vv,
                    currentEpisode: null == e || null === (i = e.statis) || void 0 === i ? void 0 : i.current_episode,
                    totalEpisode: null == e || null === (c = e.statis) || void 0 === c ? void 0 : c.updated_to_episode
                }
            }

            function ir(e) {
                return e.map(or)
            }

            function cr(e) {
                var t, n, r, a = e.statistics || {}, o = a.comment_count, i = void 0 === o ? 0 : o, c = a.digg_count,
                    l = void 0 === c ? 0 : c, u = a.share_count, s = void 0 === u ? 0 : u, f = a.play_count,
                    d = void 0 === f ? 0 : f, m = e.status || {}, p = m.allow_share, v = void 0 === p || p,
                    g = m.in_reviewing, h = void 0 !== g && g, b = m.is_delete, y = void 0 !== b && b,
                    w = m.is_prohibited, E = void 0 !== w && w, x = m.in_reviewing, _ = m.private_status,
                    A = void 0 === _ ? 0 : _, O = m.review_result, C = e.share_info || {}, k = C.share_url,
                    P = C.share_link_desc, j = "";
                try {
                    j = Un().stringify(null == e ? void 0 : e.impression_data)
                } catch (e) {
                }
                return {
                    awemeId: e.aweme_id,
                    awemeType: e.aweme_type,
                    groupId: e.group_id,
                    authorInfo: nr(e.author),
                    desc: e.desc,
                    createTime: e.create_time,
                    textExtra: rr(e.text_extra),
                    userDigged: 0 !== e.user_digged,
                    video: ar(e.video),
                    mixInfo: or(e.mix_info),
                    isPrivate: Boolean(e.label_private),
                    isFriendLimit: Boolean(e.label_friend),
                    download: {
                        prevent: e.prevent_download,
                        url: null == e || null === (t = e.video) || void 0 === t || null === (n = t.download_addr) || void 0 === n || null === (r = n.url_list) || void 0 === r ? void 0 : r[0]
                    },
                    impressionData: j,
                    tag: {
                        isTop: Boolean(null == e ? void 0 : e.is_top),
                        relationLabels: Boolean(null == e ? void 0 : e.relation_labels),
                        isStory: Boolean(null == e ? void 0 : e.is_story),
                        hotList: null == e ? void 0 : e.hot_list,
                        reviewStatus: null == O ? void 0 : O.review_status,
                        inReviewing: x,
                        labelFriend: null == e ? void 0 : e.label_friend
                    },
                    stats: {commentCount: i, diggCount: l, shareCount: s, playCount: d},
                    shareInfo: {shareUrl: k, shareLinkDesc: P},
                    status: {
                        allowShare: v,
                        isReviewing: h,
                        isDelete: y,
                        isProhibited: E,
                        privateStatus: A,
                        reviewStatus: null == O ? void 0 : O.review_status
                    }
                }
            }

            function lr(e) {
                return (e || []).filter((function (e) {
                    return !function (e) {
                        return "deleted" === e.kind
                    }(e)
                })).map((function (e) {
                    return cr(e)
                }))
            }

            function ur(e) {
                var t = e.log_pb, n = e.qrcode_url;
                return {logPb: t && JSON.stringify(t), qrcodeUrl: n && tr(n)}
            }

            function sr(e) {
                var t, n = (e || {}).short_url_list;
                return n && (null === (t = n[0]) || void 0 === t ? void 0 : t.short_url)
            }

            function fr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function dr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? fr(Object(n), !0).forEach((function (t) {
                        mr(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fr(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function mr(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function pr(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function vr(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            pr(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            pr(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var gr = vt;

            function hr(e) {
                var t, n, r, a, o, i, c;
                return {
                    diggCount: e.digg_count,
                    cid: e.cid,
                    text: e.text,
                    textExtra: rr(e.text_extra),
                    stickyInfo: {
                        url: null == e || null === (t = e.sticker) || void 0 === t || null === (n = t.static_url) || void 0 === n || null === (r = n.url_list) || void 0 === r ? void 0 : r[0],
                        height: null == e || null === (a = e.sticker) || void 0 === a || null === (o = a.static_url) || void 0 === o ? void 0 : o.height,
                        width: null == e || null === (i = e.sticker) || void 0 === i || null === (c = i.static_url) || void 0 === c ? void 0 : c.width
                    },
                    user: nr(e.user),
                    labelText: e.label_text,
                    labelType: e.label_type,
                    isTop: e.stick_position,
                    labelList: e.label_list || [],
                    createTime: e.create_time,
                    forwardId: e.forward_id,
                    replyTotal: e.reply_comment_total,
                    replyToUserId: e.reply_to_reply_id,
                    replyToUserName: e.reply_to_username,
                    replySecUid: e.reply_to_user_sec_id,
                    userDigged: e.user_digged,
                    replyComment: (e.reply_comment || []).map((function (e) {
                        return hr(e)
                    }))
                }
            }

            function br(e) {
                var t = e.comments, n = void 0 === t ? [] : t, r = e.status_code, a = e.has_more,
                    o = void 0 === a ? 0 : a, i = e.total;
                return {
                    statusCode: r,
                    hasMore: 0 !== o,
                    hotsoonHasMore: e.hotsoon_has_more,
                    hotsoonText: e.hotsoon_text,
                    total: i,
                    logPb: e.log_pb,
                    cursor: e.cursor,
                    comments: (n || []).map((function (e) {
                        return hr(e)
                    }))
                }
            }

            function yr(e) {
                return wr.apply(this, arguments)
            }

            function wr() {
                return (wr = vr(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.awemeId, a = t.cursor, o = t.count, i = l.length > 1 && void 0 !== l[1] ? l[1] : null, e.next = 4, Xn("/aweme/v1/web/comment/list/", dr(dr({}, gr), {}, (mr(n = {}, "aweme_id", r), mr(n, "cursor", a), mr(n, "count", o), n)), i);
                            case 4:
                                return c = e.sent, e.abrupt("return", er(c, br));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Er() {
                return (Er = vr(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.awemeId, a = t.commentId, o = t.cursor, i = t.count, c = u.length > 1 && void 0 !== u[1] ? u[1] : null, e.next = 4, Xn("/aweme/v1/web/comment/list/reply/", dr(dr({}, gr), {}, (mr(n = {}, "item_id", r), mr(n, "comment_id", a), mr(n, "cursor", o), mr(n, "count", i), n)), c);
                            case 4:
                                return l = e.sent, e.abrupt("return", er(l, br));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function xr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? xr(Object(n), !0).forEach((function (t) {
                        Ar(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xr(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Ar(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Or(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Cr(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Or(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Or(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var kr = vt;

            function Pr(e, t) {
                return e || (t ? 0 : st.ERROR_404)
            }

            function jr(e) {
                var t = e.aweme_detail, n = e.status_code, r = e.log_pb;
                return {statusCode: Pr(n, t), detail: t && cr(t), logPb: r && JSON.stringify(r)}
            }

            function Sr(e) {
                return Ir.apply(this, arguments)
            }

            function Ir() {
                return (Ir = Cr(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.awemeId, r = void 0 === n ? "" : n, a = c.length > 1 && void 0 !== c[1] ? c[1] : null, e.next = 4, Xn("/aweme/v1/web/aweme/detail/", _r(_r({}, kr), {}, Ar({}, "aweme_id", r)), a);
                            case 4:
                                if (o = e.sent, (i = er(o, jr)).statusCode) try {
                                    In({
                                        slardar: Sn.o,
                                        level: "error",
                                        value: "Erro: ".concat(i.statusCode, ", Result: ").concat(JSON.stringify(o), ", awemeId: ").concat(r),
                                        tags: {path: "/aweme/v1/web/aweme/detail/"}
                                    })
                                } catch (e) {
                                }
                                return e.abrupt("return", i);
                            case 8:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Nr() {
                return Rr.apply(this, arguments)
            }

            function Rr() {
                return (Rr = Cr(regeneratorRuntime.mark((function e() {
                    var t, n, r = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (t = r.length > 0 && void 0 !== r[0] ? r[0] : "") {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return e.next = 5, Zn("/aweme/v1/web/fancy/qrcode/info/", "schema_type=1&object_id=".concat(t), {params: _r({app_name: "aweme"}, kr)});
                            case 5:
                                return n = e.sent, e.abrupt("return", er(n, ur));
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Tr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Mr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Tr(Object(n), !0).forEach((function (t) {
                        Lr(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tr(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Lr(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Br(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Dr(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Br(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Br(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var Fr = c.COMMON_SEARCH_PARAMS, zr = c.CHANNEL_PC_WEB;

            function Ur(e) {
                var t = e.aweme_list, n = e.has_more, r = e.status_code, a = e.cursor, o = e.log_pb;
                return {logPb: o && JSON.stringify(o), statusCode: r || 0, hasMore: n, cursor: a, data: lr(t) || []}
            }

            function Hr(e) {
                var t = e.mix_infos, n = e.has_more, r = e.status_code, a = e.cursor, o = e.total, i = e.log_pb;
                return {
                    statusCode: r,
                    hasMore: n,
                    cursor: a,
                    total: o,
                    logPb: i && JSON.stringify(i),
                    data: ir(t || [])
                }
            }

            function Wr(e) {
                return Qr.apply(this, arguments)
            }

            function Qr() {
                return (Qr = Dr(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.mixId, a = t.cursor, o = t.count, i = void 0 === o ? 12 : o, c = u.length > 1 && void 0 !== u[1] ? u[1] : null, e.next = 4, Xn("/aweme/v1/web/mix/aweme/", Mr(Mr({}, Fr), {}, (Lr(n = {}, "mix_id", r), Lr(n, "cursor", a), Lr(n, "count", i), n)), c);
                            case 4:
                                return l = e.sent, e.abrupt("return", er(l, Ur));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Vr(e) {
                return qr.apply(this, arguments)
            }

            function qr() {
                return (qr = Dr(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u, s = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.uid, a = t.cursor, o = void 0 === a ? 0 : a, i = t.count, c = void 0 === i ? 12 : i, l = s.length > 1 && void 0 !== s[1] ? s[1] : null, e.next = 4, Xn("/aweme/v1/web/mix/list/", Mr(Mr({}, Fr), {}, (Lr(n = {}, "sec_user_id", r), Lr(n, "req_from", zr), Lr(n, "cursor", o), Lr(n, "count", c), n)), l);
                            case 4:
                                return u = e.sent, e.abrupt("return", er(u, Hr));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Kr(e) {
                return Xr.apply(this, arguments)
            }

            function Xr() {
                return (Xr = Dr(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u, s, f, d, m, p = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.mixId, r = t.totalEpisode, a = t.currentEpisode, o = t.count, i = p.length > 1 && void 0 !== p[1] ? p[1] : null, c = Math.max(Math.min(a - 1, r - o), 0), e.next = 5, Wr({
                                    mixId: n,
                                    cursor: c,
                                    count: o
                                }, i);
                            case 5:
                                return l = e.sent, u = l.statusCode, s = l.data, f = l.hasMore, d = l.cursor, m = l.logPb, e.abrupt("return", {
                                    mixId: n,
                                    statusCode: u,
                                    data: s,
                                    currentEpisode: a,
                                    hasMore: f,
                                    cursor: d,
                                    logPb: m
                                });
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Yr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Zr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Yr(Object(n), !0).forEach((function (t) {
                        Jr(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yr(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Jr(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Gr(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function $r(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Gr(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Gr(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var ea = c.COMMON_SEARCH_PARAMS, ta = c.DISABLE_SECRET_VIDEO_PARAMS;

            function na(e) {
                var t = e.aweme_list, n = e.status_code, r = e.has_more, a = (e.cursor, e.max_cursor);
                return {statusCode: n, hasMore: r, cursor: a, maxCursor: a, logPb: e.log_pb, data: lr(t || [])}
            }

            function ra(e) {
                return aa.apply(this, arguments)
            }

            function aa() {
                return (aa = $r(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u, s, f = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.userId, a = void 0 === r ? "" : r, o = t.maxCursor, i = void 0 === o ? 0 : o, c = t.count, l = void 0 === c ? 10 : c, u = f.length > 1 && void 0 !== f[1] ? f[1] : null, e.next = 4, Xn("/aweme/v1/web/aweme/post/", Zr(Zr({}, ea), {}, (Jr(n = {}, "sec_user_id", a), Jr(n, "max_cursor", i), Jr(n, "count", l), n), ta), u);
                            case 4:
                                return s = e.sent, e.abrupt("return", er(s, na));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function oa(e) {
                return ia.apply(this, arguments)
            }

            function ia() {
                return (ia = $r(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u, s, f = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.userId, a = void 0 === r ? "" : r, o = t.maxCursor, i = void 0 === o ? 0 : o, c = t.count, l = void 0 === c ? 10 : c, u = f.length > 1 && void 0 !== f[1] ? f[1] : null, e.next = 4, Xn("/aweme/v1/web/aweme/favorite/", Zr(Zr({}, ea), {}, (Jr(n = {}, "sec_user_id", a), Jr(n, "max_cursor", i), Jr(n, "min_cursor", 0), Jr(n, "count", l), n), ta), u);
                            case 4:
                                return s = e.sent, e.abrupt("return", er(s, na));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ca() {
                return la.apply(this, arguments)
            }

            function la() {
                return (la = $r(regeneratorRuntime.mark((function e() {
                    var t, n = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] ? n[0] : null, e.next = 3, dn(t, {
                                    psm: Dn,
                                    cluster: Fn
                                });
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ua(e) {
                return sa.apply(this, arguments)
            }

            function sa() {
                return (sa = $r(regeneratorRuntime.mark((function e(t) {
                    var n, r = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = r.length > 1 && void 0 !== r[1] ? r[1] : null, e.next = 3, pn(t, n, {
                                    psm: Dn,
                                    cluster: Fn
                                });
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function fa(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function da(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? fa(Object(n), !0).forEach((function (t) {
                        ma(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fa(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ma(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function pa(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function va(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            pa(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            pa(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var ga = vt;

            function ha(e) {
                var t = e.aweme_list, n = void 0 === t ? [] : t, r = e.status_code, a = e.log_pb;
                return {statusCode: r, awemeList: lr(n || []), logPb: a && JSON.stringify(a)}
            }

            function ba(e) {
                return ya.apply(this, arguments)
            }

            function ya() {
                return (ya = va(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u, s = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.hotWord, r = void 0 === n ? "" : n, a = t.offest, o = void 0 === a ? 0 : a, i = t.count, c = void 0 === i ? 1 : i, l = s.length > 1 && void 0 !== s[1] ? s[1] : null, e.next = 4, Xn("/aweme/v1/web/hot/search/video/list/", da(da({}, ga), {}, {
                                    hotword: r,
                                    offest: o,
                                    count: c
                                }), l);
                            case 4:
                                return u = e.sent, e.abrupt("return", er(u, ha));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function wa(e) {
                var t = e.data, n = e.status_code, r = e.log_pb, a = t || {}, o = a.word_list, i = a.trending_list;
                return {
                    logPb: r && JSON.stringify(r), statusCode: n, wordList: o.map((function (e) {
                        return {word: e.word}
                    })), trendingList: i.map((function (e) {
                        return {word: e.word}
                    }))
                }
            }

            function Ea() {
                return xa.apply(this, arguments)
            }

            function xa() {
                return (xa = va(regeneratorRuntime.mark((function e() {
                    var t, n, r = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = r.length > 0 && void 0 !== r[0] ? r[0] : null, e.next = 3, Xn("/aweme/v1/web/hot/search/list/", da(da({}, ga), {}, {
                                    detail_list: 1,
                                    source: 6
                                }), t);
                            case 3:
                                return n = e.sent, e.abrupt("return", er(n, wa));
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function _a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Aa(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _a(Object(n), !0).forEach((function (t) {
                        Oa(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _a(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Oa(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Ca(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function ka(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Ca(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Ca(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var Pa = vt;

            function ja(e) {
                var t = e.aweme_list, n = void 0 === t ? [] : t, r = e.status_code, a = e.log_pb;
                return {statusCode: r, hasMore: !0, awemeList: lr(n || []), logPb: a && JSON.stringify(a)}
            }

            function Sa() {
                return Ia.apply(this, arguments)
            }

            function Ia() {
                return (Ia = ka(regeneratorRuntime.mark((function e() {
                    var t, n, r, a, o, i, c, l, u = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = u.length > 0 && void 0 !== u[0] ? u[0] : {}, r = n.tagId, a = void 0 === r ? "" : r, o = n.count, i = void 0 === o ? 10 : o, c = u.length > 1 && void 0 !== u[1] ? u[1] : null, e.next = 4, Xn("/aweme/v1/web/channel/feed/", Aa(Aa({}, Pa), {}, (Oa(t = {}, "tag_id", a), Oa(t, "count", i), t)), c);
                            case 4:
                                return l = e.sent, e.abrupt("return", er(l, ja));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Na(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ra(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Na(Object(n), !0).forEach((function (t) {
                        Ta(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Na(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Ta(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Ma(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function La(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Ma(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Ma(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var Ba = vt;

            function Da(e) {
                var t = e.aweme_list, n = void 0 === t ? [] : t, r = e.status_code, a = e.has_more, o = e.log_pb;
                return {logPb: o && JSON.stringify(o), statusCode: r, hasMore: a, awemeList: lr(n || [])}
            }

            function Fa(e) {
                return za.apply(this, arguments)
            }

            function za() {
                return (za = La(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u, s = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.awemeId, a = void 0 === r ? "" : r, o = t.count, i = void 0 === o ? 6 : o, c = t.filterGids, l = s.length > 1 && void 0 !== s[1] ? s[1] : null, e.next = 4, Xn("/aweme/v1/web/aweme/related/", Ra(Ra({}, Ba), {}, (Ta(n = {}, "aweme_id", a), Ta(n, "count", i), Ta(n, "filterGids", c), n)), l);
                            case 4:
                                return u = e.sent, e.abrupt("return", er(u, Da));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            n(17805), n(59335), n(67725);

            function Ua(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ha(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ha(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ha(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Wa() {
                var e = Ua((0, p.useState)(""), 2), t = e[0], n = e[1], r = (0, p.useRef)(0);
                return {
                    type: t, changeType: function (e) {
                        e ? function (e) {
                            clearTimeout(r.current), n(e)
                        }(e) : r.current = window.setTimeout((function () {
                            n("")
                        }), 200)
                    }
                }
            }

            var Qa, Va = {
                avatar: "f38341477df2bf1cfbbd30ad10a017ce-scss",
                container: "_97b7ccf9a527539c7f3bd6a17e08b3c4-scss",
                more: "_1b60cdbe5dd6df538bbab9cbb3422bd8-scss",
                publishCt: "_80c75a643f76f056a46d3eea49612d35-scss",
                publishSub: "a661488c36508b69a154a771490ccf33-scss",
                menu: "_4edb6f2720ac8ee2566465efd761f58e-scss",
                active: "e154a525613f961881a5573c1c5c9473-scss",
                loginBtn: "_1a2e793075e137c9a7d96039902bd664-scss",
                loginSub: "c2d67eedd12bf6a07fcdebe245cca647-scss",
                loginBtnWrapper: "d08c55a682bd1a1225337304fd86ac75-scss",
                aboutHome: "db3b6abe40f3b8ac28e1acb7377a0ebc-scss",
                menuSub: "_8f375bf51594adb5d29ad42747abc104-scss",
                avataUserCt: "_76e29aa3c1a5f33446f6f2eca80bfa2f-scss",
                userMenuSub: "b33e71dfcf19149b463f00996eba8b0b-scss",
                year100: "_4b0e17aa802da73886c767752d1f9693-scss",
                explictShow: "c3ea5b248a8d756e517a4ad9471da22a-scss",
                pulishBtn: "affe5080f4f3a4d3c66ab2f2d21886b9-scss"
            };

            function qa() {
                return (qa = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Ka, Xa = function (e) {
                return p.createElement("svg", qa({
                    width: 45,
                    height: 46,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Qa || (Qa = p.createElement("g", {
                    opacity: .99,
                    fill: "#000"
                }, p.createElement("path", {d: "M13 31a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 010 3h-17A1.5 1.5 0 0113 31zM13 23.5a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 010 3h-17a1.5 1.5 0 01-1.5-1.5zM13 16a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 010 3h-17A1.5 1.5 0 0113 16z"}))))
            };

            function Ya() {
                return (Ya = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Za = function (e) {
                return p.createElement("svg", Ya({
                    width: 14,
                    height: 14,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Ka || (Ka = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.5 12.5a1.5 1.5 0 003 0v-4h4a1.5 1.5 0 000-3h-4v-4a1.5 1.5 0 10-3 0v4h-4a1.5 1.5 0 100 3h4v4z",
                    fill: "#fff"
                })))
            }, Ja = {
                avatar: "_751cf1d80303de5fb1b5c1bfe1bbf0e0-scss",
                icon: "_921929f2ea51f53251e84c1cf3f87258-scss",
                image: "_6bae574eea4bc99f3da09b6be51a0a0d-scss",
                live: "_662615749ab33a06d741e8592237ea79-scss",
                extraExtraSmall: "fdb06c9b21889e1013b042468f3e3f2a-scss",
                extraSmall: "bbdd32aa0d80f26630221e86b0c2bcf0-scss",
                small: "c7c1ca45c62bdb042bf5cede09f925fc-scss",
                default: "d7a993bbcca121e9c8b5896532ed4b37-scss"
            }, Ga = n(23644);

            function $a(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return eo(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eo(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function eo(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function to(e) {
                var t = e.type, n = void 0 === t ? "default" : t, r = e.src, a = e.alt, o = void 0 === a ? "" : a,
                    i = $a((0, p.useState)(0), 2), c = i[0], l = i[1], u = function () {
                        l(1)
                    };
                return (0, p.useEffect)((function () {
                    var e = !1, t = new Image;
                    t.onload = function () {
                        e || (e = !0, u(), t = null)
                    }, t.onerror = function () {
                        e || (e = !0, l(-1), t = null)
                    };
                    var n = setTimeout((function () {
                        e = !0, u()
                    }), 3e3);
                    return t.src = r, function () {
                        t && (t.onload = null, t.onerror = null), clearTimeout(n)
                    }
                }), [r]), p.createElement("div", {className: De()(Ja.avatar, Ja[n])}, r && 1 === c && p.createElement("img", {
                    src: r,
                    alt: o,
                    className: Ja.image,
                    onError: function () {
                        l(-1)
                    },
                    onLoad: u
                }), c <= 0 && p.createElement("div", {className: Ja.icon}, p.createElement("img", {
                    src: Ga,
                    className: Ja[n],
                    alt: o
                })))
            }

            n(37407);
            var no, ro, ao = {
                button: "abace09bde29f9d2077ba2a9e9e2b67d-scss",
                small: "_3c25ad295260cb707e35da1ec8d93a51-scss",
                fixed: "_89065725befc01c0403de23447176234-scss",
                normal: "_93fbc55b0dd6667bca4858426fd34dde-scss",
                large: "_7e8551e45c800775399b78e29d3b2f6f-scss",
                primary: "_14339689bca6b9eda19c146a14df625e-scss",
                border: "_7ecaa8ba84de53f8bea1cb4996e405a7-scss",
                secondary: "_8b217f570572ea18be4a0032035309e2-scss",
                ghost: "_301167ec5784791a1c7b4110afd0b250-scss"
            };

            function oo(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function io(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oo(Object(n), !0).forEach((function (t) {
                        co(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oo(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function co(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function lo(e) {
                var t = e.size, n = void 0 === t ? "normal" : t, r = e.type, a = void 0 === r ? "primary" : r,
                    o = e.children, i = e.autoFixed, c = void 0 === i || i, l = e.className, u = e.width, s = e.style,
                    f = e.theme, d = void 0 === f ? "solid" : f, m = e.disabled, v = void 0 !== m && m, g = e.onClick,
                    h = void 0 === g ? function () {
                    } : g;
                return p.createElement("button", {
                    disabled: v,
                    onClick: h,
                    className: De()(ao.button, ao[n], ao[a], ao[d], co({}, ao.fixed, !c), l),
                    style: io({width: u && "".concat(u, "px")}, s)
                }, o)
            }

            !function (e) {
                e.small = "small", e.normal = "normal", e.large = "large"
            }(no || (no = {})), function (e) {
                e.primary = "primary", e.secondary = "secondary"
            }(ro || (ro = {}));
            var uo = new S({
                pageClick: {eventName: "page_click", params: {click_position: ""}},
                pageView: {eventName: "page_view", params: {url: "", url_path: "", enter_from: "", link_from: ""}},
                pageStayTime: {
                    eventName: "page_stay_time",
                    params: {url: "", url_path: "", enter_from: "", duration: 0, is_visible: 1, link_from: ""}
                }
            });

            function so(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function fo(e) {
                var t = e.className;
                return p.createElement("li", {className: De()(Va.publishCt, t)}, p.createElement(lo, {
                    className: Va.pulishBtn,
                    style: {marginLeft: "0", marginRight: "0", whiteSpace: "nowrap"}
                }, p.createElement("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://creator.douyin.com/creator-micro/content/upload"
                }, p.createElement(Za, null), p.createElement("span", null, "发布视频"))))
            }

            function mo() {
                var e = Wa(), t = e.type, n = e.changeType;
                return p.createElement("li", {className: Va.aboutHome}, p.createElement("a", {
                    id: "about_douyin",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://www.douyin.com/home",
                    onMouseEnter: function () {
                        n("active")
                    },
                    onMouseLeave: function () {
                        n()
                    }
                }, "关于抖音"), p.createElement("ul", {
                    className: De()(so({}, Va.active, Boolean(t))),
                    onMouseEnter: function () {
                        n("active")
                    },
                    onMouseLeave: function () {
                        n()
                    }
                }, [{
                    title: "认证与合作",
                    link: "https://www.douyin.com/certification/#certification",
                    id: "certification"
                }, {title: "相关业务", link: "https://www.douyin.com/business/#live", id: "business"}, {
                    title: "新闻动态",
                    link: "https://www.douyin.com/news/",
                    id: "news"
                }, {title: "关于我们", link: "https://www.douyin.com/aboutus/#culture", id: "aboutus"}].map((function (e) {
                    return p.createElement("li", {key: e.title}, p.createElement("a", {
                        id: e.id,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: e.link
                    }, e.title))
                }))))
            }

            function po() {
                return p.createElement("li", null, p.createElement("a", {
                    id: "open_platform",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://open.douyin.com/platform"
                }, "开放平台"))
            }

            function vo() {
                return p.createElement("li", null, p.createElement("a", {
                    id: "recharge",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://www.douyin.com/falcon/webcast_openpc/pages/douyin_recharge/index.html"
                }, "抖币充值"))
            }

            function go() {
                return p.createElement("li", null, p.createElement("a", {
                    id: "creator_micro",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://creator.douyin.com/"
                }, "创作者服务"))
            }

            function ho(e) {
                var t = e.secUid, n = e.className;
                return p.createElement("li", {className: n}, p.createElement("a", {
                    target: "_blank",
                    href: Pt(t, "enter_method=top_bar")
                }, "个人中心"))
            }

            function bo() {
                return p.createElement("li", null, p.createElement("a", {
                    onClick: function (e) {
                        e.preventDefault(), X(location.href)
                    }
                }, "退出登录"))
            }

            function yo(e) {
                var t = e.success, n = e.isLogin, r = e.children, a = e.className;
                return p.createElement(p.Fragment, null, n ? r : p.createElement("li", {className: De()(Va.loginBtnWrapper, a)}, p.createElement(lo, {
                    className: Va.loginBtn,
                    theme: "border",
                    onClick: function (e) {
                        e.preventDefault(), Oe({success: t, enterMethod: "navigation_bar"})
                    }
                }, "登录")))
            }

            function wo(e) {
                var t = e.secUid, n = e.avatarUrl, r = Wa(), a = r.type, o = r.changeType;
                return p.createElement("li", {className: Va.avataUserCt}, p.createElement("a", {
                    target: "_blank",
                    href: Pt(t, "enter_method=top_bar"),
                    className: Va.avatar,
                    onMouseEnter: function () {
                        o("active")
                    },
                    onMouseLeave: function () {
                        o()
                    }
                }, p.createElement(to, {
                    type: "extraSmall",
                    src: n
                })), p.createElement("ul", {
                    className: De()(Va.avataUserMenuSubCt, so({}, Va.active, Boolean(a))),
                    onMouseEnter: function () {
                        o("active")
                    },
                    onMouseLeave: function () {
                        o()
                    }
                }, p.createElement(ho, {secUid: t}), p.createElement(bo, null)))
            }

            function Eo(e) {
                var t, n = e.children, r = e.className, a = e.activeClassName, o = e.changeType;
                return p.createElement("ul", {
                    className: De()(Va.menu, (t = {}, so(t, Va.active, Boolean(a)), so(t, r, Boolean(r)), t)),
                    onClick: function (e) {
                        var t = e.target.id;
                        "A" === e.target.tagName && t && uo.sendLog("pageClick", {click_position: t})
                    },
                    onMouseEnter: function () {
                        "active" === a && (null == o || o("active"))
                    },
                    onMouseLeave: function () {
                        null == o || o()
                    }
                }, n)
            }

            function xo(e) {
                var t = e.success, n = e.userInfo, r = e.showYear100, a = Wa(), o = a.type, i = a.changeType,
                    c = n || {}, l = c.isLogin, u = c.info || {}, s = (u.uid, u.avatarUrl), f = u.secUid;
                return p.createElement("div", {className: De()(Va.container, so({}, Va.year100, r))}, p.createElement("div", {
                    className: Va.more,
                    onMouseEnter: function () {
                        i("active")
                    },
                    onMouseLeave: function () {
                        i()
                    }
                }, p.createElement(Xa, null)), p.createElement(Eo, {className: Va.explictShow}, p.createElement(mo, null), p.createElement(po, null), p.createElement(vo, null), p.createElement(go, null), p.createElement(fo, null), p.createElement(yo, {
                    success: t,
                    isLogin: l
                }, p.createElement(wo, {secUid: f, avatarUrl: s}))), p.createElement(Eo, {
                    activeClassName: o,
                    changeType: i,
                    className: Va.menuSub
                }, p.createElement(fo, {className: Va.publishSub}), p.createElement(yo, {
                    success: t,
                    isLogin: l,
                    className: Va.loginSub
                }, p.createElement(ho, {
                    secUid: f,
                    className: Va.userMenuSub
                })), p.createElement(mo, null), p.createElement(po, null), p.createElement(vo, null), p.createElement(go, null), l && p.createElement(bo, null)))
            }

            var _o;
            n(10960);

            function Ao() {
                return (Ao = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Oo, Co = function (e) {
                return p.createElement("svg", Ao({
                    width: 18,
                    height: 18,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), _o || (_o = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.875 1.5a6.375 6.375 0 103.642 11.608l3.063 3.063a1.125 1.125 0 001.59-1.591l-3.062-3.063A6.375 6.375 0 007.875 1.5zM3.75 7.875a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0z",
                    fill: "#4F5168"
                })))
            };

            function ko() {
                return (ko = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Po, jo, So, Io = function (e) {
                return p.createElement("svg", ko({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Oo || (Oo = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.224 16.693a.766.766 0 101.083 1.083L12 13.083l4.693 4.693a.766.766 0 101.083-1.083L13.083 12l4.693-4.693a.766.766 0 00-1.083-1.083L12 10.917 7.307 6.224a.766.766 0 00-1.083 1.083L10.917 12l-4.693 4.693z",
                    fill: "#4F5168"
                })))
            };

            function No() {
                return (No = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Ro = function (e) {
                return p.createElement("svg", No({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Po || (Po = p.createElement("rect", {
                    x: 6,
                    y: 5,
                    width: 10,
                    height: 1.5,
                    rx: .75,
                    fill: "#4F5168"
                })), jo || (jo = p.createElement("rect", {
                    x: 7.061,
                    y: 5,
                    width: 16,
                    height: 1.5,
                    rx: .75,
                    transform: "rotate(45 7.06 5)",
                    fill: "#4F5168"
                })), So || (So = p.createElement("rect", {
                    x: 7.5,
                    y: 5,
                    width: 10,
                    height: 1.5,
                    rx: .75,
                    transform: "rotate(90 7.5 5)",
                    fill: "#4F5168"
                })))
            }, To = {
                enterSearch: {eventName: "enter_search", params: {enter_from: "", enter_from_second: ""}},
                searchAnti: {
                    eventName: "search_anti_rpt",
                    params: {
                        anti_id: "",
                        anti_query_input_time: 0,
                        anti_search_press_duration: 0,
                        anti_search_viewport: ""
                    }
                },
                sugShow: {
                    eventName: "search_sug",
                    params: {impr_id: "", search_keyword: "", search_type: "", sug_keyword: "", action_type: "show"}
                },
                sugClick: {
                    eventName: "search_sug",
                    params: {impr_id: "", search_keyword: "", search_type: "", sug_keyword: "", action_type: "click"}
                },
                trendingShow: {
                    eventName: "trending_show",
                    params: {
                        log_pb: {},
                        impr_id: "",
                        search_id: "",
                        words_num: 0,
                        words_source: "sug",
                        raw_query: "",
                        rank: -1,
                        search_position: ""
                    }
                },
                trendingWordsShow: {
                    eventName: "trending_words_show",
                    params: {
                        impr_id: "",
                        search_id: "",
                        words_source: "sug",
                        words_position: 0,
                        words_content: "",
                        raw_query: "",
                        rank: -1,
                        search_position: "",
                        query_id: "",
                        group_id: ""
                    }
                },
                trendingWordsClick: {
                    eventName: "trending_words_click",
                    params: {
                        impr_id: "",
                        words_source: "sug",
                        words_position: 0,
                        words_content: "",
                        raw_query: "",
                        rank: -1,
                        search_position: "",
                        query_id: "",
                        group_id: ""
                    }
                }
            }, Mo = n(75357);

            function Lo(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Bo(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bo(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Bo(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var Do = (0, Mo.NY)((function () {
                var e = Lo((0, p.useState)(void 0), 2);
                return {router: e[0], setRouter: e[1]}
            })), Fo = (n(24199), n(97358));

            function zo(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Uo(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Uo(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Uo(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ho(e) {
                return (Ho = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            var Wo = ["normal_search", "search_history", "search_sug", "correct_word"], Qo = [{
                tab: "video",
                title: "视频",
                search_type: "aweme_video_web",
                enableCorrect: !0,
                filter: [{
                    key: "sort_type",
                    filter_type: "by_top",
                    filterItems: [{val: "0", title: "综合排序", filter_option: "top_all"}, {
                        val: "2",
                        title: "最新发布",
                        filter_option: "top_time"
                    }, {val: "1", title: "最多点赞", filter_option: "top_likes"}]
                }, {
                    key: "publish_time",
                    filter_type: "by_time",
                    filterItems: [{val: "0", title: "发布时间", filter_option: "time_all"}, {
                        val: "1",
                        title: "一天内",
                        filter_option: "within_day"
                    }, {val: "7", title: "一周内", filter_option: "within_week"}, {
                        val: "182",
                        title: "半年内",
                        filter_option: "within_half_year"
                    }]
                }]
            }, {tab: "user", title: "用户", search_type: "aweme_user_web", enableCorrect: !1, filter: []}];
            var Vo = (0, Mo.NY)((function () {
                var e = {
                    keyword: "",
                    inited: !1,
                    tabIndex: 0,
                    tab: "video",
                    tabs: [{filterIndex: [0, 0], showFilter: !0, enableCorrect: !0, correctType: "1"}, {
                        filterIndex: [],
                        showFilter: !0,
                        enableCorrect: !1,
                        correctType: "1"
                    }],
                    anti_id: "",
                    source: "normal_search",
                    changeReason: "init"
                };
                if (-1 === ["undefined" == typeof window ? "undefined" : Ho(window), "undefined" == typeof document ? "undefined" : Ho(document)].indexOf("undefined")) {
                    var t,
                        n = null === (t = window.location.pathname.match(/\/search\/([\w%]+)/)) || void 0 === t ? void 0 : t[1],
                        r = (0, _.parse)(window.location.search);
                    e.keyword = n ? function (e) {
                        try {
                            return decodeURIComponent(e)
                        } catch (t) {
                            return e
                        }
                    }(n) : "", e.inited = !0, r.aid && (e.anti_id = r.aid);
                    var a = r.source;
                    Wo.includes(a) && (e.source = a);
                    var o = r.type, i = Qo.findIndex((function (e) {
                        return e.tab === r.type
                    }));
                    -1 !== i && (e.tab = o, e.tabIndex = i), Qo[e.tabIndex].filter.forEach((function (t, n) {
                        var a = r[t.key], o = t.filterItems.findIndex((function (e) {
                            return e.val === a
                        }));
                        a && -1 !== o && (e.tabs[e.tabIndex].filterIndex[n] = o)
                    }))
                }
                var c = zo((0, Fo.ZP)(e), 2), l = c[0], u = c[1], s = (0, p.useCallback)((function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    u((function (r) {
                        r.keyword = e, r.tabs = [{
                            filterIndex: [0, 0],
                            showFilter: !0,
                            enableCorrect: !0,
                            correctType: "1"
                        }, {
                            filterIndex: [],
                            showFilter: !0,
                            enableCorrect: !1,
                            correctType: "1"
                        }], r.changeReason = "keyword", r.source = t, r.anti_id = n
                    }))
                }), []), f = (0, p.useCallback)((function () {
                    u((function (e) {
                        e.tabs = [{
                            filterIndex: [0, 0],
                            showFilter: !0,
                            enableCorrect: !0,
                            correctType: "1"
                        }, {
                            filterIndex: [],
                            showFilter: !0,
                            enableCorrect: !1,
                            correctType: "1"
                        }], e.tabs[e.tabIndex].correctType = "0", e.changeReason = "correct", e.source = "correct_word", e.anti_id = ""
                    }))
                }), []), d = (0, p.useCallback)((function (e) {
                    var t = Qo.findIndex((function (t) {
                        return t.tab === e
                    }));
                    -1 === t && (t = 0), u((function (e) {
                        e.tabIndex = t, e.tab = Qo[t].tab, e.changeReason = "tab", e.anti_id = ""
                    }))
                }), []), m = (0, p.useCallback)((function (e, t) {
                    u((function (n) {
                        n.tabs[n.tabIndex].filterIndex[e] = t, n.changeReason = "filter", n.anti_id = ""
                    }))
                }), []), v = (0, p.useCallback)((function () {
                    u((function (e) {
                        e.tabs[e.tabIndex].showFilter = !e.tabs[e.tabIndex].showFilter, e.changeReason = "toggleShowFilter"
                    }))
                }), []);
                return {
                    searchParams: l,
                    updateSearchParams: u,
                    changeKeyword: s,
                    changeCorrect: f,
                    changTab: d,
                    changeIndex: m,
                    toggleShowFilter: v
                }
            })), qo = n(18532), Ko = n.n(qo), Xo = n(934), Yo = n.n(Xo);

            function Zo(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Jo(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jo(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Jo(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var Go = ")a%06.4Sq~Xv]tDo8yFW-_gmbyaT.F,!KQhdKK}7:eW_cZk#;6lM[Q&BJ?%OVs$";

            function $o(e, t, n) {
                var r = Zo((0, p.useState)([]), 2), a = r[0], o = r[1], i = (0, p.useRef)(e);
                i.current = e;
                var c = (0, p.useCallback)((function (e) {
                    var n;
                    window.localStorage.setItem(t + i.current, (n = JSON.stringify(e), Ko().encrypt(n, Go).toString()))
                }), []), l = (0, p.useCallback)((function () {
                    var e,
                        n = (e = window.localStorage.getItem(t + i.current) || "", Ko().decrypt(e, Go).toString(Yo()));
                    try {
                        return JSON.parse(n)
                    } catch (e) {
                        return c([]), []
                    }
                }), [c]);
                return (0, p.useEffect)((function () {
                    o(l())
                }), [i.current]), {
                    history: a, clearAll: (0, p.useCallback)((function () {
                        o([]), c([])
                    }), [o]), deleteWord: (0, p.useCallback)((function (e) {
                        var t = l();
                        Array.isArray(t) && (t = t.filter((function (t) {
                            return t !== e
                        })), o(t), c(t))
                    }), []), unshiftWord: (0, p.useCallback)((function (e) {
                        var t = l();
                        Array.isArray(t) && ((t = t.filter((function (t) {
                            return t !== e
                        }))).unshift(e), t = t.slice(0, n), o(t), c(t))
                    }), [])
                }
            }

            var ei = n(55935), ti = {
                Enter: {code: "Enter", key: "Enter", keyCode: 13},
                ArrowUp: {code: "ArrowUp", key: "ArrowUp", keyCode: 38},
                ArrowDown: {code: "ArrowDown", key: "ArrowDown", keyCode: 40}
            };

            function ni(e) {
                var t = "", n = !1;
                return Object.keys(ti).forEach((function (r) {
                    !n && Object.keys(ti[r]).forEach((function (a) {
                        n || ti[r][a] !== (null == e ? void 0 : e[a]) || (t = r, n = !0)
                    }))
                })), t
            }

            var ri = n(72515);

            function ai(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function oi(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ai(Object(n), !0).forEach((function (t) {
                        ii(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ai(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ii(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function ci(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return li(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return li(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function li(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ui(e) {
                e.preventDefault()
            }

            function si(e) {
                var t = Do().router, n = (0, p.useMemo)((function () {
                        return e = To, function (n) {
                            var r, a, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            null === (r = (a = window).collectEvent) || void 0 === r || r.call(a, e[n].eventName, C(C(C({}, e[n].params), t ? t() : {}), o))
                        };
                        var e, t
                    }), []), r = Vo(), a = r.searchParams, o = r.changeKeyword, i = $o(e, "SEARCH_HISTORY_", 40),
                    c = i.history, l = i.clearAll, u = i.deleteWord, s = i.unshiftWord,
                    f = ci((0, p.useState)({sugList: [], query: ""}), 2), d = f[0], m = f[1],
                    v = ci((0, p.useState)(""), 2), g = v[0], h = v[1], b = ci((0, p.useState)(""), 2), y = b[0],
                    w = b[1], E = ci((0, p.useState)("idle"), 2), x = E[0], _ = E[1], A = ci((0, p.useState)(!1), 2),
                    O = A[0], k = A[1], P = (0, p.useRef)(), j = (0, p.useRef)(), S = (0, p.useRef)({
                        focusTime: 0,
                        pressDownTime: 0,
                        response: void 0,
                        suggestionState: x,
                        showText: y,
                        inputText: g,
                        inputFocus: O,
                        router: t,
                        tab: a.tab,
                        history: c,
                        sug: d,
                        isPinyin: !1,
                        isFirefox: !1
                    });
                S.current = oi(oi({}, S.current), {}, {
                    tab: a.tab,
                    suggestionState: x,
                    showText: y,
                    inputText: g,
                    inputFocus: O,
                    router: t,
                    history: c,
                    sug: d
                });
                var I = function (e, t) {
                        var n = ci((0, p.useState)(null), 2), r = n[0], a = n[1];
                        return (0, ri.Z)("ArrowUp", (function () {
                            t || a((function (t) {
                                return 0 === e ? null : null === t ? 0 : Math.max(0, t - 1)
                            }))
                        })), (0, ri.Z)("ArrowDown", (function () {
                            t || a((function (t) {
                                return 0 === e ? null : null === t ? 0 : Math.min(e - 1, t + 1)
                            }))
                        })), {
                            keyboardNavIndex: r, restKeyboardNavIndex: (0, p.useCallback)((function () {
                                a(null)
                            }), [])
                        }
                    }(Math.min(10, {idle: 0, history: c.length, sug: d.sugList.length}[x]), S.current.isPinyin),
                    N = I.keyboardNavIndex, R = I.restKeyboardNavIndex;
                (0, p.useEffect)((function () {
                    h(a.keyword), w(a.keyword), R()
                }), [null == t ? void 0 : t.match]), (0, p.useEffect)((function () {
                    null !== N && ("history" === S.current.suggestionState && w(S.current.history[N]), "sug" === S.current.suggestionState && w(S.current.sug.sugList[N]))
                }), [N]), (0, p.useEffect)((function () {
                    S.current.isFirefox = /firefox/i.test(navigator.userAgent)
                }), []);
                var T = (0, p.useCallback)((function (e, t, r) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (e) {
                        var i = (0, ei.Z)(), c = performance.now(),
                            l = "normal_search" === t ? a ? -2 : c - S.current.pressDownTime : -1;
                        if (n("searchAnti", {
                            anti_id: i,
                            anti_query_input_time: c - S.current.focusTime,
                            anti_search_press_duration: l,
                            anti_search_viewport: r
                        }), S.current.router && "/Search/:keyword" === S.current.router.match.path && P.current.blur(), s(e), S.current.router && "/Search/:keyword" === S.current.router.match.path) o(e, t, i); else {
                            var u = me() || "search_result",
                                f = St(encodeURIComponent(e), "source=".concat(t, "&aid=").concat(i, "&enter_from=").concat(u));
                            if (S.current.isFirefox) if (a) j.current.action = St(encodeURIComponent(e)), j.current[0].value = t, j.current[1].value = i, j.current[2].value = u; else {
                                var d = window.open("about:blank");
                                d && (d.location.href = f)
                            } else window.open(f)
                        }
                    }
                }), []), M = (0, p.useCallback)((function (e) {
                    e.preventDefault(), S.current.pressDownTime = performance.now()
                }), []), L = (0, p.useCallback)((function (e) {
                    T(S.current.showText, "normal_search", "".concat(e.pageX, ",").concat(e.pageY))
                }), []), B = (0, p.useCallback)((function (e) {
                    var t = ni(e);
                    if ("ArrowUp" !== t && "ArrowDown" !== t || e.preventDefault(), "Enter" === t && !S.current.isPinyin) {
                        var n = S.current.showText;
                        n && S.current.isFirefox || e.preventDefault(), T(n, "normal_search", "-2,-2", !0)
                    }
                }), []), D = (0, p.useCallback)((function (e) {
                    var t = e.currentTarget.dataset.text;
                    T(t, "search_history", "-1,-1")
                }), []), F = (0, p.useCallback)((function (e) {
                    var t = Number(e.currentTarget.dataset.index), r = S.current.sug.sugList[t];
                    T(r, "search_sug", "-1,-1"), n("sugClick", {
                        impr_id: S.current.response.log_pb.impr_id,
                        search_keyword: S.current.inputText,
                        search_type: S.current.tab,
                        sug_keyword: r
                    }), n("trendingWordsClick", {
                        impr_id: S.current.response.log_pb.impr_id,
                        words_position: t,
                        words_content: r,
                        raw_query: S.current.inputText,
                        rank: -1,
                        search_position: S.current.tab,
                        query_id: S.current.response.words_query_record.query_id,
                        group_id: S.current.response.sug_list[t].word_record.group_id
                    })
                }), []);
                (0, p.useEffect)((function () {
                    O && !g && Boolean(null == c ? void 0 : c.length) ? _("history") : O && Boolean(g) && Boolean(d.sugList.length) ? _("sug") : _("idle")
                }), [O, c, d, g]), (0, p.useEffect)((function () {
                    !O || null !== N || d.sugList.length && d.query === g || $t("/aweme/v1/web/search/sug/", oi(oi({}, vt), {}, {
                        keyword: g,
                        source: "aweme_video_web"
                    })).then((function (e) {
                        var t, r = S.current.tab;
                        S.current.response = e;
                        var a = e.log_pb.impr_id, o = e.extra.logId, i = e.words_query_record.query_id;
                        n("sugShow", {
                            impr_id: a,
                            search_keyword: g,
                            search_type: r,
                            sug_keyword: g
                        }), n("trendingShow", {
                            log_pb: e.log_pb,
                            impr_id: a,
                            search_id: o,
                            words_num: (null == e || null === (t = e.sug_list) || void 0 === t ? void 0 : t.length) || 0,
                            raw_query: g,
                            search_position: r
                        }), m({
                            sugList: null == e ? void 0 : e.sug_list.map((function (e, t) {
                                return n("trendingWordsShow", {
                                    impr_id: a,
                                    search_id: o,
                                    words_position: t,
                                    words_content: e.content,
                                    raw_query: g,
                                    rank: -1,
                                    search_position: r,
                                    query_id: i,
                                    group_id: e.word_record.group_id
                                }), e.content
                            })), query: g
                        })
                    })).catch((function () {
                        m({sugList: [], query: g})
                    }))
                }), [O, g, N]);
                var z = (0, p.useCallback)((function () {
                    l()
                }), []), U = (0, p.useCallback)((function (e) {
                    var t = e.target.value;
                    h(t), w(t), R()
                }), []), H = (0, p.useCallback)((function (e) {
                    e.stopPropagation();
                    var t = e.currentTarget.dataset.text;
                    u(t)
                }), []), W = (0, p.useCallback)((function (e) {
                    e.stopPropagation();
                    var t = e.currentTarget.dataset.text;
                    h(t), w(t), R()
                }), []), Q = (0, p.useCallback)((function () {
                    n("enterSearch", {
                        enter_from: pe(),
                        enter_from_second: pe()
                    }), S.current.focusTime = performance.now(), k(!0)
                }), []), V = (0, p.useCallback)((function () {
                    k(!1)
                }), []), q = (0, p.useCallback)((function () {
                    S.current.isPinyin = !0
                }), []), K = (0, p.useCallback)((function () {
                    S.current.isPinyin = !1
                }), []);
                return {
                    history: c,
                    showText: y,
                    suggestionState: x,
                    onFocus: Q,
                    inputFocus: O,
                    onBlur: V,
                    onInputChange: U,
                    onSearchClick: L,
                    onInputKeyDown: B,
                    clearHistory: z,
                    onHistoryClick: D,
                    onSugClick: F,
                    onDeleteHistoryItem: H,
                    sug: d,
                    setInputText: h,
                    onSetSug: W,
                    preventDefault: ui,
                    onMouseDown: M,
                    inputRef: P,
                    formRef: j,
                    onCompositionStart: q,
                    onCompositionEnd: K,
                    keyboardNavIndex: N
                }
            }

            var fi = "_7bced65174c7e8498243a4e5b0a769f7-scss", di = "_28bcf0c81eecec324dc834fd9da6bc14-scss",
                mi = "_995df5bec116ef593426dbf2a410fa26-scss", pi = "_913d1e3dbc906c79f2227a5d1a6e4d6c-scss",
                vi = "_04c5ea5f8b2c42eb36eb0013b564a3f1-scss", gi = "_45d9562c20039e1e0ea8c9f7c22cdd15-scss",
                hi = "_21381500f58829ddd8151fca321e57ca-scss", bi = "c54868746f3295b974da1cd21e114e36-scss",
                yi = "_327461e51981305199e773e86ac7701d-scss", wi = "_103457b7e2b6d6e789d90247444fa465-scss",
                Ei = "_1b805851682b45a8cf304f864fddf4d6-scss", xi = "dcd5e67b38dd6548e8010963e8db9397-scss";

            function _i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var Ai = function (e) {
                    var t = e.words, n = e.query, r = e.matchClass, a = (t === n ? [""] : t.split(n)).map((function (e, t) {
                        return "" === e ? p.createElement("span", {key: t, className: r}, n) : e
                    }));
                    return p.createElement("span", {className: yi}, a)
                }, Oi = function (e) {
                    var t, n, r = (0, ie.TH)().pathname, a = e.onSearchClick, o = e.onHistoryClick, i = e.onInputKeyDown,
                        c = e.showYear100,
                        l = si((null === (t = e.userInfo) || void 0 === t || null === (n = t.info) || void 0 === n ? void 0 : n.secUid) || "guest"),
                        u = l.inputRef, s = l.formRef, f = l.showText, d = l.suggestionState, m = l.keyboardNavIndex,
                        v = l.onFocus, g = l.inputFocus, h = l.onBlur, b = l.onInputChange, y = l.onMouseDown,
                        w = l.onSearchClick, E = l.onInputKeyDown, x = l.clearHistory, _ = l.onHistoryClick,
                        A = l.onSugClick, O = l.history, C = l.sug, k = l.onSetSug, P = l.onDeleteHistoryItem,
                        j = l.preventDefault, S = l.onCompositionStart, I = l.onCompositionEnd,
                        N = (0, p.useCallback)((function (e) {
                            var t = u.current.value;
                            a && a(t) && w(e)
                        }), []), R = (0, p.useCallback)((function (e) {
                            o && o(e) && _(e)
                        }), []), T = (0, p.useCallback)((function (e) {
                            var t = u.current.value;
                            i && i(e, t) && E(e)
                        }), []);
                    return p.createElement("div", {className: De()(fi, _i({}, xi, c))}, p.createElement("form", {
                        action: "",
                        target: "_blank",
                        ref: s,
                        style: {display: "flex", flex: 1}
                    }, p.createElement("input", {type: "hidden", name: "source"}), p.createElement("input", {
                        type: "hidden",
                        name: "aid"
                    }), p.createElement("input", {type: "hidden", name: "enter_from"}), p.createElement("input", {
                        ref: u,
                        value: f,
                        onFocus: v,
                        onBlur: h,
                        onChange: b,
                        onKeyDown: T,
                        onCompositionStart: S,
                        onCompositionEnd: I,
                        className: De()(di, _i({}, mi, !g && !r.match(/^\/search/))),
                        type: "text",
                        maxLength: 100,
                        placeholder: "搜索视频和用户"
                    }), p.createElement("input", {
                        type: "submit",
                        value: "Submit",
                        style: {display: "none"}
                    })), p.createElement("button", {
                        className: pi,
                        type: "button",
                        onMouseDown: y,
                        onClick: N
                    }, p.createElement(Co, null), p.createElement("span", {className: "btn-title"}, "搜索")), "history" === d && p.createElement("div", {
                        className: vi,
                        onMouseDown: j
                    }, p.createElement("div", {className: gi}, p.createElement("span", {className: "history-title"}, "历史记录"), p.createElement("span", {
                        className: "clear-btn",
                        onClick: x
                    }, "清除全部")), O && O.slice(0, 10).map((function (e, t) {
                        return p.createElement("div", {
                            "data-text": e,
                            onClick: R,
                            className: De()(hi, _i({}, bi, t === m)),
                            key: e
                        }, p.createElement("span", {className: yi}, e), p.createElement("div", {
                            className: "icon",
                            "data-text": e,
                            onClick: P
                        }, p.createElement(Io, {className: Ei})))
                    }))), "sug" === d && p.createElement("div", {
                        className: vi,
                        onMouseDown: j
                    }, C.sugList.slice(0, 10).map((function (e, t) {
                        return p.createElement("div", {
                            "data-index": t,
                            onClick: A,
                            className: De()(hi, _i({}, bi, t === m)),
                            key: e
                        }, p.createElement(Ai, {
                            words: e,
                            query: C.query,
                            matchClass: wi
                        }), p.createElement("div", {
                            className: "icon",
                            "data-text": e,
                            onClick: k
                        }, p.createElement(Ro, {className: Ei})))
                    }))))
                }, Ci = "_2a8558639e6fca67dc8406296920bd21-scss", ki = "d19baf4bcabde178eefcebd3f4df0aea-scss",
                Pi = "d1401c45c2ad52aa92a02c4cdea7edad-scss", ji = "_171c431d2f07bedd7c6f4a5735ace648-scss",
                Si = "cfd13d314f439d972881950df4619254-scss", Ii = "_1e955d9673a39310dbeb0c73efefd558-scss",
                Ni = "_06d093177aaa248532646b0658fd757d-scss", Ri = "_2837e1f9c208f00d1cd4e994df2f9a61-scss",
                Ti = "_8f813fd65520931eebf833288ca9cd52-scss", Mi = "_3829c40a079ea6e7428717d58d85acae-scss",
                Li = "_247991e0eaa62bbd2d29168a7c0af157-scss", Bi = "c9812c8e289b7ab81ff7336c28ee1d10-scss",
                Di = (n(95680), n(55141), n(92062), "c40012825d3cd728adba9163c63f2877-scss"),
                Fi = "_9b00d27e3aa8c39515a9de377b5e2c05-scss";

            function zi(e) {
                return (zi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Ui(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Hi(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ui(Object(n), !0).forEach((function (t) {
                        Zi(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ui(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Wi(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Qi(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Vi(e, t) {
                return (Vi = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function qi(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, r = Yi(e);
                    if (t) {
                        var a = Yi(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Ki(this, n)
                }
            }

            function Ki(e, t) {
                return !t || "object" !== zi(t) && "function" != typeof t ? Xi(e) : t
            }

            function Xi(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Yi(e) {
                return (Yi = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function Zi(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var Ji = null, Gi = null, $i = null, ec = null, tc = {text: "", duration: 3e3}, nc = function (e) {
                !function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Vi(e, t)
                }(o, e);
                var t, n, r, a = qi(o);

                function o() {
                    var e;
                    Wi(this, o);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return Zi(Xi(e = a.call.apply(a, [this].concat(n))), "state", {showToast: !1, text: ""}), e
                }

                return t = o, r = [{
                    key: "create", value: function (e, t) {
                        if (Ji) return e && e(Ji);
                        $i = t || document.body, document.querySelector("#toastContainer") || ((ec = document.createElement("div")).className = Di, ec.id = "toastContainer"), $i.appendChild(ec), ce.render(p.createElement(o, {
                            ref: function (t) {
                                Ji = t, e && e(Ji)
                            }
                        }), ec)
                    }
                }, {
                    key: "info", value: function (e, t) {
                        var n = Hi({}, tc);
                        "string" == typeof e ? n.text = e : "object" === zi(e) && null !== e && (n = Hi(Hi({}, tc), e)), this.textList.push(n), this.create((function (e) {
                            Gi || e.handleShowToast()
                        }), t)
                    }
                }], (n = [{
                    key: "handleShowToast", value: function () {
                        var e = this;
                        Gi && (clearTimeout(Gi), Gi = null);
                        var t = o.textList.shift(), n = t.text, r = t.duration;
                        this.setState({showToast: !0, text: n}), Gi = setTimeout((function () {
                            o.textList.length ? e.handleCloseToast((function () {
                                setTimeout(e.handleShowToast.bind(e), 50)
                            })) : (e.handleCloseToast(), e.destroy()), Gi = null
                        }), r)
                    }
                }, {
                    key: "handleCloseToast", value: function (e) {
                        this.setState({showToast: !1}, (function () {
                            return e && e()
                        }))
                    }
                }, {
                    key: "destroy", value: function () {
                        $i.removeChild(ec), Ji = null
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.state, t = e.showToast, n = e.text;
                        return p.createElement(p.Fragment, null, t && p.createElement("div", {className: Fi}, n))
                    }
                }]) && Qi(t.prototype, n), r && Qi(t, r), o
            }(p.Component);
            Zi(nc, "textList", []);
            var rc = n(49770), ac = n.n(rc);

            function oc(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ic(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ic(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ic(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function cc() {
                var e = oc((0, p.useState)([]), 2), t = e[0], n = e[1], r = function (e) {
                    var t,
                        n = window.localStorage.getItem(null == s || null === (t = o) || void 0 === t ? void 0 : t.LOG_TRACE) || "";
                    if (n) {
                        var r = JSON.parse(n), a = r.sort((function (e, t) {
                            return new Date(t.time).getTime() - new Date(e.time).getTime()
                        })), i = JSON.stringify(a);
                        e && e({logTraceStr: i, logTraceJSON: a})
                    }
                };
                return (0, p.useEffect)((function () {
                    try {
                        r((function (e) {
                            var t = e.logTraceJSON;
                            n(t)
                        }))
                    } catch (e) {
                    }
                }), []), [t, function () {
                    try {
                        r((function (e) {
                            var t = e.logTraceStr;
                            ac()(t), nc.info("已复制调试信息到剪切板")
                        }))
                    } catch (e) {
                        nc.info("调试信息复制失败，请重试")
                    }
                }]
            }

            n(76216);

            function lc(e) {
                return (lc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            var uc = [], sc = Date.now();

            function fc(e) {
                var t;
                "function" == typeof e ? (t = uc.findIndex((function (t) {
                    return t === e
                })), uc = uc.splice(t, 1)) : "string" == typeof e && (t = uc.findIndex((function (t) {
                    return t.key === e
                }))), uc.splice(t, 1)
            }

            function dc(e) {
                uc.push(e)
            }

            function mc(e) {
                var t = Math.floor(Date.now() - sc), n = void 0 !== e ? e : "hidden" !== document.visibilityState;
                uc.forEach((function (e) {
                    "function" == typeof e ? e && e(n, t) : "object" === lc(e) && e.event && e.event && e.event(n, t)
                })), sc = Date.now()
            }

            function pc(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return vc(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vc(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function vc(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function gc(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function hc(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return bc(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bc(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function bc(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function yc(e) {
                var t, n, r, a, o = e.showYear100, i = e.userInfo, c = e.onChangeLoginStatus, l = hc(cc(), 2),
                    u = (l[0], l[1]), s = (0, p.useRef)(i), f = (0, ie.k6)(), d = Ut,
                    m = (0, p.useCallback)((function () {
                        for (var e, t, n = (i || {}).info, r = null === (e = w()) || void 0 === e ? void 0 : e.user_unique_id, a = (0, _.parse)(window.location.search).previous_page || "", o = 0, c = Object.keys(d); o < c.length; o++) {
                            var l, u, s = c[o];
                            null !== (l = location) && void 0 !== l && null !== (u = l.pathname) && void 0 !== u && u.match(new RegExp(s)) && de(t = d[s])
                        }
                        t && (null != n && n.uid || r) && uo.sendLog("pageView", {
                            enter_from: t,
                            url: location.href,
                            url_path: location.pathname,
                            link_from: {app_code_link: "app_code", web_code_link: "web_code"}[a] || ""
                        })
                    }), [i]);
                (0, p.useEffect)((function () {
                    j(null == i ? void 0 : i.uid, null == i ? void 0 : i.isLogin), m(), f.listen((function () {
                        m()
                    }))
                }), []), (0, p.useEffect)((function () {
                    var e, t = null === (e = s.current) || void 0 === e ? void 0 : e.info,
                        n = null == i ? void 0 : i.info;
                    (null == t ? void 0 : t.uid) !== (null == n ? void 0 : n.uid) && m()
                }), [i]), n = pc((0, p.useState)(!0), 2), r = n[0], a = n[1], (0, p.useEffect)((function () {
                    function e() {
                        var e = "hidden" !== document.visibilityState;
                        mc(!e), t && t(!e), a(e)
                    }

                    return document.addEventListener("visibilitychange", e), function () {
                        document.removeEventListener("visibilitychange", e)
                    }
                }), [r]), (0, p.useEffect)((function () {
                    dc((function (e, t) {
                        var n = (0, _.parse)(window.location.search).previous_page || "";
                        t > 0 && me() && uo.sendLog("pageStayTime", {
                            enter_from: me(),
                            url: location.href,
                            url_path: location.pathname,
                            duration: t,
                            is_visible: Number(e),
                            link_from: {app_code_link: "app_code", web_code_link: "web_code"}[n] || ""
                        })
                    }))
                }), []);
                var v = (0, p.useCallback)((function (e) {
                    if ("87A38998227CBBC23DCAD51CD7F76AB2" !== e) return !0;
                    u()
                }), []);
                return p.createElement("div", {className: De()(Ci, gc({}, Mi, o))}, p.createElement("div", {className: ki}, p.createElement("header", {className: Pi}, p.createElement("div", {className: ji}, p.createElement("a", {
                    href: Nt(),
                    className: Si
                })), p.createElement("div", {className: Ii}, p.createElement("div", {className: Li}, p.createElement("div", {className: Ni}), p.createElement("div", {className: Bi}, p.createElement(Oi, {
                    showYear100: o,
                    userInfo: i,
                    onSearchClick: function (e) {
                        return v(e)
                    },
                    onHistoryClick: function (e) {
                        var t = e.currentTarget.dataset.text;
                        return v(t)
                    },
                    onInputKeyDown: function (e, t) {
                        if ("Enter" === ni(e)) return v(t)
                    }
                })))), p.createElement("div", {className: Ri}, p.createElement("div", {className: Ti}, p.createElement(xo, {
                    showYear100: o,
                    success: c,
                    userInfo: i
                }))))))
            }

            function wc(e) {
                var t = e.path, n = xn, r = (0, p.useContext)(n) || {}, a = r.userInfo, o = r.dispatch;
                return p.createElement(yc, {
                    showYear100: /(^\/channel\/.*|^\/$)/.test(t),
                    userInfo: a,
                    onChangeLoginStatus: function () {
                        o({type: "updateUserInfo"})
                    }
                })
            }

            function Ec(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function xc(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Ec(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Ec(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function _c(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ac(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ac(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ac(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Oc(e) {
                var t, n = e.children, r = e.user, a = e.odin, o = xn, i = _c(jn(f, r), 2), c = i[0], l = i[1],
                    u = (0, ie.k6)(),
                    s = _c((0, p.useState)(null == u || null === (t = u.location) || void 0 === t ? void 0 : t.pathname), 2),
                    d = s[0], m = s[1];
                return function (e) {
                    if (!I()) {
                        var t = function () {
                            return (new Date).toDateString()
                        };
                        e ? clearTimeout(_e) : window.localStorage.getItem(Ce) === t() || _e || (_e = setTimeout((function () {
                            var e = t();
                            window.localStorage.getItem(Ce) !== e && Oe({
                                success: function () {
                                    window.location.reload()
                                }, enterMethod: "auto"
                            }), window.localStorage.setItem(Ce, e)
                        }), 3e5))
                    }
                }(c.isLogin), a && E(a), (0, p.useEffect)((function () {
                    c.statusCode === st.ERROR_USER_FORBIDEN && X("")
                }), [c]), (0, p.useEffect)((function () {
                    l({type: "updateUserInfo"})
                }), []), (0, p.useEffect)((function () {
                    u.listen((function () {
                        var e;
                        m(null == u || null === (e = u.location) || void 0 === e ? void 0 : e.pathname)
                    }))
                }), []), (0, p.useEffect)((function () {
                    function e() {
                        return (e = xc(regeneratorRuntime.mark((function e() {
                            var t, n, r, a;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = {
                                            appKey: M,
                                            channel: "cn"
                                        }, null != c && c.isLogin && null != c && c.info && (n = c.info, r = n.uid, a = n.nickname, t.userInfo = {
                                            user_id: r,
                                            user_name: a
                                        }), e.next = 4, at(t);
                                    case 4:
                                        e.sent.start();
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    try {
                        !function () {
                            e.apply(this, arguments)
                        }()
                    } catch (e) {
                    }
                }), []), p.createElement(o.Provider, {
                    value: {
                        userInfo: c,
                        dispatch: l
                    }
                }, p.createElement("div", {
                    style: {
                        height: "100%",
                        display: "flex",
                        flexDirection: "column"
                    }
                }, p.createElement(wc, {path: d}), p.createElement("div", {style: {flex: 1}}, n), p.createElement(Le, null), p.createElement(et, null)))
            }

            Oc.getInitialProps = function () {
                var e = xc(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.ctx, e.next = 3, ca(n);
                            case 3:
                                if (r = e.sent, a = r.statusCode, o = r.user, n = n || {}, 0 !== a || !o) {
                                    e.next = 10;
                                    break
                                }
                                return n.user = {isLogin: !0, info: o, statusCode: a}, e.abrupt("return", {
                                    odin: n.odin,
                                    user: n.user
                                });
                            case 10:
                                return e.abrupt("return", {odin: n.odin, user: {isLogin: !1, statusCode: a || -1}});
                            case 11:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }();
            var Cc, kc = Oc, Pc = "eec047cb017e885666fc15bdebd6c52f-scss",
                jc = "_4390989690f1550046cdd1533f356870-scss", Sc = "_5930dce47d9957a02efeda459eb53139-scss",
                Ic = "_43fdad32e86ba1fd1b2215db8ba405e8-scss", Nc = "_10b2024926f79af13f812ed212e19ef8-scss",
                Rc = n(41219), Tc = n(20643), Mc = n(53715), Lc = n(98751), Bc = n(39627), Dc = n(35663), Fc = n(12412);
            !function (e) {
                e.unfollow = "unfollow", e.emptyList = "emptyList", e.emptySearch = "emptySearch", e.noLogin = "noLogin", e.notFound = "notFound", e.noNetwork = "noNetwork", e.serverError = "serverError"
            }(Cc || (Cc = {}));
            var zc = {
                unfollow: p.createElement("img", {src: Rc, style: {width: 240, height: 160}}),
                emptyList: p.createElement("img", {src: Mc, style: {width: 240, height: 160}}),
                emptySearch: p.createElement("img", {src: Lc, style: {width: 236, height: 158}}),
                noLogin: p.createElement("img", {src: Bc, style: {width: 240, height: 160}}),
                notFound: p.createElement("img", {src: Tc, style: {width: 240, height: 160}}),
                noNetwork: p.createElement("img", {src: Fc, style: {width: 236, height: 157}}),
                serverError: p.createElement("img", {src: Dc, style: {width: 240, height: 160}})
            };

            function Uc(e) {
                var t = e.type, n = void 0 === t ? "notFound" : t, r = e.title, a = void 0 === r ? "" : r, o = e.desc,
                    i = void 0 === o ? "" : o, c = e.className, l = void 0 === c ? "" : c, u = e.style,
                    s = void 0 === u ? {} : u, f = e.primaryButtonTitle, d = void 0 === f ? "" : f,
                    m = e.primaryButtonAction, v = e.secondaryButtonTitle, g = void 0 === v ? "" : v,
                    h = e.secondaryButtonAction;
                return p.createElement("div", {
                    className: De()(Pc, l),
                    style: s
                }, p.createElement("div", {className: jc}, zc[n]), a && p.createElement("div", {className: Sc}, a), "string" == typeof i ? p.createElement("div", {className: Ic}, i) : i.map((function (e, t) {
                    return p.createElement("div", {key: t, className: Ic}, e)
                })), p.createElement("div", {className: Nc}, g && h && p.createElement(lo, {
                    size: "normal",
                    type: "secondary",
                    onClick: h
                }, g), d && m && p.createElement(lo, {autoFixed: !1, size: "normal", type: "primary", onClick: m}, d)))
            }

            function Hc(e) {
                var t = e.title, n = e.desc, r = e.className, a = e.style, o = e.primaryButtonTitle,
                    i = e.primaryButtonAction, c = e.secondaryButtonTitle, l = e.secondaryButtonAction;
                return p.createElement(Uc, {
                    style: a,
                    className: r,
                    type: Cc.noNetwork,
                    title: t || "网络出现问题",
                    desc: n || "请检查网络连接后重试",
                    primaryButtonTitle: o,
                    primaryButtonAction: i,
                    secondaryButtonTitle: c || "刷新",
                    secondaryButtonAction: l || function () {
                        window.location.reload()
                    }
                })
            }

            function Wc(e) {
                var t = e.title, n = e.desc, r = e.className, a = e.style, o = e.primaryButtonTitle,
                    i = e.primaryButtonAction, c = e.secondaryButtonTitle, l = e.secondaryButtonAction;
                return p.createElement(Uc, {
                    style: a,
                    className: r,
                    type: Cc.notFound,
                    title: t || "404",
                    desc: n || "页面不见了",
                    primaryButtonTitle: o,
                    primaryButtonAction: i,
                    secondaryButtonTitle: c,
                    secondaryButtonAction: l
                })
            }

            function Qc(e) {
                var t = e.title, n = e.desc, r = e.className, a = e.style, o = e.primaryButtonTitle,
                    i = e.primaryButtonAction, c = e.secondaryButtonTitle, l = e.secondaryButtonAction;
                return p.createElement(Uc, {
                    style: a,
                    className: r,
                    type: Cc.serverError,
                    title: t || "服务出现异常",
                    desc: n,
                    primaryButtonTitle: o,
                    primaryButtonAction: i,
                    secondaryButtonTitle: c,
                    secondaryButtonAction: l
                })
            }

            function Vc(e) {
                var t = e.title, n = void 0 === t ? "私密账号" : t, r = e.desc, a = e.className, o = e.style,
                    i = e.primaryButtonTitle, c = e.primaryButtonAction, l = e.secondaryButtonTitle,
                    u = e.secondaryButtonAction;
                return p.createElement(Uc, {
                    style: o,
                    className: a,
                    type: Cc.emptyList,
                    title: n,
                    desc: r || "发起关注请求，通过后即可查看该帐号内容",
                    primaryButtonTitle: i,
                    primaryButtonAction: c,
                    secondaryButtonTitle: l,
                    secondaryButtonAction: u
                })
            }

            function qc(e) {
                var t = e.title, n = e.desc, r = e.className, a = e.style, o = e.primaryButtonTitle,
                    i = e.primaryButtonAction, c = e.secondaryButtonTitle, l = e.secondaryButtonAction;
                return p.createElement(Uc, {
                    style: a,
                    className: r,
                    type: Cc.emptySearch,
                    title: t || "无搜索内容",
                    desc: n,
                    primaryButtonTitle: o,
                    primaryButtonAction: i,
                    secondaryButtonTitle: c,
                    secondaryButtonAction: l
                })
            }

            function Kc(e) {
                return p.createElement(Wc, null)
            }

            var Xc = n(93225), Yc = "bda465dab0f0daef39931412880e442c-scss",
                Zc = "a64db1a68fccb27eeeccf9471bd25a56-scss", Jc = "_7e0f509d70a47876eb8b16f305523dbd-scss",
                Gc = "a2b4d73d10bc0ea2346e78dc06e19e13-scss", $c = "_02afa7db2ec1a3809b84c3d51a11a406-scss",
                el = n(45627);

            function tl(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return nl(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nl(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function nl(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function rl(e) {
                var t = tl((0, el.Z)(), 2), n = t[0], r = t[1], a = (0, p.useRef)(!1);
                return !a.current && r && (e && e(), a.current = !0), n
            }

            n(10502);

            function al(e) {
                if (!e || isNaN(e)) return "";
                var t = Rn()(e), n = Rn()();
                return n.diff(t, "year") > 0 ? "".concat(n.diff(t, "year"), "年前") : n.diff(t, "month") > 0 ? "".concat(n.diff(t, "month"), "月前") : n.diff(t, "week") > 0 ? "".concat(n.diff(t, "week"), "周前") : n.diff(t, "day") > 0 ? "".concat(n.diff(t, "day"), "天前") : n.diff(t, "hour") > 0 ? "".concat(n.diff(t, "hour"), "小时前") : n.diff(t, "minute") > 0 ? "".concat(n.diff(t, "minute"), "分钟前") : "刚刚"
            }

            function ol(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return (Math.round(Number("".concat(e, "e").concat(t))) / Math.pow(10, t)).toFixed(t)
            }

            function il() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = 1e4, n = 1e4 * t;
                return e < t ? e.toString() : e < n - 1 ? "".concat(ol(e / t), "w") : "".concat(ol(e / n), "亿")
            }

            var cl = n(68119), ll = "//sf3-ttcdn-tos.pstatp.com/obj/ies-douyin-opencn/emoji/", ul = {
                "[微笑]": {name: "微笑", img: "".concat(ll, "weixiao-3x.png"), hide: 0},
                "[色]": {name: "色", img: "".concat(ll, "aimu-3x.png"), hide: 0},
                "[爱慕]": {name: "爱慕", img: "".concat(ll, "aimu-3x.png"), hide: 0},
                "[捂脸]": {name: "捂脸", img: "".concat(ll, "wulian-3x.png"), hide: 0},
                "[呲牙]": {name: "呲牙", img: "".concat(ll, "ziya-3x.png"), hide: 0},
                "[大笑]": {name: "大笑", img: "".concat(ll, "daxiao-3x.png"), hide: 0},
                "[发怒]": {name: "发怒", img: "".concat(ll, "fanu-3x.png"), hide: 0},
                "[灵机一动]": {name: "灵机一动", img: "".concat(ll, "lingguangyishan-3x.png"), hide: 0},
                "[灵光一闪]": {name: "灵光一闪", img: "".concat(ll, "lingguangyishan-3x.png"), hide: 0},
                "[抠鼻]": {name: "抠鼻", img: "".concat(ll, "koubi-3x.png"), hide: 0},
                "[害羞]": {name: "害羞", img: "".concat(ll, "haixiu-3x.png"), hide: 0},
                "[调皮]": {name: "调皮", img: "".concat(ll, "keai-3x.png"), hide: 0},
                "[可爱]": {name: "可爱", img: "".concat(ll, "keai-3x.png"), hide: 0},
                "[吃瓜群众]": {name: "吃瓜群众", img: "".concat(ll, "chiguaqunzhong-3x.png"), hide: 0},
                "[晕]": {name: "晕", img: "".concat(ll, "yun-3x.png"), hide: 0},
                "[闭嘴]": {name: "闭嘴", img: "".concat(ll, "bizui-3x.png"), hide: 0},
                "[笑哭]": {name: "笑哭", img: "".concat(ll, "xiaoku-3x.png"), hide: 0},
                "[难过]": {name: "难过", img: "".concat(ll, "nanguo-3x.png"), hide: 0},
                "[亲亲]": {name: "亲亲", img: "".concat(ll, "wen-3x.png"), hide: 0},
                "[来看我]": {name: "来看我", img: "".concat(ll, "laikanwo-3x.png"), hide: 0},
                "[偷笑]": {name: "偷笑", img: "".concat(ll, "touxiao-3x.png"), hide: 0},
                "[打脸]": {name: "打脸", img: "".concat(ll, "dalian-3x.png"), hide: 0},
                "[翻白眼]": {name: "翻白眼", img: "".concat(ll, "fanbaiyan-3x.png"), hide: 0},
                "[睡]": {name: "睡", img: "".concat(ll, "hanshui-3x.png"), hide: 0},
                "[鼾睡]": {name: "鼾睡", img: "".concat(ll, "hanshui-3x.png"), hide: 0},
                "[奸笑]": {name: "奸笑", img: "".concat(ll, "jianxiao-3x.png"), hide: 0},
                "[送心]": {name: "送心", img: "".concat(ll, "songxin-3x.png"), hide: 0},
                "[大哭]": {name: "大哭", img: "".concat(ll, "daku-3x.png"), hide: 0},
                "[抓狂]": {name: "抓狂", img: "".concat(ll, "zhuakuang-3x.png"), hide: 0},
                "[惊讶]": {name: "惊讶", img: "".concat(ll, "jingya-3x.png"), hide: 0},
                "[酷拽]": {name: "酷拽", img: "".concat(ll, "kuye-3x.png"), hide: 0},
                "[泣不成声]": {name: "泣不成声", img: "".concat(ll, "qibuchengsheng-3x.png"), hide: 0},
                "[大金牙]": {name: "大金牙", img: "".concat(ll, "dajinya-3x.png"), hide: 0},
                "[疑问]": {name: "疑问", img: "".concat(ll, "what-3x.png"), hide: 0},
                "[小鼓掌]": {name: "小鼓掌", img: "".concat(ll, "xiaoguzhang-3x.png"), hide: 0},
                "[吐]": {name: "吐", img: "".concat(ll, "tu-3x.png")},
                "[拥抱]": {name: "拥抱", img: "".concat(ll, "qiubaobao-3x.png"), hide: 0},
                "[惊恐]": {name: "惊恐", img: "".concat(ll, "jingkong-3x.png"), hide: 0},
                "[耶]": {name: "耶", img: "".concat(ll, "ye-3x.png"), hide: 0},
                "[醉了]": {name: "醉了", img: "".concat(ll, "zuile-3x.png"), hide: 0},
                "[看]": {name: "看", img: "".concat(ll, "kan-3x.png"), hide: 0},
                "[二哈]": {name: "二哈", img: "".concat(ll, "erha-3x.png"), hide: 0},
                "[微笑袋鼠]": {name: "微笑袋鼠", img: "".concat(ll, "weixiaodaishu-3x.png"), hide: 0},
                "[冷漠]": {name: "冷漠", img: "".concat(ll, "lengmo-3x.png"), hide: 0},
                "[暗中观察]": {name: "暗中观察", img: "".concat(ll, "anzhongguancha-3x.png"), hide: 0},
                "[凝视]": {name: "凝视", img: "".concat(ll, "ningshi-3x.png"), hide: 0},
                "[握爪]": {name: "握爪", img: "".concat(ll, "wozhua-3x.png"), hide: 0},
                "[锦鲤]": {name: "锦鲤", img: "".concat(ll, "jinli-3x.png"), hide: 0},
                "[蜡烛]": {name: "蜡烛", img: "".concat(ll, "lazhu-3x.png"), hide: 0},
                "[加一]": {name: "加一", img: "".concat(ll, "jiayi-3x.png"), hide: 0},
                "[我酸了]": {name: "我酸了", img: "".concat(ll, "wosuanle-3x.png"), hide: 0},
                "[加鸡腿]": {name: "加鸡腿", img: "".concat(ll, "jiajitui-3x.png"), hide: 0},
                "[我太南了]": {name: "我太南了", img: "".concat(ll, "wotainanle-3x.png"), hide: 0},
                "[扎心]": {name: "扎心", img: "".concat(ll, "zhaxin-3x.png"), hide: 0},
                "[给跪了]": {name: "给跪了", img: "".concat(ll, "geiguile-3x.png"), hide: 0},
                "[赞]": {name: "赞", img: "".concat(ll, "zan-3x.png"), hide: 0},
                "[鼓掌]": {name: "鼓掌", img: "".concat(ll, "guzhang-3x.png"), hide: 0},
                "[比心]": {name: "比心", img: "".concat(ll, "bixin-3x.png"), hide: 0},
                "[感谢]": {name: "感谢", img: "".concat(ll, "qidao-3x.png"), hide: 0},
                "[祈祷]": {name: "祈祷", img: "".concat(ll, "qidao-3x.png"), hide: 0},
                "[胜利]": {name: "胜利", img: "".concat(ll, "shengli-3x.png"), hide: 0},
                "[强壮]": {name: "强壮", img: "".concat(ll, "jiayou-3x.png"), hide: 0},
                "[加油]": {name: "加油", img: "".concat(ll, "jiayou-3x.png"), hide: 0},
                "[OK]": {name: "OK", img: "".concat(ll, "ok-3x.png"), hide: 0},
                "[ok]": {name: "ok", img: "".concat(ll, "ok-3x.png"), hide: 0},
                "[弱]": {name: "弱", img: "".concat(ll, "ruo-3x.png"), hide: 0},
                "[抱拳]": {name: "抱拳", img: "".concat(ll, "baoquan-3x.png"), hide: 0},
                "[勾引]": {name: "勾引", img: "".concat(ll, "gouyin-3x.png"), hide: 0},
                "[再见]": {name: "再见", img: "".concat(ll, "zaijian-3x.png"), hide: 0},
                "[握手]": {name: "握手", img: "".concat(ll, "woshou-3x.png"), hide: 0},
                "[玫瑰]": {name: "玫瑰", img: "".concat(ll, "meigui-3x.png"), hide: 0},
                "[666]": {name: "666", img: "".concat(ll, "666-3x.png"), hide: 0},
                "[爱心]": {name: "爱心", img: "".concat(ll, "xin-3x.png"), hide: 0},
                "[心]": {name: "心", img: "".concat(ll, "xin-3x.png")},
                "[胡瓜]": {name: "胡瓜", img: "".concat(ll, "hugua-3x.png"), hide: 0},
                "[嘴唇]": {name: "嘴唇", img: "".concat(ll, "kiss-3x.png"), hide: 0},
                "[kiss]": {name: "kiss", img: "".concat(ll, "kiss-3x.png"), hide: 0},
                "[给力]": {name: "给力", img: "".concat(ll, "geili-3x.png"), hide: 0},
                "[啤酒]": {name: "啤酒", img: "".concat(ll, "pijiu-3x.png"), hide: 0},
                "[派对]": {name: "派对", img: "".concat(ll, "sahua-3x.png"), hide: 0},
                "[撒花]": {name: "撒花", img: "".concat(ll, "sahua-3x.png"), hide: 0},
                "[蛋糕]": {name: "蛋糕", img: "".concat(ll, "dangao-3x.png"), hide: 0},
                "[红包]": {name: "红包", img: "".concat(ll, "hongbao-3x.png"), hide: 0},
                "[礼物]": {name: "礼物", img: "".concat(ll, "liwu-3x.png"), hide: 0},
                "[发]": {name: "发", img: "".concat(ll, "fa-3x.png"), hide: 0},
                "[咖啡]": {name: "咖啡", img: "".concat(ll, "kafei-3x.png"), hide: 0},
                "[太阳]": {name: "太阳", img: "".concat(ll, "taiyang-3x.png"), hide: 0},
                "[月亮]": {name: "月亮", img: "".concat(ll, "yueliang-3x.png"), hide: 0},
                "[心碎]": {name: "心碎", img: "".concat(ll, "shangxin-3x.png"), hide: 0},
                "[伤心]": {name: "伤心", img: "".concat(ll, "shangxin-3x.png"), hide: 0},
                "[便便]": {name: "便便", img: "".concat(ll, "shi-3x.png"), hide: 0},
                "[福]": {name: "福", img: "".concat(ll, "fu-3x.png"), hide: 0},
                "[一起加油]": {name: "一起加油", img: "".concat(ll, "yiqijiayou-3x.png"), hide: 0},
                "[戴口罩]": {name: "戴口罩", img: "".concat(ll, "daikouzhao-3x.png"), hide: 0},
                "[勤洗手]": {name: "勤洗手", img: "".concat(ll, "qinxishou-3x.png"), hide: 0},
                "[不信谣言]": {name: "不信谣言", img: "".concat(ll, "buxinyaoyan-3x.png"), hide: 0},
                "[情书]": {name: "情书", img: "".concat(ll, "qingshu-3x.png"), hide: 0},
                "[iloveyou]": {name: "iloveyou", img: "".concat(ll, "iloveyou-3x.png"), hide: 0},
                "[巧克力]": {name: "巧克力", img: "".concat(ll, "qiaokeli-3x.png"), hide: 0},
                "[戒指]": {name: "戒指", img: "".concat(ll, "jiezhi-3x.png"), hide: 0},
                "[流泪]": {name: "流泪", img: "".concat(ll, "liulei-3x.png")},
                "[愉快]": {name: "愉快", img: "".concat(ll, "xiao-3x.png")},
                "[笑]": {name: "笑", img: "".concat(ll, "xiao-3x.png"), hide: 0},
                "[发呆]": {name: "发呆", img: "".concat(ll, "liangdai-3x.png")},
                "[惊呆]": {name: "惊呆", img: "".concat(ll, "liangdai-3x.png"), hide: 0},
                "[机智]": {name: "机智", img: "".concat(ll, "jizhi-3x.png")},
                "[快哭了]": {name: "快哭了", img: "".concat(ll, "kuaikule-3x.png")},
                "[击掌]": {name: "击掌", img: "".concat(ll, "jizhang-3x.png")},
                "[黑脸]": {name: "黑脸", img: "".concat(ll, "heilian-3x.png")},
                "[飞吻]": {name: "飞吻", img: "".concat(ll, "feiwen-3x.png")},
                "[碰拳]": {name: "碰拳", img: "".concat(ll, "pengquan-3x.png")},
                "[舔屏]": {name: "舔屏", img: "".concat(ll, "tianping-3x.png")},
                "[憨笑]": {name: "憨笑", img: "".concat(ll, "hanxiao-3x.png")},
                "[我想静静]": {name: "我想静静", img: "".concat(ll, "woxiangjingjing-3x.png")},
                "[思考]": {name: "思考", img: "".concat(ll, "sikao-3x.png")},
                "[呆无辜]": {name: "呆无辜", img: "".concat(ll, "daiwugu-3x.png")},
                "[尴尬]": {name: "尴尬", img: "".concat(ll, "heixian-3x.png")},
                "[黑线]": {name: "黑线", img: "".concat(ll, "heixian-3x.png"), hide: 0},
                "[得意]": {name: "得意", img: "".concat(ll, "deyi-3x.png")},
                "[衰]": {name: "衰", img: "".concat(ll, "shuai-3x.png")},
                "[互粉]": {name: "互粉", img: "".concat(ll, "hufen-3x.png")},
                "[吐血]": {name: "吐血", img: "".concat(ll, "tuxie-3x.png")},
                "[可怜]": {name: "可怜", img: "".concat(ll, "kelian-3x.png")},
                "[不看]": {name: "不看", img: "".concat(ll, "bukan-3x.png")},
                "[摸头]": {name: "摸头", img: "".concat(ll, "motou-3x.png")},
                "[去污粉]": {name: "去污粉", img: "".concat(ll, "quwufen-3x.png")},
                "[钱]": {name: "钱", img: "".concat(ll, "qian-3x.png")},
                "[撇嘴]": {name: "撇嘴", img: "".concat(ll, "piezui-3x.png")},
                "[震惊]": {name: "震惊", img: "".concat(ll, "zhenliang-3x.png")},
                "[V5]": {name: "V5", img: "".concat(ll, "V5-3x.png")},
                "[菜刀]": {name: "菜刀", img: "".concat(ll, "dao-3x.png")},
                "[刀]": {name: "刀", img: "".concat(ll, "dao-3x.png"), hide: 0},
                "[做鬼脸]": {name: "做鬼脸", img: "".concat(ll, "zuoguilian-3x.png")},
                "[皱眉]": {name: "皱眉", img: "".concat(ll, "zhoumei-3x.png")},
                "[敲打]": {name: "敲打", img: "".concat(ll, "qiaoda-3x.png")},
                "[尬笑]": {name: "尬笑", img: "".concat(ll, "gaxiao-3x.png")},
                "[恐惧]": {name: "恐惧", img: "".concat(ll, "kongju-3x.png")},
                "[惊喜]": {name: "惊喜", img: "".concat(ll, "liangxi-3x.png")},
                "[石化]": {name: "石化", img: "".concat(ll, "shihua-3x.png")},
                "[哈欠]": {name: "哈欠", img: "".concat(ll, "haqian-3x.png")},
                "[炸弹]": {name: "炸弹", img: "".concat(ll, "zhadan-3x.png")},
                "[嘘]": {name: "嘘", img: "".concat(ll, "xu-3x.png")},
                "[吐舌]": {name: "吐舌", img: "".concat(ll, "tushe-3x.png")},
                "[委屈]": {name: "委屈", img: "".concat(ll, "weiqu-3x.png")},
                "[吐彩虹]": {name: "吐彩虹", img: "".concat(ll, "tucaihong-3x.png")},
                "[奋斗]": {name: "奋斗", img: "".concat(ll, "fendou-3x.png")},
                "[生病]": {name: "生病", img: "".concat(ll, "wumai-3x.png")},
                "[雾霾]": {name: "雾霾", img: "".concat(ll, "wumai-3x.png"), hide: 0},
                "[擦汗]": {name: "擦汗", img: "".concat(ll, "cahan-3x.png")},
                "[如花]": {name: "如花", img: "".concat(ll, "ruhua-3x.png")},
                "[鄙视]": {name: "鄙视", img: "".concat(ll, "bishi-3x.png")},
                "[强]": {name: "强", img: "".concat(ll, "qiang-3x.png")},
                "[紫薇别走]": {name: "紫薇别走", img: "".concat(ll, "ziweibiezou-3x.png")},
                "[红脸]": {name: "红脸", img: "".concat(ll, "honglian-3x.png")},
                "[困]": {name: "困", img: "".concat(ll, "kun-3x.png")},
                "[流汗]": {name: "流汗", img: "".concat(ll, "han-3x.png")},
                "[汗]": {name: "汗", img: "".concat(ll, "han-3x.png"), hide: 0},
                "[绿帽子]": {name: "绿帽子", img: "".concat(ll, "lvmaozi-3x.png")},
                "[左上]": {name: "左上", img: "".concat(ll, "zuoshang-3x.png")},
                "[熊吉]": {name: "熊吉", img: "".concat(ll, "xiongji-3x.png")},
                "[听歌]": {name: "听歌", img: "".concat(ll, "tingge-3x.png")},
                "[骷髅]": {name: "骷髅", img: "".concat(ll, "kulou-3x.png")},
                "[18禁]": {name: "18禁", img: "".concat(ll, "18jin-3x.png")},
                "[西瓜]": {name: "西瓜", img: "".concat(ll, "xigua-3x.png")},
                "[斜眼]": {name: "斜眼", img: "".concat(ll, "xieyan-3x.png")},
                "[阴险]": {name: "阴险", img: "".concat(ll, "yinxian-3x.png")},
                "[白眼]": {name: "白眼", img: "".concat(ll, "baiyan-3x.png")},
                "[凋谢]": {name: "凋谢", img: "".concat(ll, "diaoxie-3x.png")},
                "[嘿哈]": {name: "嘿哈", img: "".concat(ll, "heiha-3x.png")},
                "[坏笑]": {name: "坏笑", img: "".concat(ll, "huaixiao-3x.png")},
                "[加好友]": {name: "加好友", img: "".concat(ll, "jiahaoyou-3x.png")},
                "[囧]": {name: "囧", img: "".concat(ll, "jiong-3x.png")},
                "[泪奔]": {name: "泪奔", img: "".concat(ll, "leiben-3x.png")},
                "[不失礼貌的微笑]": {name: "不失礼貌的微笑", img: "".concat(ll, "masichundeweixiao-3x.png")},
                "[拳头]": {name: "拳头", img: "".concat(ll, "quantou-3x.png")},
                "[右边]": {name: "右边", img: "".concat(ll, "youbian-3x.png")},
                "[右哼哼]": {name: "右哼哼", img: "".concat(ll, "youhengheng-3x.png")},
                "[悠闲]": {name: "悠闲", img: "".concat(ll, "youxian-3x.png")},
                "[绝望的凝视]": {name: "绝望的凝视", img: "".concat(ll, "zhoudongyudeningshi-3x.png")},
                "[咒骂]": {name: "咒骂", img: "".concat(ll, "zhouma-3x.png")},
                "[猪头]": {name: "猪头", img: "".concat(ll, "zhutou-3x.png")},
                "[左边]": {name: "左边", img: "".concat(ll, "zuobian-3x.png")},
                "[左哼哼]": {name: "左哼哼", img: "".concat(ll, "zuohengheng-3x.png")}
            }, sl = /(\[\S+?\])/g, fl = function (e) {
                var t = e.text;
                e.imgClassname;
                if (!t) return null;
                var n = t.split(sl).map((function (e, t) {
                    var n;
                    return e ? ul[e] ? p.createElement("img", {
                        key: "emoji-text-".concat(t),
                        src: null === (n = ul[e]) || void 0 === n ? void 0 : n.img,
                        alt: e,
                        style: {margin: "0 4px", verticalAlign: "text-bottom"}
                    }) : p.createElement("span", {key: "emoji-text-".concat(t)}, e) : null
                }));
                return p.createElement("span", null, n)
            }, dl = p.memo(fl), ml = {
                actionableText: "_9b365a9d76cfb9db759d93e586f25133-scss",
                twemojiText: "_1388f91fcfb70a08f895c70111c1693b-scss",
                userText: "f54ecac7c0dde5fa16c614e11e93768c-scss",
                hashtagText: "d0dc3c2350cb9c47358a6f454d353bb7-scss",
                clarity: "ffc06e8717738ebe8deec089c26e8d8a-scss"
            };

            function pl(e) {
                return function (e) {
                    if (Array.isArray(e)) return vl(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return vl(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vl(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function vl(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var gl = p.memo((function (e) {
                var t = e.hashtagId, n = e.text, r = e.onClickHashtag, a = e.onCloseVideoPlayer,
                    o = (0, p.useCallback)((function () {
                        a && a(), r && r(t)
                    }), [t, r, a]);
                return p.createElement("span", {className: ml.hashtagText, onClick: o}, n)
            })), hl = p.memo((function (e) {
                var t = e.userId, n = e.text, r = e.onClickUser, a = e.onCloseVideoPlayer,
                    o = (0, p.useCallback)((function () {
                        a && a(), r && r(t)
                    }), [t, r, a]);
                return p.createElement("span", {className: ml.userText, onClick: o}, n)
            }));

            function bl(e) {
                var t = e.text, n = (e.stickyInfo, t.split("\n"));
                return p.createElement(p.Fragment, null, n.map((function (e, t) {
                    return p.createElement("span", {key: t}, p.createElement(dl, {text: e}), t < n.length - 1 ? p.createElement("br", null) : "")
                })))
            }

            function yl(e) {
                var t = e.text, n = void 0 === t ? "" : t, r = e.textExtra, a = void 0 === r ? null : r,
                    o = e.stickyInfo, i = void 0 === o ? null : o, c = e.onClickHashtag, l = void 0 === c ? null : c,
                    u = e.onClickUser, s = void 0 === u ? null : u, f = e.onCloseVideoPlayer,
                    d = void 0 === f ? null : f, m = e.children, v = void 0 === m ? void 0 : m, g = e.type,
                    h = void 0 === g ? "" : g;
                n = n || "";
                var b, y = [];
                if (i && i.url) {
                    n = n.replace(/\[图片表情\]$/, "");
                    var w = i.width, E = i.height;
                    if (w > 0 && E > 0) {
                        var x = w / E;
                        E = (w = Math.min(w, 120)) * x, b = p.createElement("p", null, p.createElement("img", {
                            src: i.url,
                            style: {width: w, height: E}
                        }))
                    }
                }
                if (!a || Array.isArray(a) && 0 === a.length) y.push(p.createElement(bl, {
                    text: n,
                    stickyInfo: i
                })); else {
                    var _ = 0;
                    (function (e) {
                        if (e && Array.isArray(e) && e.length > 0) {
                            var t = pl(e);
                            return t.sort((function (e, t) {
                                return e.start - t.start
                            })), t
                        }
                        return e
                    })(a).forEach((function (e, t) {
                        var r = e.type, a = e.start, o = e.end, c = e.hashtagId, u = e.userId;
                        _ < a && y.push(p.createElement(bl, {text: n.slice(_, a), stickyInfo: i}));
                        var f = n.slice(a, o);
                        0 === r || Boolean(u) ? y.push(p.createElement(hl, {
                            userId: u,
                            text: f,
                            onClickUser: s,
                            onCloseVideoPlayer: d
                        })) : 1 === r || Boolean(c) ? y.push(p.createElement(gl, {
                            hashtagId: c,
                            text: f,
                            onClickHashtag: l,
                            onCloseVideoPlayer: d
                        })) : y.push(p.createElement(bl, {text: f, stickyInfo: i})), _ = o
                    })), _ < n.length && y.push(p.createElement(bl, {text: n.slice(_, n.length), stickyInfo: i}))
                }
                return p.createElement(p.Fragment, null, p.createElement(cl.Z, {
                    noWrapper: !0,
                    options: {className: ml.twemojiText}
                }, p.createElement("span", {className: De()(ml.actionableText, ml[h])}, v || "", y.map((function (e, t) {
                    return p.createElement("span", {key: t}, e)
                })))), b)
            }

            var wl, El = p.memo(yl), xl = {
                container: "ce8a5983e72f5388729b341c265c3537-scss",
                skeleton: "be367270dc1e93c497860fc45102b6ff-scss",
                imgCt: "b1f3ae9ea43259154c0790a3379bfc56-scss",
                long: "_47485cbd13bc470eb8483acc53ef228e-scss",
                small: "_6f6c8f2daabd817e837ef7e8704778f4-scss",
                descCt: "_48cfb66a1b04cb2a1e4235afd583c75f-scss",
                title: "b1c48cedd1d809c762458b27ab1f470a-scss",
                primary: "b570c6f8c606e9e19f04773decd9199e-scss",
                diggNum: "b5d0fd3c566ef51f74a8cdb46270b366-scss"
            };

            function _l() {
                return (_l = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Al, Ol = function (e) {
                return p.createElement("svg", _l({
                    width: 16,
                    height: 16,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), wl || (wl = p.createElement("path", {
                    opacity: .9,
                    d: "M7.663 3.153c.599-.854 1.582-1.305 2.665-1.305 2.06 0 3.775 1.788 3.775 3.914 0 .06 0 .107-.002.14a.316.316 0 00.002.077c-.008.448-.085.817-.222 1.305-.078.088-.15.253-.222.435a1.936 1.936 0 00-.222.435 7.96 7.96 0 01-.136.22c-.564.884-1.346 1.768-2.125 2.547-1.144 1.151-2.304 2.108-2.81 2.526-.142.116-.232.19-.258.216-.185.185-.37.185-.556.185h-.005c-.368-.001-.553-.186-.738-.37a1.68 1.68 0 00-.1-.085 26.877 26.877 0 01-3.068-2.698c-.89-.912-1.743-1.952-2.213-2.97C1.242 7.353 1.01 6.47 1 5.979c.004-.003.003-.027.002-.074L1 5.762c0-2.127 1.713-3.914 3.775-3.914 1.08 0 2.065.451 2.888 1.305z",
                    fill: "#4F5168"
                })))
            };

            function Cl() {
                return (Cl = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var kl = function (e) {
                    return p.createElement("svg", Cl({
                        width: 105,
                        height: 120,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), Al || (Al = p.createElement("path", {
                        d: "M89.013 24.055C82.55 19.84 77.883 13.098 76.427 5.238A28.704 28.704 0 0175.939 0H55.31l-.035 82.675c-.345 9.257-7.967 16.689-17.307 16.689-2.902 0-5.636-.726-8.044-1.992-5.517-2.907-9.299-8.692-9.299-15.35 0-9.56 7.783-17.343 17.343-17.343 1.783 0 3.495.297 5.119.803V44.423a38.211 38.211 0 00-5.12-.368C17.034 44.055 0 61.088 0 82.027c0 12.848 6.42 24.216 16.213 31.088A37.749 37.749 0 0037.973 120c20.939 0 37.972-17.033 37.972-37.973V40.101a49.054 49.054 0 0028.704 9.227v-20.63a28.56 28.56 0 01-15.636-4.643z",
                        fill: "#D9DAE5",
                        fillOpacity: .7,
                        opacity: .2
                    })))
                }, Pl = "f34e96e88162611d7208f348d4f89234-scss", jl = "_8ece57cfbd4600e271975eeb4109e127-scss",
                Sl = "_1a19094785cdb4907c48fb16eae14f86-scss", Il = "_0474a1af38e207e9b0d4bf802e141d52-scss",
                Nl = "_4630bd0f78f34c3e4e2102bad6bc5a1b-scss", Rl = "bf833c012f5ddea87a9d1ea9ccd99a9e-scss",
                Tl = ["src", "className", "iconWidth", "iconHeight", "iconColor", "withBlurBg", "onHandleImgLoad", "imgClass", "isPreviewing"];

            function Ml() {
                return (Ml = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Ll(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Bl(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Dl(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dl(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Dl(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Fl(e, t) {
                if (null == e) return {};
                var n, r, a = function (e, t) {
                    if (null == e) return {};
                    var n, r, a = {}, o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function zl(e) {
                var t = e.src, n = e.className, r = e.iconWidth, a = void 0 === r ? 105 : r, o = e.iconHeight,
                    i = void 0 === o ? 120 : o, c = e.iconColor, l = void 0 === c ? "rgba(169, 170, 183, 1)" : c,
                    u = e.withBlurBg, s = void 0 !== u && u, f = e.onHandleImgLoad, d = e.imgClass, m = e.isPreviewing,
                    v = Fl(e, Tl), g = Bl((0, p.useState)(0), 2), h = g[0], b = g[1], y = (0, p.useRef)(!1),
                    w = (0, p.useCallback)((function () {
                        b(1), y.current || (f && f(), y.current = !0)
                    }), []);
                return (0, p.useEffect)((function () {
                    var e = !1, n = new Image;
                    n.onload = function () {
                        e || (e = !0, w(), n = null)
                    }, n.onerror = function () {
                        e || (e = !0)
                    }, setTimeout((function () {
                        e || (e = !0, w())
                    }), 3e3), n.src = t
                }), [t]), p.createElement("div", {className: De()(Pl, n, Ll({}, jl, 1 !== h))}, s && 1 === h && p.createElement(p.Fragment, null, p.createElement("div", {
                    className: Sl,
                    style: {backgroundImage: "url(".concat(t, ")")}
                }), p.createElement("div", {
                    className: Sl,
                    style: {backgroundImage: "url(".concat(t, ")")}
                }), p.createElement("div", {className: Il})), p.createElement("img", Ml({src: t}, v, {
                    className: De()(d, Ll({}, Rl, m)),
                    onLoad: w
                })), 1 !== h && p.createElement("div", {className: De()(Nl, Ll({}, Rl, m))}, p.createElement(Ve, {
                    width: a,
                    height: i,
                    src: kl,
                    color: l,
                    viewBox: "0 0 105 120"
                })))
            }

            function Ul(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Hl(e) {
                var t = e.imgSrc, n = e.videoUrl, r = e.title, a = e.diggNum, o = e.type,
                    i = void 0 === o ? "default" : o, c = e.onClick, l = e.onShow, u = e.rank,
                    s = rl(l && l.bind(null, u));
                return p.createElement("div", {
                    ref: s,
                    className: De()(xl.container, Ul({}, xl[i], Boolean(xl[i])))
                }, p.createElement("div", {className: xl.imgCt}, p.createElement("a", {
                    href: n,
                    onClick: c
                }, p.createElement(zl, {
                    src: t,
                    iconWidth: 52,
                    iconHeight: 60,
                    withBlurBg: !0
                }))), p.createElement("div", {className: xl.descCt}, p.createElement("a", {
                    href: n,
                    className: xl.title,
                    onClick: c
                }, p.createElement(El, {text: r})), p.createElement("span", {className: xl.diggNum}, p.createElement(Ol, null), il(a))))
            }

            function Wl() {
                return p.createElement("div", {className: De()(xl.container, xl.skeleton)}, p.createElement("div", {className: xl.imgCt}, p.createElement(kl, null)), p.createElement("div", {className: xl.descCt}, p.createElement("div", {className: xl.long}), p.createElement("div", {className: xl.long}), p.createElement("div", {className: xl.long}), p.createElement("div", {className: xl.small})))
            }

            var Ql = n(92225);

            function Vl(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function ql(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Vl(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Vl(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var Kl = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F035%2F063%2F726%2F3ea4031f045945e1843ae5156749d64c.jpg&refer=http%3A%2F%2Fyouimg1.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623919372&t=7fb737774f8d005a942438868a321451";

            function Xl() {
                return p.createElement("div", {className: Jc}, p.createElement("div", {className: Gc}, p.createElement("div", {className: $c}, p.createElement("a", null, p.createElement("img", {src: Kl}))), p.createElement("p", null, "test")))
            }

            function Yl(e) {
                return p.createElement("div", {className: Yc}, p.createElement(Ql.ql, null, p.createElement("title", null, "抖音 PC 版本 - About-", e.name), p.createElement("meta", {
                    name: "description",
                    content: "抖音 PC 版本 - About"
                })), p.createElement("h1", null, "About Page"), p.createElement(Xc.rU, {to: "/"}, "go home"), p.createElement("div", {style: {width: 300}}, p.createElement(Hl, {
                    imgSrc: Kl,
                    videoUrl: "/",
                    title: "第三集 | 今天没扎双马尾，等66岁了我扎原来家电还可以第三集 | 今天没扎双马尾，等66岁了我扎原来家电还可以",
                    diggNum: 123123
                })), p.createElement("div", {className: Zc}, p.createElement(Xl, null), p.createElement(Xl, null), p.createElement(Xl, null), p.createElement(Xl, null), p.createElement(Xl, null), p.createElement(Xl, null), p.createElement(Xl, null), p.createElement(Xl, null), p.createElement(Xl, null), p.createElement(Xl, null), p.createElement(Xl, null)))
            }

            Yl.getInitialProps = ql(regeneratorRuntime.mark((function e() {
                var t;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, new Promise((function (e) {
                                setTimeout((function () {
                                    e({name: "About 3"})
                                }), 1e3)
                            }));
                        case 2:
                            return t = e.sent, e.abrupt("return", t);
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            var Zl = Yl, Jl = {
                enterPersonalHomepage: {
                    eventName: "enter_personal_homepage",
                    params: {enter_method: "top_bar", enter_from: "main_page"}
                },
                enterPersonalDetail: {
                    eventName: "enter_personal_detail",
                    params: {to_user_id: "", is_private: 0, enter_method: "Comment", enter_from: "main_page"}
                },
                changeProfileTab: {
                    eventName: "change_profile_tab",
                    params: {enter_from: "others_homepage", to_user_id: "个人页user_id", tab_name: "post"}
                },
                follow: {eventName: "follow", params: {enter_from: "others_homepage", to_user_id: ""}},
                unfollow: {eventName: "unfollow", params: {enter_from: "others_homepage", to_user_id: ""}}
            }, Gl = n(77062);

            function $l(e) {
                var t = e.children;
                return p.createElement(Gl.q, null, p.createElement("meta", {charSet: "utf-8"}), t, p.createElement("meta", {
                    httpEquiv: "Cache-Control",
                    content: "no-transform"
                }), p.createElement("meta", {
                    httpEquiv: "Cache-Control",
                    content: "no-siteapp"
                }), p.createElement("meta", {
                    name: "applicable-device",
                    content: "pc,mobile"
                }), p.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width,initial-scale=1"
                }), p.createElement("meta", {
                    name: "baidu-site-verification",
                    content: "szjdG38sKy"
                }), p.createElement("script", null, "\n        (function(win, export_obj) {\n          win['TeaAnalyticsObject'] = export_obj;\n          if (!win[export_obj]) {\n              function _collect() {\n                  _collect.q.push(arguments);\n              }\n              _collect.q = _collect.q || [];\n              win[export_obj] = _collect;\n          }\n          win[export_obj].l = +new Date();\n      })(window, 'collectEvent');\n      "), p.createElement("script", {
                    async: !0,
                    src: "https://sf1-scmcdn-tos.pstatp.com/goofy/log-sdk/collect/collect.js"
                }), p.createElement("link", {
                    rel: "shortcut icon",
                    href: "".concat("https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_web/public", "/favicon.ico"),
                    type: "image/x-icon"
                }), p.createElement("link", {
                    href: "https://fonts.bytedance.com/dfd/api/v1/css?family=DFPKingGothicGB-Medium:500&display=swap",
                    rel: "stylesheet"
                }), p.createElement("link", {
                    href: "https://fonts.bytedance.com/dfd/api/v1/css?family=DFPKingGothicGB-Regular:500&display=swap",
                    rel: "stylesheet"
                }), p.createElement("link", {
                    rel: "dns-prefetch",
                    href: "//vcs.snssdk.com"
                }), p.createElement("link", {
                    rel: "dns-prefetch",
                    href: "//sf6-hscdn-tos.pstatp.com"
                }), p.createElement("link", {
                    rel: "dns-prefetch",
                    href: "//p29.douyinpic.com"
                }), p.createElement("link", {
                    rel: "dns-prefetch",
                    href: "//verify.snssdk.com"
                }), p.createElement("link", {
                    rel: "dns-prefetch",
                    href: "//p6.douyinpic.com"
                }), p.createElement("link", {
                    rel: "dns-prefetch",
                    href: "//p3.douyinpic.com"
                }), p.createElement("link", {
                    rel: "dns-prefetch",
                    href: "//sso.douyin.com"
                }), p.createElement("link", {
                    rel: "dns-prefetch",
                    href: "//mcs.snssdk.com"
                }), p.createElement("link", {
                    rel: "dns-prefetch",
                    href: "//p9.douyinpic.com"
                }), p.createElement("link", {
                    rel: "dns-prefetch",
                    href: "//p26.douyinpic.com"
                }), p.createElement("link", {rel: "dns-prefetch", href: "//p5-ipv6.douyinpic.com/"}))
            }

            var eu = function (e) {
                    var t = e.children;
                    return p.createElement($l, null, t)
                }, tu = {
                    tabs: "ea4481b8c9b4fe32e10ed9a86ad6521b-scss",
                    tabsGroup: "_571e4a68209044fe80272c9a93186830-scss",
                    tabItem: "fd2d4afc47eda7e637af00a0d42a721c-scss",
                    tabsContainer: "_92400026d1182d4f8f006dada62ebc1c-scss",
                    "tabsGroup-normal": "_21b256ce8db1a7153adeed4b130c6b28-scss",
                    "tabsGroup-expandable": "f054c3d4d01fa98e2e4033e7aae2509c-scss",
                    expandTab: "_95d0b76de9266daf684f3794b66696ad-scss",
                    expanded: "_602972e7848f15c5264d41fe38e6d916-scss",
                    close: "_95f1adbffa291685652630698b2db3f3-scss",
                    expandLabel: "_50a15ac813110c2329f55a001e6fc2f9-scss",
                    expandLabelText: "_78df5b4d1412e28eeef316720fdb04b3-scss",
                    icon: "_7110153298e72b15b67fb372bb7b6e66-scss"
                }, nu = "_9d7b9bd9eded9928c836ba08bfda2833-scss", ru = "_7c69ce5516c883db813a5b0152c1fede-scss",
                au = "_4586e5eb7bb56ef07005a35134458f60-scss", ou = "fb24668254727a2b8622bd8b1c9cc4f2-scss";

            function iu(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var cu, lu = function (e) {
                var t, n, r = e.label, a = e.value, o = e.onClick, i = e.active, c = e.className, l = e.renderLabel,
                    u = e.href, s = e.target, f = e.spa, d = e.activeClickable, m = p.useCallback((function (e) {
                        o && (d ? o(a, e) : i || o(a, e))
                    }), [a, o, i]);
                return f ? p.createElement(Xc.rU, {
                    to: u,
                    target: s,
                    title: r,
                    onClick: m,
                    className: De()(nu, (t = {}, iu(t, au, i), iu(t, ou, d && i), t), c)
                }, p.createElement("span", {className: ru}, l ? l() : r)) : p.createElement("a", {
                    href: u,
                    target: s,
                    className: De()(nu, (n = {}, iu(n, au, i), iu(n, ou, d && i), n), c),
                    onClick: m,
                    title: r
                }, p.createElement("span", {className: ru}, l ? l() : r))
            };

            function uu() {
                return (uu = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var su, fu = function (e) {
                return p.createElement("svg", uu({
                    width: 13,
                    height: 12,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), cu || (cu = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.741 8.28a.798.798 0 001.1 0l2.931-2.828L9.704 8.28a.797.797 0 001.099 0 .731.731 0 000-1.06L7.322 3.86a.798.798 0 00-1.1 0l-3.48 3.36a.732.732 0 000 1.06z",
                    fill: "#4F5168"
                })))
            };

            function du() {
                return (du = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var mu = function (e) {
                return p.createElement("svg", du({
                    width: 13,
                    height: 12,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), su || (su = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.741 3.72a.798.798 0 011.1 0l2.931 2.828L9.704 3.72a.798.798 0 011.1 0 .731.731 0 010 1.06L7.321 8.14a.798.798 0 01-1.1 0l-3.48-3.36a.732.732 0 010-1.06z",
                    fill: "#4F5168"
                })))
            };

            function pu(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function vu(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? pu(Object(n), !0).forEach((function (t) {
                        gu(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pu(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function gu(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function hu(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return bu(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bu(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function bu(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var yu = function (e) {
                    var t = e.list, n = e.current, r = e.onChange, a = e.className, o = e.mode,
                        i = void 0 === o ? "normal" : o, c = e.onExpand, l = e.activeClickable, u = hu(p.useState(!1), 2),
                        s = u[0], f = u[1], d = p.useRef(null), m = hu(p.useState(!1), 2), v = m[0], g = m[1],
                        h = hu(p.useState(0), 2), b = h[0], y = h[1], w = p.useRef(0), E = p.useCallback((function () {
                            if (d.current) {
                                g(d.current.clientHeight > 60);
                                var e = t.findIndex((function (e) {
                                    return e.value === n
                                }));
                                if (-1 !== e) {
                                    var r = d.current.children[e];
                                    r && (w.current = r.offsetTop, s || y(r.offsetTop))
                                }
                            }
                        }), [t, n, s]), x = p.useCallback((function () {
                            return s ? p.createElement("span", {className: tu.expandLabel}, p.createElement("span", {className: tu.expandLabelText}, "收起"), p.createElement(fu, {className: tu.icon})) : p.createElement("span", {className: tu.expandLabel}, p.createElement("span", {className: tu.expandLabelText}, "更多"), p.createElement(mu, {className: tu.icon}))
                        }), [s]), _ = p.useCallback((function () {
                            c && c(s);
                            var e = !s;
                            y(e ? 0 : w.current), f(e)
                        }), [s]), A = p.useCallback((function () {
                            E()
                        }), [E]);
                    p.useEffect((function () {
                        A()
                    }), [v]), p.useEffect((function () {
                        return "expandable" === i && (window.addEventListener("resize", A), A()), function () {
                            "expandable" === i && window.removeEventListener("resize", A)
                        }
                    }), [A, i]);
                    var O = p.useMemo((function () {
                        return t
                    }), [t]), C = p.useMemo((function () {
                        var e;
                        return gu(e = {}, tu.expanded, s && "expandable" === i), gu(e, tu.close, !s && "expandable" === i), e
                    }), [s, i]);
                    return p.createElement("div", {className: De()(tu.tabs, a)}, p.createElement("div", {className: De()(tu.tabsGroup, vu({}, C), tu["tabsGroup-".concat(i)])}, p.createElement("div", {
                        className: tu.tabsContainer,
                        style: {transform: "translateY(-".concat(b, "px)")},
                        ref: d
                    }, O.map((function (e) {
                        return p.createElement(lu, {
                            key: e.value,
                            href: e.href,
                            spa: e.spa,
                            target: e.target,
                            active: e.value === n,
                            activeClickable: l,
                            className: tu.tabItem,
                            value: e.value,
                            label: e.label,
                            onClick: r
                        })
                    })))), "expandable" === i && v && p.createElement("div", null, p.createElement(lu, {
                        className: tu.expandTab,
                        value: "expand",
                        renderLabel: x,
                        onClick: _
                    })))
                }, wu = "a863cbaaffe537635d0f8cc2af289789-scss", Eu = "_84821df5bfe8ebabd514b4e75cac05d0-scss",
                xu = "_9f4c88a1884e2780564b40f395a6ca42-scss", _u = "_867fac25d78f37fda2211efdd7fee7d4-scss",
                Au = "_0cf669a1efd0d846f9899e2fe6f2ada6-scss";

            function Ou() {
                return (Ou = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Cu(e) {
                return function (e) {
                    if (Array.isArray(e)) return ku(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ku(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ku(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ku(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var Pu = [].concat(Cu(Dt), Cu(Ft)), ju = function (e) {
                    return p.createElement("div", {className: xu}, p.createElement("div", {className: wu}, p.createElement("div", {className: Eu}, p.createElement("div", {className: _u}), p.createElement(yu, Ou({}, e, {
                        className: De()(e.className),
                        mode: "expandable",
                        list: Pu
                    })), p.createElement("div", {className: Au}))))
                }, Su = n(82093), Iu = n.n(Su), Nu = "_5711aa3bb8cc604a63af009da08a1e20-scss",
                Ru = "_7ce8711a27620d9356e5d8a0dbec1e32-scss", Tu = "_7f36460f72398e570573c11ce1103a8e-scss",
                Mu = "_314d5c3bad1aff13f9b9361c3605a92b-scss", Lu = "_8dfd3684a7eb68aede591c5b339d3461-scss",
                Bu = "_3f6f0f96f137417475844d1f8deeabd7-scss", Du = "_7b6370c7df645cb93eadbe7ece3b17b3-scss";

            function Fu(e) {
                var t = e.className, n = e.text;
                return p.createElement("div", {className: De()(Lu, t)}, p.createElement("div", {className: Bu}), n && p.createElement("div", {className: Du}, n))
            }

            function zu(e) {
                return function (e) {
                    if (Array.isArray(e)) return Vu(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Qu(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Uu(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Hu(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Uu(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Uu(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function Wu(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || Qu(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Qu(e, t) {
                if (e) {
                    if ("string" == typeof e) return Vu(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vu(e, t) : void 0
                }
            }

            function Vu(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function qu(e) {
                var t = e.enterMethod;
                return p.createElement("div", {className: Ru}, "请先", p.createElement("span", {
                    className: Tu,
                    onClick: function () {
                        Oe({
                            success: function () {
                                location.reload()
                            }, enterMethod: t
                        })
                    }
                }, "登录"), "，查看更多数据")
            }

            function Ku(e) {
                var t = e.reload;
                return p.createElement("div", {className: Ru}, "服务异常，重新", p.createElement("span", {
                    onClick: t,
                    className: Tu
                }, "刷新"), "拉取数据")
            }

            function Xu(e, t) {
                var n = e.defaultDataList, r = e.defaultHasMoreFlag, a = void 0 === r || r, o = e.defaultStatusCode,
                    i = void 0 === o ? 0 : o, c = e.fetchMoreData, l = e.scrollContainerEl, u = e.containerClassName,
                    s = void 0 === u ? "" : u, f = e.itemClassName, d = void 0 === f ? "" : f, m = e.pageId,
                    v = void 0 === m ? "" : m, g = e.renderItem, h = e.isHorizontal, b = void 0 !== h && h, y = e.pause,
                    w = void 0 !== y && y, E = e.skeletonNum, x = void 0 === E ? 20 : E, _ = e.renderSkeleton,
                    A = void 0 === _ ? null : _, O = e.panelLoginError, C = void 0 === O ? null : O,
                    k = e.panelReloadDataError, P = void 0 === k ? null : k, j = e.panelNoData,
                    S = void 0 === j ? null : j, I = e.panelNoMoreData, N = void 0 === I ? null : I,
                    R = e.renderNoDataError, T = void 0 === R ? null : R, M = e.handleLoadEnd, L = e.dataFilter,
                    B = e.loginNeedLogMethod, D = void 0 === B ? "" : B, F = e.needFirstPause, z = void 0 !== F && F,
                    U = Wu((0, p.useState)(n || []), 2), H = U[0], W = U[1], Q = Wu((0, p.useState)(i), 2), V = Q[0],
                    q = Q[1], K = (0, p.useRef)(a), X = (0, p.useRef)(null), Y = (0, p.useRef)(null),
                    Z = (0, p.useRef)(!1), J = (0, p.useRef)(null), G = (0, p.useRef)(null), $ = (0, p.useRef)(null),
                    ee = (0, p.useRef)(null), te = Wu((0, p.useState)(void 0), 2), ne = te[0], re = te[1],
                    ae = Wu((0, p.useState)(null != n && n.length ? 1 : 0), 2), oe = ae[0], ie = ae[1];
                ee.current = v, G.current = b, J.current = c;
                var ce = (0, p.useMemo)((function () {
                    var e = [];
                    if (1 === oe) return e;
                    for (var t = 0; t < x; t++) e.push({type: 1, data: e});
                    return e
                }), [A ? x : 0, oe]), le = null;
                $.current = Hu(regeneratorRuntime.mark((function e() {
                    var t, n, r, a, o;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if ((t = Y.current ? Y : X).current) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (K.current) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                if (n = 0, r = 0, a = t.current.getBoundingClientRect(), l ? (o = l.getBoundingClientRect(), n = a.right - o.right, r = a.bottom - o.bottom) : (n = a.right - window.innerWidth, r = a.bottom - window.innerHeight), null == t || !t.current || w) {
                                    e.next = 18;
                                    break
                                }
                                if (!(!G.current && r <= 800 || !Y.current)) {
                                    e.next = 15;
                                    break
                                }
                                return e.next = 13, le();
                            case 13:
                                e.next = 18;
                                break;
                            case 15:
                                if (!(G.current && n <= 500)) {
                                    e.next = 18;
                                    break
                                }
                                return e.next = 18, le();
                            case 18:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))), le = p.useCallback(Hu(regeneratorRuntime.mark((function e() {
                    var t, n, r, a, o, i, c;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (J.current) {
                                    e.next = 3;
                                    break
                                }
                                return q(1), e.abrupt("return");
                            case 3:
                                if (1 !== oe || !z) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                if (Z.current) {
                                    e.next = 44;
                                    break
                                }
                                return Z.current = !0, e.prev = 7, t = ee.current, e.next = 11, J.current(t);
                            case 11:
                                if (n = e.sent, r = n.statusCode, a = n.data, o = n.hasMore, i = n.logPb, re(i), oe < 1 && ie((function (e) {
                                    return e + 1
                                })), t !== ee.current) {
                                    e.next = 34;
                                    break
                                }
                                if (c = L ? L(a) : a, q(r), 0 !== r) {
                                    e.next = 31;
                                    break
                                }
                                if (0 !== a.length || !o) {
                                    e.next = 24;
                                    break
                                }
                                throw new Error("loadMoreData Error! ");
                            case 24:
                                if (K.current = o, W((function (e) {
                                    return [].concat(zu(e), zu(c))
                                })), Z.current = !1, e.t0 = o, !e.t0) {
                                    e.next = 31;
                                    break
                                }
                                return e.next = 31, $.current();
                            case 31:
                                Z.current = !1, e.next = 36;
                                break;
                            case 34:
                                Z.current = !1, $.current();
                            case 36:
                                return e.abrupt("return");
                            case 39:
                                e.prev = 39, e.t1 = e.catch(7), q(1);
                            case 43:
                                Z.current = !1;
                            case 44:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[7, 39]])
                }))), [oe]);
                var ue = p.useCallback(Hu(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return ie(0), q(0), e.next = 4, le();
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))), []), se = p.useCallback((function () {
                    ie(0), W([]), K.current = !0, q(0)
                }), []);
                (0, p.useImperativeHandle)(t, (function () {
                    return {
                        reload: ue, reset: se, getTotal: function () {
                            return H.length
                        }
                    }
                }), [H.length]), (0, p.useEffect)((function () {
                    if (w) return null;
                    var e = Iu()((function () {
                        $.current()
                    }), 50, {leading: !0, trailing: !0, maxWait: 100}), t = l || document;
                    return K.current || M && M(), t && K.current && 0 === V && (t.addEventListener("scroll", e), window.addEventListener("resize", e), e()), function () {
                        t && K.current && (t.removeEventListener("scroll", e), window.removeEventListener("resize", e))
                    }
                }), [l, le, K.current, V, w]);
                var fe = null, de = !1;
                return 2 === V ? fe = C || p.createElement(qu, {enterMethod: D}) : 0 === V ? K.current ? z && 1 === oe ? (de = !0, fe = p.createElement("div", {className: Mu}, p.createElement(lo, {
                    theme: "border",
                    type: "secondary",
                    style: {width: "100%"},
                    size: "small",
                    onClick: Hu(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return ie((function (e) {
                                        return e + 1
                                    })), e.next = 3, le();
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }, "点击查看更多"))) : (de = !0, fe = p.createElement(p.Fragment, null, p.createElement(Fu, {
                    className: "",
                    text: ""
                }))) : fe = 0 === H.length ? S || p.createElement("div", {className: Ru}, "没有数据") : N || p.createElement("div", {className: Ru}, "暂时没有更多了") : (0 === H.length && (fe = null == T ? void 0 : T(V)), fe || (fe = P || p.createElement(Ku, {reload: ue}))), p.createElement(p.Fragment, null, p.createElement("ul", {
                    className: s,
                    ref: X
                }, [].concat(zu(H), zu(de && ce || [])).map((function (e, t) {
                    return p.createElement("li", {
                        className: d, key: "li_".concat(t), ref: function (t) {
                            1 !== (null == e ? void 0 : e.type) && (Y.current = t)
                        }
                    }, 1 === (null == e ? void 0 : e.type) ? A && A() : g(e, t, ne))
                }))), p.createElement("div", {className: Nu, style: {width: b ? "auto" : "100%"}}, fe))
            }

            var Yu, Zu = p.forwardRef(Xu);

            function Ju() {
                return (Ju = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Gu, $u, es, ts = function (e) {
                return p.createElement("svg", Ju({
                    width: 18,
                    height: 17,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Yu || (Yu = p.createElement("path", {
                    d: "M9.12 3.225l-.721.693A1 1 0 009.938 3.8l-.819-.574zm6.94 2.812h-1a1 1 0 001.906.425l-.905-.425zm0 0h1a1 1 0 00-1.904-.425l.905.425zm-.001.15l-1-.022 1 .023zm.002.084l1 .018a1 1 0 00-.092-.437l-.908.419zm-.24 1.406l.748.664a1 1 0 00.215-.393l-.962-.27zm-.239.469l.84.541a.996.996 0 00.09-.174l-.93-.367zm-.24.468l.86.512a1 1 0 00.076-.157l-.935-.355zm-.146.238l-.842-.539.842.539zm-2.29 2.745l-.707-.707-.002.002.71.705zm-3.03 2.722l-.636-.772.637.772zm-.276.233l-.707-.707.707.707zm-.605.2l.017-1h-.013l-.004 1zm-.903-.49l.625-.78a.936.936 0 00-.032-.026l-.593.806zm-3.307-2.909l.719-.695-.003-.003-.716.699zM2.4 8.152l.907-.42a1 1 0 00-.013-.027l-.894.447zM1.938 6.27l-.705-.709a1 1 0 00-.294.73l1-.021zm.003-.08l1-.026-1 .026zM11.99.818c-1.444 0-2.831.608-3.69 1.832L9.938 3.8c.432-.616 1.165-.98 2.054-.98v-2zm5.07 5.219c0-2.808-2.26-5.219-5.07-5.219v2c1.634 0 3.07 1.444 3.07 3.219h2zm0 0h-2 2zm-1.905-.425l1.81.85-1.81-.85zm1.903.599l.002-.174h-2l-.002.128 2 .046zm-.09-.359a.979.979 0 01.084.307c.005.04.005.07.005.074V6.21l-1.999-.046v.093c0 .018 0 .058.005.107.003.024.015.166.089.325l1.816-.838zm-.185 2.096c.158-.564.266-1.055.277-1.66l-2-.034c-.006.359-.065.664-.202 1.153l1.925.54zm-.272.565c.037-.092.064-.155.085-.2l.014-.027a.517.517 0 01-.042.055l-1.495-1.328c-.132.149-.22.313-.272.42a4.839 4.839 0 00-.15.345l1.86.735zm-.234.456c.029-.077.044-.109.056-.134.014-.026.035-.065.089-.148L14.74 7.604a3.06 3.06 0 00-.333.656l1.87.709zm-.24.421c.057-.087.111-.175.164-.264l-1.718-1.023c-.042.069-.085.14-.13.21l1.685 1.077zm-2.424 2.914c.863-.863 1.762-1.874 2.425-2.915l-1.686-1.075c-.552.865-1.338 1.76-2.153 2.576l1.414 1.414zm-3.101 2.787c.548-.452 1.832-1.51 3.103-2.79l-1.419-1.41c-1.195 1.204-2.412 2.207-2.957 2.656l1.273 1.543zm-.206.168c-.02.02-.032.03-.018.018l.044-.038.18-.149-1.273-1.543c-.117.097-.275.226-.347.298l1.414 1.414zM9 15.752c.215 0 .796.018 1.307-.493l-1.414-1.414c.01-.01.032-.03.066-.05a.402.402 0 01.098-.038c.026-.007.04-.007.03-.006H9v2zm-.023 0H9v-2h.012l-.035 2zm-1.485-.693c.21.209.664.69 1.498.693l.009-2c-.014 0-.01-.002.005.003.016.004.029.01.035.014.005.003-.002 0-.025-.02a2.548 2.548 0 01-.107-.104l-1.415 1.414zm-.026-.017l.033.027.021.017.004.003-.01-.008a.772.772 0 01-.022-.022l1.415-1.414c-.063-.063-.153-.134-.19-.164l-1.25 1.56zm-3.4-2.993A29.95 29.95 0 007.5 15.067l1.186-1.61a27.982 27.982 0 01-3.181-2.8L4.067 12.05zM1.493 8.571c.578 1.253 1.592 2.472 2.578 3.481l1.43-1.397c-.933-.956-1.758-1.98-2.193-2.923l-1.815.84zM.939 6.293c.008.374.094.828.19 1.21.095.38.228.8.376 1.096l1.789-.894a4.046 4.046 0 01-.226-.689 4.03 4.03 0 01-.13-.767l-2 .044zm.002-.077v.017a.973.973 0 01.291-.67L2.645 6.98a1.006 1.006 0 00.298-.716l-.002-.1-1.999.052zm-.003-.18c0 .08.002.142.003.18l2-.051c-.002-.036-.003-.076-.003-.128h-2zM6.008.819c-2.81 0-5.07 2.41-5.07 5.219h2c0-1.776 1.435-3.219 3.07-3.219v-2zM9.84 2.531C8.79 1.44 7.477.818 6.008.818v2c.859 0 1.669.35 2.391 1.1l1.44-1.387z",
                    fill: "#fff"
                })))
            };

            function ns() {
                return (ns = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var rs = function (e) {
                    return p.createElement("svg", ns({
                        width: 10,
                        height: 12,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), Gu || (Gu = p.createElement("path", {
                        d: "M.616 4.435a.75.75 0 010-1.292l3.622-2.135a1.5 1.5 0 011.524 0l3.622 2.135a.75.75 0 010 1.292L5.762 6.57a1.5 1.5 0 01-1.524 0L.616 4.435z",
                        fill: "#fff"
                    })), $u || ($u = p.createElement("path", {
                        d: "M.07 5.785a.5.5 0 01.684-.177l3.738 2.204a1 1 0 001.016 0l3.738-2.204a.5.5 0 11.508.862L6.016 8.673a2 2 0 01-2.032 0L.246 6.47a.5.5 0 01-.177-.685z",
                        fill: "#fff"
                    })), es || (es = p.createElement("path", {
                        d: "M.754 7.858a.5.5 0 10-.508.862l3.738 2.203a2 2 0 002.032 0L9.754 8.72a.5.5 0 10-.508-.862l-3.738 2.204a1 1 0 01-1.016 0L.754 7.857z",
                        fill: "#fff"
                    })))
                }, as = "_863f6ea4f8ed8c3f88c51527f1ea8d43-scss", os = "a074d7a61356015feb31633ad4c45f49-scss",
                is = "b388acfeaeef33f0122af9c4f71a93c9-scss", cs = "c1b7c8e6be13150a7516bfc20bbb8ad1-scss",
                ls = "_46cb4690b43b2c3500c78191b9c87d80-scss", us = "c0efa8c116eec8c11854d9bda213b4e5-scss",
                ss = "_1a451682eeb2d4df81bf8e1ada549729-scss", fs = "a19d91dabb2ea86fa5cb7ea590c80064-scss",
                ds = "ad67e6d4c79ab72997256d1847e19b10-scss", ms = "_04b09e32a7964282872626a4aff3353b-scss",
                ps = "d170ababc38fdbf760ca677dbaa9206a-scss", vs = "f3bc7f5cffcbab3cc43c26ec2ad98e9a-scss",
                gs = "_53346e2188e2c8a7195be6340dc4eb2a-scss", hs = "_4a35f1041ceac1affb2c0c2efb207926-scss",
                bs = "_936aa8ce542f0b93057237ffb908b0dc-scss", ys = "c79ea3c0e92e43c8e797e89992f7e06d-scss",
                ws = "_9c976841beef15a22bcd1540d1e84c02-scss", Es = "_1d72ef4c67644daab0f1496c89e038aa-scss",
                xs = "b2c8df63da2ed9be2bc3d38cf902e5b4-scss", _s = "_047f631cf71847dc20e5d333d0a4ccca-scss",
                As = "d8d25680ae6956e5aa7807679ce66b7e-scss", Os = "_9c247910afecae7b8e47d4c75867113a-scss",
                Cs = "_31dc42fa6181927e1afa821a0db10ed0-scss", ks = "_7cfe89a4f1868679513e50ad5cf7215c-scss",
                Ps = "b32855717201aaabd3d83c162315ff0a-scss", js = "d9cdbac4f027db3a2e2189a4a2152c50-scss",
                Ss = "cf08474a79d34895d8917d41038eb249-scss", Is = "_0ed6f665abf5e1e9adee05cee3b0ddcb-scss",
                Ns = "_565100c0b703735e045f4f673a1d19e2-scss", Rs = "f56462754124ebf9fa85b8b515861ca1-scss",
                Ts = "f8a18932f8400953d0113eae6a56a813-scss", Ms = "_825ee6a2309eb4a4d9f707ef61be8629-scss",
                Ls = "_761439704d5a73a3f30a204280c9ac3a-scss", Bs = "d677066d88e6e23cde69168b4d95121c-scss",
                Ds = "e3205f9f0e69ea6967756ebe56ae69d2-scss", Fs = "_1ddad15aa66c856884914ce9725ea2de-scss",
                zs = function (e) {
                    var t = e.onReady, n = e.previewUrlList, r = e.isHorizontal, a = (0, p.useRef)(),
                        o = (0, p.useRef)(), i = (0, p.useRef)();
                    return (0, p.useEffect)((function () {
                        return function e() {
                            i.current = requestAnimationFrame((function () {
                                a.current && o.current && (o.current.style.width = "".concat(a.current.currentTime / a.current.duration * 100, "%")), e()
                            }))
                        }(), function () {
                            return cancelAnimationFrame(i.current)
                        }
                    }), []), p.createElement("div", {className: Ls}, p.createElement("video", {
                        ref: a,
                        onPlaying: t,
                        className: Fs,
                        style: {objectFit: r ? "cover" : "contain"},
                        loop: !0,
                        muted: !0,
                        autoPlay: !0,
                        preload: "none"
                    }, n.map((function (e, t) {
                        return p.createElement("source", {src: e, key: "".concat(e, "_").concat(t)})
                    }))), p.createElement("div", {className: Bs}, p.createElement("div", {ref: o, className: Ds})))
                };

            function Us() {
                return (Us = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Hs(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Ws(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Qs(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qs(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Qs(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var Vs = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return e.replace(/\n/g, "")
                }, qs = function (e) {
                    var t = e.url, n = e.poster, r = e.likeCount, a = e.duration, o = e.collection, i = e.live, c = e.alt,
                        l = e.previewUrlList, u = e.width, s = e.height, f = e.onVideoClick, d = Ws((0, p.useState)(0), 2),
                        m = d[0], v = d[1], g = Ws((0, p.useState)(!1), 2), h = g[0], b = g[1], y = (0, p.useRef)(!1),
                        w = Ws((0, p.useState)(!1), 2), E = w[0], x = w[1], _ = E && h,
                        A = (0, p.useCallback)((function () {
                            b(!1)
                        }), []), O = (0, p.useCallback)((function () {
                            b(!0)
                        }), []), C = (0, p.useCallback)((function () {
                            b(!1)
                        }), []), k = (0, p.useCallback)((function () {
                            x(!0)
                        }), []);
                    return (0, p.useEffect)((function () {
                        y.current = /firefox/i.test(navigator.userAgent)
                    }), []), (0, p.useEffect)((function () {
                        x(!1)
                    }), [h]), p.createElement("a", {
                        target: "_blank",
                        href: t,
                        className: De()(os, is),
                        onClick: A,
                        onMouseEnter: O,
                        onMouseLeave: C
                    }, p.createElement("div", {
                        className: "".concat(cs, " ").concat(1 !== m ? ys : ""),
                        onClick: f
                    }, p.createElement(zl, {
                        src: n,
                        alt: c,
                        imgClass: us,
                        className: ls,
                        withBlurBg: !0,
                        onHandleImgLoad: function () {
                            return v(1)
                        },
                        isPreviewing: _
                    }), !y.current && Boolean(l) && l.length && h && p.createElement(zs, {
                        previewUrlList: l,
                        isHorizontal: u >= s,
                        onReady: k
                    }), (o || i) && p.createElement("div", {className: De()(vs, o ? gs : bs, Ms, Hs({}, Ts, _))}, o && p.createElement(rs, {className: hs}), p.createElement("span", null, o ? "合集" : "直播中")), (r || a) && p.createElement("div", {className: De()(ss, Ms, Hs({}, Ts, _))}, p.createElement("div", {className: fs}, r && p.createElement("div", {className: ds}, p.createElement(Ve, {
                        width: 20,
                        height: 18,
                        src: ts,
                        viewBox: "0 0 18 17"
                    }), p.createElement("span", {className: ms}, r)), a && p.createElement("span", {className: ps}, a)))))
                }, Ks = function (e) {
                    var t = e.url, n = e.text, r = e.clamp, a = void 0 === r ? 2 : r, o = e.showTip, i = void 0 !== o && o,
                        c = e.onVideoClick, l = Ws((0, p.useState)(!1), 2), u = l[0], s = l[1], f = Vs(n);
                    return p.createElement("a", {
                        target: "_blank",
                        href: t,
                        onClick: c,
                        className: De()(os, ws)
                    }, p.createElement("p", {
                        onMouseEnter: function (e) {
                            var t = e.currentTarget;
                            i && t.scrollHeight > t.clientHeight && s(!0)
                        }, onMouseLeave: function () {
                            return i && s(!1)
                        }, className: De()(Es, Hs({}, xs, 1 === a))
                    }, p.createElement(El, {text: f})), u && p.createElement("div", {className: _s}, p.createElement(El, {text: f})))
                }, Xs = function (e) {
                    var t = e.url, n = e.avatar, r = e.userName, a = e.time, o = e.onAuthorClick;
                    return p.createElement("div", {className: As}, p.createElement("a", {
                        target: "_blank",
                        href: t,
                        className: De()(os, Os),
                        onClick: o
                    }, p.createElement(to, {
                        type: "extraExtraSmall",
                        src: n,
                        alt: "".concat(r, "头像")
                    }), p.createElement("p", {className: De()(Cs, ks)}, p.createElement(El, {text: Vs(r)}))), a && p.createElement("span", {className: Ps}, a))
                }, Ys = function (e) {
                    var t = e.video, n = e.title, r = e.source, a = e.className, o = e.onShow, i = e.onVideoClick,
                        c = void 0 === i ? function () {
                            return {}
                        } : i, l = e.onAuthorClick, u = void 0 === l ? function () {
                            return {}
                        } : l, s = rl(o);
                    return p.createElement("div", {
                        ref: s,
                        className: De()(as, a)
                    }, p.createElement(qs, Us({}, t, {
                        alt: null == n ? void 0 : n.text,
                        onVideoClick: c
                    })), (null == n ? void 0 : n.text) && p.createElement(Ks, Us({}, n, {onVideoClick: c})), r && p.createElement(Xs, Us({}, r, {onAuthorClick: u})))
                }, Zs = function (e) {
                    var t = e.titleClamp, n = void 0 === t ? 2 : t;
                    return p.createElement("div", {className: js}, p.createElement("div", {className: cs}, p.createElement("div", {className: Ss}, p.createElement(kl, null))), p.createElement("div", {className: Is}), n >= 2 && p.createElement("div", {className: De()(Is, Ns)}), p.createElement("div", {className: Rs}))
                }, Js = new S({
                    videoCoverShow: {
                        eventName: "video_cover_show",
                        params: {author_id: "", group_id: "", log_pb: "", tab_name: "", enter_from: "", rank: 0}
                    },
                    videoCoverClick: {
                        eventName: "video_cover_click",
                        params: {author_id: "", group_id: "", log_pb: "", tab_name: "", enter_from: "", rank: 0}
                    },
                    enterVideoTab: {eventName: "enter_video_tab", params: {tab_name: ""}},
                    stayVideoTab: {eventName: "stay_video_tab", params: {tab_name: "", duration: 0, is_visible: 1}},
                    clickMoreTab: {eventName: "click_more_tab", params: {}}
                }), Gs = "_494bc1c6f4fa1450fb0b5f9811c4db08-scss", $s = "_2dc9812849bfe436957345d09237dade-scss",
                ef = "f19d0aab4fbba8274ea85214be60ee79-scss", tf = "a503bb2ac66ba9ccb5f2277ad1f58c0a-scss",
                nf = "f3f8d90bfdc74a44ab0cbe784a4af104-scss", rf = "ff48959a07ac65915c5a5582a6d72fbe-scss";

            function af(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function of(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            af(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            af(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var cf = al, lf = il, uf = function (e) {
                var t = new Date(2018, 8, 18).valueOf() + e;
                return "00" !== Rn()(t).format("HH") ? Rn()(t).format("HH:mm:ss") : Rn()(t).format("mm:ss")
            }, sf = function (e) {
                var t = e.current, n = e.onReload, r = (0, ie.k6)();
                return (0, p.useEffect)((function () {
                    dc({
                        key: t, event: function (e, n) {
                            n > 0 && Js.sendLog("stayVideoTab", {tab_name: t, duration: n, is_visible: Number(e)})
                        }
                    })
                }), [t]), p.createElement(ju, {
                    mode: "expandable", activeClickable: !0, onExpand: function (e) {
                        e || Js.sendLog("clickMoreTab")
                    }, onChange: function (e, a) {
                        Js.sendLog("enterVideoTab", {tab_name: e}), mc(), fc(t), e === t ? (a.preventDefault(), n(), window.scrollTo(0, 0)) : zt[e].route && (a.preventDefault(), r.push(zt[e].route))
                    }, current: t
                })
            }, ff = p.memo(sf);

            function df(e, t) {
                var n = e.fetchFeeds, r = e.current, a = e.defaultData, o = void 0 === a ? [] : a,
                    i = (0, p.useCallback)(of(regeneratorRuntime.mark((function e() {
                        var t, r, a, o, i;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n();
                                case 2:
                                    return t = e.sent, r = t.statusCode, a = t.hasMore, o = t.awemeList, i = t.logPb, e.abrupt("return", {
                                        statusCode: r,
                                        hasMore: a,
                                        data: o,
                                        logPb: i
                                    });
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [n]);
                (0, p.useEffect)((function () {
                    window.scrollTo(0, 0)
                }), [r]);
                var c = (0, p.useCallback)((function (e, t) {
                    var n, r, a = {
                        author_id: null == e || null === (n = e.authorInfo) || void 0 === n ? void 0 : n.uid,
                        group_id: null == e ? void 0 : e.groupId,
                        log_pb: t
                    };
                    return Pt(null == e || null === (r = e.authorInfo) || void 0 === r ? void 0 : r.secUid, "enter_method=video_title&".concat((0, _.stringify)(a)))
                }), []);
                return p.createElement(p.Fragment, null, p.createElement(ff, {
                    current: r, onReload: function () {
                        var e, n;
                        null === (e = t.current) || void 0 === e || e.reset(), null === (n = t.current) || void 0 === n || n.reload()
                    }
                }), p.createElement("div", {className: Gs}, p.createElement("div", {className: $s}), p.createElement("div", {className: tf}, p.createElement(Zu, {
                    ref: t,
                    pageId: r,
                    defaultDataList: o || [],
                    fetchMoreData: i,
                    containerClassName: nf,
                    itemClassName: rf,
                    skeletonNum: 8,
                    renderSkeleton: function () {
                        return p.createElement(Zs, null)
                    },
                    renderNoDataError: function (e) {
                        return e === st.ERROR_502 ? p.createElement(Hc, null) : e === st.ERROR_USER_FORBIDEN ? p.createElement(Qc, {
                            title: "账号被封禁",
                            desc: " "
                        }) : p.createElement(Qc, null)
                    },
                    renderItem: function (e, t, n) {
                        var a, o, i, l;
                        return p.createElement(Ys, {
                            onVideoClick: function () {
                                return function (e, t, n) {
                                    var a;
                                    Js.sendLog("videoCoverClick", {
                                        author_id: null == e || null === (a = e.authorInfo) || void 0 === a ? void 0 : a.uid,
                                        log_pb: n,
                                        group_id: null == e ? void 0 : e.groupId,
                                        enter_from: me(),
                                        rank: t,
                                        tab_name: r
                                    })
                                }(e, t, n)
                            },
                            onShow: function () {
                                return function (e, t, n) {
                                    var a;
                                    Js.sendLog("videoCoverShow", {
                                        author_id: null == e || null === (a = e.authorInfo) || void 0 === a ? void 0 : a.uid,
                                        log_pb: n,
                                        group_id: null == e ? void 0 : e.groupId,
                                        enter_from: me(),
                                        rank: t,
                                        tab_name: r
                                    })
                                }(e, t, n)
                            },
                            video: {
                                url: kt(e.awemeId, "previous_page=".concat(me())),
                                poster: e.video.cover,
                                likeCount: lf(e.stats.diggCount),
                                duration: uf(e.video.duration),
                                collection: -1 !== e.mixInfo.status,
                                live: !1,
                                previewUrlList: (null == e || null === (a = e.video) || void 0 === a || null === (o = a.playAddr) || void 0 === o ? void 0 : o.map((function (e) {
                                    return e.src || ""
                                }))) || [],
                                width: null == e || null === (i = e.video) || void 0 === i ? void 0 : i.width,
                                height: null == e || null === (l = e.video) || void 0 === l ? void 0 : l.height
                            },
                            title: {url: kt(e.awemeId, "previous_page=".concat(me())), text: e.desc},
                            source: {
                                url: c(e, n),
                                avatar: e.authorInfo.avatarUri,
                                userName: e.authorInfo.nickname,
                                time: cf(1e3 * e.createTime)
                            }
                        })
                    }
                })), p.createElement("div", {className: ef})))
            }

            var mf = p.forwardRef(df), pf = u;

            function vf(e) {
                var t = (0, ie.UO)().id, n = (0, p.useRef)(null), r = pf.CHANNEL_REF["channel_".concat(t)],
                    a = (null == r ? void 0 : r.label) || "频道";
                return (0, p.useEffect)((function () {
                    n.current && (n.current.reset(), n.current.reload())
                }), [t]), p.createElement(p.Fragment, null, p.createElement(eu, null, p.createElement("title", null, a, "频道 - 热门", a, "视频大全 - 抖音"), p.createElement("meta", {
                    name: "keywords",
                    content: "".concat(a, ",").concat(a, "视频,热门").concat(a, ",").concat(a, "小视频,").concat(a, "短视频,").concat(a, "抖音,").concat(a, "视频大全,抖音")
                }), p.createElement("meta", {
                    name: "description",
                    content: "抖音为您提供".concat(a, "视频内容，又新又全的热门").concat(a, "视频每日更新。来抖音，记录美好生活！")
                }), p.createElement("link", {
                    rel: "canonical",
                    href: "https://www.douyin.com/channel/".concat(t)
                })), r ? p.createElement(mf, {
                    fetchFeeds: function () {
                        return Sa({tagId: t})
                    }, current: "channel_".concat(t), ref: n
                }) : p.createElement(Wc, {title: "你要观看的频道不存在", desc: " "}))
            }

            n(53916);
            var gf = new S({
                compilationDropDownMenuClick: {
                    eventName: "compilation_drop_down_menu_click",
                    params: {compilation_id: ""}
                },
                compilationClickMore: {eventName: "compilation_click_more", params: {compilation_id: ""}},
                collectionCoverShow: {
                    eventName: "video_cover_show",
                    params: {
                        author_id: "",
                        group_id: "",
                        log_pb: "",
                        enter_from: "",
                        compilation_id: "",
                        compilation_video_cnt: 0,
                        type: "compilation",
                        rank: 0
                    }
                },
                collectionCoverClick: {
                    eventName: "video_cover_click",
                    params: {
                        author_id: "",
                        group_id: "",
                        log_pb: "",
                        enter_from: "",
                        compilation_id: "",
                        compilation_video_cnt: 0,
                        type: "compilation",
                        rank: 0
                    }
                },
                videoCoverShow: {
                    eventName: "video_cover_show",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", type: "related_video", rank: 0}
                },
                videoCoverClick: {
                    eventName: "video_cover_click",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", type: "related_video", rank: 0}
                },
                like: {
                    eventName: "like",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                cancelLike: {
                    eventName: "cancel_like",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                clickCommentButton: {
                    eventName: "click_comment_button",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                shareMenuShow: {
                    eventName: "share_menu_show",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                shareVideo: {
                    eventName: "share_video",
                    params: {
                        author_id: "",
                        group_id: "",
                        log_pb: "",
                        enter_from: "",
                        previous_page: "web_link",
                        type: ""
                    }
                },
                follow: {
                    eventName: "follow",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                followCancel: {
                    eventName: "follow_cancel",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                enterPersonalDetail: {
                    eventName: "enter_personal_detail",
                    params: {
                        author_id: "",
                        group_id: "",
                        log_pb: "",
                        enter_from: "",
                        previous_page: "web_link",
                        to_user_id: "",
                        enter_method: ""
                    }
                }
            }), hf = "_01d08daac5bd9ca8e8d001c0835ab65b-scss", bf = "dd52d12b7fd9593beb6f1cb2c50d3c37-scss";

            function yf() {
                return p.createElement("div", {className: bf})
            }

            var wf = "c77c4bde2eb9353bd95e963166e29091-scss";

            function Ef(e) {
                var t = e.width, n = void 0 === t ? 5 : t, r = e.height, a = void 0 === r ? 4 : r, o = e.color,
                    i = void 0 === o ? "#6C6F8D" : o, c = e.className, l = void 0 === c ? "" : c;
                return p.createElement("div", {
                    className: De()(wf, l),
                    style: {borderTopWidth: a, borderBottomWidth: a, borderLeftWidth: n, borderLeftColor: i}
                })
            }

            var xf = {
                default: "#D9DAE5",
                label: "#FE2C55",
                live: "linear-gradient(134.66deg, #FF1764 0%, #ED3495 100%)",
                hot: "linear-gradient(268.09deg, #F01B5B 6.38%, #FF5A44 59.9%, #FF9113 91.68%)",
                coupon: "linear-gradient(135.01deg, #FF6238 0%, #FF851D 100%)",
                top: "#FACE15",
                collection: "rgba(18, 20, 35, 0.9)"
            }, _f = {
                tag: "_780bf853c56f3d6e150c9f36e78fecb1-scss",
                label: "cfd18500dd499c48446fa5fef9ec3705-scss",
                live: "c615018b42fb551ebc14aea049e776e1-scss",
                hot: "d53a0b842b7a4d8df7c7879511b47d62-scss",
                coupon: "_2713f4185b8d0e9aad88928f28ae29a4-scss",
                collection: "c69f6b7ce546ae8fb7cb9f57fa35c9ca-scss",
                default: "_48099a373fbdc023b589445c3756fa85-scss",
                top: "e73b432b1a9f7f342785c7231dd707da-scss"
            };

            function Af(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Of(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var Cf, kf = function (e) {
                var t = e.type, n = void 0 === t ? "label" : t, r = e.className, a = e.style, o = e.children,
                    i = e.icon, c = e.onChange, l = function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Af(Object(n), !0).forEach((function (t) {
                                Of(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Af(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({background: n && xf[n] ? xf[n] : xf.label}, a), u = De()(_f.tag, _f[n], r), s = i || null,
                    f = s ? p.createElement(p.Fragment, null, s, o) : o;
                return p.createElement("span", {className: u, style: l, onClick: c}, f)
            }, Pf = function () {
                return p.createElement(kf, {type: "top"}, "置顶")
            }, jf = function () {
                return p.createElement(kf, {type: "top"}, "同城精选")
            }, Sf = function (e) {
                var t = e.top;
                return p.createElement(kf, {type: "hot"}, "热榜", t ? " TOP".concat(t) : "", " ")
            }, If = function () {
                return p.createElement(kf, {type: "hot"}, "日常")
            }, Nf = function () {
                return p.createElement(kf, {type: "live"}, "直播中")
            }, Rf = function (e) {
                var t = e.type, n = {1: "审核未通过", 2: "审核中"};
                return p.createElement(kf, {type: "collection"}, n[t] || n[1])
            }, Tf = {
                commentItemContainer: "aa8946e6a10e3788dca09663eb82fc99-scss",
                tag: "_7f0c74cf21d6b46ba1e04cc6a5df2812-scss",
                defaultTag: "_5dfe2aee6bbf61c8ad452d65ee612834-scss",
                avatar: "_32d65b2328ba9277f082c879bd49a0e6-scss",
                contentContainer: "c7ee22de401c856152e3646bffd656a3-scss",
                infoWrap: "_52058b306f496907c5d55c0facb81886-scss",
                nickWrap: "d8e7526a15bef9ed83cb2bd813766939-scss",
                nickname: "_96ab12486b27de1f4a4a52e10dcb631a-scss",
                triggle: "_72df56174004b66fa0d904137212dab6-scss",
                tagWrap: "aece40589e3ede276d7b09bfb9dab9f4-scss",
                timeWrap: "_6d51b35c250a771d1e1b5b400ff3176e-scss",
                actionText: "_4606ab538a02ebc403e739ef22ef3604-scss",
                opContainer: "c2de27b4f28bd4bb0cdbcabadabe8bf3-scss",
                statsContainer: "f09c3b4bb22295c1b1b4e0e735992f87-scss",
                stats: "_314bde61933468933fabb30f1507cdb2-scss",
                replyExpandBtn: "_41129c3e587f113be731ac011aca7574-scss",
                dividWrap: "_253f6877e92ecf3acb0686793672aa00-scss"
            };

            function Mf() {
                return (Mf = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Lf, Bf = function (e) {
                return p.createElement("svg", Mf({
                    width: 16,
                    height: 16,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Cf || (Cf = p.createElement("path", {
                    d: "M8.119 2.413C8.759 1.49 9.809 1 10.966 1 13.168 1 15 2.937 15 5.24l-.002.152a.349.349 0 00.002.083c-.008.485-.09.885-.237 1.414-.083.095-.16.274-.238.47a2.107 2.107 0 00-.237.472 8.278 8.278 0 01-.051.086c-.614 1.018-1.505 2.044-2.39 2.938-1.214 1.235-2.44 2.26-2.978 2.71-.15.126-.247.206-.274.234C8.397 14 8.198 14 8 14h-.001c-.396 0-.594-.201-.792-.402a1.777 1.777 0 00-.106-.09 28.843 28.843 0 01-3.29-2.935c-.947-.985-1.853-2.108-2.354-3.207-.198-.402-.446-1.36-.457-1.89.004-.005.004-.03.002-.081A5.655 5.655 0 011 5.24C1 2.936 2.83 1 5.034 1c1.154 0 2.206.489 3.085 1.413z",
                    fill: "#4F5168"
                })))
            };

            function Df() {
                return (Df = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Ff = function (e) {
                return p.createElement("svg", Df({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Lf || (Lf = p.createElement("path", {
                    d: "M10.065 12.864a1.928 1.928 0 000 2.727l7 7a1.929 1.929 0 002.728 0l.015-.015 6.985-6.985a1.928 1.928 0 10-2.727-2.727L18.429 18.5l-5.637-5.637a1.928 1.928 0 00-2.727 0z",
                    fill: "#0A0C20"
                })))
            };

            function zf(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Uf(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Hf(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hf(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Hf(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var Wf, Qf = al, Vf = il, qf = function (e, t, n) {
                var r, a = {
                    author_id: null == t || null === (r = t.authorInfo) || void 0 === r ? void 0 : r.uid,
                    group_id: null == t ? void 0 : t.groupId,
                    log_pb: n
                };
                return Pt(e, "enter_method=comment&".concat((0, _.stringify)(a)))
            };

            function Kf(e) {
                var t, n = e.type, r = void 0 === n ? "clarity" : n, a = e.commentInfo, o = e.isNeedReply,
                    i = void 0 === o || o, c = e.children, l = e.awemeInfo, u = e.awemelogPb, s = e.isNeedDivid,
                    f = void 0 !== s && s,
                    d = Uf((0, p.useState)(Boolean(null == a || null === (t = a.replyComment) || void 0 === t ? void 0 : t.length)), 2),
                    m = d[0], v = d[1], g = a.user, h = a.diggCount, b = a.text, y = a.textExtra, w = a.createTime,
                    E = a.replyTotal, x = a.labelText, _ = a.labelType, A = a.isTop, O = a.replyToUserName,
                    C = a.replyToUserId, k = a.replySecUid, P = a.labelList, j = a.stickyInfo, S = a.forwardId,
                    I = g.nickname, N = g.avatarUri, R = g.secUid;
                g.uid;
                return p.createElement("div", {className: De()(Tf.commentItemContainer, zf({}, Tf[r], Boolean(Tf[r])))}, p.createElement("div", {className: Tf.avatar}, p.createElement("div", {
                    onClick: function () {
                        location.href = qf(R, l, u)
                    }
                }, p.createElement(to, {
                    src: N,
                    type: "extraSmall",
                    alt: "".concat(I, "头像")
                }))), p.createElement("div", {className: Tf.contentContainer}, p.createElement("div", {className: Tf.infoWrap}, p.createElement("div", {className: Tf.nickWrap}, p.createElement("div", {className: Tf.nickname}, p.createElement("a", {href: qf(R, l, u)}, p.createElement(El, {text: I})), O && C && p.createElement(p.Fragment, null, p.createElement(Ef, {className: Tf.triggle}), p.createElement("a", {href: qf(k, l, u)}, p.createElement(El, {text: O})))), x && p.createElement(kf, {
                    type: 1 === _ ? "label" : "default",
                    className: De()(Tf.tag, zf({}, Tf.defaultTag, 1 !== _))
                }, x) || ""), p.createElement("div", null, p.createElement("p", {className: Tf.timeWrap}, w && Qf(1e3 * w)))), p.createElement("p", null, p.createElement("span", {className: Tf.actionText}, p.createElement(El, {
                    text: b,
                    textExtra: y,
                    stickyInfo: j
                }, S ? p.createElement("span", null, "转发 · ") : "")), P[0] && p.createElement(kf, {
                    type: "default",
                    className: De()(Tf.tag, Tf.defaultTag)
                }, " ", P[0].text) || "", A && p.createElement(kf, {
                    type: "default",
                    className: De()(Tf.tag, Tf.defaultTag)
                }, "置顶") || ""), p.createElement("div", {className: Tf.opContainer}, p.createElement("div", {className: Tf.statsContainer}, p.createElement("p", {className: Tf.stats}, p.createElement(Bf, null), p.createElement("span", null, Vf(h || 0)))), i && !m && E && p.createElement("button", {
                    type: "button",
                    className: Tf.replyExpandBtn,
                    onClick: function () {
                        v(!0)
                    }
                }, p.createElement("span", null, "展开", E, "条回复"), p.createElement(Ve, {
                    src: Ff,
                    color: bt
                })) || ""), i && m && E && c, f && p.createElement("div", {className: Tf.dividWrap}, p.createElement(yf, null))))
            }

            function Xf() {
                return (Xf = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Yf = function (e) {
                return p.createElement("svg", Xf({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Wf || (Wf = p.createElement("path", {
                    d: "M10.065 22.592a1.928 1.928 0 010-2.728l7-7a1.928 1.928 0 012.728 0l.015.016 6.985 6.984a1.928 1.928 0 11-2.727 2.728l-5.637-5.637-5.637 5.637a1.928 1.928 0 01-2.727 0z",
                    fill: "#0A0C20"
                })))
            }, Zf = "dcf8057cf54e16c8f3718fe9fd11a3cd-scss", Jf = "b82d8f7a3085b37109200dce4939beb8-scss";

            function Gf(e) {
                return function (e) {
                    if (Array.isArray(e)) return rd(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || nd(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function $f(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function ed(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            $f(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            $f(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function td(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || nd(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function nd(e, t) {
                if (e) {
                    if ("string" == typeof e) return rd(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rd(e, t) : void 0
                }
            }

            function rd(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ad(e) {
                var t = e.replyInfo;
                return p.createElement(Kf, {commentInfo: t})
            }

            function od(e) {
                var t = e.defaultReply, n = void 0 === t ? [] : t, r = e.replyTotal, a = e.fetchReply,
                    o = e.firstReplyCount, i = void 0 === o ? 3 : o, c = e.replyCount, l = void 0 === c ? 10 : c,
                    u = e.scrollContainerEl, s = (0, p.useMemo)((function () {
                        return n.map((function (e) {
                            return e.cid
                        }))
                    }), [n]), f = r > ((null == n ? void 0 : n.length) || 0), d = td((0, p.useState)([]), 2), m = d[0],
                    v = d[1], g = (0, p.useRef)(0), h = (0, p.useRef)(f), b = td((0, p.useState)(!1), 2), y = b[0],
                    w = b[1], E = td((0, p.useState)(!0), 2), x = E[0], _ = E[1], A = (0, p.useRef)(null),
                    O = p.useCallback(ed(regeneratorRuntime.mark((function e() {
                        var t, n, r, o, c, u, s = arguments;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = s.length > 0 && void 0 !== s[0] && s[0], y || !h.current) {
                                        e.next = 12;
                                        break
                                    }
                                    return w(!0), e.next = 5, a(g.current, t ? i : l);
                                case 5:
                                    n = e.sent, r = n.statusCode, o = n.comments, c = n.cursor, u = n.hasMore, 0 === r && (h.current = u, g.current = c, v((function (e) {
                                        return [].concat(Gf(e), Gf(o))
                                    }))), w(!1);
                                case 12:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [i, l, y]), C = p.useCallback((function () {
                        if (u = u || window, A.current && u && A.current.getBoundingClientRect().top < 122) {
                            _(!1);
                            var e = A.current.clientHeight, t = qe(u), n = t.x, r = t.y;
                            u.scrollTo(n, Math.max(r - e - 25, 0))
                        } else _(!1)
                    }), [u]), k = 0 === m.length && 0 === n.length;
                (0, p.useEffect)((function () {
                    k && O(!0)
                }), [k]);
                var P = r - n.length, j = null;
                return y ? j = p.createElement(Fu, {text: ""}) : P > 0 && (j = h.current ? p.createElement("button", {
                    type: "button",
                    className: Jf,
                    onClick: function () {
                        O(0 === m.length)
                    }
                }, m.length > 0 ? p.createElement("span", null, "展开更多") : p.createElement("span", null, "展开", P, "条回复"), p.createElement(Ve, {
                    src: Ff,
                    color: bt
                })) : x ? p.createElement("button", {
                    type: "button",
                    className: Jf,
                    onClick: C
                }, p.createElement("span", null, "收起"), p.createElement(Ve, {
                    src: Yf,
                    color: bt
                })) : p.createElement("button", {
                    type: "button", className: Jf, onClick: function () {
                        _(!0)
                    }
                }, p.createElement("span", null, "展开", P, "条回复"), p.createElement(Ve, {
                    src: Ff,
                    color: bt
                }))), p.createElement("div", {className: Zf, ref: A}, n.map((function (e) {
                    return p.createElement(ad, {replyInfo: e, key: e.cid})
                })), x && m.filter((function (e) {
                    return !s.includes(e.cid)
                })).map((function (e) {
                    return p.createElement(ad, {replyInfo: e, key: e.cid})
                })), y ? p.createElement(Fu, {text: ""}) : j)
            }

            function id(e) {
                var t = e.type, n = void 0 === t ? "clarity" : t, r = e.commentInfo, a = e.fetchReply,
                    o = void 0 === a ? null : a, i = e.isNeedReply, c = void 0 === i || i, l = e.scrollContainerEl,
                    u = e.awemeInfo, s = e.userInfo, f = e.awemelogPb, d = r.cid, m = p.useCallback((function (e, t) {
                        return null == o ? void 0 : o(d, e, t)
                    }), [o, d]);
                return p.createElement("div", null, p.createElement(Kf, {
                    awemelogPb: f,
                    type: n,
                    commentInfo: r,
                    isNeedReply: c,
                    awemeInfo: u,
                    userInfo: s,
                    isNeedDivid: !0
                }, p.createElement(od, {
                    fetchReply: m,
                    scrollContainerEl: l,
                    replyTotal: (null == r ? void 0 : r.replyTotal) || 0,
                    defaultReply: (null == r ? void 0 : r.replyComment) || []
                })))
            }

            var cd = "_2b22e342b8c47a455d1f3ef37ea9e7b2-scss", ld = "_25f0ee03b8c6561fb398f48c27f04ebe-scss",
                ud = "_933b69f01010c3db090e6b1cf8d5c73a-scss", sd = "_55599f22c0f9ab22c07603f367a65225-scss",
                fd = "af0f88d04c3a21977735983f9bd58583-scss", dd = "_7586d2516d90247952e2ad75804cced7-scss",
                md = "_3353648fcc12e58fdf35b852b36d5d99-scss";

            function pd(e) {
                return function (e) {
                    if (Array.isArray(e)) return yd(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || bd(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function vd(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function gd(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            vd(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            vd(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function hd(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || bd(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function bd(e, t) {
                if (e) {
                    if ("string" == typeof e) return yd(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yd(e, t) : void 0
                }
            }

            function yd(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function wd(e) {
                var t = e.reload;
                return p.createElement("div", {className: cd}, "服务异常，", p.createElement("span", {
                    onClick: t,
                    className: ld
                }, "刷新"), "拉取数据")
            }

            function Ed(e) {
                var t = e.isInit, n = void 0 !== t && t, r = e.defaultommentList, a = void 0 === r ? [] : r,
                    o = e.defaultCursor, i = void 0 === o ? 0 : o, c = e.defaultHotsoonHasMoreRef,
                    l = void 0 === c ? 0 : c, u = e.defaultHasMore, s = void 0 === u || u, f = e.defaultStatusCode,
                    d = void 0 === f ? 0 : f, m = e.count, v = void 0 === m ? 20 : m, g = e.scrollContainerEl,
                    h = void 0 === g ? null : g, b = e.fetchComment, y = e.fetchReply, w = e.awemeInfo, E = e.userInfo,
                    x = e.awemelogPb, _ = e.needFirstPause, A = void 0 !== _ && _, O = hd((0, p.useState)(a), 2),
                    C = O[0], k = O[1], P = (0, p.useRef)(i), j = (0, p.useRef)(s), S = hd((0, p.useState)(d), 2),
                    I = S[0], N = S[1], R = (0, p.useRef)(l), T = (0, p.useRef)(null), M = (0, p.useRef)(n),
                    L = (0, p.useRef)(!1), B = (0, p.useRef)(null != a && a.length ? 1 : 0);
                (0, p.useEffect)((function () {
                    return L.current = !1, function () {
                        L.current = !0
                    }
                }), []);
                var D = p.useCallback(gd(regeneratorRuntime.mark((function e() {
                    var t, n, r, a, o, i;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (1 !== B.current || !A) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (M.current || !j.current) {
                                    e.next = 25;
                                    break
                                }
                                return M.current = !0, e.prev = 4, e.next = 7, b(P.current, v);
                            case 7:
                                if (t = e.sent, n = t.statusCode, r = t.comments, a = t.cursor, o = t.hasMore, i = t.hotsoonHasMore, B.current < 1 && B.current++, !L.current) {
                                    e.next = 17;
                                    break
                                }
                                return e.abrupt("return");
                            case 17:
                                N(n), 0 === n && (P.current = a, j.current = o, R.current = i, k((function (e) {
                                    return [].concat(pd(e), pd(r))
                                }))), e.next = 24;
                                break;
                            case 21:
                                e.prev = 21, e.t0 = e.catch(4), N(-1);
                            case 24:
                                M.current = !1;
                            case 25:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[4, 21]])
                }))), [v]);
                (0, p.useEffect)((function () {
                    0 === C.length && D()
                }), [D, C.length]), (0, p.useEffect)((function () {
                    var e = Iu()((function () {
                        T && T.current && (T.current.getBoundingClientRect().bottom <= window.innerHeight + 250 && D())
                    }), 500);
                    return (h = h || document) && j.current && 0 === I && (h.addEventListener("scroll", e), window.addEventListener("resize", e), e()), function () {
                        h && j.current && (h.removeEventListener("scroll", e), window.removeEventListener("resize", e))
                    }
                }), [h, D, I]);
                var F = !1, z = null;
                return 0 === I ? j.current ? z = A && 1 === B.current ? p.createElement("div", {className: md}, p.createElement(lo, {
                    style: {width: "100%"},
                    theme: "border",
                    size: "small",
                    type: "secondary",
                    onClick: gd(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return B.current++, e.next = 3, D();
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }, "点击加载更多")) : p.createElement(Fu, {
                    className: "",
                    text: ""
                }) : R.current ? z = p.createElement("p", {className: cd}, "部分评论因未授权抖音，暂不支持查看") : 0 === C.length ? (z = p.createElement("div", {className: cd}, p.createElement(Vc, {
                    desc: "暂无评论",
                    title: "",
                    className: dd
                })), F = !0) : z = p.createElement("div", {className: cd}, "暂时没有更多评论") : z = p.createElement(wd, {
                    reload: function () {
                        N(0), D()
                    }
                }), p.createElement(p.Fragment, null, !F && p.createElement("div", {className: ud}, p.createElement("span", {className: sd}, "全部评论"), p.createElement("div", {className: fd}, p.createElement(yf, null))), p.createElement("div", {ref: T}, C.map((function (e) {
                    return p.createElement(id, {
                        userInfo: E,
                        awemeInfo: w,
                        key: e.cid,
                        commentInfo: e,
                        fetchReply: y,
                        scrollContainerEl: h,
                        awemelogPb: x
                    })
                })), z))
            }

            function xd(e) {
                var t = e.awemeId, n = e.awemeInfo, r = e.userInfo, a = e.defaultComment, o = e.awemelogPb,
                    i = p.useCallback((function (e, n) {
                        return yr({awemeId: t, cursor: e, count: n})
                    }), [t]), c = p.useCallback((function (e, n, r) {
                        return function (e) {
                            return Er.apply(this, arguments)
                        }({awemeId: t, commentId: e, cursor: n, count: r})
                    }), [t]);
                if (!t) return p.createElement(p.Fragment, null);
                var l = 0 === (null == a ? void 0 : a.statusCode);
                return p.createElement(p.Fragment, null, p.createElement("div", {className: hf}, p.createElement(Ed, {
                    awemelogPb: o,
                    defaultommentList: (null == a ? void 0 : a.comments) || [],
                    defaultCursor: (null == a ? void 0 : a.cursor) || 0,
                    defaultHotsoonHasMoreRef: l ? null == a ? void 0 : a.hotsoonHasMore : 0,
                    defaultHasMore: !l || (null == a ? void 0 : a.hasMore),
                    defaultStatusCode: 0,
                    fetchComment: i,
                    fetchReply: c,
                    awemeInfo: n,
                    userInfo: r
                })))
            }

            function _d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ad(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _d(Object(n), !0).forEach((function (t) {
                        Od(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _d(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Od(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Cd(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function kd(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Cd(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Cd(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var Pd = vt;

            function jd() {
                return Sd.apply(this, arguments)
            }

            function Sd() {
                return (Sd = kd(regeneratorRuntime.mark((function e() {
                    var t, n, r, a, o, i, c = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = c.length > 0 && void 0 !== c[0] ? c[0] : "", r = c.length > 1 && void 0 !== c[1] ? c[1] : 1, e.next = 4, $t("/aweme/v1/web/commit/follow/user/", Ad(Ad({}, Pd), {}, (Od(t = {}, "user_id", n), Od(t, "type", Number(Boolean(r))), t)));
                            case 4:
                                return a = e.sent, o = a.log_pb && JSON.stringify(a.log_pb), i = a.status_code, 0 === a.status_code && void 0 === a.follow_status && (i = -1), e.abrupt("return", {
                                    logPb: o,
                                    statusCode: i,
                                    followStatus: a.follow_status,
                                    errMsg: 0 === i || a.status_msg ? a.status_msg : "啊哦，服务器打瞌睡了"
                                });
                            case 9:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Id(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Nd(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Id(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Id(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function Rd(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Td(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Td(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Td(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var Md = new S({
                follow: {eventName: "follow", params: {enter_from: "", to_user_id: ""}},
                followCancel: {eventName: "follow_cancel", params: {enter_from: "", to_user_id: ""}}
            });

            function Ld(e, t) {
                e || Md.sendLog("follow", {enter_from: me(), to_user_id: t})
            }

            function Bd(e, t) {
                e || Md.sendLog("followCancel", {enter_from: me(), to_user_id: t})
            }

            function Dd(e) {
                var t = e.followStatus, n = e.followerStatus, r = e.isLogin, a = e.uid, o = e.onLoginSuc,
                    i = e.onSuccFollow, c = e.onSuccUnFollow, l = e.useCustomLog, u = Rd((0, p.useState)(t), 2),
                    s = u[0], f = u[1], d = Rd((0, p.useState)(r), 2), m = d[0], v = d[1], g = (0, p.useRef)(n),
                    h = (0, p.useRef)(!1), b = (0, p.useRef)(a), y = "关注", w = 0;
                1 === s ? (y = "已关注", w = 1) : 2 === s ? (y = "互相关注", w = 1) : 4 === s ? (y = "已请求", w = 1) : g.current > 0 && (y = "回关");
                var E = (0, p.useCallback)(function () {
                    var e = Nd(regeneratorRuntime.mark((function e(t, n, r) {
                        var a, o, u, s, d;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, jd(t, n);
                                case 3:
                                    a = e.sent, o = a.statusCode, u = a.followStatus, s = a.errMsg, d = a.logPb, o ? (nc.info(s), o === st.ERROR_USER_UNLOGIN && v(0)) : (1 === u || 2 === u ? (nc.info("已关注"), i && i(d), Ld(l, t)) : 4 === u ? (nc.info("已请求"), i && i(d), Ld(l, t)) : 4 === r ? (nc.info("已取消关注请求"), c && c(d), Bd(l, t)) : (nc.info("已取消关注"), c && c(d), Bd(l, t)), b.current !== t && b.current || f(u), v(1)), e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(0), nc.info("关注失败");
                                case 14:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 11]])
                    })));
                    return function (t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(), []), x = (0, p.useCallback)(function () {
                    var e = Nd(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (m) {
                                        e.next = 4;
                                        break
                                    }
                                    Oe({
                                        success: function () {
                                            var e = Nd(regeneratorRuntime.mark((function e() {
                                                return regeneratorRuntime.wrap((function (e) {
                                                    for (; ;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, null == o ? void 0 : o();
                                                        case 2:
                                                            return e.next = 4, E(t, 1, s);
                                                        case 4:
                                                        case"end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function () {
                                                return e.apply(this, arguments)
                                            }
                                        }(), enterMethod: "follow"
                                    }), e.next = 10;
                                    break;
                                case 4:
                                    if (!h.current && t) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return h.current = !0, e.next = 9, E(t, !w, s);
                                case 9:
                                    h.current = !1;
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), [m, w, s]);
                return {
                    text: y, type: w, changeStatus: function (e, t, r, a) {
                        void 0 !== n && (g.current = r), b.current = a, f(e), v(t)
                    }, onChangeFollowStatus: x
                }
            }

            var Fd = "_5d8be58ad5f4d44a3d5aad430a387721-scss", zd = "_27d72bae9f835ee6648bae5aead3d956-scss",
                Ud = "c5c8d04ef7d8685c4610cd0b11b5c6be-scss", Hd = "b7cc6985317a8e453cc814711a313019-scss", Wd = {
                    Personal: p.createElement("div", {className: Ud}),
                    Enterprise: p.createElement("div", {className: Hd})
                };

            function Qd(e) {
                var t = e.className, n = e.userInfo, r = n.customVerify, a = n.enterpriseVerifyReason;
                return p.createElement(p.Fragment, null, (r || a) && p.createElement("div", {className: De()(Fd, t)}, a ? Wd.Enterprise : Wd.Personal, p.createElement("span", {className: zd}, a || r)))
            }

            function Vd(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function qd(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Vd(Object(n), !0).forEach((function (t) {
                        Kd(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vd(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Kd(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Xd() {
                var e = (0, ie.k6)();
                return {
                    push: function (t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e.push(qd(qd({pathname: t}, n), {}, {extra: qd({isSpa: !0}, n.extra || {})}))
                    }
                }
            }

            var Yd = {
                container: "_83db846b679aa45f1e4484bab3e6f9a7-scss",
                badge: "b7391a522892d662118f65de2972a077-scss",
                noMoreText: "e6496fa18bea1489f891d260a232dfc5-scss",
                opBtn: "_0e6a20947cf2abc8868affa0187ad70f-scss",
                userContainer: "_92512541734704081f350a4d5f5650bc-scss",
                userInfoWrap: "_976c31c5a089c1b1b6d8809f82aa9a7a-scss",
                title: "_68f42b31b21901f17a4cac909b3dd86a-scss",
                stats: "_8d24558261abe1e52a36814bf8a1dd84-scss",
                text: "c21b9a5a18beec7090b44420f0957f8e-scss",
                number: "_6cb45f0985d8d9bec3689193e1e43f55-scss",
                followBtnWrap: "_1eaea836cf3e2028633e489fba379514-scss",
                episodeContainer: "_6ac94fcf7302ca9c396f86834e9efd33-scss",
                episodeNum: "_6d530a85e60f767d742337b3ac999a13-scss",
                boxContainer: "f5287cb4cdbeba685ae629fd42bef2d1-scss",
                expand: "_04690145c187acb3be56b08b9eff6360-scss",
                primary: "_754f22d851ec9453de3a6feae0b1ef3a-scss",
                coverageContainer: "de86a28b214413f6162c650141758cf2-scss",
                titleContainer: "cddad4028129b401fb414dbeac836a87-scss",
                more: "_28b4f95b5c1c53a6158fcb9da3f09083-scss",
                cardWrap: "_5d5fdde630aeb329e04a2fca8f19e78e-scss",
                moreBtnWrap: "_1d68c1df9268ef77e64c76f9c859d4ce-scss",
                moreBtn: "_6bc16b1574a432943edf16be0ad85276-scss"
            };

            function Zd(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Jd(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Gd(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Jd(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Jd(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function $d(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return em(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return em(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function em(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var tm = xn;

            function nm(e) {
                var t = e.onClick;
                return p.createElement("button", {type: "button", className: Yd.moreBtn, onClick: t}, "点击加载更多")
            }

            function rm(e) {
                var t = e.reload;
                return p.createElement("div", {className: Yd.noMoreText}, "服务异常，请", p.createElement("span", {
                    onClick: t,
                    className: Yd.opBtn
                }, "刷新"), "重试")
            }

            function am(e) {
                var t, n, r, a, o, i, c, l, u, s, f = e.awemeInfo, d = e.isReoload, m = e.awemelogPb,
                    v = (0, p.useContext)(tm) || {}, g = v.userInfo, h = v.dispatch,
                    b = (null == f ? void 0 : f.authorInfo) || {}, y = b.uid, w = b.secUid, E = {
                        author_id: null == f || null === (t = f.authorInfo) || void 0 === t ? void 0 : t.uid,
                        group_id: null == f ? void 0 : f.groupId,
                        log_pb: m
                    }, x = y && Pt(w, "enter_method=video_title&".concat((0, _.stringify)(E))) || "",
                    A = null == f || null === (n = f.authorInfo) || void 0 === n ? void 0 : n.followStatus,
                    O = null == f || null === (r = f.authorInfo) || void 0 === r ? void 0 : r.followerStatus,
                    C = g.isLogin, k = (g.info, Dd({
                        followStatus: A,
                        followerStatus: O,
                        isLogin: C,
                        uid: null == f || null === (a = f.authorInfo) || void 0 === a ? void 0 : a.uid,
                        useCustomLog: !0,
                        onSuccFollow: function (e) {
                            var t;
                            gf.sendLog("follow", {
                                urlParamList: ["previous_page"],
                                author_id: null == f || null === (t = f.authorInfo) || void 0 === t ? void 0 : t.uid,
                                group_id: null == f ? void 0 : f.groupId,
                                log_pb: e,
                                enter_from: me()
                            })
                        },
                        onSuccUnFollow: function (e) {
                            var t;
                            gf.sendLog("followCancel", {
                                urlParamList: ["previous_page"],
                                author_id: null == f || null === (t = f.authorInfo) || void 0 === t ? void 0 : t.uid,
                                group_id: null == f ? void 0 : f.groupId,
                                log_pb: e,
                                enter_from: me()
                            })
                        },
                        onLoginSuc: function () {
                            return h({type: "updateUserInfo"})
                        }
                    })), P = k.changeStatus, j = k.type, S = k.text, I = k.onChangeFollowStatus;
                return (0, p.useEffect)((function () {
                    var e;
                    d && P(A, C, O, null == f || null === (e = f.authorInfo) || void 0 === e ? void 0 : e.uid)
                }), [A, O, C, d, null == f || null === (o = f.authorInfo) || void 0 === o ? void 0 : o.uid]), p.createElement(p.Fragment, null, p.createElement("div", {className: Yd.userContainer}, p.createElement("div", null, p.createElement("a", {href: x}, p.createElement(to, {
                    type: "default",
                    src: null == f || null === (i = f.authorInfo) || void 0 === i ? void 0 : i.avatarUri
                }))), p.createElement("div", {className: Yd.userInfoWrap}, p.createElement("a", {href: x}, p.createElement("div", {className: Yd.title}, p.createElement(El, {text: (null == f || null === (c = f.authorInfo) || void 0 === c ? void 0 : c.nickname) || ""}), p.createElement(Qd, {
                    userInfo: (null == f ? void 0 : f.authorInfo) || {},
                    className: Yd.badge
                }))), p.createElement("p", {className: Yd.stats}, p.createElement("span", {className: Yd.text}, "粉丝"), p.createElement("span", {className: Yd.number}, il((null == f || null === (l = f.authorInfo) || void 0 === l ? void 0 : l.followerCount) || 0)), p.createElement("span", {className: Yd.text}, "获赞"), p.createElement("span", {className: Yd.number}, il((null == f || null === (u = f.authorInfo) || void 0 === u ? void 0 : u.totalFavorited) || 0)))), p.createElement("div", {className: Yd.followBtnWrap}, y === (null == g || null === (s = g.info) || void 0 === s ? void 0 : s.uid) ? "" : p.createElement(lo, {
                    size: "small",
                    type: 0 !== j ? "secondary" : "primary",
                    onClick: function () {
                        var e;
                        I(null == f || null === (e = f.authorInfo) || void 0 === e ? void 0 : e.uid)
                    }
                }, S))))
            }

            function om(e) {
                var t = e.awemeId, n = e.title, r = e.fetchMore, a = e.children, o = e.videoList, i = e.hasMore,
                    c = e.rendItem, l = e.statusCode, u = void 0 === l ? 0 : l, s = e.mixId, f = e.relateInfo,
                    d = $d((0, p.useState)(!1), 2), m = d[0], v = d[1], g = (0, p.useRef)(!1), h = (0, p.useRef)(null),
                    b = Xd();
                h.current = r, o = o || [];
                var y = p.useCallback(Gd(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (s && gf.sendLog("compilationClickMore", {compilation_id: s}), !g.current) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return g.current = !0, v(!0), e.prev = 5, e.next = 8, h.current();
                            case 8:
                                e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(5);
                            case 12:
                                g.current = !1, v(!1);
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[5, 10]])
                }))), []), w = function (e) {
                    var t, n = null == f ? void 0 : f.data[e];
                    gf.sendLog("videoCoverShow", {
                        author_id: null == n || null === (t = n.authorInfo) || void 0 === t ? void 0 : t.uid,
                        log_pb: f.logPb,
                        group_id: null == n ? void 0 : n.groupId,
                        enter_from: me(),
                        rank: e
                    })
                };
                return p.createElement("div", {className: Yd.coverageContainer}, p.createElement("div", {className: Yd.titleContainer}, p.createElement("p", {className: Yd.title}, n), p.createElement("div", {className: Yd.left}, a)), p.createElement("ul", null, o.map((function (e, n) {
                    return p.createElement("li", {
                        className: Yd.cardWrap,
                        key: e.awemeId
                    }, c && c(e, n) || p.createElement(Hl, {
                        onShow: w,
                        rank: n,
                        imgSrc: e.video.cover,
                        videoUrl: kt(e.awemeId),
                        onClick: function (r) {
                            var a;
                            r.preventDefault(), window.scrollTo(0, 0), gf.sendLog("videoCoverClick", {
                                author_id: null == e || null === (a = e.authorInfo) || void 0 === a ? void 0 : a.uid,
                                log_pb: null == f ? void 0 : f.logPb,
                                group_id: null == e ? void 0 : e.groupId,
                                enter_from: me(),
                                rank: n
                            }), b.push(Ot(e.awemeId, "pre_vid=".concat(t, "&previous_page=").concat(me())))
                        },
                        title: e.desc,
                        diggNum: e.stats.diggCount
                    }))
                }))), m ? p.createElement(p.Fragment, null, p.createElement(Wl, null), p.createElement(Wl, null), p.createElement(Wl, null), p.createElement(Wl, null), p.createElement(Wl, null), p.createElement(Wl, null), p.createElement(Fu, null)) : 0 === o.length ? 0 === u ? p.createElement(p.Fragment, null, p.createElement(Wl, null), p.createElement(Wl, null), p.createElement(Wl, null), p.createElement(Wl, null), p.createElement(Wl, null), p.createElement(Wl, null), p.createElement(Fu, null)) : p.createElement(rm, {
                    reload: function () {
                        y()
                    }
                }) : r && Boolean(i) && p.createElement("div", {className: Yd.moreBtnWrap}, p.createElement(nm, {onClick: y})))
            }

            function im(e) {
                for (var t = e.totalEpisode, n = e.currentEpisode, r = e.mixId, a = [], o = 0; o < t; o++) a.push(o + 1);
                var i = Xd(), c = $d((0, p.useState)(!1), 2), l = c[0], u = c[1], s = (0, p.useRef)(null);
                return (0, p.useEffect)((function () {
                    var e = function () {
                        u(!1)
                    };
                    return document.addEventListener("click", e), function () {
                        document.removeEventListener("click", e)
                    }
                }), []), p.createElement("div", {
                    className: Yd.episodeContainer, onClick: function (e) {
                        e.stopPropagation()
                    }
                }, p.createElement("div", {
                    className: Yd.episodeNum, onClick: function () {
                        if (u(!l), !l) {
                            var e = 36 * (n - 1);
                            setTimeout((function () {
                                var t, n;
                                null == s || null === (t = s.current) || void 0 === t || null === (n = t.scrollTo) || void 0 === n || n.call(t, 0, e)
                            }), 0)
                        }
                    }
                }, p.createElement("span", null, t, "集"), l ? p.createElement(Ve, {
                    src: Yf,
                    color: yt
                }) : p.createElement(Ve, {
                    src: Ff,
                    color: yt
                })), p.createElement("div", {className: De()(Yd.boxContainer, Zd({}, Yd.expand, l))}, p.createElement("ul", {ref: s}, a.map((function (e, t) {
                    return p.createElement("li", {key: t}, p.createElement("a", {
                        href: It(r, e - 1),
                        onClick: function (t) {
                            u(!1), t.preventDefault(), window.scrollTo(0, 0), gf.sendLog("compilationDropDownMenuClick", {compilation_id: r}), i.push(Ct(r, e - 1, "previous_page=".concat(me())))
                        },
                        className: De()(Zd({}, Yd.primary, e === n))
                    }, "第", e, "集"))
                })))))
            }

            function cm(e) {
                var t, n, r, a, o = e.awemeInfo, i = e.mixInfo, c = e.loadMoreMixInfo,
                    l = (null == o ? void 0 : o.mixInfo) || {}, u = l.mixId, s = l.currentEpisode, f = Xd();
                if (!o || !u) return p.createElement(p.Fragment, null);
                var d = function (e) {
                    var t, n;
                    gf.sendLog("collectionCoverShow", {
                        enter_from: me(),
                        compilation_id: u,
                        compilation_video_cnt: null == o || null === (t = o.mixInfo) || void 0 === t ? void 0 : t.totalEpisode,
                        author_id: null == o || null === (n = o.authorInfo) || void 0 === n ? void 0 : n.uid,
                        group_id: null == o ? void 0 : o.groupId,
                        log_pb: null == i ? void 0 : i.logPb,
                        rank: e
                    })
                };
                return p.createElement(om, {
                    mixId: u,
                    title: null == o || null === (t = o.mixInfo) || void 0 === t ? void 0 : t.mixName,
                    statusCode: null == i ? void 0 : i.statusCode,
                    videoList: null == i ? void 0 : i.data,
                    hasMore: null == i ? void 0 : i.hasMore,
                    fetchMore: Gd(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, c(u, null == i ? void 0 : i.cursor);
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))),
                    rendItem: function (e, t) {
                        var n, r, a;
                        return p.createElement(Hl, {
                            onShow: d,
                            rank: t,
                            type: (null == e || null === (n = e.mixInfo) || void 0 === n ? void 0 : n.currentEpisode) === s ? "primary" : "default",
                            imgSrc: e.video.cover,
                            videoUrl: kt(e.awemeId),
                            onClick: function (n) {
                                var r, a;
                                gf.sendLog("collectionCoverClick", {
                                    enter_from: me(),
                                    compilation_id: u,
                                    compilation_video_cnt: null == o || null === (r = o.mixInfo) || void 0 === r ? void 0 : r.totalEpisode,
                                    author_id: null == o || null === (a = o.authorInfo) || void 0 === a ? void 0 : a.uid,
                                    group_id: null == o ? void 0 : o.groupId,
                                    log_pb: null == i ? void 0 : i.logPb,
                                    rank: t
                                }), n.preventDefault(), window.scrollTo(0, 0), f.push(Ot(e.awemeId, "previous_page=".concat(me())))
                            },
                            title: "".concat((null == e || null === (r = e.mixInfo) || void 0 === r ? void 0 : r.currentEpisode) && "第".concat(null == e || null === (a = e.mixInfo) || void 0 === a ? void 0 : a.currentEpisode, "集 "), " | ").concat(e.desc),
                            diggNum: e.stats.diggCount
                        })
                    }
                }, p.createElement(im, {
                    totalEpisode: null == o || null === (n = o.mixInfo) || void 0 === n ? void 0 : n.totalEpisode,
                    currentEpisode: null == o || null === (r = o.mixInfo) || void 0 === r ? void 0 : r.currentEpisode,
                    mixId: null == o || null === (a = o.mixInfo) || void 0 === a ? void 0 : a.mixId
                }))
            }

            function lm(e) {
                var t = e.awemeInfo, n = e.relateInfo, r = e.loadMoreRelateInfo, a = (t || {}).awemeId;
                return t ? p.createElement(om, {
                    title: "推荐视频",
                    awemeId: a,
                    statusCode: null == n ? void 0 : n.statusCode,
                    videoList: n.data,
                    hasMore: n.hasMore,
                    relateInfo: n,
                    fetchMore: Gd(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r(a);
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }) : p.createElement(p.Fragment, null)
            }

            function um(e) {
                var t = e.awemeInfo, n = e.mixInfo, r = e.loadMoreMixInfo, a = e.relateInfo, o = e.loadMoreRelateInfo,
                    i = e.isReoload, c = e.awemelogPb;
                return p.createElement("div", {className: Yd.container}, p.createElement(am, {
                    awemelogPb: c,
                    awemeInfo: t,
                    isReoload: i
                }), p.createElement(yf, null), p.createElement(cm, {
                    awemeInfo: t,
                    mixInfo: n,
                    loadMoreMixInfo: r
                }), p.createElement(lm, {awemeInfo: t, relateInfo: a, loadMoreRelateInfo: o}))
            }

            var sm = new S({
                like: {
                    eventName: "like",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                cancelLike: {
                    eventName: "cancel_like",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                clickCommentButton: {
                    eventName: "click_comment_button",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                shareMenuShow: {
                    eventName: "share_menu_show",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                shareVideo: {
                    eventName: "share_video",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                follow: {
                    eventName: "follow",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                followCancel: {
                    eventName: "follow_cancel",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                },
                enterPersonalDetail: {
                    eventName: "enter_personal_detail",
                    params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                }
            });

            function fm(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function dm(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? fm(Object(n), !0).forEach((function (t) {
                        mm(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fm(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function mm(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function pm(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function vm(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            pm(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            pm(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var gm, hm = vt;

            function bm() {
                return ym.apply(this, arguments)
            }

            function ym() {
                return (ym = vm(regeneratorRuntime.mark((function e() {
                    var t, n, r, a, o, i = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = i.length > 0 && void 0 !== i[0] ? i[0] : "", r = i.length > 1 && void 0 !== i[1] ? i[1] : 1, e.next = 4, $t("/aweme/v1/web/commit/item/digg/", dm(dm({}, hm), {}, (mm(t = {}, "aweme_id", n), mm(t, "type", Number(r)), t)));
                            case 4:
                                return a = e.sent, o = a.status_code, 0 === a.status_code && void 0 === a.is_digg && (o = -1), e.abrupt("return", {
                                    logPb: a.log_pb && JSON.stringify(a.log_pb),
                                    statusCode: o,
                                    isDigg: a.is_digg,
                                    errMsg: 0 === o || a.status_msg ? a.status_msg : "啊哦，服务器打瞌睡了"
                                });
                            case 8:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function wm(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Em(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            wm(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            wm(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function xm(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _m(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Am() {
                return (Am = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Om, Cm, km = function (e) {
                return p.createElement("svg", Am({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), gm || (gm = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.19 9.74c1.03-1.466 2.718-2.24 4.576-2.24 3.54 0 6.483 3.07 6.483 6.72v.001h.001c0 .103-.002.182-.003.24a.539.539 0 00.003.133c-.014.767-.146 1.402-.381 2.24-.134.15-.258.434-.382.746-.195.303-.269.45-.381.747-.095.16-.195.32-.3.48-.959 1.48-2.266 2.955-3.568 4.258-1.969 1.983-3.969 3.631-4.84 4.35-.243.2-.398.328-.442.372-.31.31-.621.318-.932.318H18c-.638 0-.956-.318-1.275-.637a3.037 3.037 0 00-.178-.15c-.968-.712-3.155-2.46-5.204-4.568-1.55-1.58-3.04-3.39-3.858-5.16-.319-.637-.717-2.154-.735-2.996.007-.007.006-.048.004-.128-.002-.06-.004-.14-.004-.246 0-3.651 2.942-6.72 6.483-6.72 1.855 0 3.546.774 4.957 2.24z",
                    fill: "#0A0C20"
                })))
            };

            function Pm() {
                return (Pm = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var jm, Sm, Im = function (e) {
                return p.createElement("svg", Pm({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Om || (Om = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M29.25 16.71c0 2.712-1.304 5.04-3.536 7.275-.196.197-.404.392-.62.584-1.953 2.171-3.86 3.437-5.583 3.94-2.243.657-1.376-2.42-1.348-2.518v-.002c-6.214 0-11.413-3.777-11.413-9.278S11.787 6.75 18 6.75c6.214 0 11.25 4.46 11.25 9.96zm-16.715 1.85c.888 0 1.608-.715 1.608-1.597 0-.88-.72-1.595-1.608-1.595-.887 0-1.607.714-1.607 1.595 0 .882.72 1.596 1.607 1.596zm7.072-1.597c0 .882-.72 1.596-1.607 1.596a1.602 1.602 0 01-1.608-1.596c0-.88.72-1.595 1.608-1.595.887 0 1.607.714 1.607 1.595zm3.857 1.596c.888 0 1.607-.714 1.607-1.596a1.6 1.6 0 00-1.607-1.595c-.888 0-1.607.714-1.607 1.595 0 .882.72 1.596 1.607 1.596z",
                    fill: "#0A0C20"
                })), Cm || (Cm = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M29.25 16.71c0 2.712-1.304 5.04-3.536 7.275-.196.197-.404.392-.62.584-1.953 2.171-3.86 3.437-5.583 3.94-2.243.657-1.376-2.42-1.348-2.518v-.002c-6.214 0-11.413-3.777-11.413-9.278S11.787 6.75 18 6.75c6.214 0 11.25 4.46 11.25 9.96zm-16.715 1.85c.888 0 1.608-.715 1.608-1.597 0-.88-.72-1.595-1.608-1.595-.887 0-1.607.714-1.607 1.595 0 .882.72 1.596 1.607 1.596zm7.072-1.597c0 .882-.72 1.596-1.607 1.596a1.602 1.602 0 01-1.608-1.596c0-.88.72-1.595 1.608-1.595.887 0 1.607.714 1.607 1.595zm3.857 1.596c.888 0 1.607-.714 1.607-1.596a1.6 1.6 0 00-1.607-1.595c-.888 0-1.607.714-1.607 1.595 0 .882.72 1.596 1.607 1.596z",
                    fill: "#0A0C20"
                })))
            };

            function Nm() {
                return (Nm = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Rm, Tm = function (e) {
                    return p.createElement("svg", Nm({
                        width: 36,
                        height: 36,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), jm || (jm = p.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21.884 9.417c-1.209-1.157-3.214-.3-3.214 1.373v2.396c-.132 0-.263.001-.393.004-1.402-.039-6.254.115-9.667 3.775-2.361 2.532-3.423 6.562-3.357 8.64-.062 2.075.905 1.888 1.165 1.41 2.976-5.46 12.252-3.79 12.252-3.79v2.265c0 1.637 1.932 2.508 3.159 1.424l7.989-7.059a1.9 1.9 0 00.055-2.797l-7.99-7.641z",
                        fill: "#0A0C20"
                    })), Sm || (Sm = p.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21.884 9.417c-1.209-1.157-3.214-.3-3.214 1.373v2.396c-.132 0-.263.001-.393.004-1.402-.039-6.254.115-9.667 3.775-2.361 2.532-3.423 6.562-3.357 8.64-.062 2.075.905 1.888 1.165 1.41 2.976-5.46 12.252-3.79 12.252-3.79v2.265c0 1.637 1.932 2.508 3.159 1.424l7.989-7.059a1.9 1.9 0 00.055-2.797l-7.99-7.641z",
                        fill: "#0A0C20"
                    })))
                }, Mm = "_9036a17f9488cffb2fbb167ee3cf819b-scss", Lm = "e0855af4151de070355c4d56e74b5c5e-scss",
                Bm = "_99cb8eda13900e275fd1a31ac257c97e-scss", Dm = "_0101d0dac9513f32356fa89903cf7f4e-scss",
                Fm = "_1c5fdff0b83f80174147ddcadc9f7141-scss", zm = "_3f5a4457e19c10aae6f40f4448fd9cb6-scss",
                Um = "_9c2452d0d6d8dbc6de035f37c1b11314-scss", Hm = "_63f39b0bbf80afa98948f5dc199307f7-scss",
                Wm = "_1ff76af5eb8264c41dbf36b70319d944-scss", Qm = "_891e9d38c00e1b78e2eae43ab8b92359-scss",
                Vm = "_47092d686b7362605f4af5f87053c987-scss", qm = "dc0ebe29d2f027b192f35e304bd51970-scss",
                Km = "_07991c9043badbe055fdf2acb3cbad62-scss", Xm = "_421d3aff42f03ac25665dc94de7ceadb-scss",
                Ym = "_74d826764c020e303e5a3170b33b0205-scss";
            n(94791);

            function Zm() {
                return (Zm = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Jm, Gm = function (e) {
                return p.createElement("svg", Zm({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Rm || (Rm = p.createElement("path", {
                    d: "M10 10.693c0-1.7 0-2.549.354-3.013A1.729 1.729 0 0111.64 7c.582-.03 1.284.45 2.687 1.409l9.697 6.63c1.097.75 1.646 1.126 1.843 1.598.172.414.177.878.014 1.296-.187.476-.727.863-1.808 1.638l-9.697 6.945c-1.413 1.013-2.12 1.52-2.71 1.498a1.728 1.728 0 01-1.305-.67C10 26.877 10 26.007 10 24.268V10.693z",
                    fill: "#0A0C20"
                })))
            };

            function $m() {
                return ($m = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var ep, tp = function (e) {
                return p.createElement("svg", $m({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Jm || (Jm = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11 10.282C11 9.574 11.514 9 12.149 9h1.596c.634 0 1.149.574 1.149 1.282v15.436c0 .708-.515 1.282-1.15 1.282H12.15C11.514 27 11 26.426 11 25.718V10.282zm11 0C22 9.574 22.514 9 23.149 9h1.596c.634 0 1.149.574 1.149 1.282v15.436c0 .708-.515 1.282-1.15 1.282H23.15C22.514 27 22 26.426 22 25.718V10.282z",
                    fill: "#0A0C20"
                })))
            };

            function np() {
                return (np = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var rp, ap = function (e) {
                return p.createElement("svg", np({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), ep || (ep = p.createElement("path", {
                    d: "M10.937 9.382C9.737 8.459 8 9.314 8 10.828v14.344c0 1.514 1.737 2.37 2.937 1.446l9.324-7.172c.95-.73.95-2.162 0-2.892l-9.324-7.172zM23.75 10.548c0-.69.56-1.25 1.25-1.25h1.214c.69 0 1.25.56 1.25 1.25V25.59c0 .69-.56 1.25-1.25 1.25H25c-.69 0-1.25-.56-1.25-1.25V10.548z",
                    fill: "#0A0C20"
                })))
            };

            function op() {
                return (op = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var ip, cp, lp = function (e) {
                return p.createElement("svg", op({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), rp || (rp = p.createElement("path", {
                    d: "M25.341 17.97c0-.46-.048-.793-.048-.793a.887.887 0 01.402-.828l1.002-.578a.557.557 0 00.203-.76L25 11.725a.559.559 0 00-.76-.204l-1.001.577a.896.896 0 01-.921-.063s-.267-.208-.656-.432a6.572 6.572 0 00-.717-.358.896.896 0 01-.516-.766V9.32a.558.558 0 00-.556-.556h-3.8a.558.558 0 00-.555.556v1.157c0 .306-.232.65-.515.766 0 0-.327.133-.717.357-.39.225-.657.433-.657.433a.896.896 0 01-.92.063l-1.001-.578a.558.558 0 00-.76.204l-1.9 3.289a.558.558 0 00.204.76l1 .577a.887.887 0 01.402.828s-.048.333-.048.792c0 .46.048.793.048.793a.887.887 0 01-.402.829l-1 .576a.557.557 0 00-.204.76l1.9 3.289a.558.558 0 00.76.203l1.002-.577a.894.894 0 01.92.064s.245.191.621.412c.4.233.752.377.752.377.283.115.515.46.515.766v1.156c0 .306.25.556.556.556h3.8c.305 0 .556-.25.556-.556v-1.156c0-.306.231-.65.515-.766 0 0 .324-.132.711-.355.391-.225.66-.435.66-.435a.896.896 0 01.922-.063l1.002.578a.558.558 0 00.76-.204l1.899-3.289a.557.557 0 00-.204-.76l-1-.576a.887.887 0 01-.402-.829s.048-.332.048-.793zm-7.367 3.067a3.069 3.069 0 113.07-3.068 3.069 3.069 0 01-3.07 3.068z",
                    fill: "#0A0C20"
                })))
            };

            function up() {
                return (up = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var sp, fp, dp = function (e) {
                return p.createElement("svg", up({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), ip || (ip = p.createElement("path", {
                    d: "M17.974 17.11c-.634 0-1.149.515-1.149 1.15v3.83c0 .634.515 1.148 1.15 1.148h4.595c.634 0 1.149-.514 1.149-1.148v-3.83c0-.635-.515-1.15-1.15-1.15h-4.595z",
                    fill: "#0A0C20"
                })), cp || (cp = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.463 10.026a2.49 2.49 0 00-2.489 2.49v11.488a2.49 2.49 0 002.49 2.49h13.02a2.49 2.49 0 002.49-2.49V12.515a2.49 2.49 0 00-2.49-2.49h-13.02zm-.574 2.49c0-.318.257-.575.575-.575h13.02c.318 0 .575.257.575.574v11.49a.574.574 0 01-.574.574H11.464a.574.574 0 01-.575-.575V12.515z",
                    fill: "#0A0C20"
                })))
            };

            function mp() {
                return (mp = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var pp, vp = function (e) {
                return p.createElement("svg", mp({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), sp || (sp = p.createElement("path", {
                    d: "M20.336 9.942c.288.138.472.43.472.75v15a.833.833 0 01-1.354.651l-5.605-3.984h-3.041a.833.833 0 01-.833-.833v-6.667c0-.46.373-.833.833-.833h3.04l5.606-3.984c.25-.2.593-.24.882-.1zM22.433 15.217a1.25 1.25 0 011.768.018 4.157 4.157 0 011.19 2.916 4.157 4.157 0 01-1.19 2.916 1.25 1.25 0 11-1.786-1.75c.296-.302.476-.712.476-1.166 0-.455-.18-.865-.476-1.167a1.25 1.25 0 01.018-1.767z",
                    fill: "#0A0C20"
                })), fp || (fp = p.createElement("path", {
                    d: "M26.512 11.647a1.25 1.25 0 00-1.408 2.066 5.41 5.41 0 012.37 4.48 5.41 5.41 0 01-2.37 4.48 1.25 1.25 0 101.408 2.065 7.91 7.91 0 003.462-6.545 7.91 7.91 0 00-3.462-6.546z",
                    fill: "#0A0C20"
                })))
            };

            function gp() {
                return (gp = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var hp, bp = function (e) {
                return p.createElement("svg", gp({
                    width: 36,
                    height: 36,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), pp || (pp = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.808 10.693a.833.833 0 00-1.354-.651l-5.605 3.984h-3.041a.833.833 0 00-.833.833v6.667c0 .46.373.833.833.833h3.04l5.606 3.984a.833.833 0 001.354-.65v-15zM22.7 22.8a1.384 1.384 0 010-1.958l2.284-2.285-2.284-2.285a1.385 1.385 0 111.958-1.958l2.284 2.285 2.285-2.285a1.385 1.385 0 111.958 1.958L28.9 18.558l2.285 2.285a1.385 1.385 0 01-1.958 1.958l-2.285-2.285-2.284 2.285c-.541.54-1.418.54-1.958 0z",
                    fill: "#0A0C20"
                })))
            };

            function yp() {
                return (yp = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var wp, Ep = function (e) {
                return p.createElement("svg", yp({
                    width: 37,
                    height: 37,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), hp || (hp = p.createElement("path", {
                    d: "M11.444 16.028a1 1 0 01-1-1v-4.002a1 1 0 011-1h4.001a1 1 0 010 2H13.91l3.072 3.073a1 1 0 11-1.414 1.414l-3.122-3.122v1.636a1 1 0 01-1 1zM20.443 25.026a1 1 0 001 1h4a1 1 0 001.001-1v-4.001a1 1 0 10-2 0v1.536l-3.072-3.072a1 1 0 10-1.415 1.414l3.122 3.123h-1.636a1 1 0 00-1 1zM11.444 20.025a1 1 0 00-1 1v4a1 1 0 001 1.001h4.001a1 1 0 100-2H13.91l3.072-3.072a1 1 0 00-1.414-1.415l-3.122 3.122v-1.636a1 1 0 00-1-1zM20.443 11.026a1 1 0 011-1h4a1 1 0 011.001 1v4.001a1 1 0 01-2 0v-1.536l-3.072 3.073a1 1 0 11-1.415-1.415l3.122-3.122h-1.636a1 1 0 01-1-1z",
                    fill: "#0A0C20"
                })))
            };

            function xp() {
                return (xp = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var _p = function (e) {
                return p.createElement("svg", xp({
                    width: 37,
                    height: 37,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), wp || (wp = p.createElement("path", {
                    d: "M20.25 25.878a1 1 0 01-1-1v-4.001a1 1 0 011-1h4.001a1 1 0 010 2h-1.536l3.072 3.072a1 1 0 11-1.414 1.415L21.25 23.24v1.637a1 1 0 01-1 1zM10.248 15.877a1 1 0 001 1h4.002a1 1 0 001-1v-4.002a1 1 0 10-2 0v1.536l-3.073-3.072a1 1 0 00-1.414 1.415l3.122 3.122h-1.636a1 1 0 00-1 1zM20.25 10.875a1 1 0 00-1 1v4.002a1 1 0 001 1h4.001a1 1 0 100-2h-1.536l3.072-3.073a1 1 0 10-1.414-1.414l-3.123 3.122v-1.636a1 1 0 00-1-1zM10.248 20.877a1 1 0 011-1h4.002a1 1 0 011 1v4a1 1 0 11-2 0v-1.535l-3.073 3.072A1 1 0 119.763 25l3.122-3.122h-1.636a1 1 0 01-1-1z",
                    fill: "#0A0C20"
                })))
            }, Ap = n(14317), Op = (n(62874), n(66796));

            function Cp(e) {
                return (Cp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function kp(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Pp(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function jp(e, t) {
                return (jp = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Sp(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, r = Np(e);
                    if (t) {
                        var a = Np(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Ip(this, n)
                }
            }

            function Ip(e, t) {
                return !t || "object" !== Cp(t) && "function" != typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Np(e) {
                return (Np = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            var Rp = function (e) {
                !function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && jp(e, t)
                }(o, e);
                var t, n, r, a = Sp(o);

                function o() {
                    return kp(this, o), a.apply(this, arguments)
                }

                return t = o, r = [{
                    key: "pluginName", get: function () {
                        return "AutoPlayTipsPlugin"
                    }
                }, {
                    key: "defaultConfig", get: function () {
                        return {position: Op.POSITIONS.ROOT, index: 10, className: "xgplayer-autoplay-tips"}
                    }
                }], (n = [{
                    key: "beforePlayerInit", value: function () {
                    }
                }, {
                    key: "afterPlayerInit", value: function () {
                    }
                }, {
                    key: "afterCreate", value: function () {
                        var e = this;
                        this.config.disable || (this.timer = setInterval((function () {
                            e.onTimeUpdate()
                        }), 200))
                    }
                }, {
                    key: "onTimeUpdate", value: function () {
                        if (this.player && !(this.player.duration <= 0)) {
                            var e = Math.ceil(this.player.duration - this.player.currentTime);
                            e <= 3 && !this.player.paused ? (this.find(".full-en").innerText = "".concat(e, "s "), this.find(".next-en").innerText = "".concat(e, "s "), this.find(".loop-en").innerText = "".concat(e, "s "), this.player.isNextAutoPlay ? (Op.Util.addClass(this.root, "douyin-show"), Op.Util.addClass(this.find(".xgplayer-autoplay-tips-full"), "active"), Op.Util.addClass(this.find(".xgplayer-autoplay-tips-next"), "active"), Op.Util.removeClass(this.find(".xgplayer-autoplay-tips-loop"), "active")) : this.player.isReplay || (Op.Util.addClass(this.root, "douyin-show"), Op.Util.removeClass(this.find(".xgplayer-autoplay-tips-full"), "active"), Op.Util.removeClass(this.find(".xgplayer-autoplay-tips-next"), "active"), Op.Util.addClass(this.find(".xgplayer-autoplay-tips-loop"), "active"))) : Op.Util.removeClass(this.root, "douyin-show")
                        }
                    }
                }, {
                    key: "destroy", value: function () {
                        this.timer && clearInterval(this.timer)
                    }
                }, {
                    key: "render", value: function () {
                        return '\n    <div class="xgplayer-autoplay-tips " data-state="normal">\n      <div class="xgplayer-box-dg xgplayer-autoplay-tips-full ">\n        <div class="img-wh-ct">\n          <div class="img-wrap">\n            <div class="blur-bg" style=\'background-image: url('.concat(this.config.img, ')\' ></div>\n            <div class="blur-mask"  ></div>\n            <img src="').concat(this.config.img, '" />\n          </div>\n        </div>\n        <div class="rightCt">\n          <div > <span class="en-title full-en">3s </span>后播放</div>\n          <div class="desc"> ').concat(this.config.desc, '</div>\n        </div>\n      </div>\n      <div class="xgplayer-box-dg xgplayer-autoplay-tips-next ">\n        <span class="en-title next-en">3s </span>后播放下一个视频\n      </div>\n      <div class="xgplayer-box-dg xgplayer-autoplay-tips-loop ">\n        <span class="en-title loop-en">3s </span>后循环播放当前视频\n      </div>\n      \n    </div>')
                    }
                }]) && Pp(t.prototype, n), r && Pp(t, r), o
            }(Op.default);

            function Tp(e) {
                return (Tp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Mp(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Lp(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Bp(e, t) {
                return (Bp = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Dp(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, r = zp(e);
                    if (t) {
                        var a = zp(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Fp(this, n)
                }
            }

            function Fp(e, t) {
                return !t || "object" !== Tp(t) && "function" != typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function zp(e) {
                return (zp = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            var Up = function (e) {
                !function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Bp(e, t)
                }(o, e);
                var t, n, r, a = Dp(o);

                function o() {
                    return Mp(this, o), a.apply(this, arguments)
                }

                return t = o, r = [{
                    key: "pluginName", get: function () {
                        return "SettingPlugin"
                    }
                }, {
                    key: "defaultConfig", get: function () {
                        return {
                            position: Op.POSITIONS.CONTROLS_RIGHT,
                            index: 2,
                            className: "xgplayer-setting",
                            nextAutoPlay: !0
                        }
                    }
                }], (n = [{
                    key: "registerIcons", value: function () {
                        return {setting: {icon: lp, class: "xg-icon-setting"}}
                    }
                }, {
                    key: "initIcons", value: function () {
                        this.icons, this.appendChild(".xgplayer-icon", {icon: lp, class: "xg-icon-setting"})
                    }
                }, {
                    key: "beforePlayerInit", value: function () {
                    }
                }, {
                    key: "afterPlayerInit", value: function () {
                    }
                }, {
                    key: "afterCreate", value: function () {
                        this.config.disable || (this.initIcons(), this.bind("mouseenter", this.onMouseenter.bind(this)), this.bind(["blur", "mouseleave"], this.onMouseleave.bind(this)), this.bind(".xg-switch", "click", this.onXgChange.bind(this)), this.bind(".xgplayer-playratio-item", "click", this.onPlayratioClick.bind(this)))
                    }
                }, {
                    key: "onPlayratioClick", value: function (e) {
                        if (null != e && e.target) {
                            var t = e.target.getAttribute("rate");
                            if (Number(t) === this.player.playbackRate) return !1;
                            for (var n = this.find(".xgplayer-playratio-wrap").children, r = 0; r < n.length; r++) {
                                var a = n[r];
                                a.getAttribute("rate") === t ? Op.Util.addClass(a, "select") : Op.Util.removeClass(a, "select")
                            }
                            this.player.emit("playRatioChange", t), this.player.playbackRate = Number(t)
                        }
                    }
                }, {
                    key: "onXgChange", value: function () {
                        var e = this.find(".xg-switch");
                        this.config.nextAutoPlay ? (this.player.emit("nextAutoplayChange", !1), this.config.nextAutoPlay = !1, Op.Util.removeClass(e, "xg-switch-checked")) : (this.player.emit("nextAutoplayChange", !0), this.config.nextAutoPlay = !0, Op.Util.addClass(e, "xg-switch-checked"))
                    }
                }, {
                    key: "onMouseleave", value: function () {
                        Op.Util.removeClass(this.root, "slide-show")
                    }
                }, {
                    key: "onMouseenter", value: function () {
                        Op.Util.addClass(this.root, "slide-show")
                    }
                }, {
                    key: "destroy", value: function () {
                        this.unbind("mouseenter", this.onMouseenter.bind(this)), this.unbind(["blur", "mouseleave"], this.onMouseleave.bind(this)), this.unbind(".xg-switch", "click", this.onXgChange.bind(this)), this.unbind(".xgplayer-playratio-item", "click", this.onPlayratioClick.bind(this))
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.player.playbackRate || 1, t = Boolean(this.config.nextAutoPlay);
                        return '\n    <xg-icon class="xgplayer-setting " data-state="normal">\n      <div class="xgplayer-icon">\n        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M25.3412 17.9694C25.3412 17.5103 25.2928 17.1775 25.2928 17.1775C25.2488 16.8748 25.4296 16.5021 25.6946 16.3492L26.6965 15.7713C26.9615 15.6184 27.053 15.2767 26.8999 15.0119L24.9995 11.7239C24.8464 11.4591 24.5044 11.3675 24.2394 11.5202L23.2388 12.0972C22.9738 12.25 22.5594 12.2214 22.3179 12.0337C22.3179 12.0337 22.0507 11.8261 21.6622 11.602C21.2712 11.3767 20.9445 11.2436 20.9445 11.2436C20.6612 11.1283 20.4294 10.7837 20.4294 10.4778V9.32141C20.4294 9.01552 20.1792 8.76526 19.8733 8.76526L16.0738 8.76526C15.7679 8.76526 15.5177 9.01552 15.5177 9.32141V10.4778C15.5177 10.7837 15.2859 11.1283 15.0026 11.2436C15.0026 11.2436 14.6759 11.3767 14.2861 11.6008C13.8964 11.8261 13.6292 12.0337 13.6292 12.0337C13.3877 12.2214 12.9734 12.2499 12.7084 12.097L11.7076 11.5193C11.4427 11.3664 11.1007 11.458 10.9478 11.7228L9.04823 15.0118C8.89526 15.2766 8.98684 15.6185 9.25174 15.7714L10.2526 16.3491C10.5175 16.502 10.6983 16.8748 10.6543 17.1774C10.6543 17.1774 10.606 17.5103 10.606 17.9693C10.606 18.4295 10.6543 18.7625 10.6543 18.7625C10.6983 19.0652 10.5175 19.4378 10.2525 19.5906L9.25188 20.1675C8.9869 20.3203 8.89532 20.662 9.04835 20.9269L10.9489 24.2159C11.102 24.4807 11.4439 24.5723 11.7088 24.4194L12.7097 23.8417C12.9746 23.6888 13.3887 23.7177 13.6298 23.9058C13.6298 23.9058 13.8749 24.097 14.2514 24.3175C14.6508 24.5512 15.0028 24.6948 15.0028 24.6948C15.286 24.8103 15.5177 25.155 15.5177 25.4609V26.6173C15.5177 26.9232 15.768 27.1734 16.0739 27.1734H19.8733C20.1792 27.1734 20.4295 26.9232 20.4295 26.6173V25.4609C20.4295 25.155 20.6613 24.8105 20.9446 24.6952C20.9446 24.6952 21.2689 24.5632 21.6562 24.3403C22.0471 24.115 22.3169 23.9052 22.3169 23.9052C22.5583 23.7174 22.9726 23.6888 23.2376 23.8416L24.2395 24.4196C24.5045 24.5724 24.8464 24.4807 24.9994 24.2159L26.8989 20.927C27.0519 20.6621 26.9603 20.3203 26.6953 20.1676L25.6946 19.5906C25.4296 19.4378 25.2488 19.0652 25.2928 18.7625C25.2928 18.7625 25.3412 18.4296 25.3412 17.9694ZM17.9735 21.0374C16.2779 21.0374 14.9037 19.6639 14.9037 17.9693C14.9037 16.2747 16.2779 14.9013 17.9735 14.9013C19.6692 14.9013 21.0434 16.2747 21.0434 17.9693C21.0434 19.6639 19.6692 21.0374 17.9735 21.0374Z" fill="#0A0C20"/>\n        </svg>\n      </div>\n      <xg-slider class="xgplayer-slider xgplayer-box-douyin ">\n        <div class="xgplayer-setting-box">\n            <div class="xgplayer-setting-label">\n                <div class="xgplayer-setting-title">自动播放</div>\n                <div class="xgplayer-setting-content">\n                    <button aria-checked="true" class="xg-switch '.concat(!0 === t ? "xg-switch-checked" : "", ' " aria-labelledby="xg-switch-pip"><span class="xg-switch-inner"></span></button>\n                </div>\n            </div>\n            <div class="xgplayer-setting-line"></div>\n            <div class="xgplayer-setting-label">\n                <div class="xgplayer-setting-title">倍速播放</div>\n                <div class="xgplayer-setting-content">\n                    <div class="xgplayer-playratio-wrap">\n                    ').concat([.75, 1, 1.25, 1.5, 2].map((function (t) {
                            return "<span class='".concat(e === t ? "select" : "", " xgplayer-playratio-item' rate='").concat(t, "'>").concat(t, "x</span>")
                        })).join(""), "\n                    </div>\n                </div>\n            </div>\n        </div>\n      </xg-slider>\n    </xg-icon>")
                    }
                }]) && Lp(t.prototype, n), r && Lp(t, r), o
            }(Op.default);

            function Hp(e) {
                return (Hp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Wp(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Qp(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Vp(e, t) {
                return (Vp = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function qp(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, r = Xp(e);
                    if (t) {
                        var a = Xp(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Kp(this, n)
                }
            }

            function Kp(e, t) {
                return !t || "object" !== Hp(t) && "function" != typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Xp(e) {
                return (Xp = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            var Yp = function (e) {
                !function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Vp(e, t)
                }(o, e);
                var t, n, r, a = qp(o);

                function o() {
                    return Wp(this, o), a.apply(this, arguments)
                }

                return t = o, r = [{
                    key: "pluginName", get: function () {
                        return "MiniWinPlugin"
                    }
                }, {
                    key: "defaultConfig", get: function () {
                        return {
                            position: Op.POSITIONS.CONTROLS_RIGHT,
                            index: 5,
                            className: "xgplayer-miniwin",
                            autoMini: !0
                        }
                    }
                }], (n = [{
                    key: "registerIcons", value: function () {
                        return {}
                    }
                }, {
                    key: "initIcons", value: function () {
                    }
                }, {
                    key: "beforePlayerInit", value: function () {
                    }
                }, {
                    key: "afterPlayerInit", value: function () {
                    }
                }, {
                    key: "afterCreate", value: function () {
                        this.config.disable || (this.initIcons(), this.bind(".xgplayer-icon", "click", this.onClickIcon.bind(this)), this.player.on("manual_change_min_state", this.onManualChangeState.bind(this)))
                    }
                }, {
                    key: "onManualChangeState", value: function (e) {
                        var t;
                        null == this || null === (t = this.changeMiniState) || void 0 === t || t.call(this, e)
                    }
                }, {
                    key: "changeMiniState", value: function (e) {
                        e ? (this.config.autoMini = !0, Op.Util.addClass(this.find(".xgplayer-icon"), "select"), this.find(".xgplayer-box-douyin").innerHTML = "点击关闭悬浮小窗口") : (this.config.autoMini = !1, Op.Util.removeClass(this.find(".xgplayer-icon"), "select"), this.find(".xgplayer-box-douyin").innerHTML = "点击开启悬浮小窗口")
                    }
                }, {
                    key: "onClickIcon", value: function () {
                        this.changeMiniState(!this.config.autoMini), this.player.emit("miniWinChange", this.config.autoMini)
                    }
                }, {
                    key: "destroy", value: function () {
                        this.unbind(".xgplayer-icon", "click", this.onClickIcon), this.player.off("manual_change_min_state", this.onManualChangeState)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.config.autoMini;
                        return '\n    <xg-icon class="xgplayer-mini-win " data-state="normal">\n      <div class="xgplayer-icon '.concat(e ? "select" : "", '">\n        ').concat('<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M17.9741 17.1108C17.3396 17.1108 16.8252 17.6252 16.8252 18.2597V22.0895C16.8252 22.7241 17.3396 23.2385 17.9741 23.2385H22.5699C23.2044 23.2385 23.7188 22.7241 23.7188 22.0895V18.2597C23.7188 17.6252 23.2044 17.1108 22.5699 17.1108H17.9741Z" fill="#0A0C20"/>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4635 10.0257C10.0886 10.0257 8.97412 11.1402 8.97412 12.5151V24.0044C8.97412 25.3793 10.0886 26.4938 11.4635 26.4938H24.4848C25.8596 26.4938 26.9741 25.3793 26.9741 24.0044V12.5151C26.9741 11.1402 25.8596 10.0257 24.4848 10.0257H11.4635ZM10.889 12.5151C10.889 12.1978 11.1462 11.9406 11.4635 11.9406H24.4848C24.802 11.9406 25.0592 12.1978 25.0592 12.5151V24.0044C25.0592 24.3217 24.802 24.5789 24.4848 24.5789H11.4635C11.1462 24.5789 10.889 24.3217 10.889 24.0044V12.5151Z" fill="#0A0C20"/>\n        </svg>', '\n      </div>\n       <xg-slider class="xgplayer-slider xgplayer-box-douyin">\n        ').concat(e ? "点击关闭悬浮小窗口" : "点击开启悬浮小窗口", "\n      </xg-slider>\n    </xg-icon>")
                    }
                }]) && Qp(t.prototype, n), r && Qp(t, r), o
            }(Op.default), Zp = new S({
                videoPlay: {
                    eventName: "video_play",
                    params: {
                        author_id: "",
                        group_id: "",
                        log_pb: "",
                        enter_from: "",
                        previous_page: "web_link",
                        compilation_id: "",
                        is_auto_play: !1,
                        impression_data: ""
                    }
                },
                videoPlayFinish: {
                    eventName: "video_play_finish",
                    params: {
                        author_id: "",
                        group_id: "",
                        log_pb: "",
                        is_visible: 1,
                        enter_from: "",
                        compilation_id: "",
                        previous_page: "web_link"
                    }
                },
                playTime: {
                    eventName: "play_time",
                    params: {
                        author_id: "",
                        group_id: "",
                        log_pb: "",
                        enter_from: "",
                        previous_page: "web_link",
                        is_auto_play: !1,
                        is_visible: 1,
                        duration: 0,
                        from_percent: 0,
                        to_percent: 0
                    }
                },
                videoPlayCheckPoint: {
                    eventName: "video_play_check_point",
                    params: {
                        author_id: "",
                        group_id: "",
                        log_pb: "",
                        enter_from: "",
                        previous_page: "web_link",
                        compilation_id: "",
                        order: 0
                    }
                }
            });

            function Jp(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Gp(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Jp(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Jp(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var $p, ev = function () {
                var e = Gp(regeneratorRuntime.mark((function e() {
                    var t, r;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if ($p) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3, n.e(216).then(n.bind(n, 85590));
                            case 3:
                                r = e.sent, $p = (null == r || null === (t = r.default) || void 0 === t ? void 0 : t.default) || (null == r ? void 0 : r.default);
                            case 5:
                                return e.abrupt("return", $p);
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), tv = function () {
                var e = Gp(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u, s, f, d, m, p, v, g, h, b, y, w, E, x, _, A, O, C, k, P, j, S, I, N, R,
                        T, M, L, B, D;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.src, r = t.width, a = t.el, o = t.height, i = t.changeNextUrlFunc, c = t.icons, l = t.poster, u = t.onShouldShowMiniScreen, s = t.logInfo, e.next = 3, ev();
                            case 3:
                                f = 1, d = 1, m = 1, p = .6, v = !1;
                                try {
                                    "0" === localStorage.getItem("player_nextautoplay") && (f = 0), d = Number(localStorage.getItem("player_playbackratio")) || 1, g = localStorage.getItem("player_volume"), h = localStorage.getItem("player_is_mute"), v = "1" === h, g && (p = Number(g)), "0" === localStorage.getItem("player_miniwin") && (m = 0)
                                } catch (e) {
                                }
                                return b = new $p({
                                    el: a,
                                    lang: "zh",
                                    url: n,
                                    width: r,
                                    height: o,
                                    leavePlayerTime: 0,
                                    autoplay: !0,
                                    defaultMuted: !0,
                                    autoMini: Boolean(m),
                                    autoplayMuted: v,
                                    defaultPlaybackRate: d,
                                    poster: l,
                                    loop: !1,
                                    closeFocusVideoFocus: !0,
                                    closeControlsBlur: !0,
                                    closePlayVideoFocus: !0,
                                    closeVideoPreventDefault: !0,
                                    closeVideoStopPropagation: !0,
                                    volume: p,
                                    icons: c,
                                    controls: {mode: "bottom", autoHide: !0, initShow: !0},
                                    playbackRate: !1,
                                    cssFullscreen: !1,
                                    dynamicBg: {
                                        disable: !1,
                                        frameRate: 10,
                                        filter: "blur(60px)",
                                        maskBg: "rgba(0,0,0,0.7)"
                                    },
                                    keyboard: {checkVisible: !1},
                                    enter: {innerHtml: '<div class="xg-douyin-loading" />'},
                                    plugins: [Up, Yp],
                                    MiniWinPlugin: {autoMini: Boolean(m)},
                                    SettingPlugin: {nextAutoPlay: Boolean(f)},
                                    start: {disableAnimate: !0},
                                    ignores: ["progresspreview", "poster"],
                                    progress: !0,
                                    miniprogress: !0,
                                    miniscreen: {left: -1, top: -1, disableDrag: !0}
                                }), y = !1, w = function () {
                                    var e;
                                    return !(null == a || null === (e = a.parentElement) || void 0 === e || !e.getBoundingClientRect) && a.parentElement.getBoundingClientRect().bottom <= 122
                                }, E = function () {
                                    var e = w();
                                    if (u(e), m) if (e) {
                                        var t;
                                        if (y || null == b || null === (t = b.plugins) || void 0 === t || !t.miniscreen) return;
                                        y || (y = !0, b.plugins.miniscreen.getMini())
                                    } else y && (y = !1, b.plugins.miniscreen.exitMini())
                                }, b.isNextAutoPlay = f, document.addEventListener("scroll", E), x = function (e) {
                                    f = e, b.isNextAutoPlay = f, localStorage.setItem("player_nextautoplay", e ? "1" : "0")
                                }, _ = function (e) {
                                    localStorage.setItem("player_playbackratio", e)
                                }, A = function () {
                                    localStorage.setItem("player_volume", b.volume), localStorage.setItem("player_is_mute", b.muted ? "1" : "0")
                                }, O = function (e) {
                                    m = e, localStorage.setItem("player_miniwin", e ? "1" : "0")
                                }, C = function () {
                                    Zp.sendLog("videoPlayFinish", {
                                        urlParamList: ["previous_page"],
                                        enter_from: "video_detail",
                                        author_id: null == s ? void 0 : s.author_id,
                                        group_id: null == s ? void 0 : s.group_id,
                                        log_pb: null == s ? void 0 : s.log_pb,
                                        compilation_id: null == s ? void 0 : s.compilation_id,
                                        is_visible: "visible" === document.visibilityState
                                    }), f && !w() && i() || (b.isReplay = !0, b.replay())
                                }, k = function (e) {
                                    y && !1 === e && (y = !1, b.emit("manual_change_min_state", !1), O(0))
                                }, P = !1, j = !0, S = 0, I = function () {
                                    b.emit("focus"), P = !0, Zp.sendLog("videoPlay", {
                                        urlParamList: ["previous_page"],
                                        author_id: null == s ? void 0 : s.author_id,
                                        enter_from: "video_detail",
                                        group_id: null == s ? void 0 : s.group_id,
                                        log_pb: null == s ? void 0 : s.log_pb,
                                        compilation_id: null == s ? void 0 : s.compilation_id,
                                        is_auto_play: j,
                                        impression_data: null == s ? void 0 : s.impressionData
                                    })
                                }, N = function () {
                                    j = !1
                                }, R = 0, T = function (e) {
                                    S && b && b.duration && (Zp.sendLog("playTime", {
                                        is_visible: Number(e),
                                        duration: Date.now() - S,
                                        from_percent: R / b.duration,
                                        to_percent: b.currentTime / b.duration,
                                        is_auto_play: j,
                                        urlParamList: ["previous_page"],
                                        author_id: null == s ? void 0 : s.author_id,
                                        enter_from: "video_detail",
                                        group_id: null == s ? void 0 : s.group_id,
                                        log_pb: null == s ? void 0 : s.log_pb
                                    }), S = Date.now())
                                }, M = function () {
                                    P = !0, S = Date.now(), R = b.currentTime
                                }, L = function () {
                                    T("visible" === document.visibilityState)
                                }, B = 1, D = setInterval((function () {
                                    P && Zp.sendLog("videoPlayCheckPoint", {
                                        urlParamList: ["previous_page"],
                                        author_id: null == s ? void 0 : s.author_id,
                                        group_id: null == s ? void 0 : s.group_id,
                                        log_pb: null == s ? void 0 : s.log_pb,
                                        enter_from: "video_detail",
                                        compilation_id: null == s ? void 0 : s.compilation_id,
                                        order: B++
                                    })
                                }), 6e4), dc(T), b.plugins.progress.addCallBack("click", (function () {
                                    T("visible" === document.visibilityState)
                                })), b.plugins.progress.addCallBack("dragend", (function () {
                                    T("visible" === document.visibilityState)
                                })), b.on("autoplay_was_prevented", N), b.on("autoplay_started", I), b.on("play", M), b.on("pause", L), b.on("nextAutoplayChange", x), b.on("playRatioChange", _), b.on("miniWinChange", O), b.on("ended", C), b.on("mini_state_change", k), b.on("volumechange", A), e.abrupt("return", {
                                    player: b,
                                    changeMiniWin: function (e) {
                                        if (y) {
                                            if (!e) return void b.plugins.miniscreen.exitMini();
                                            O(e), E()
                                        }
                                        O(e), b.emit("manual_change_min_state", e), E()
                                    },
                                    destroy: function (e) {
                                        D && clearInterval(D), e && (e.destroy(), document.removeEventListener("scroll", E), e.off("autoplay_was_prevented", N), e.off("autoplay_started", I), e.off("play", M), e.off("pause", M), e.off("nextAutoplayChange", x), e.off("playRatioChange", _), e.off("miniWinChange", _), e.off("ended", C), e.off("mini_state_change", k), e.off("volumechange", A))
                                    },
                                    changeNextPlay: function () {
                                        fc(T)
                                    },
                                    isNextAutoPlay: f
                                });
                            case 46:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }();

            function nv(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function rv(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            nv(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            nv(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function av(e) {
                var t = e.onMountIcon;
                return p.createElement(p.Fragment, null, p.createElement("div", {
                    ref: function (e) {
                        e && e.children && 9 === e.children.length && t({
                            play: function () {
                                var t = document.createElement("div");
                                return t.innerHTML = e.children[0].outerHTML + e.children[1].outerHTML, t.children[0]
                            },
                            pause: function () {
                                var t = document.createElement("div");
                                return t.innerHTML = e.children[0].outerHTML + e.children[1].outerHTML, t.children[1]
                            },
                            startPlay: e.children[0].outerHTML,
                            startPause: e.children[1].outerHTML,
                            playNext: e.children[2].outerHTML,
                            mini: e.children[4].outerHTML,
                            volumeSmall: e.children[5].outerHTML,
                            volumeLarge: e.children[5].outerHTML,
                            volumeMuted: e.children[6].outerHTML,
                            fullscreen: e.children[7].outerHTML,
                            exitFullscreen: e.children[8].outerHTML,
                            loadingIcon: 'loading: "<div class="xg-douyin-loading" />"'
                        })
                    }, style: {display: "none"}
                }, p.createElement(Ve, {src: Gm, width: 36, height: 36}), p.createElement(Ve, {
                    src: tp,
                    width: 36,
                    height: 36
                }), p.createElement(Ve, {src: ap, width: 36, height: 36}), p.createElement(Ve, {
                    src: lp,
                    width: 36,
                    height: 36
                }), p.createElement(Ve, {src: dp, width: 36, height: 36}), p.createElement(Ve, {
                    src: vp,
                    width: 36,
                    height: 36
                }), p.createElement(Ve, {src: bp, width: 36, height: 36}), p.createElement(Ve, {
                    src: Ep,
                    width: 36,
                    height: 36
                }), p.createElement(Ve, {src: _p, width: 36, height: 36})))
            }

            function ov(e, t) {
                var n = e.playAddr, r = e.cover, a = e.onShouldShowMiniScreen, o = e.awemeId, i = e.logInfo,
                    c = e.nextVideoInfo, l = (0, p.useRef)(null), u = (0, p.useRef)(null), s = (0, p.useRef)(null),
                    f = (0, p.useRef)(null), d = (0, p.useRef)(null), m = Xd(), v = p.useCallback((function () {
                        var e, t, n, r;
                        return null !== (e = d.current) && void 0 !== e && e.url ? (window.scrollTo(0, 0), null === (t = l.current) || void 0 === t || null === (n = t.changeNextPlay) || void 0 === n || n.call(t), m.push(null === (r = d.current) || void 0 === r ? void 0 : r.url, {extra: {prevId: o}}), !0) : (nc.info("没有下一集了"), !1)
                    }), []), g = p.useCallback((function () {
                        var e;
                        if (null !== (e = l.current) && void 0 !== e && e.player && l.current.player.registerPlugin) try {
                            d.current && (l.current.player.i18n.PLAYNEXT_TIPS = "下个视频：".concat(d.current.desc), l.current.player.registerPlugin({
                                plugin: Ap.Z,
                                options: {},
                                pluginName: "playNext"
                            }, {urlList: [d.current.url]}), l.current.player.registerPlugin({
                                plugin: Rp,
                                options: {},
                                pluginName: "AutoPlayTipsPlugin"
                            }, {
                                img: d.current.img,
                                desc: d.current.desc
                            }), l.current.player.usePluginHooks("playNext", "playNext", (function (e, t) {
                                return v()
                            })))
                        } catch (e) {
                        }
                    }), []), h = p.useCallback(rv(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (u.current && s.current) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (l.current) {
                                        e.next = 15;
                                        break
                                    }
                                    return l.current = {}, e.prev = 4, e.next = 7, tv({
                                        src: n,
                                        el: s.current,
                                        poster: r,
                                        icons: u.current,
                                        refNextUrl: f,
                                        onShouldShowMiniScreen: a,
                                        changeNextUrlFunc: v,
                                        logInfo: i
                                    });
                                case 7:
                                    l.current = e.sent, g(), e.next = 15;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(4), l.current = null;
                                case 15:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[4, 11]])
                    }))), [n, r]);
                return (0, p.useImperativeHandle)(t, (function () {
                    return {
                        changeMiniWin: function (e) {
                            l.current.changeMiniWin(e)
                        }
                    }
                })), (0, p.useEffect)((function () {
                    d.current = c, g()
                }), [c]), (0, p.useEffect)((function () {
                    return function () {
                        if (l.current) try {
                            l.current.destroy(l.current.player)
                        } catch (e) {
                        }
                    }
                }), []), p.createElement(p.Fragment, null, p.createElement(av, {
                    onMountIcon: function (e) {
                        u.current = e, h()
                    }
                }), p.createElement("div", {
                    className: "videoWrap", ref: function (e) {
                        s.current = e, h()
                    }, style: {width: "100%", height: "100%"}
                }))
            }

            var iv = (0, p.forwardRef)(ov);

            function cv(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function lv(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? cv(Object(n), !0).forEach((function (t) {
                        uv(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cv(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function uv(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function sv(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function fv(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            sv(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            sv(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var dv = vt;

            function mv() {
                return pv.apply(this, arguments)
            }

            function pv() {
                return (pv = fv(regeneratorRuntime.mark((function e() {
                    var t, n, r, a = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = a.length > 0 && void 0 !== a[0] ? a[0] : "", n = a.length > 1 && void 0 !== a[1] ? a[1] : null, e.next = 4, Xn("/aweme/v1/web/shorten/", lv({
                                    targets: t,
                                    belong: "aweme",
                                    persist: 1
                                }, dv), n);
                            case 4:
                                return r = e.sent, e.abrupt("return", er(r, sr));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            var vv = new S({
                    shareMenuShow: {
                        eventName: "share_menu_show",
                        params: {author_id: "", group_id: "", log_pb: "", enter_from: "", previous_page: "web_link"}
                    },
                    shareVideo: {
                        eventName: "share_video",
                        params: {
                            author_id: "",
                            group_id: "",
                            log_pb: "",
                            enter_from: "",
                            previous_page: "web_link",
                            type: ""
                        }
                    }
                }), gv = "_6e84962fcb7da3b1e8100d798c94fd0a-scss", hv = "a508b8e520c4938b699e76f52758e1b5-scss",
                bv = "c970dfb43b7e68344f353625de339de0-scss", yv = "_6ed090956a2566bf4d47a648b75d87ef-scss",
                wv = "_5d025eb178c1c97d99eb9717cb4f0290-scss", Ev = "_95cfb8df7d5be42fc93f8f4464a1c648-scss",
                xv = "_047cfcad258573fad8a7513577bb9f75-scss";

            function _v(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Av(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ov(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ov(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ov(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var Cv = function (e) {
                var t = e.className, n = e.awemeInfo, r = e.onMouseEnter, a = e.onMouseLeave, o = e.hidden,
                    i = e.awemelogPb, c = Av((0, p.useState)(""), 2), l = c[0], u = c[1],
                    s = Av((0, p.useState)(""), 2), f = s[0], d = s[1];
                (0, p.useEffect)((function () {
                    !function (e) {
                        return function () {
                            var t = this, n = arguments;
                            return new Promise((function (r, a) {
                                var o = e.apply(t, n);

                                function i(e) {
                                    _v(o, r, a, i, c, "next", e)
                                }

                                function c(e) {
                                    _v(o, r, a, i, c, "throw", e)
                                }

                                i(void 0)
                            }))
                        }
                    }(regeneratorRuntime.mark((function e() {
                        var t, r, a, o, i, c, l, s, f, m;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return t = null == n ? void 0 : n.shareInfo, r = t.shareLinkDesc, a = t.shareUrl, o = a && "".concat(a, "&from=").concat("web_code_link"), e.next = 4, Promise.all([Nr(null == n ? void 0 : n.awemeId), mv(o)]);
                                case 4:
                                    i = e.sent, c = Av(i, 2), l = c[0], s = c[1], f = (l || {}).qrcodeUrl, m = r && r.replace("%s", s), u(f), d(m);
                                case 12:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [n]), (0, p.useEffect)((function () {
                    var e;
                    o || vv.sendLog("shareMenuShow", {
                        urlParamList: ["previous_page"],
                        author_id: null == n || null === (e = n.authorInfo) || void 0 === e ? void 0 : e.uid,
                        group_id: null == n ? void 0 : n.groupId,
                        enter_from: me(),
                        log_pb: i
                    })
                }), [o]);
                var m = (0, p.useCallback)((function () {
                    var e;
                    ac()(f), nc.info("口令已复制，请粘贴给微信/QQ好友或群聊"), vv.sendLog("shareVideo", {
                        urlParamList: ["previous_page"],
                        author_id: null == n || null === (e = n.authorInfo) || void 0 === e ? void 0 : e.uid,
                        group_id: null == n ? void 0 : n.groupId,
                        enter_from: me(),
                        log_pb: i,
                        type: "copy_link"
                    })
                }), [f]);
                return p.createElement("div", {
                    className: De()(t, gv),
                    onMouseEnter: r,
                    onMouseLeave: a,
                    style: {display: o ? "none" : "flex"}
                }, p.createElement("div", {className: hv}, p.createElement(zl, {
                    src: l,
                    alt: f,
                    iconWidth: 30
                })), p.createElement("div", {className: bv}, p.createElement("div", {className: yv}, "打开抖音扫码或复制口令粘贴给微信/QQ好友"), p.createElement("div", {className: wv}, p.createElement("span", {className: Ev}, f), p.createElement(lo, {
                    size: "small",
                    className: xv,
                    onClick: m
                }, p.createElement("span", null, "复制")))))
            };

            function kv(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Pv(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pv(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Pv(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function jv(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var Sv = xn;

            function Iv(e) {
                var t, n, r, a, o = e.awemeInfo, i = e.onScrollToComment, c = e.isReoload, l = e.awemelogPb, u = Wa(),
                    s = u.type, f = u.changeType, d = (0, p.useContext)(Sv) || {}, m = d.userInfo, v = d.dispatch,
                    g = m.isLogin, h = m.info, b = null == o ? void 0 : o.userDigged, y = function (e) {
                        var t = e.userDigged, n = e.isLogin, r = e.onLoginSuc, a = (e.userInfo, e.awemeId), o = e.awemeInfo,
                            i = xm((0, p.useState)(t), 2), c = i[0], l = i[1], u = xm((0, p.useState)(n), 2), s = u[0],
                            f = u[1], d = (0, p.useRef)(!1), m = (0, p.useRef)(a), v = (0, p.useCallback)(function () {
                                var e = Em(regeneratorRuntime.mark((function e(t, n) {
                                    var r, a, i, c, u, s;
                                    return regeneratorRuntime.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, bm(t, n);
                                            case 3:
                                                r = e.sent, a = r.statusCode, i = r.errMsg, c = r.logPb, a ? (nc.info(i || "点赞失败"), a === st.ERROR_USER_UNLOGIN && f(0)) : (1 === Number(n) ? (nc.info("已点赞"), sm.sendLog("like", {
                                                    urlParamList: ["previous_page"],
                                                    author_id: null == o || null === (u = o.authorInfo) || void 0 === u ? void 0 : u.uid,
                                                    group_id: null == o ? void 0 : o.groupId,
                                                    log_pb: c,
                                                    enter_from: me()
                                                })) : (nc.info("已取消点赞"), sm.sendLog("cancelLike", {
                                                    urlParamList: ["previous_page"],
                                                    author_id: null == o || null === (s = o.authorInfo) || void 0 === s ? void 0 : s.uid,
                                                    group_id: null == o ? void 0 : o.groupId,
                                                    log_pb: c,
                                                    enter_from: me()
                                                })), m.current !== t && m.current || l(n), f(1)), e.next = 13;
                                                break;
                                            case 10:
                                                e.prev = 10, e.t0 = e.catch(0), nc.info("点赞失败");
                                            case 13:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, null, [[0, 10]])
                                })));
                                return function (t, n) {
                                    return e.apply(this, arguments)
                                }
                            }(), []), g = (0, p.useCallback)(function () {
                                var e = Em(regeneratorRuntime.mark((function e(t) {
                                    return regeneratorRuntime.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                if (!d.current) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                if (s) {
                                                    e.next = 6;
                                                    break
                                                }
                                                Oe({
                                                    success: function () {
                                                        var e = Em(regeneratorRuntime.mark((function e() {
                                                            return regeneratorRuntime.wrap((function (e) {
                                                                for (; ;) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        return d.current = !0, e.next = 3, null == r ? void 0 : r();
                                                                    case 3:
                                                                        return e.next = 5, v(t, 1);
                                                                    case 5:
                                                                        d.current = !1;
                                                                    case 6:
                                                                    case"end":
                                                                        return e.stop()
                                                                }
                                                            }), e)
                                                        })));
                                                        return function () {
                                                            return e.apply(this, arguments)
                                                        }
                                                    }(), enterMethod: "digg"
                                                }), e.next = 10;
                                                break;
                                            case 6:
                                                return d.current = !0, e.next = 9, v(t, !c);
                                            case 9:
                                                d.current = !1;
                                            case 10:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function (t) {
                                    return e.apply(this, arguments)
                                }
                            }(), [s, c]);
                        return {
                            favoriteStatus: c, changeStatus: function (e, t, n) {
                                l(e), f(t), m.current = n
                            }, onChangeFavoriteStatus: g
                        }
                    }({
                        userInfo: h,
                        awemeInfo: o,
                        userDigged: b,
                        isLogin: g,
                        awemeId: null == o ? void 0 : o.awemeId,
                        onLoginSuc: function () {
                            return v({type: "updateUserInfo"})
                        }
                    }), w = y.changeStatus, E = y.favoriteStatus, x = y.onChangeFavoriteStatus;
                (0, p.useEffect)((function () {
                    c && w(b, g, null == o ? void 0 : o.awemeId)
                }), [b, g, c, null == o ? void 0 : o.awemeId]);
                var _ = null == o || null === (t = o.stats) || void 0 === t ? void 0 : t.diggCount;
                return Boolean(b) !== Boolean(E) && (b ? _-- : _++), p.createElement("div", {className: Bm}, p.createElement("h1", {className: Dm}, p.createElement("span", null, (null == o || null === (n = o.mixInfo) || void 0 === n ? void 0 : n.currentEpisode) && "第".concat(null == o || null === (r = o.mixInfo) || void 0 === r ? void 0 : r.currentEpisode, "集 | ") || ""), p.createElement(El, {
                    text: null == o ? void 0 : o.desc,
                    textExtra: null == o ? void 0 : o.textExtra
                })), p.createElement("div", {className: Fm}, p.createElement("div", {className: Um}, p.createElement("div", {
                    onClick: function () {
                        x(null == o ? void 0 : o.awemeId)
                    }, className: De()(Wm, De()(jv({}, Vm, E)))
                }, p.createElement(Ve, {
                    width: 32,
                    height: 32,
                    src: km,
                    color: E ? Et : bt,
                    className: qm
                }), p.createElement("span", {className: Hm}, il(_))), p.createElement("div", {
                    onClick: i,
                    className: Wm
                }, p.createElement(Ve, {
                    width: 32,
                    height: 32,
                    src: Im,
                    color: bt,
                    className: qm
                }), p.createElement("span", {className: Hm}, il(null == o || null === (a = o.stats) || void 0 === a ? void 0 : a.commentCount))), p.createElement("div", {
                    className: De()(Km, Wm),
                    onMouseEnter: function () {
                        f("share_btn")
                    },
                    onMouseLeave: function () {
                        f("")
                    }
                }, p.createElement(Ve, {
                    width: 32,
                    height: 32,
                    src: Tm,
                    color: bt,
                    className: qm
                }), p.createElement("span", {className: Qm}, "分享"), p.createElement(Cv, {
                    awemelogPb: l,
                    awemeInfo: o,
                    className: Xm,
                    hidden: "share_btn" !== s,
                    onMouseEnter: function () {
                        f("share_btn")
                    },
                    onMouseLeave: function () {
                        f("")
                    }
                }))), p.createElement("span", {className: zm}, Rn()(1e3 * (null == o ? void 0 : o.createTime)).format("YYYY-MM-DD"))))
            }

            function Nv(e) {
                var t, n, r = e.awemeInfo, a = e.isReoload, o = e.awemelogPb, i = e.nextVideoInfo,
                    c = (null == r ? void 0 : r.video) || {}, l = c.playAddr, u = c.cover,
                    s = kv((0, p.useState)(!1), 2), f = s[0], d = s[1], m = (0, p.useRef)(null);
                return p.createElement("div", {className: Mm}, p.createElement("div", {className: Lm}, r && a && p.createElement(iv, {
                    nextVideoInfo: i,
                    playAddr: l,
                    cover: u,
                    ref: function (e) {
                        m.current = e
                    },
                    logInfo: {
                        author_id: null == r || null === (t = r.authorInfo) || void 0 === t ? void 0 : t.uid,
                        group_id: null == r ? void 0 : r.groupId,
                        log_pb: o,
                        compilation_id: null == r || null === (n = r.mixInfo) || void 0 === n ? void 0 : n.mixId,
                        impressionData: null == r ? void 0 : r.impressionData
                    },
                    awemeId: r.awemeId,
                    onShouldShowMiniScreen: function (e) {
                        d(e)
                    }
                })), p.createElement("div", {
                    className: De()(Ym, jv({}, Vm, f)), onClick: function () {
                        var e, t;
                        null === (e = m.current) || void 0 === e || null === (t = e.changeMiniWin) || void 0 === t || t.call(e, !0)
                    }
                }, p.createElement(Ve, {src: dp, width: 36, height: 36})))
            }

            var Rv = (0, p.forwardRef)(Nv);

            function Tv(e) {
                return function (e) {
                    if (Array.isArray(e)) return Hv(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Uv(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Mv(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Lv(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Mv(Object(n), !0).forEach((function (t) {
                        Bv(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mv(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Bv(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Dv(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Fv(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Dv(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Dv(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function zv(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || Uv(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Uv(e, t) {
                if (e) {
                    if ("string" == typeof e) return Hv(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Hv(e, t) : void 0
                }
            }

            function Hv(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var Wv = {statusCode: 0, data: [], mixId: "", hasMore: !1, cursor: 0, nextUrl: "", logPb: ""};

            function Qv(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Vv(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Qv(Object(n), !0).forEach((function (t) {
                        qv(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qv(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function qv(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Kv(e) {
                return function (e) {
                    if (Array.isArray(e)) return Gv(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Jv(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Xv(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Yv(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Xv(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Xv(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function Zv(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || Jv(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Jv(e, t) {
                if (e) {
                    if ("string" == typeof e) return Gv(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gv(e, t) : void 0
                }
            }

            function Gv(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var $v = {statusCode: 0, data: [], hasMore: !1, nextVideoInfo: "", logPb: ""},
                eg = "douyin_detail_played_awmeme", tg = function () {
                    var e = [];
                    try {
                        e = JSON.parse(sessionStorage.getItem(eg) || "[]") || []
                    } catch (e) {
                    }
                    return e
                }, ng = function (e) {
                    var t = tg();
                    try {
                        t.unshift(e), t.splice(4), sessionStorage.setItem(eg, JSON.stringify(t))
                    } catch (e) {
                    }
                    return t
                };
            var rg = "_97d705de994bee2e76ad8876a1648171-scss", ag = "_20bc24e2255076f4dbc27d9fe1a241f3-scss",
                og = "_7a161db40dc91a5e9612ebc02b3c05b2-scss", ig = "f8f92fbaa6a9978696cbc0d0e2f862ae-scss",
                cg = "b01ca5bb6faf8af52959afb6eb56d369-scss", lg = "_9fcde2e9976fb40adac29f76c400e0bd-scss",
                ug = "_422e6309ede26166f3dfa1bfb413b2d5-scss", sg = xn;

            function fg(e) {
                var t, n = e.awemeInfo, r = e.statusCode, a = void 0 === r ? 0 : r, o = e.isReoload,
                    i = e.defaultMixInfo, c = e.defaultComment, l = e.awemelogPb,
                    u = ((0, p.useContext)(sg) || {}).userInfo, s = u.isLogin, f = u.info,
                    d = null == f ? void 0 : f.uid, m = (0, p.useRef)(null), v = (n || {}).awemeId, g = function (e) {
                        var t = zv((0, p.useState)(e || Wv), 2), n = t[0], r = t[1];
                        return {
                            mixInfo: n, loadMoreMixInfo: (0, p.useCallback)(function () {
                                var e = Fv(regeneratorRuntime.mark((function e(t, n) {
                                    var a, o, i, c, l, u;
                                    return regeneratorRuntime.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Wr({mixId: t, cursor: n, count: 6});
                                            case 2:
                                                a = e.sent, o = a.statusCode, i = a.data, c = a.hasMore, l = a.cursor, u = a.logPb, r((function (e) {
                                                    return Lv(Lv({}, e), {}, {
                                                        statusCode: o,
                                                        mixId: t,
                                                        data: [].concat(Tv(e.data), Tv(i)),
                                                        hasMore: c,
                                                        cursor: l,
                                                        logPb: u
                                                    })
                                                }));
                                            case 9:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function (t, n) {
                                    return e.apply(this, arguments)
                                }
                            }(), []), resetMixInfo: (0, p.useCallback)(function () {
                                var e = Fv(regeneratorRuntime.mark((function e(t, n) {
                                    var a, o, i, c;
                                    return regeneratorRuntime.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                if (o = (a = n || {}).mixId, i = a.totalEpisode, c = a.currentEpisode, !o) {
                                                    e.next = 13;
                                                    break
                                                }
                                                if (!t || 0 !== t.statusCode || t.mixId !== o || t.currentEpisode !== c) {
                                                    e.next = 6;
                                                    break
                                                }
                                                r(t), e.next = 11;
                                                break;
                                            case 6:
                                                return e.t0 = r, e.next = 9, Kr({
                                                    mixId: o,
                                                    totalEpisode: i,
                                                    currentEpisode: c,
                                                    count: 6
                                                });
                                            case 9:
                                                e.t1 = e.sent, (0, e.t0)(e.t1);
                                            case 11:
                                                e.next = 14;
                                                break;
                                            case 13:
                                                r(Wv);
                                            case 14:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function (t, n) {
                                    return e.apply(this, arguments)
                                }
                            }(), [])
                        }
                    }(i), h = g.mixInfo, b = g.loadMoreMixInfo, y = g.resetMixInfo, w = function () {
                        var e = (0, p.useRef)([]), t = (0, p.useRef)([]), n = Zv((0, p.useState)($v), 2), r = n[0],
                            a = n[1], o = (0, p.useCallback)(function () {
                                var n = Yv(regeneratorRuntime.mark((function n(r) {
                                    var o, i, c, l, u, s, f, d, m, p;
                                    return regeneratorRuntime.wrap((function (n) {
                                        for (; ;) switch (n.prev = n.next) {
                                            case 0:
                                                if (!r) {
                                                    n.next = 16;
                                                    break
                                                }
                                                return e.current = [], t.current = [], o = tg(), n.next = 6, Fa({
                                                    awemeId: r,
                                                    count: 20,
                                                    filterGids: o.join(",") || ""
                                                });
                                            case 6:
                                                for (i = n.sent, c = i.statusCode, l = i.awemeList, u = i.logPb, e.current = e.current.concat(o), s = !1, f = 0; f < (null == l ? void 0 : l.length); f++) (null === (d = l[f]) || void 0 === d ? void 0 : d.awemeId) !== r && (s || (s = {
                                                    url: Ot(l[f].awemeId, "pre_vid=".concat(r, "&previous_page=").concat(me())),
                                                    img: l[f].video.cover,
                                                    desc: null === (m = l[f]) || void 0 === m ? void 0 : m.desc
                                                }), e.current.push(l[f].awemeId), t.current.push(l[f]));
                                                p = t.current.length, ng(r), a({
                                                    logPb: u,
                                                    statusCode: c,
                                                    hasMore: p > 0,
                                                    data: t.current.splice(0, 20),
                                                    nextVideoInfo: s
                                                });
                                            case 16:
                                            case"end":
                                                return n.stop()
                                        }
                                    }), n)
                                })));
                                return function (e) {
                                    return n.apply(this, arguments)
                                }
                            }(), []), i = (0, p.useCallback)((function () {
                                a($v)
                            }), []);
                        return {
                            relateInfo: r, loadMoreRelateInfo: (0, p.useCallback)(function () {
                                var n = Yv(regeneratorRuntime.mark((function n(r) {
                                    var o, i, c, l, u;
                                    return regeneratorRuntime.wrap((function (n) {
                                        for (; ;) switch (n.prev = n.next) {
                                            case 0:
                                                if (o = "", !(e.current.length > 0)) {
                                                    n.next = 10;
                                                    break
                                                }
                                                return n.next = 4, Fa({
                                                    awemeId: r,
                                                    count: 20,
                                                    filterGids: e.current.join(",")
                                                });
                                            case 4:
                                                i = n.sent, c = i.awemeList, l = i.logPb, o = l, e.current = [], t.current = [].concat(Kv(t.current), Kv(c || []));
                                            case 10:
                                                u = t.current.splice(0, 6), a((function (e) {
                                                    var n = [].concat(Kv(e.data), Kv(u));
                                                    return Vv(Vv({}, e), {}, {
                                                        logPb: o,
                                                        statusCode: 0,
                                                        data: n,
                                                        hasMore: t.current.length > 0
                                                    })
                                                }));
                                            case 12:
                                            case"end":
                                                return n.stop()
                                        }
                                    }), n)
                                })));
                                return function (e) {
                                    return n.apply(this, arguments)
                                }
                            }(), [null == r ? void 0 : r.data.length]), initRelateInfo: o, resetRelateInfo: i
                        }
                    }(), E = w.relateInfo, x = w.loadMoreRelateInfo, _ = w.initRelateInfo, A = w.resetRelateInfo,
                    O = function (e) {
                        var t = e || {}, n = t.data, r = t.currentEpisode, a = !1;
                        if (null != n && n.length) for (var o = 0; o < n.length; o++) {
                            var i;
                            if ((null === (i = n[o]) || void 0 === i ? void 0 : i.mixInfo.currentEpisode) === r) {
                                var c, l, u;
                                null != n && null !== (c = n[o + 1]) && void 0 !== c && c.awemeId && (a = {
                                    url: Ot(null == n || null === (l = n[o + 1]) || void 0 === l ? void 0 : l.awemeId, "previous_page=".concat(me() || "")),
                                    img: null == n ? void 0 : n[o + 1].video.cover,
                                    desc: "第".concat(null == n ? void 0 : n[o + 1].mixInfo.currentEpisode, "集 | ").concat(null == n || null === (u = n[o + 1]) || void 0 === u ? void 0 : u.desc)
                                });
                                break
                            }
                        }
                        return a
                    }(h) || (null == E ? void 0 : E.nextVideoInfo) || "";
                return (0, p.useEffect)((function () {
                    o && n && y(i, null == n ? void 0 : n.mixInfo)
                }), [i, n, o]), (0, p.useEffect)((function () {
                    o && (A(), _(v))
                }), [v, o]), 0 !== a || n && void 0 !== s ? a === st.ERROR_404 ? p.createElement(Wc, {
                    title: "你要观看的视频不存在",
                    desc: " "
                }) : a === st.ERROR_INVALID_PARAM ? p.createElement(Qc, {
                    title: "你浏览的视频不是有效视频",
                    desc: " "
                }) : a === st.ERROR_USER_FORBIDEN ? p.createElement(Qc, {
                    title: "账号被封禁",
                    desc: " "
                }) : a ? p.createElement(Qc, {
                    title: "服务器出现问题",
                    desc: "请稍后重试"
                }) : null != n && n.isPrivate && (null == n || null === (t = n.authorInfo) || void 0 === t ? void 0 : t.uid) !== d ? s ? p.createElement(Vc, {
                    title: "隐私视频",
                    desc: "不能查看"
                }) : p.createElement(Vc, {
                    title: "隐私视频",
                    desc: "请登陆后查看"
                }) : p.createElement(p.Fragment, null, p.createElement("div", {className: rg}, p.createElement("div", {className: ag}, p.createElement("div", null, p.createElement("div", {className: ig}, p.createElement(Rv, {
                    awemelogPb: l,
                    awemeInfo: n,
                    nextVideoInfo: O,
                    isReoload: o
                })), p.createElement(Iv, {
                    awemelogPb: l, awemeInfo: n, isReoload: o, onScrollToComment: function () {
                        if (m.current) {
                            var e;
                            gf.sendLog("clickCommentButton", {
                                urlParamList: ["previous_page"],
                                author_id: null == n || null === (e = n.authorInfo) || void 0 === e ? void 0 : e.uid,
                                group_id: null == n ? void 0 : n.groupId,
                                enter_from: me(),
                                log_pb: l
                            });
                            var t = qe(window).y + m.current.getBoundingClientRect().top - 122 - 25;
                            Ke(window, t, 200)
                        }
                    }
                })), p.createElement("div", {className: cg}, p.createElement(um, {
                    awemeInfo: n,
                    mixInfo: h,
                    loadMoreMixInfo: b,
                    relateInfo: E,
                    loadMoreRelateInfo: x,
                    awemelogPb: l,
                    isReoload: o
                })), p.createElement("div", {ref: m}, p.createElement(xd, {
                    userInfo: f,
                    awemeInfo: n,
                    awemeId: o ? null == n ? void 0 : n.awemeId : "",
                    defaultComment: c,
                    awemelogPb: l
                }))), p.createElement("div", {className: og}, p.createElement(um, {
                    awemeInfo: n,
                    mixInfo: h,
                    loadMoreMixInfo: b,
                    relateInfo: E,
                    loadMoreRelateInfo: x,
                    awemelogPb: l,
                    isReoload: o
                }))), p.createElement(et, null)) : p.createElement("div", {className: lg}, p.createElement(Fu, {
                    text: "视频数据加载中",
                    className: ug
                }))
            }

            function dg(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function mg(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? dg(Object(n), !0).forEach((function (t) {
                        pg(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dg(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function pg(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function vg(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return gg(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gg(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function gg(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function hg(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function bg(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            hg(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            hg(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var yg = function () {
                var e = bg(regeneratorRuntime.mark((function e(t, n) {
                    var r, a, o, i = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return a = i.length > 2 && void 0 !== i[2] ? i[2] : null, e.next = 3, Wr({
                                    mixId: t,
                                    cursor: n,
                                    count: 1
                                }, a);
                            case 3:
                                return o = e.sent, e.abrupt("return", {
                                    statusCode: (null == o || null === (r = o.data) || void 0 === r ? void 0 : r.length) > 0 ? 0 : st.ERROR_404,
                                    detail: null == o ? void 0 : o.data[0],
                                    logPb: null == o ? void 0 : o.logPb
                                });
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }(), wg = function () {
                var e = bg(regeneratorRuntime.mark((function e(t, n) {
                    var r, a, o, i, c, l, u, s, f, d, m, p = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = p.length > 2 && void 0 !== p[2] ? p[2] : null, a = {statusCod: -1}, o = {
                                    awemeId: null,
                                    mixId: t,
                                    episode: n,
                                    aweme: null,
                                    comment: null,
                                    mixInfo: null,
                                    logPb: ""
                                }, e.prev = 3, e.next = 6, yg(t, n, r);
                            case 6:
                                if (o.aweme = e.sent, 0 === o.aweme.statusCode) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", o);
                            case 9:
                                return o.awemeId = o.aweme.detail.awemeId, c = o.aweme.detail.mixInfo, l = c.totalEpisode, u = c.currentEpisode, e.next = 13, Promise.allSettled([Kr({
                                    mixId: t,
                                    totalEpisode: l,
                                    currentEpisode: u,
                                    count: 6
                                }, r), yr({awemeId: o.awemeId, cursor: 0, count: 20}, r)]);
                            case 13:
                                return s = e.sent, f = vg(s, 2), d = f[0], m = f[1], o.mixInfo = "fulfilled" !== d.status ? a : d.value, o.comment = "fulfilled" !== m.status ? a : m.value, o.logPb = null == o || null === (i = o.aweme) || void 0 === i ? void 0 : i.logPb, 0 !== o.aweme.statusCode && (o.aweme = null), e.abrupt("return", o);
                            case 24:
                                e.prev = 24, e.t0 = e.catch(3);
                            case 27:
                                return e.abrupt("return", o);
                            case 28:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[3, 24]])
                })));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }();

            function Eg(e) {
                var t = e.awemeInfo, n = (null == t ? void 0 : t.mixInfo) || {}, r = n.mixName,
                    a = void 0 === r ? "合集" : r, o = n.currentEpisode, i = void 0 === o ? "" : o, c = n.mixId,
                    l = void 0 === c ? "" : c, u = ((null == t ? void 0 : t.authorInfo) || {}).nickname,
                    s = void 0 === u ? "" : u;
                return p.createElement(eu, null, p.createElement("title", null, a, " - ", s, " - 抖音"), p.createElement("meta", {
                    name: "description",
                    content: "".concat(a, " ，由").concat(s, "在抖音创建的视频合集。抖音视频-记录美好生活的视频平台，来抖音，观看").concat(s, "的更多作品！")
                }), p.createElement("meta", {
                    name: "keywords",
                    content: "".concat(a, ",").concat(a, "抖音,").concat(s, ",抖音")
                }), p.createElement("link", {
                    rel: "canonical",
                    href: "https://www.douyin.com/collection/".concat(l, "?pos=").concat(i)
                }))
            }

            function xg(e) {
                var t, n, r, a, o, i, c, l, u = !1, s = e || {}, f = s.aweme, d = s.comment, m = s.mixInfo,
                    v = (s.logPb, s.episode), g = s.mixId;
                I() ? (c = g, l = v) : (l = Bt(window.location.search), c = Lt(window.location.pathname));
                var h = (0, p.useRef)(!0);
                h.current && c === g && l === v && (u = !0);
                var b, y, w = vg((0, p.useState)({
                    isReload: !0,
                    logPb: "",
                    data: u ? {comment: d, aweme: f, mixInfo: m} : {}
                }), 2), E = w[0], x = w[1];
                null != E && null !== (t = E.data) && void 0 !== t && t.mixInfo && (E.data.mixInfo.logPb = null == E || null === (b = E.data) || void 0 === b || null === (y = b.aweme) || void 0 === y ? void 0 : y.logPb);
                return E.logPb = null == E || null === (n = E.data) || void 0 === n || null === (r = n.aweme) || void 0 === r ? void 0 : r.logPb, (0, p.useEffect)((function () {
                    u && (h.current = !1, f && 0 === (null == f ? void 0 : f.statusCode)) || bg(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return x((function (e) {
                                        return {isReload: !1, data: mg(mg({}, e.data), {}, {comment: null})}
                                    })), e.next = 3, yg(c, l);
                                case 3:
                                    t = e.sent, x((function (e) {
                                        return {isReload: !0, data: mg(mg({}, e.data), {}, {aweme: t})}
                                    }));
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [c, l, f, u]), p.createElement(p.Fragment, null, p.createElement(Eg, {awemeInfo: null === (a = E.data.aweme) || void 0 === a ? void 0 : a.detail}), p.createElement(fg, {
                    awemelogPb: null == E ? void 0 : E.logPb,
                    awemeInfo: null === (o = E.data.aweme) || void 0 === o ? void 0 : o.detail,
                    statusCode: (null === (i = E.data.aweme) || void 0 === i ? void 0 : i.statusCode) || 0,
                    isReoload: E.isReload,
                    defaultMixInfo: E.data.mixInfo,
                    defaultComment: E.data.comment
                }))
            }

            xg.getInitialProps = function () {
                var e = bg(regeneratorRuntime.mark((function e(t) {
                    var n, r, a;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.ctx, r = null, a = null, I() ? (r = Lt(n.request.path), a = Bt(n.request.search)) : (r = Lt(location.pathname), a = Bt(location.search)), e.next = 6, wg(r, a, n);
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }();
            var _g = xg, Ag = "de63d23574118840e58c6b98acf1c5a9-scss", Og = "_730ce2261aeac50c4dff95097b44491e-scss",
                Cg = "_1c8e8ed4158abca9b50ff81a98604c00-scss";

            function kg() {
                return p.createElement("div", {className: Ag}, p.createElement("div", {className: Og}, p.createElement("div", {className: Cg}, p.createElement(kl, null))))
            }

            var Pg = "_744eae510a18e08d7fbdd9dbc93aaf03-scss", jg = function () {
                var e = (0, p.useRef)(null);
                return p.createElement("div", {
                    className: Pg,
                    ref: e
                }, "---UserVideoSkeleton:", p.createElement(kg, null), "---Tag:", p.createElement(kf, null, "热点"), p.createElement(Rf, {type: "1"}), p.createElement(Rf, {type: "2"}), p.createElement(Rf, {type: "3"}), p.createElement(Rf, {type: "4"}), p.createElement(Rf, {type: "6"}), p.createElement(Rf, {type: "7"}), p.createElement(Pf, null), p.createElement(jf, null), p.createElement(If, null), p.createElement(Sf, null), p.createElement(Nf, null), "---Badge:", p.createElement(Qd, {userInfo: {customVerify: "test"}}), p.createElement(Qd, {userInfo: {enterpriseVerifyReason: "test"}}), "---Button:", p.createElement(lo, {
                    autoFixed: !1,
                    onClick: function () {
                        nc.info("this is toast", e.current)
                    }
                }, "solid"), p.createElement(lo, {
                    theme: "border", onClick: function () {
                    }
                }, "border"), p.createElement(lo, {
                    size: "normal",
                    type: "secondary",
                    theme: "border",
                    onClick: function () {
                    }
                }, "border"), p.createElement(lo, {type: "secondary"}, "secondary"), p.createElement(lo, {type: "ghost"}, "ghost"), "---Error basic:", p.createElement(Uc, {
                    type: Cc.notFound,
                    title: "这是标题",
                    desc: ["描述描述描述描述描述描述描述", "描述描述描述描述描述描述描述描述描述描述描述"],
                    primaryButtonTitle: "primary",
                    primaryButtonAction: function () {
                    },
                    secondaryButtonTitle: "secondary",
                    secondaryButtonAction: function () {
                    }
                }), "---NetWorkError:", p.createElement(Hc, null), "---NotFoundError:", p.createElement(Wc, null), "---ServerError:", p.createElement(Qc, null), "---PrivateAccountError:", p.createElement(Vc, null), "---SearchEmptyError:", p.createElement(qc, null), "---Divider:", p.createElement(yf, null), "---Loading:", p.createElement(Fu, null), p.createElement(Fu, {text: "加载中"}), "---SiderBar:", p.createElement(et, null), "---Avatar:", p.createElement("div", {
                    style: {
                        display: "flex",
                        backgroundColor: "#aaa"
                    }
                }, p.createElement(to, {type: "live"}), p.createElement(to, {type: "extraExtraSmall"}), p.createElement(to, {type: "extraSmall"}), p.createElement(to, {type: "small"}), p.createElement(to, {type: "default"})))
            };

            function Sg(e) {
                return function (e) {
                    if (Array.isArray(e)) return Ig(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ig(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ig(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ig(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ng(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Rg(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Ng(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Ng(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var Tg = function () {
                var e = Rg(regeneratorRuntime.mark((function e(t, n, r, a) {
                    var o, i, c, l, u, s;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = 0, i = [], c = r, t.length <= 10 ? (t.slice(0, t.length), i = t.map((function (e) {
                                    return ba({hotWord: e.word, offset: c}, a)
                                })), o = 0, c++) : (i = t.slice(n, n + 10).map((function (e) {
                                    return ba({hotWord: e.word, offset: c}, a)
                                })), n + 10 > t.length ? (c++, o = n + 10 - t.length, i = [].concat(Sg(i), [t.slice(0, o).map((function (e) {
                                    return ba({hotWord: e.word, offset: c}, a)
                                }))])) : o = n + 10), e.next = 6, null == Promise ? void 0 : Promise.allSettled(i);
                            case 6:
                                return l = e.sent, u = [], l.forEach((function (e) {
                                    "fulfilled" === e.status && 0 === e.value.statusCode && (u = [].concat(Sg(u), Sg(e.value.awemeList)), s = e.value.logPb)
                                })), e.abrupt("return", {awemeList: u, wordCur: o, loopCur: c, logPb: s});
                            case 10:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, n, r, a) {
                    return e.apply(this, arguments)
                }
            }();
            var Mg = function (e) {
                    var t = e || {}, n = t.wordList, r = t.awemeList, a = t.wordCur, o = t.loopCur,
                        i = (0, p.useRef)(n || []), c = (0, p.useRef)(a || 0), l = (0, p.useRef)(o || 0);
                    return p.createElement(p.Fragment, null, p.createElement(eu, null, p.createElement("title", null, "抖音热点榜_抖音热门话题_抖音热门视频大全_抖音"), p.createElement("meta", {
                        name: "description",
                        content: "抖音热点榜 - 抖音热门视频内容实时更新，来抖音，追热点！抖音视频-记录美好生活的视频平台"
                    }), p.createElement("meta", {
                        name: "keywords",
                        content: "抖音热点,抖音热点榜,抖音热门话题,抖音热门,抖音热门视频,抖音"
                    }), p.createElement("link", {
                        rel: "canonical",
                        href: "https://www.douyin.com/hot"
                    })), p.createElement(mf, {
                        defaultData: r || [], fetchFeeds: Rg(regeneratorRuntime.mark((function e() {
                            var t, n, r, a, o, u, s, f, d, m;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (0 !== (null == i || null === (t = i.current) || void 0 === t ? void 0 : t.length)) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.next = 3, Ea();
                                    case 3:
                                        if (n = e.sent, r = n.statusCode, a = n.wordList, o = n.trendingList, !r) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return", {statusCode: r});
                                    case 9:
                                        i.current = [].concat(Sg(a), Sg(o)), c.current = 0;
                                    case 11:
                                        return e.next = 13, Tg(i.current, c.current, l.current, null);
                                    case 13:
                                        return u = e.sent, s = u.awemeList, f = u.wordCur, d = u.loopCur, m = u.logPb, c.current = f, l.current = d, e.abrupt("return", {
                                            statusCode: 0,
                                            awemeList: s,
                                            hasMore: 0 !== s.length,
                                            logPb: m
                                        });
                                    case 21:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        }))), current: "hot"
                    }))
                }, Lg = "_45754f2c42931ee87840abb276addb96-scss", Bg = "f4f0e863044c5812e2034da8612cc3fc-scss",
                Dg = "_1fca205189171a319665f64a223ce1ce-scss", Fg = "_6f9de2a6f752fffb21b1a98a0e7143c9-scss";

            function zg(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ug(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ug(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ug(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Hg(e) {
                var t = e.log;
                return p.createElement("div", {className: Fg}, Object.keys(t).map((function (e) {
                    return p.createElement("div", {key: e}, e, ": ", t[e])
                })))
            }

            var Wg, Qg, Vg = function () {
                    var e, t = zg(cc(), 2), n = t[0], r = t[1];
                    return p.createElement("div", {className: Lg}, p.createElement(Ql.ql, null, p.createElement("title", null, "抖音 PC 版本 - log "), p.createElement("meta", {
                        name: "description",
                        content: "抖音 PC 版本 - Log"
                    })), p.createElement("h1", {className: Bg}, "LOG TRACE: （最新", null == s || null === (e = o) || void 0 === e ? void 0 : e.LOG_TRACE_COUNT, "条记录）", p.createElement(lo, {
                        type: "primary",
                        size: "small",
                        className: Dg,
                        onClick: r
                    }, "copy")), n.length ? n.map((function (e, t) {
                        return p.createElement(Hg, {log: e, key: t})
                    })) : "-")
                }, qg = new S({
                    pageView: {eventName: "page_view", params: {url: "", url_path: "", enter_from: ""}},
                    enterPersonalHomepage: {
                        eventName: "enter_personal_homepage",
                        params: {enter_method: "", enter_from: ""}
                    },
                    enterPersonalDetail: {
                        eventName: "enter_personal_detail",
                        params: {to_user_id: "", is_private: 0, enter_method: "", enter_from: ""}
                    },
                    changeProfileTab: {
                        eventName: "change_profile_tab",
                        params: {enter_from: "", to_user_id: "", tab_name: ""}
                    },
                    follow: {eventName: "follow", params: {enter_from: "", to_user_id: ""}},
                    unfollow: {eventName: "unfollow", params: {enter_from: "", to_user_id: ""}},
                    collectionCoverShow: {
                        eventName: "video_cover_show",
                        params: {
                            author_id: "",
                            group_id: "",
                            log_pb: "",
                            enter_from: "",
                            compilation_id: "",
                            compilation_video_cnt: 0,
                            type: "compilation",
                            rank: 0
                        }
                    },
                    collectionCoverClick: {
                        eventName: "video_cover_click",
                        params: {
                            author_id: "",
                            group_id: "",
                            log_pb: "",
                            enter_from: "",
                            compilation_id: "",
                            compilation_video_cnt: 0,
                            type: "compilation",
                            rank: 0
                        }
                    }
                }), Kg = "_2da84af4a13f9ed378341c734a671f7d-scss", Xg = "cf401c80d44e90da0baab2068e3edaac-scss",
                Yg = "cdfe966a407e789030b16d9d8c266d66-scss", Zg = "_23043643eb775fcec3bc4c75c34426ed-scss",
                Jg = "f390983fee6153bf80f046030b8e0c06-scss", Gg = "ef687334cee7d6b32d3456902b72e29c-scss",
                $g = "_9035ad37393516563c608293fdc27a22-scss", eh = "_1e8bc5bf754cfef809605f6833209c55-scss",
                th = "_8dd93d57eec85530213bd4ab53a890dd-scss", nh = "f6e7db18685cfb97d85998acb4f9cd56-scss",
                rh = "_550b0cedbc4e51e02407525217d22ca3-scss", ah = "_0604942a82a9c66991d95814f914ad17-scss",
                oh = "_82dfdbfaea91a6669d6e0847ce05f064-scss";

            function ih(e) {
                var t = e.userInfo, n = e.isSelf, r = t || {}, a = r.uid, o = r.nickname, i = r.avatarUrl, c = r.desc,
                    l = r.followingCount, u = r.mplatformFollowersCount, s = r.totalFavorited, f = r.followStatus,
                    d = r.customVerify, m = r.enterpriseVerifyReason, v = r.uniqueId, g = r.roomId, h = r.secret,
                    b = r.shortId, y = r.followerStatus, w = (r.isBlock, r.isBlocked, xn),
                    E = (0, p.useContext)(w) || {}, x = E.userInfo.isLogin, _ = E.dispatch, A = Dd({
                        followStatus: f, followerStatus: y, isLogin: x, onLoginSuc: function () {
                            return _({type: "updateUserInfo"})
                        }
                    }), O = A.changeStatus, C = A.type, k = A.text, P = A.onChangeFollowStatus, j = {
                        follower: {title: "粉丝", count: il(u)},
                        following: {title: "关注", count: il(l)},
                        like: {title: "获赞", count: il(s)}
                    };
                return (0, p.useEffect)((function () {
                    O(f, x, y)
                }), [f, x, y]), p.createElement(p.Fragment, null, p.createElement("div", {className: Kg}, p.createElement("div", {className: Xg}, p.createElement(to, {
                    src: i,
                    alt: "".concat(o, "头像")
                })), p.createElement("div", {className: Yg}, [j.follower, j.following, j.like].map((function (e, t) {
                    return p.createElement("div", {
                        key: t,
                        className: Jg
                    }, p.createElement("div", {className: Gg}, e.title), p.createElement("div", {className: $g}, e.count))
                })))), p.createElement("div", {className: eh}, p.createElement("h1", {className: th}, p.createElement(El, {text: o})), p.createElement(Qd, {
                    userInfo: {
                        customVerify: d,
                        enterpriseVerifyReason: m
                    }, className: Zg
                })), p.createElement("p", {className: nh}, "抖音号： ", v), p.createElement("p", {className: rh}, p.createElement(El, {text: c})), !n && p.createElement(p.Fragment, null, p.createElement(lo, {
                    onClick: function () {
                        P(a)
                    }, className: ah, type: 0 !== C ? "secondary" : "primary"
                }, k), !(!(h && x && !n && [1, 2].includes(f) || !h || n) || !Boolean(g)) && p.createElement(lo, {
                    onClick: function () {
                        location.href = Rt({uniqueId: v, shortId: b})
                    }, className: oh, theme: "border"
                }, "直播中")))
            }

            function ch() {
                return (ch = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var lh = function (e) {
                    return p.createElement("svg", ch({
                        width: 20,
                        height: 20,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), Wg || (Wg = p.createElement("circle", {
                        cx: 10,
                        cy: 10,
                        r: 10,
                        fill: "#D9DAE5",
                        fillOpacity: .7
                    })), Qg || (Qg = p.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.72 13.898a.75.75 0 010-1.06l2.828-2.83L7.72 7.18a.75.75 0 011.06-1.06l3.36 3.358a.75.75 0 010 1.061l-3.36 3.359a.75.75 0 01-1.06 0z",
                        fill: "#4F5168"
                    })))
                }, uh = "_98eac1a8ae3cf5aed02645ed721dbf7c-scss", sh = "_4c73f90d571304b739151c7b2c61306b-scss",
                fh = "_80a842334a1811211997ad5e3c1c7c87-scss", dh = "acec75baba73207596dbc8725e9addb3-scss",
                mh = "e09c8bd92216061e8d76dbab8391cda0-scss", ph = "_01db9cc44f78bbc7cc39f6dc5d34d731-scss",
                vh = "_2d51037291c267edaba16e7db6fcc328-scss", gh = "_4287e866a4045b678bac19aebd459099-scss",
                hh = "_5d54768aeca0f3e4d13d45e13307b0b2-scss", bh = "_82b8792bdffe1467ebf5a6cdea2fd518-scss",
                yh = "c647f1d3bf0e8d9659bca456247e9d98-scss", wh = "dc74979f33d630befafa81b783e87609-scss",
                Eh = "_3a28c8b0e6a6b17f53de1b02f677e363-scss", xh = "_29a4142a1919a42b06ff90e9a38abc39-scss",
                _h = "_87f8247a1138b3398b65bce38170b6a7-scss";

            function Ah(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Oh() {
                return (Oh = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Ch(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function kh(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Ch(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Ch(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function Ph(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return jh(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jh(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function jh(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var Sh = function (e) {
                var t = e.userInfo, n = e.cover, r = e.mixName, a = e.playVV, o = e.totalEpisode, i = e.mixId,
                    c = e.logPb, l = e.index, u = e.mixVideoHref, s = Ph((0, el.Z)(void 0, {}, []), 2), f = s[0],
                    d = s[1], m = Ph((0, p.useState)(!1), 2), v = m[0], g = m[1];
                (0, p.useEffect)((function () {
                    d && !v && (g(!0), qg.sendLog("collectionCoverShow", {
                        enter_from: me(),
                        compilation_id: i,
                        compilation_video_cnt: o,
                        author_id: t.uid,
                        log_pb: c,
                        rank: l,
                        group_id: ""
                    }))
                }), [d]);
                var h = function (e) {
                    qg.sendLog("collectionCoverClick", {
                        enter_from: me(),
                        compilation_id: i,
                        compilation_video_cnt: o,
                        author_id: t.uid,
                        log_pb: c,
                        rank: l
                    }), o ? location.href = u : (nc.info("创作者还没有为这个合集添加视频"), e.preventDefault())
                };
                return p.createElement("div", {
                    style: {display: "inline-flex"},
                    ref: f,
                    onClick: h
                }, p.createElement("a", {className: ph, href: u, onClick: h, title: r}, p.createElement(zl, {
                    src: n,
                    alt: r,
                    iconWidth: 30
                })), p.createElement("div", {className: vh}, p.createElement("a", {
                    className: gh,
                    href: u,
                    onClick: h,
                    title: r
                }, r), p.createElement("div", null, p.createElement("p", {className: hh}, p.createElement("span", {className: sh}, il(a)), "播放"), p.createElement("p", {className: bh}, "更新至", p.createElement("span", {className: sh}, o), "集"))))
            }, Ih = function (e) {
                var t = e.userInfo, n = e.scrollContainerElRef, r = e.handleLoadEnd, a = e.handleSetTotal,
                    o = e.defaultMixRes, i = e.pageName, c = (0, p.useRef)(null), l = (0, ie.UO)().id,
                    u = (0, p.useRef)((null == o ? void 0 : o.cursor) || 0),
                    s = (0, p.useRef)((null == o ? void 0 : o.hasMore) || !0),
                    f = (0, p.useRef)((null == o ? void 0 : o.total) || void 0),
                    d = (0, p.useRef)((null == o ? void 0 : o.logPb) || ""), m = Ph((0, p.useState)(!1), 2), v = m[0],
                    g = m[1], h = (0, p.useCallback)(kh(regeneratorRuntime.mark((function e() {
                        var t, n, r, o, i, c, m;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!s.current) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 3, Vr({uid: l, cursor: u.current, count: 6});
                                case 3:
                                    return t = e.sent, n = t.data, r = t.cursor, o = t.hasMore, i = t.statusCode, c = t.total, m = t.logPb, u.current = r, s.current = o, "number" == typeof c && void 0 === f.current && a(c), d.current = m, f.current = c, e.abrupt("return", {
                                        data: n,
                                        cursor: r,
                                        hasMore: o,
                                        statusCode: i
                                    });
                                case 16:
                                    return e.abrupt("return", {data: [], hasMore: !1, statusCode: 0});
                                case 17:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))), []), b = (0, p.useCallback)((function () {
                        window.innerWidth < 1128 ? !v && g(!0) : v && g(!1)
                    }), [v]);
                return (0, p.useEffect)((function () {
                    b();
                    var e = Iu()((function () {
                        b()
                    }), 100);
                    return window.addEventListener("resize", e), function () {
                        window.removeEventListener("resize", e)
                    }
                }), [b]), p.createElement(Zu, {
                    panelNoMoreData: p.createElement("div", null),
                    handleLoadEnd: r,
                    scrollContainerEl: v ? n.current : void 0,
                    isHorizontal: v,
                    skeletonNum: 0,
                    ref: c,
                    defaultHasMoreFlag: null == o ? void 0 : o.hasMore,
                    defaultStatusCode: null == o ? void 0 : o.statusCode,
                    defaultDataList: null == o ? void 0 : o.data,
                    fetchMoreData: h,
                    containerClassName: dh,
                    itemClassName: mh,
                    renderItem: function (e, n) {
                        var r = It(null == e ? void 0 : e.mixId, 0, "previous_page=".concat(i));
                        return p.createElement(Sh, Oh({mixVideoHref: r, userInfo: t}, e, {logPb: d.current, index: n}))
                    }
                })
            };

            function Nh(e) {
                var t = e.pageName, n = e.userInfo, r = e.isSelf, a = e.defaultMixRes, o = (0, p.useMemo)((function () {
                        var e = n.isBlock, t = n.isBlocked, a = n.secret;
                        return !(e || t || !r && a)
                    }), [r, n]), i = (0, p.useRef)(), c = Ph((0, p.useState)(0 === (null == a ? void 0 : a.total)), 2),
                    l = c[0], u = c[1], s = Ph((0, p.useState)(!1), 2), f = s[0], d = s[1],
                    m = Ph((0, p.useState)(0), 2), v = m[0], g = m[1], h = Ph((0, p.useState)(void 0), 2), b = h[0],
                    y = h[1], w = Ph((0, p.useState)(null == a ? void 0 : a.total), 2), E = w[0], x = w[1],
                    _ = (0, p.useRef)(0), A = function (e) {
                        var t, n;
                        if ("right" !== e || !l) {
                            var r = null == i || null === (t = i.current) || void 0 === t ? void 0 : t.clientWidth,
                                a = 272 * Math.floor(r / 272), o = 0;
                            "right" === e && (o = _.current ? _.current + a : v + a), "left" === e && (v > 0 && u(!1), o = _.current ? v <= 0 ? 0 : _.current - a : v <= 0 ? 0 : v - a), null == i || null === (n = i.current) || void 0 === n || n.scrollTo(o, 0);
                            var c = null == i ? void 0 : i.current.scrollLeft;
                            if (f && c < o || b === c) void 0 === b && y(c), u(!0), g(c), _.current || (_.current = o); else c < o ? (_.current || (_.current = o), g(c)) : (g(o), _.current = 0)
                        }
                    }, O = function () {
                        return p.createElement("div", {
                            className: De()(Eh, Ah({}, _h, v <= 0)), onClick: function () {
                                return A("left")
                            }
                        }, p.createElement(lh, null))
                    }, C = function () {
                        return p.createElement("div", {
                            className: De()(xh, Ah({}, _h, l)), onClick: function () {
                                return A("right")
                            }
                        }, p.createElement(lh, null))
                    };
                return o ? p.createElement("div", {hidden: !E}, p.createElement("div", {className: yh}, p.createElement("div", {className: uh}, "合集", p.createElement("span", {className: sh}, E)), p.createElement("div", {className: wh}, p.createElement(O, null), p.createElement(C, null))), p.createElement("div", {
                    className: fh,
                    ref: i
                }, p.createElement(Ih, {
                    pageName: t,
                    defaultMixRes: a,
                    userInfo: n,
                    scrollContainerElRef: i,
                    handleLoadEnd: function () {
                        d(!0)
                    },
                    handleSetTotal: function (e) {
                        x(e), e > 0 && u(!1)
                    }
                }))) : null
            }

            var Rh, Th = "_787337747252a601a979b6885202ecb6-scss", Mh = "a456002e7c59d3b3c47ac9a3f362f6a7-scss",
                Lh = "_0187c7e4a16792ec73e6bafffd36c35b-scss", Bh = "_4b7b866b651e00a3254e7d936ac534fe-scss",
                Dh = "ee2c9591d3e3a48b6acb04e6fbacef9d-scss", Fh = "_919bc87433ffd6bae555bd1f83d9a82f-scss",
                zh = "_97a0a8fa4fb9eb092882c832463dad24-scss", Uh = "_4c7753003fcad283963e6dd5d4aa5f1e-scss",
                Hh = "_004c885434c9e917fea2b714c5b7680b-scss", Wh = "_1013367ca093a6ddbeb236c4426a0c35-scss";

            function Qh() {
                return (Qh = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Vh, qh, Kh = function (e) {
                return p.createElement("svg", Qh({
                    width: 14,
                    height: 17,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Rh || (Rh = p.createElement("path", {
                    d: "M1.89 13.3V2.963c0-.665 0-1.102.03-1.42.022-.248.056-.33.062-.342a.427.427 0 01.304-.16c.014.002.101.02.319.141.278.155.64.401 1.188.776l7.382 5.048c.432.295.706.483.895.64a.919.919 0 01.19.187.427.427 0 01.004.316.925.925 0 01-.186.192c-.186.16-.456.354-.88.658l-7.383 5.288c-.553.396-.918.656-1.2.822-.22.13-.31.15-.323.153a.427.427 0 01-.308-.159c-.005-.012-.04-.097-.064-.352-.03-.325-.03-.773-.03-1.453z",
                    stroke: "#fff",
                    strokeWidth: 1.778
                })))
            };

            function Xh() {
                return (Xh = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var Yh, Zh = function (e) {
                return p.createElement("svg", Xh({
                    width: 19,
                    height: 19,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Vh || (Vh = p.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.533 14.824a.625.625 0 001.25 0 7.391 7.391 0 00-3.371-6.208 5.115 5.115 0 001.113-3.195 5.107 5.107 0 00-1.506-3.636A5.107 5.107 0 0010.384.28c-.815 0-1.594.185-2.316.55a.625.625 0 10.564 1.116 3.896 3.896 0 015.643 3.476 3.862 3.862 0 01-1.165 2.776.756.756 0 00.172 1.203 6.145 6.145 0 013.251 5.424zm-3.119 2.32a.625.625 0 001.25 0 7.19 7.19 0 00-3.262-6.027 4.982 4.982 0 001.071-3.095c0-1.338-.52-2.595-1.466-3.54a4.974 4.974 0 00-3.54-1.467c-1.337 0-2.595.52-3.54 1.466a4.974 4.974 0 00-1.467 3.54 4.974 4.974 0 001.071 3.096A7.19 7.19 0 00.27 17.145a.625.625 0 001.25 0 5.943 5.943 0 013.143-5.247.752.752 0 00.172-1.196 3.729 3.729 0 01-1.125-2.68 3.76 3.76 0 013.757-3.757 3.76 3.76 0 013.756 3.757c0 1.016-.399 1.967-1.124 2.68a.752.752 0 00.171 1.197 5.943 5.943 0 013.144 5.246z",
                    fill: "#fff"
                })), qh || (qh = p.createElement("path", {
                    d: "M17.783 14.824h.25-.25zm-3.371-6.208l-.196-.156-.171.216.231.15.136-.21zm.7-1.172l-.23-.099.23.099zm-1.093-5.659l-.177.177.177-.177zM8.068.83l.113.223L8.068.83zm-.276.84l-.223.113.223-.113zm.84.276l-.113-.223.113.223zm4.478 6.252l-.175-.179.175.179zm-.218.645l-.247.036.247-.036zm.39.557l-.118.22.118-.22zm-1.88 1.718l-.196-.155-.17.215.23.15.136-.21zm.669-1.125l-.23-.099.23.099zm-1.064-5.51l-.177.176.177-.177zm-7.08 0l.176.176-.176-.177zm-1.064 5.51l.23-.099-.23.099zm.668 1.125l.137.21.229-.15-.17-.214-.196.154zm1.132.781l-.118-.22.118.22zm.389-.554l.247.035-.247-.035zm-.217-.642l.175-.179-.175.179zm5.264 0l-.175-.179.175.179zm-.217.642l.247-.036-.247.036zm.388.554l.118-.22-.118.22zm6.888 3.301a.375.375 0 01-.375-.375h-.5c0 .483.392.875.875.875v-.5zm.375-.375a.375.375 0 01-.375.375v.5a.875.875 0 00.875-.875h-.5zm-3.257-5.998a7.141 7.141 0 013.257 5.998h.5a7.641 7.641 0 00-3.485-6.418l-.272.42zm.606-1.48a4.869 4.869 0 01-.666 1.114l.392.312c.298-.375.543-.787.733-1.23l-.46-.197zm.393-1.925c0 .668-.132 1.315-.393 1.924l.46.197a5.358 5.358 0 00.433-2.121h-.5zm-1.433-3.46a4.858 4.858 0 011.433 3.46h.5c0-1.44-.561-2.795-1.579-3.813l-.354.354zM10.384.53c1.307 0 2.534.509 3.458 1.433l.354-.354A5.358 5.358 0 0010.384.03v.5zm-2.203.523A4.838 4.838 0 0110.384.53v-.5c-.854 0-1.671.194-2.429.577l.226.446zm-.166.504a.375.375 0 01.166-.504L7.955.606a.875.875 0 00-.386 1.176l.446-.226zm.504.166a.375.375 0 01-.504-.166l-.446.226a.875.875 0 001.175.386l-.225-.446zm1.865-.443a4.1 4.1 0 00-1.865.443l.225.446a3.6 3.6 0 011.64-.389v-.5zm4.141 4.142a4.146 4.146 0 00-4.141-4.142v.5a3.646 3.646 0 013.641 3.642h.5zm-1.24 2.954a4.113 4.113 0 001.24-2.954h-.5c0 .985-.387 1.907-1.09 2.597l.35.357zm-.145.432a.508.508 0 01.146-.432l-.35-.357a1.007 1.007 0 00-.291.86l.495-.071zm.26.372a.506.506 0 01-.26-.372l-.495.07c.045.315.239.592.52.743l.235-.441zm3.383 5.645A6.395 6.395 0 0013.4 9.18l-.236.44a5.895 5.895 0 013.12 5.205h.5zM14.04 17.52a.375.375 0 01-.375-.375h-.5c0 .483.392.875.875.875v-.5zm.375-.375a.375.375 0 01-.375.375v.5a.875.875 0 00.875-.875h-.5zm-3.149-5.818a6.94 6.94 0 013.15 5.818h.5a7.439 7.439 0 00-3.376-6.237l-.274.419zm.576-1.434a4.73 4.73 0 01-.635 1.07l.393.31c.284-.362.52-.758.701-1.183l-.46-.197zm.382-1.871c0 .65-.128 1.279-.382 1.871l.46.197c.28-.655.422-1.351.422-2.068h-.5zM10.83 4.658a4.724 4.724 0 011.393 3.364h.5a5.224 5.224 0 00-1.54-3.717l-.353.353zM7.467 3.265c1.27 0 2.464.495 3.363 1.393l.354-.353a5.224 5.224 0 00-3.717-1.54v.5zM4.103 4.658a4.724 4.724 0 013.364-1.393v-.5a5.224 5.224 0 00-3.717 1.54l.353.353zM2.71 8.022c0-1.271.495-2.465 1.393-3.364l-.353-.353a5.224 5.224 0 00-1.54 3.717h.5zm.383 1.871a4.724 4.724 0 01-.383-1.871h-.5c0 .717.143 1.413.423 2.068l.46-.197zm.635 1.07a4.73 4.73 0 01-.635-1.07l-.46.197c.182.425.418.821.702 1.182l.393-.31zM.52 17.145a6.939 6.939 0 013.148-5.818l-.273-.419A7.439 7.439 0 00.02 17.145h.5zm.375.375a.375.375 0 01-.375-.375h-.5c0 .483.391.875.875.875v-.5zm.375-.375a.375.375 0 01-.375.375v.5a.875.875 0 00.875-.875h-.5zm3.275-5.467a6.193 6.193 0 00-3.275 5.467h.5a5.693 5.693 0 013.012-5.027l-.237-.44zm.26-.37a.503.503 0 01-.26.37l.237.44c.279-.15.472-.425.517-.739l-.495-.07zm-.146-.428a.504.504 0 01.145.428l.495.071a1.004 1.004 0 00-.29-.856l-.35.357zM3.46 8.022c0 1.083.426 2.099 1.2 2.858l.35-.357a3.479 3.479 0 01-1.05-2.501h-.5zm4.007-4.007A4.01 4.01 0 003.46 8.022h.5a3.51 3.51 0 013.507-3.507v-.5zm4.006 4.007a4.01 4.01 0 00-4.006-4.007v.5a3.51 3.51 0 013.506 3.507h.5zm-1.199 2.858a3.979 3.979 0 001.2-2.858h-.5a3.48 3.48 0 01-1.05 2.501l.35.357zm-.145.428a.504.504 0 01.145-.428l-.35-.357a1.003 1.003 0 00-.29.856l.495-.07zm.26.37a.503.503 0 01-.26-.37l-.495.071c.046.314.239.59.518.74l.236-.441zm3.275 5.467a6.193 6.193 0 00-3.276-5.467l-.236.44a5.693 5.693 0 013.012 5.027h.5z",
                    fill: "#fff"
                })))
            }, Jh = function (e) {
                var t = e.awemeInfo, n = [], r = [];
                return [{key: "isTop", El: Pf}, {key: "hotList", El: Sf}, {
                    key: "relationLabels",
                    El: jf
                }, {
                    key: "labelFriend", El: function () {
                        return p.createElement(Ve, {viewBox: "0 0 19 19", src: Zh})
                    }
                }, {key: "reviewStatus", El: Rf}].forEach((function (e, a) {
                    var o = null == t ? void 0 : t.tag[e.key];
                    o && ("reviewStatus" === e.key ? n.push(p.createElement("div", {
                        className: Lh,
                        key: "".concat(e.key, "_").concat(a)
                    }, p.createElement(e.El, {type: o}))) : "labelFriend" === e.key ? r.push(p.createElement("div", {
                        className: Lh,
                        key: "".concat(e.key, "_").concat(a)
                    }, p.createElement(e.El, null))) : n.push(p.createElement("div", {
                        className: Lh,
                        key: "".concat(e.key, "_").concat(a)
                    }, p.createElement(e.El, null))))
                })), p.createElement(p.Fragment, null, Boolean(n.length) && p.createElement("div", {className: De()(Bh, Dh)}, n), Boolean(r.length) && p.createElement("div", {className: De()(Bh, Fh)}, r))
            };

            function Gh(e) {
                var t = e.videoHref, n = e.className, r = e.src, a = e.awemeInfo, o = e.likeCount, i = e.playCount;
                return p.createElement("a", {
                    className: De()(Th, n),
                    href: t
                }, p.createElement("div", {className: Mh}, Boolean(r) && p.createElement(zl, {
                    className: zh,
                    src: r,
                    iconWidth: 80
                }), p.createElement("div", {className: Wh}), p.createElement(Jh, {awemeInfo: a}), void 0 !== o && p.createElement("span", {className: Uh}, p.createElement(ts, null), p.createElement("span", null, il(o))), void 0 !== i && p.createElement("div", {className: Hh}, p.createElement(Kh, null), p.createElement("span", null, il(i)))))
            }

            function $h() {
                return ($h = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            var eb = function (e) {
                    return p.createElement("svg", $h({
                        width: 14,
                        height: 16,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), Yh || (Yh = p.createElement("path", {
                        opacity: .8,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2.824 5.647h-.942C.842 5.647 0 6.49 0 7.53v6.589C0 15.158.843 16 1.882 16h9.412c1.04 0 1.883-.843 1.883-1.882V7.529c0-1.04-.843-1.882-1.883-1.882h-.941V3.765a3.765 3.765 0 10-7.53 0v1.882zm1.882 0H8.47V3.765a1.882 1.882 0 10-3.765 0v1.882z",
                        fill: "#A9AAB7"
                    })))
                }, tb = "_927ae3b0dd790b5b62eae61c7d2fa0bc-scss", nb = "_411d39e9802ae4571ae23446263bb6bc-scss",
                rb = "e0fe394964bbd9fef7d310c80353afdd-scss", ab = "f22cc9873556867763db1941010f3a11-scss",
                ob = "b5f750a8a8d56e09f7dc2c532c887b6f-scss", ib = "_03811320ee25b81d1c705fae532572ec-scss",
                cb = "_7f14685e2f4201f7b65e97b005c61935-scss", lb = "_54961f872a8317c9c64c0e5c6fd293e8-scss",
                ub = "bdf04d302a5afa95cb44df379dbedab9-scss", sb = "_81414a41f58f6640885ce7ff1cdbd784-scss";

            function fb(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return db(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return db(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function db(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function mb() {
                return (mb = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function pb(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function vb(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var gb = function (e) {
                var t = e.children, n = e.title, r = e.tabKey, a = e.count, o = e.handleClickTab, i = e.currentTab,
                    c = e.icon;
                return p.createElement("div", {
                    onClick: function () {
                        return o(r)
                    }, className: De()(ob, vb({}, cb, i === r))
                }, n, p.createElement("span", {className: ib}, void 0 !== a ? a : ""), t, c)
            }, hb = function (e) {
                var t = e.isSelf, n = e.currentTab, r = e.tabKey, a = e.userInfo, o = e.disabled, i = e.onTotalEnd,
                    c = e.onShowDefaultTotal, l = e.defaultPostRes, u = e.pageName, s = (0, ie.UO)().id,
                    f = (0, p.useRef)(null), d = (0, p.useRef)((null == l ? void 0 : l.cursor) || 0), m = xn,
                    v = ((0, p.useContext)(m) || {}).userInfo.isLogin, g = (0, p.useRef)(!0), h = function () {
                        var e = function (e) {
                            return function () {
                                var t = this, n = arguments;
                                return new Promise((function (r, a) {
                                    var o = e.apply(t, n);

                                    function i(e) {
                                        pb(o, r, a, i, c, "next", e)
                                    }

                                    function c(e) {
                                        pb(o, r, a, i, c, "throw", e)
                                    }

                                    i(void 0)
                                }))
                            }
                        }(regeneratorRuntime.mark((function e() {
                            var t, n, a, o, l, u, m, p;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("post" !== r) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, ra({userId: s, maxCursor: d.current});
                                    case 3:
                                        e.t0 = e.sent, e.next = 9;
                                        break;
                                    case 6:
                                        return e.next = 8, oa({userId: s, maxCursor: d.current});
                                    case 8:
                                        e.t0 = e.sent;
                                    case 9:
                                        return t = e.t0, n = t.data, a = t.maxCursor, o = t.hasMore, l = t.statusCode, u = n.filter((function (e) {
                                            return !e.tag.inReviewing
                                        })), l || (d.current = a), "post" === r && (o ? c() : (null == f || null === (m = f.current) || void 0 === m ? void 0 : m.getTotal) && i((null == f || null === (p = f.current) || void 0 === p ? void 0 : p.getTotal()) + u.length)), e.abrupt("return", {
                                            data: u,
                                            maxCursor: a,
                                            hasMore: o,
                                            statusCode: l
                                        });
                                    case 18:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(), b = function (e) {
                        return e.filter((function (e) {
                            var t;
                            return !(null != e && null !== (t = e.tag) && void 0 !== t && t.isStory) || 68 === e.awemeType
                        }))
                    }, y = (0, p.useMemo)((function () {
                        return a.isBlock || a.isBlocked ? p.createElement("div", {className: sb}, a.isBlock ? p.createElement(Vc, {
                            title: "你已经拉黑对方，无法查看其作品",
                            desc: " "
                        }) : a.isBlocked ? p.createElement(Vc, {
                            title: "由于对方的隐私设置，你无法查看TA的作品",
                            desc: " "
                        }) : null) : o ? p.createElement("div", {className: sb}, o) : p.createElement(Zu, {
                            ref: f,
                            defaultDataList: (null == l ? void 0 : l.data) || [],
                            defaultHasMoreFlag: (null == l ? void 0 : l.hasMore) || !0,
                            defaultStatusCode: (null == l ? void 0 : l.statusCode) || 0,
                            pause: n !== r,
                            dataFilter: b,
                            fetchMoreData: h,
                            containerClassName: nb,
                            itemClassName: rb,
                            panelNoData: p.createElement(qc, {title: "无作品"}),
                            skeletonNum: 9,
                            renderSkeleton: function () {
                                return p.createElement(kg, null)
                            },
                            renderItem: function (e) {
                                var n, a, o, i = null == e || null === (n = e.video) || void 0 === n ? void 0 : n.cover,
                                    c = null == e || null === (a = e.stats) || void 0 === a ? void 0 : a.diggCount,
                                    l = null == e || null === (o = e.stats) || void 0 === o ? void 0 : o.playCount, s = {};
                                t && "post" === r ? s.playCount = l : s.likeCount = c;
                                var f = kt(null == e ? void 0 : e.awemeId, "previous_page=".concat(u));
                                return p.createElement(Gh, mb({awemeInfo: e, src: i}, s, {videoHref: f}))
                            }
                        })
                    }), [n, u, t, a.isBlock, a.isBlocked]);
                return (0, p.useEffect)((function () {
                    var e, t, n;
                    g.current ? g.current = !1 : (d.current = 0, null != f && null !== (e = f.current) && void 0 !== e && e.reset && (null == f || null === (t = f.current) || void 0 === t || t.reset(), null == f || null === (n = f.current) || void 0 === n || n.reload()))
                }), [v]), p.createElement("div", {style: {display: n !== r ? "none" : "flex"}, className: ub}, y)
            };

            function bb(e) {
                var t = e.pageName, n = e.isSelf, r = e.userInfo, a = void 0 === r ? {} : r, o = e.defaultPostRes,
                    i = fb((0, p.useState)("post"), 2), c = i[0], l = i[1],
                    u = !n && !a.showFavoriteList || Boolean(n && a.favoritePermission),
                    s = fb((0, p.useState)((null == a ? void 0 : a.awemeCount) || 0), 2), f = s[0], d = s[1],
                    m = [{title: "作品", key: "post", defaultData: o, count: f}, {
                        title: "喜欢",
                        key: "like",
                        disabled: !n && u && p.createElement(Vc, {title: "喜欢内容不可见", desc: "该用户已将喜欢设为私密"}),
                        count: !u && a.favoritingCount,
                        icon: u && p.createElement("div", {className: lb}, p.createElement(eb, null))
                    }], v = function (e) {
                        qg.sendLog("changeProfileTab", {
                            enter_from: me(),
                            tab_name: e,
                            to_user_id: null == a ? void 0 : a.uid
                        }), l(e)
                    };
                return p.createElement("div", {className: tb}, p.createElement("div", {className: ab}, m.map((function (e) {
                    var t = e.title, n = e.key, r = e.count, a = e.icon;
                    return p.createElement(gb, {
                        key: n,
                        title: t,
                        count: r,
                        tabKey: n,
                        handleClickTab: v,
                        currentTab: c,
                        icon: a
                    })
                }))), m.map((function (e) {
                    var r = e.key, o = e.disabled, i = e.defaultData;
                    return p.createElement(hb, {
                        pageName: t,
                        isSelf: n,
                        disabled: o,
                        defaultPostRes: i,
                        key: r,
                        tabKey: r,
                        onTotalEnd: function (e) {
                            e < 10 && d(e)
                        },
                        onShowDefaultTotal: function () {
                            d(a.awemeCount)
                        },
                        currentTab: c,
                        userInfo: a
                    })
                })))
            }

            var yb = "f60b07af0157228d718f00a32f3449bd-scss", wb = "_290cf15d030cac8ae38a7b3f8189ba36-scss",
                Eb = "e6f3c9aceb6c59ff2df1cef17c3959f3-scss", xb = "f6d13c219e462d0841179413ab5dc70b-scss",
                _b = "_7ac642bbbb7f4391bb963e0b784c7f3b-scss", Ab = "_1c6908067423cb7b36cb803b6494590e-scss",
                Ob = "b7c10213b08e9ee1ce926dc487856dd6-scss", Cb = "_67f6d320f692f9e5f19d66f4c8a1ecf9-scss",
                kb = "ebcd6ef6f36a906578f37f40864acf3b-scss", Pb = "_80b9072639cdc8b0c68763fe4865a889-scss",
                jb = "_6cf880d84b97239d69aaeb6021862aa1-scss", Sb = "af56f7cbe109efc8ef81623d2e0d6a1f-scss",
                Ib = "_8b9de4d7bc417ce86e6390fe6828620b-scss", Nb = "a538e9cbe0670751a0ce3d35f622d122-scss";

            function Rb(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Tb(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Mb(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Mb(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Mb(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Lb(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Bb(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Lb(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Lb(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            function Db(e) {
                return Fb.apply(this, arguments)
            }

            function Fb() {
                return (Fb = Bb(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u, s, f = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = f.length > 1 && void 0 !== f[1] ? f[1] : null, r = {statusCod: -1}, a = {
                                    uid: t,
                                    user: {
                                        isEmptyUser: !1,
                                        isUserCanceled: !1,
                                        isSelf: void 0,
                                        userInfo: {},
                                        statusCode: 0
                                    },
                                    mix: null,
                                    post: null
                                }, e.next = 5, Promise.allSettled([ua(t, n), Vr({
                                    uid: t,
                                    cursor: 0,
                                    count: 6
                                }, n), ra({userId: t, maxCursor: 0}, n)]);
                            case 5:
                                return o = e.sent, i = Tb(o, 3), c = i[0], l = i[1], u = i[2], s = "fulfilled" !== c.status ? r : c.value, a.mix = "fulfilled" !== l.status ? r : l.value, a.post = "fulfilled" !== u.status ? r : u.value, a.user = s, 0 !== a.post.statusCode && (a.post = null), 0 !== a.mix.statusCode && (a.mix = null), 0 !== a.user.statusCode && (a.user = null), e.abrupt("return", a);
                            case 18:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function zb(e) {
                var t = e.userInfo, n = e.uid, r = t || {}, a = r.nickname, o = void 0 === a ? "" : a, i = r.desc,
                    c = void 0 === i ? "" : i, l = r.uniqueId, u = void 0 === l ? "" : l, s = r.followerCount,
                    f = void 0 === s ? "" : s, d = r.totalFavorited, m = void 0 === d ? "" : d;
                return p.createElement(eu, null, p.createElement("title", null, o, "的个人主页 - 抖音"), p.createElement("meta", {
                    name: "description",
                    content: "".concat(o, "：").concat(c, "。").concat(o, "入驻抖音，TA的抖音号是").concat(u, "，已有").concat(f, "个粉丝，收获了").concat(m, "个喜欢，欢迎观看").concat(o, "在抖音发布的视频作品，来抖音，记录美好生活！")
                }), p.createElement("meta", {
                    name: "keywords",
                    content: "".concat(o, ",").concat(o, "抖音,").concat(o, "小视频,").concat(o, "短视频,").concat(o, "抖音短视频,").concat(o, "抖音直播,").concat(o, "抖音官网")
                }), p.createElement("link", {rel: "canonical", href: "https://www.douyin.com/user/".concat(n)}))
            }

            function Ub(e) {
                var t = (0, ie.UO)().id, n = xn, r = e || {}, a = r.user, o = r.mix, i = r.post,
                    c = ((0, p.useContext)(n) || {}).userInfo, l = c.isLogin, u = c.statusCode,
                    s = (0, p.useMemo)((function () {
                        return function (e, t, n, r) {
                            var a, o, i, c, l, u = {
                                isEmptyUser: !1,
                                isUserCanceled: !1,
                                isSelf: !1,
                                userInfo: {},
                                statusCode: 0,
                                showErrorRight: !1
                            };
                            if (t && e && n === e.secUid) u.userInfo = e, u.isSelf = !0, u.statusCode = 0; else {
                                var s = r || {}, f = s.user, d = s.statusCode;
                                d && (u.statusCode = d), f && f.uid && f.secUid === n || (u.isEmptyUser = !0), null != f && f.userCanceled && (u.isUserCanceled = !0), u.userInfo = f, u.isSelf = !1
                            }
                            return !u.isSelf && null != u && null !== (a = u.userInfo) && void 0 !== a && a.secret && 1 !== (null == u || null === (o = u.userInfo) || void 0 === o ? void 0 : o.followStatus) && 2 !== (null == u || null === (i = u.userInfo) || void 0 === i ? void 0 : i.followStatus) || null != u && null !== (c = u.userInfo) && void 0 !== c && c.isBlock || null != u && null !== (l = u.userInfo) && void 0 !== l && l.isBlocked ? u.showErrorRight = !0 : u.showErrorRight = !1, u
                        }(null == c ? void 0 : c.info, l, t, a)
                    }), [t, c, l, a]), f = Tb((0, p.useState)(s.isEmptyUser), 2), d = f[0], m = f[1],
                    v = Tb((0, p.useState)(s.isUserCanceled), 2), g = v[0], h = v[1],
                    b = Tb((0, p.useState)(s.isSelf), 2), y = b[0], w = b[1], E = Tb((0, p.useState)(s.userInfo), 2),
                    x = E[0], _ = E[1], A = Tb((0, p.useState)(s.statusCode), 2), O = A[0], C = A[1],
                    k = Tb((0, p.useState)(s.showErrorRight), 2), P = k[0], j = k[1], S = Tb((0, p.useState)(""), 2),
                    I = S[0], N = S[1], R = Tb((0, p.useState)(!0), 2), T = R[0], M = R[1];
                if ((0, p.useEffect)((function () {
                    if (!T) {
                        var e = null == x ? void 0 : x.uid, t = Number(null == x ? void 0 : x.secret);
                        e && y ? (de("personal_homepage"), N("personal_homepage"), qg.sendLog("enterPersonalHomepage", {urlParamList: ["enter_from", "enter_method"]}), qg.sendLog("pageView", {
                            enter_from: me(),
                            url: location.href,
                            url_path: location.pathname
                        })) : e && void 0 !== y && !y && (de("others_homepage"), N("others_homepage"), qg.sendLog("enterPersonalDetail", {
                            urlParamList: ["enter_from", "enter_method", "log_pb", "group_id", "author_id"],
                            to_user_id: e,
                            is_private: t
                        }), qg.sendLog("pageView", {enter_from: me(), url: location.href, url_path: location.pathname}))
                    }
                }), [y, T]), (0, p.useEffect)((function () {
                    if (!T || 0 !== (null == a ? void 0 : a.statusCode)) {
                        var e = !1;
                        if (void 0 === l) return;
                        return function () {
                            var n = Bb(regeneratorRuntime.mark((function n() {
                                var r, a, o, i;
                                return regeneratorRuntime.wrap((function (n) {
                                    for (; ;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!l || null == c || !c.info || t !== (null == c || null === (r = c.info) || void 0 === r ? void 0 : r.secUid) || e) {
                                                n.next = 6;
                                                break
                                            }
                                            _(null == c ? void 0 : c.info), w(!0), C(u), n.next = 20;
                                            break;
                                        case 6:
                                            if (e) {
                                                n.next = 20;
                                                break
                                            }
                                            return n.next = 9, ua(t);
                                        case 9:
                                            if (n.t0 = n.sent, n.t0) {
                                                n.next = 12;
                                                break
                                            }
                                            n.t0 = {};
                                        case 12:
                                            a = n.t0, o = a.user, i = a.statusCode, o && o.uid && o.secUid === t ? m(!1) : m(!0), null != o && o.userCanceled ? h(!0) : h(!1), C(i), _(o), w(!1);
                                        case 20:
                                        case"end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function () {
                                return n.apply(this, arguments)
                            }
                        }()(), function () {
                            return e = !0
                        }
                    }
                }), [c, T]), (0, p.useEffect)((function () {
                    T && 0 === (null == a ? void 0 : a.statusCode) || (!y && x && x.secret && 1 !== x.followStatus && 2 !== x.followStatus || null != x && x.isBlock || null != x && x.isBlocked ? j(!0) : j(!1)), M(!1)
                }), [y, T]), O === st.ERROR_USER_FORBIDEN) return p.createElement(Qc, {title: "账号被封禁", desc: " "});
                if (0 !== O && (O === st.ERROR_USER_NOTFOUND || O === st.ERROR_INVALID_PARAM)) return p.createElement(Wc, {
                    title: "用户不存在",
                    desc: " "
                });
                if (O) return p.createElement(Qc, {desc: "请稍后重试"});
                var L, B = function (e) {
                    var t = e.children;
                    return p.createElement("div", {className: Pb}, p.createElement("div", {className: jb}, t))
                };
                return p.createElement(p.Fragment, null, p.createElement(zb, {
                    userInfo: x,
                    uid: t
                }), null != x && x.uid ? p.createElement("div", {className: De()(yb, Rb({}, Ib, P))}, d || g ? p.createElement("div", {className: Sb}, p.createElement(Wc, {
                    title: "用户不存在",
                    desc: " "
                })) : p.createElement(p.Fragment, null, p.createElement("div", {className: Ab}), p.createElement("div", {className: wb}, p.createElement("div", {className: Eb}, p.createElement(ih, {
                    userInfo: x,
                    isSelf: y
                })), p.createElement("div", {className: xb}, p.createElement(Nh, {
                    pageName: I,
                    userInfo: x,
                    isSelf: y,
                    defaultMixRes: o
                }))), p.createElement("div", {className: _b}), (L = x, void 0 === l ? p.createElement(Fu, null) : !y && L.secret && 1 !== L.followStatus && 2 !== L.followStatus ? p.createElement("div", {className: De()(Cb, kb)}, p.createElement(B, null, p.createElement(Vc, null))) : L.isBlock ? p.createElement("div", {className: De()(Cb, kb)}, p.createElement(B, null, p.createElement(Vc, {
                    title: "你已经拉黑对方，无法查看其作品",
                    desc: " "
                }))) : L.isBlocked ? p.createElement("div", {className: De()(Cb, kb)}, p.createElement(B, null, p.createElement(Vc, {
                    title: "由于对方的隐私设置，你无法查看TA的作品",
                    desc: " "
                }))) : p.createElement("div", {className: Cb}, p.createElement(bb, {
                    pageName: I,
                    isSelf: y,
                    userInfo: L,
                    defaultPostRes: i
                }), p.createElement("div", {className: Ob}))))) : p.createElement(Fu, {text: "数据加载中", className: Nb}))
            }

            Ub.getInitialProps = function () {
                var e = Bb(regeneratorRuntime.mark((function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.ctx, r = null, r = I() ? Mt(n.request.path) : Mt(location.pathname), e.next = 5, Db(r, n);
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }();
            var Hb = Ub;

            function Wb(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Qb(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Wb(Object(n), !0).forEach((function (t) {
                        Vb(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wb(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Vb(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function qb(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [], i = !0, c = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0) ;
                    } catch (e) {
                        c = !0, a = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    return o
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Kb(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Kb(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Kb(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Xb(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Yb(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Xb(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            Xb(o, r, a, i, c, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }

            var Zb = function () {
                var e = Yb(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, c, l, u, s, f, d, m, p, v, g, h = arguments;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = h.length > 1 && void 0 !== h[1] ? h[1] : null, r = {statusCod: -1}, a = {
                                    awemeId: t,
                                    logPb: "",
                                    aweme: null,
                                    comment: null,
                                    mixInfo: null
                                }, e.prev = 3, e.next = 6, Promise.allSettled([Sr({awemeId: t}, n), yr({
                                    awemeId: t,
                                    cursor: 0,
                                    count: 20
                                }, n)]);
                            case 6:
                                if (u = e.sent, s = qb(u, 2), f = s[0], d = s[1], a.aweme = "fulfilled" !== f.status ? r : f.value, a.comment = "fulfilled" !== d.status ? r : d.value, a.logPb = (null === (o = a.aweme) || void 0 === o ? void 0 : o.logPb) || "", null === (i = a.aweme) || void 0 === i || null === (c = i.detail) || void 0 === c || null === (l = c.mixInfo) || void 0 === l || !l.mixId) {
                                    e.next = 19;
                                    break
                                }
                                return m = a.aweme.detail.mixInfo, p = m.mixId, v = m.totalEpisode, g = m.currentEpisode, e.next = 17, Kr({
                                    mixId: p,
                                    totalEpisode: v,
                                    currentEpisode: g,
                                    count: 6
                                }, n);
                            case 17:
                                a.mixInfo = e.sent, a.mixInfo.logPb = a.logPb;
                            case 19:
                                return 0 !== a.aweme.statusCode && (a.aweme = null), e.abrupt("return", a);
                            case 23:
                                e.prev = 23, e.t0 = e.catch(3);
                            case 26:
                                return e.abrupt("return", a);
                            case 27:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[3, 23]])
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }();

            function Jb(e) {
                var t = e.awemeInfo, n = e.awemeId, r = t || {}, a = r.desc, o = void 0 === a ? "视频" : a,
                    i = r.authorInfo, c = r.createTime, l = void 0 === c ? Date.now() / 1e3 : c, u = i || {},
                    s = u.nickname, f = void 0 === s ? "" : s, d = u.totalFavorited, m = void 0 === d ? 0 : d,
                    v = Rn()(1e3 * l).format("YYYY-MM-DD") || "";
                return p.createElement(eu, null, p.createElement("title", null, " ", o.substr(0, 35), " - 抖音"), p.createElement("meta", {
                    name: "keywords",
                    content: "抖音,抖音短视频,抖音官网"
                }), p.createElement("meta", {
                    name: "description",
                    content: "".concat(o, " - ").concat(f, "于").concat(v, "发布在抖音，已经收获了").concat(il(m), "个喜欢，来抖音，记录美好生活！")
                }), p.createElement("link", {rel: "canonical", href: "https://www.douyin.com/video/".concat(n)}))
            }

            function Gb(e) {
                var t, n, r, a, o, i, c, l,
                    u = null === (r = ((null == e || null === (t = e.match) || void 0 === t || null === (n = t.params) || void 0 === n ? void 0 : n.id) || "").split("?")) || void 0 === r ? void 0 : r[0],
                    s = e || {}, f = s.aweme, d = s.comment, m = s.mixInfo, v = s.logPb, g = s.awemeId,
                    h = (0, p.useRef)(!0), b = h.current && u === g, y = qb((0, p.useState)({
                        isReload: !0,
                        logPb: v || "",
                        data: b ? {comment: d, aweme: f, mixInfo: m} : {}
                    }), 2), w = y[0], E = y[1];
                return (0, p.useEffect)((function () {
                    b && (h.current = !1, f && 0 === (null == f ? void 0 : f.statusCode)) || Yb(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return E((function (e) {
                                        return {isReload: !1, logPb: "", data: Qb(Qb({}, e.data), {}, {comment: null})}
                                    })), e.next = 3, Sr({awemeId: u});
                                case 3:
                                    t = e.sent, E((function (e) {
                                        return {
                                            isReload: !0,
                                            logPb: null == t ? void 0 : t.logPb,
                                            data: Qb(Qb({}, e.data), {}, {aweme: t})
                                        }
                                    }));
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [u, f, b]), p.createElement(p.Fragment, null, p.createElement(Jb, {
                    awemeInfo: null === (a = w.data.aweme) || void 0 === a ? void 0 : a.detail,
                    awemeId: u
                }), p.createElement(fg, {
                    awemelogPb: null == w ? void 0 : w.logPb,
                    awemeInfo: null === (o = w.data.aweme) || void 0 === o ? void 0 : o.detail,
                    statusCode: (null === (i = w.data.aweme) || void 0 === i ? void 0 : i.statusCode) || 0,
                    isReoload: w.isReload,
                    defaultMixInfo: null === (c = w.data) || void 0 === c ? void 0 : c.mixInfo,
                    defaultComment: null === (l = w.data) || void 0 === l ? void 0 : l.comment
                }))
            }

            Gb.getInitialProps = function () {
                var e = Yb(regeneratorRuntime.mark((function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.ctx, r = null, r = I() ? Tt(n.request.path) : Tt(location.pathname), e.next = 5, Zb(r, n);
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }();
            var $b = Gb;

            function ey(e) {
                var t = (0, p.useRef)(null);
                return p.createElement(p.Fragment, null, p.createElement(eu, null, p.createElement("title", null, "【抖音】记录美好生活"), p.createElement("meta", {
                    name: "description",
                    content: "抖音-记录美好生活的视频平台"
                }), p.createElement("meta", {
                    name: "keywords",
                    content: "抖音,抖音音乐,抖音短视频,抖音官网,amemv,抖音app,抖音app下载"
                }), p.createElement("link", {
                    rel: "canonical",
                    href: "https://www.douyin.com/"
                })), p.createElement(mf, {fetchFeeds: Sa, current: "home", ref: t}))
            }

            function ty() {
                return [{
                    path: "/",
                    exact: !1,
                    component: kc,
                    routes: [{path: "/404", exact: !0, component: Kc, id: "C_1"}, {
                        path: "/About",
                        exact: !0,
                        component: Zl,
                        id: "C_2"
                    }, {path: "/Channel/log", exact: !0, component: Jl, id: "C_3"}, {
                        path: "/Channel/:id",
                        exact: !0,
                        component: vf,
                        id: "C_4"
                    }, {path: "/Collection/:id", exact: !0, component: _g, id: "C_5"}, {
                        path: "/DemoComponents",
                        exact: !0,
                        component: jg,
                        id: "C_6"
                    }, {path: "/Hot", exact: !0, component: Mg, id: "C_7"}, {
                        path: "/LogTrace",
                        exact: !0,
                        component: Vg,
                        id: "C_8"
                    }, {path: "/User/log", exact: !0, component: qg, id: "C_9"}, {
                        path: "/User/:id",
                        exact: !0,
                        component: Hb,
                        id: "C_10"
                    }, {path: "/Video/log", exact: !0, component: gf, id: "C_11"}, {
                        path: "/Video/:id",
                        exact: !0,
                        component: $b,
                        id: "C_12"
                    }, {path: "/", exact: !0, component: ey, id: "C_13"}, {component: Kc, id: "404_C_1"}],
                    id: "C_0"
                }]
            }

            function ny(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ry(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ny(Object(n), !0).forEach((function (t) {
                        ay(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ny(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ay(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function oy(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), l = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function iy(e) {
                var t = p.createElement(ae.aW, {routes: ty(), initProps: e, appConfig: $}), n = m.l.applyPlugins({
                    key: "modifyClientRenderOpts",
                    type: d.T.modify,
                    initialValue: {plugin: m.l}
                });
                return m.l.applyPlugins({type: d.T.modify, key: "rootContainer", initialValue: t, args: n})
            }

            var cy = m.l.applyPlugins({key: "router", type: d.T.modify}) || {}, ly = ty();
            iy.getInitialProps = function () {
                var e = function (e) {
                    return function () {
                        var t = this, n = arguments;
                        return new Promise((function (r, a) {
                            var o = e.apply(t, n);

                            function i(e) {
                                oy(o, r, a, i, c, "next", e)
                            }

                            function c(e) {
                                oy(o, r, a, i, c, "throw", e)
                            }

                            i(void 0)
                        }))
                    }
                }(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.pathname.replace(new RegExp("^(".concat(cy.basename, ")(?=/.*|)")), ""), r = ((0, oe.f)(ly, n) || []).filter((function (e) {
                                    return e.route.component
                                })) || [], a = {}, o = [], i = [], r.forEach((function (e) {
                                    var n, r = (null == e ? void 0 : e.route).id,
                                        a = (null == e || null === (n = e.route) || void 0 === n ? void 0 : n.component).getInitialProps;
                                    if (a) {
                                        if ("function" != typeof a) throw new Error("getInitialProps needs to be a function！");
                                        var c = new Promise((function (e, n) {
                                            Promise.resolve(a(t)).then(e).catch(n)
                                        }));
                                        i.push(c), o.push(r)
                                    }
                                })), e.next = 8, Promise.all(i);
                            case 8:
                                return e.sent.forEach((function (e, t) {
                                    a[o[t]] = e
                                })), e.abrupt("return", ry({_location: t.pathname}, a));
                            case 11:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }();
            var uy = iy, sy = n(34903);

            function fy(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function dy(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            m.l.applyPlugins({
                key: "render", type: d.T.compose, initialValue: function (e) {
                    (0, sy.x)(function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? fy(Object(n), !0).forEach((function (t) {
                                dy(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fy(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({rootContainer: uy, rootElement: "root"}, e))
                }
            })()
        }, 10533: function (e, t, n) {
            "use strict";
            n.d(t, {
                o: function () {
                    return c
                }
            });
            n(94723), n(52854), n(49988), n(79012), n(9875), n(11188), n(30391), n(78055), n(17714);
            var r = n(1131);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function (t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var c, l = r.l.applyPlugins({key: "slardar", type: r.T.modify, initialValue: []}),
                u = o(o({enablePerformance: !1}, {bid: "douyin_website"}), l), s = u.beforeSend, f = u.pathReg,
                d = function (e, t) {
                    if (null == e) return {};
                    var n, r, a = function (e, t) {
                        if (null == e) return {};
                        var n, r, a = {}, o = Object.keys(e);
                        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                    return a
                }(u, ["beforeSend", "pathReg"]);
            "undefined" != typeof window && (c = n(51603).ZP)("config", o(o({}, d), {}, {
                beforeSend: function (e) {
                    var t = e.ev_type;
                    if (f && "jserr" === t) {
                        var n, r,
                            a = (null == e || null === (n = e.sentry) || void 0 === n || null === (r = n.exception) || void 0 === r ? void 0 : r.values) || [];
                        return a.filter((function (e) {
                            var t, n,
                                r = (null === (t = ((null == e || null === (n = e.stacktrace) || void 0 === n ? void 0 : n.frames) || [])[a.length - 1]) || void 0 === t ? void 0 : t.filename) || "";
                            return f.test(r)
                        })), a.length ? s ? s(e) : e : null
                    }
                    return s ? s(e) : e
                }
            }))
        }, 23644: function (e) {
            "use strict";
            e.exports = "data:image/jpeg;base64,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"
        }, 1909: function (e) {
            "use strict";
            e.exports = "data:image/png;base64,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"
        }, 53715: function (e, t, n) {
            "use strict";
            e.exports = n.p + "image/EmptyList.82c3fe11.png"
        }, 98751: function (e, t, n) {
            "use strict";
            e.exports = n.p + "image/EmptySearch.19da93c9.png"
        }, 39627: function (e, t, n) {
            "use strict";
            e.exports = n.p + "image/NoLogin.f32770e8.png"
        }, 12412: function (e) {
            "use strict";
            e.exports = "data:image/png;base64,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"
        }, 20643: function (e, t, n) {
            "use strict";
            e.exports = n.p + "image/NotFound.3933d7c5.png"
        }, 35663: function (e, t, n) {
            "use strict";
            e.exports = n.p + "image/ServerError.33c682c5.png"
        }, 41219: function (e, t, n) {
            "use strict";
            e.exports = n.p + "image/Unfollow.05a1cb9c.png"
        }, 8056: function () {
        }
    }, n = {};

    function r(e) {
        var a = n[e];
        if (void 0 !== a) return a.exports;
        var o = n[e] = {id: e, loaded: !1, exports: {}};
        return t[e].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
    }

    r.m = t, r.c = n, e = [], r.O = function (t, n, a, o) {
        if (!n) {
            var i = 1 / 0;
            for (u = 0; u < e.length; u++) {
                n = e[u][0], a = e[u][1], o = e[u][2];
                for (var c = !0, l = 0; l < n.length; l++) (!1 & o || i >= o) && Object.keys(r.O).every((function (e) {
                    return r.O[e](n[l])
                })) ? n.splice(l--, 1) : (c = !1, o < i && (i = o));
                c && (e.splice(u--, 1), t = a())
            }
            return t
        }
        o = o || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
        e[u] = [n, a, o]
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, {a: t}), t
    }, r.d = function (e, t) {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
    }, r.e = function () {
        return Promise.resolve()
    }, r.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.nmd = function (e) {
        return e.paths = [], e.children || (e.children = []), e
    }, r.p = "https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_web/", function () {
        var e = {826: 0};
        r.O.j = function (t) {
            return 0 === e[t]
        };
        var t = function (t, n) {
            var a, o, i = n[0], c = n[1], l = n[2], u = 0;
            for (a in c) r.o(c, a) && (r.m[a] = c[a]);
            if (l) var s = l(r);
            for (t && t(n); u < i.length; u++) o = i[u], r.o(e, o) && e[o] && e[o][0](), e[i[u]] = 0;
            return r.O(s)
        }, n = self.webpackChunkdouyin_web = self.webpackChunkdouyin_web || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    }();
    var a = r.O(void 0, [216], (function () {
        return r(46010)
    }));
    a = r.O(a)
}();
//# sourceMappingURL=index.02c463c0.js.map