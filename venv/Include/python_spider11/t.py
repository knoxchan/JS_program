
s = '1486	5782	2588	8545	7897	2487	2458	3545	3858	5537'
a = s.split('	')
n = 0
for i in a:
    n += int(i)
import requests
import execjs

headers = {
    "Connection": "keep-alive",
    "Cache-Control": "max-age=0",
    "sec-ch-ua": "^\\^",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-User": "?1",
    "Sec-Fetch-Dest": "document",
    "Referer": "https://www.python-spider.com/challenge/11",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
}
cookies = {
    "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1645020683,1645537607",
    "sessionid": "zdldy1hwggy8j8kytodjjmxs0tenxb9n",
    "__jsl_clearance": "1645538041.183^|0^|clD4VpfqhdaLBWywKWy^%^2FZyfi6d_f3f88a53b4d5e871ef2c3cb3df9bdf303D",
    "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1645538042"
}
url = "https://www.python-spider.com/challenge/11"
response = requests.get(url, headers=headers, cookies=cookies)
import re
js_text = re.match(r'<script>(.*)</script>',response.content.decode()).group(1)
# js_text = js_text.replace("\\\\'\\\\'","\\\\\'\\\\\'")
# js_text = js_text.replace("<1l v=\\\\' /\\\\'>","<1l v=\\\\\' /\\\\\'>")

# print(js_text)

# 实例化一个node对象
node = execjs.get()

# JS文件编译
ctx = node.compile(open('./t3.js',encoding='utf-8').read())

# 执行js函数
# print(js_text)
function_name = f"sdk('{js_text}')"
jsl_cookie = ctx.eval(function_name)

print(jsl_cookie)