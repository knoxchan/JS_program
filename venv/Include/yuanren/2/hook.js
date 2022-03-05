// cookie 中的 RM4hZBv0dDon443M 钩子
(function () {
    Object.defineProperty(document, 'cookie', {
        set: function (cookie) {
            if (cookie.indexOf('sign') != -1) {
                debugger;
            }
            return cookie;
        }
    })
})();