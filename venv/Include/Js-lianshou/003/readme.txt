91登录	http://qpbjs.91hylbc.com/Login.aspx?pageurl=/UserCenter/Center.aspx	登录逆向	MD5+盐	需要推荐码才能注册



加密參數
{"username":"13192290340","password":"zxcasdqwe","time":"1643100132051","keytime":"EBDD57AC793BC8D0919C64F3A82D3AF1","sign":"E38985945CB8DB4F3C5B8DBA5947A598"}

keytime ： 从网页端获取

var time = getTimeStamp();
var keytime = $("#hidPageToken").val();
var parms = { username: username, password: password, time: time, keytime: keytime };
var sign = getsignToken(parms);

sign 