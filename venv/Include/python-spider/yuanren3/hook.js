(function () {
    Object.defineProperty(document, 'cookie', {
        set: function (cookie) {
            if (cookie.indexOf('m') != -1) {
                debugger;
            }
            return cookie;
        }
    })
})();