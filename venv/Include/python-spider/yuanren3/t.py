import requests
import execjs

headers = {
    "authority": "www.python-spider.com",
    "accept": "application/json, text/javascript, */*; q=0.01",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    "origin": "https://www.python-spider.com",
    "referer": "https://www.python-spider.com/challenge/3",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8"
}
url = "https://www.python-spider.com/api/challenge3"

# 1实例化一个node对象
node = execjs.get()

# 2.js文件编译
ctx = node.compile(open('t2.js', encoding='utf-8').read())

s = 0
for i in range(1, 101):
    # i = 18
    # 3.执行JS函数
    function_name = f'yuanren3()'
    key = ctx.eval(function_name)
    cookies = {
        # "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1639063606,1640412050,1640488446",
        "sessionid": "hukvjeqs7dskte5b2lujgmzue26jt1d0",
        "no-alert": "true",
        "m": key.split('m=')[1].split(';')[0],
        # "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1640488491"
    }
    data = {
        "page": i
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    for d in response.json()['data']:
        # print(d['value'][:-1])
        s += int(d['value'][:-1])
    # print(response)
    print('page', i, '请求成功')
    # break
print(s)
