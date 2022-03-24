import requests
import execjs
headers = {
    "authority": "www.python-spider.com",
    "cache-control": "max-age=0",
    "sec-ch-ua": "^\\^",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-user": "?1",
    "sec-fetch-dest": "image",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cookie": "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1639063606,1640412050,1640488446; no-alert=true; sessionid=yi5ruga915lkjq8bv2y4b9c6286d07w5; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1641300724",
    "Connection": "keep-alive",
    "Cache-Control": "max-age=0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Sec-Fetch-Site": "cross-site",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Dest": "image",
    "Referer": "https://www.python-spider.com/challenge/14",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "If-None-Match": "^\\^XxDMkOmUTmCoPXFnKMOklTS1blY=^^",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    "origin": "https://www.python-spider.com",
    "referer": "https://www.python-spider.com/challenge/14",
    "Upgrade-Insecure-Requests": "1"
}
cookies = {
    "BAIDUID_BFESS": "7DBE80E7335F029340513FBF000F558C:FG=1"
}
url = "https://www.python-spider.com/api/challenge14"

# 1实例化一个node对象
node = execjs.get()

# 2.js文件编译
ctx = node.compile(open('t.js', encoding='utf-8').read())

s = 0
for page in range(1, 101):
    # 3.执行JS函数
    function_name = f'SDK14({page})'
    key = ctx.eval(function_name)
    data = {
        "page": page,
        "uc": key
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data)

    for d in response.json()['data']:
        s += int(d['value'].strip())
    print(page,'请求成功')
print(s)
