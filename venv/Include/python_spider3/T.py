import requests
import execjs

headers = {
    "authority": "www.python-spider.com",
    "sec-ch-ua": "^\\^",
    "accept": "application/json, text/javascript, */*; q=0.01",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    "sec-ch-ua-mobile": "?0",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "origin": "https://www.python-spider.com",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "referer": "https://www.python-spider.com/challenge/3",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8"
}
cookies = {
    "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1639063606,1640412050,1640488446",
    "no-alert": "true",
    "sessionid": "yi5ruga915lkjq8bv2y4b9c6286d07w5",
    "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1641310357",
    "m": "07863bf894d6717d05a30a84441c8620^|1641313128000"
}
url = "https://www.python-spider.com/api/challenge3"

# 1 execjs对象初始化
node = execjs.get()

# ctx函数编译
ctx = node.compile(open('./t.js',encoding='utf-8').read())

s = 0
for page in range(1,101):
    function_name = 'SDK2()'
    m = ctx.eval(function_name)
    cookies['m'] = m.split('=')[1].split(';')[0]
    data = {
        "page": page
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data)

    for d in response.json()['data']:
        s += int(d['value'].strip())
    print(page, '请求成功')
print(s)