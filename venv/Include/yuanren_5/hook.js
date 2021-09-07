// cookie 中的 RM4hZBv0dDon443M 钩子

(function () {
    Object.defineProperty(document, 'cookie', {
        set: function (cookie) {
            if (cookie.indexOf('RM4hZBv0dDon443M') != -1) {
                debugger;
            }
            return cookie;
        }
    })
})();


// 追踪window中 _$ss 生成方式
(function () {
    Object.defineProperty(window, '_$ss', {
        set: function (_$ss) {
            debugger;
            return _$ss;
        }
    })
})();


// _$qF 函数生成
