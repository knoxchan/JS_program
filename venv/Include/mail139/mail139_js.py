# 139邮箱登录 登录JS逆向解析 登录成功

'''
anthor - knox
createtime - 20210420
encryption -
url - https://mail.10086.cn/
'''
import execjs
import time
import requests

# 账号密码
user_name = '1665787464'
password = 'A123b456'

# 初始化node对象
node = execjs.get()

# 编译JS程序
ctx = node.compile(open('./mail139.js', encoding='utf-8').read())

# 执行JS程序
functionName = f'getPwd("{password}")'
result = ctx.eval(functionName)
functionName2 = 'GetCGUID()'
CGUID = ctx.eval(functionName2)

#
s = requests.Session()
headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/x-www-form-urlencoded',
    # cookie: qrrnd=ha8ksqqoevi93c612wnk661f1288fj99; _139_index_login=16189086917651651097868857
    'origin': 'http://mail.10086.cn',
    'referer': 'http://mail.10086.cn/',
    #                     sec-ch-ua: "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"
    # sec-ch-ua-mobile: ?0
    # sec-fetch-dest: document
    # sec-fetch-mode: navigate
    # sec-fetch-site: cross-site
    # sec-fetch-user: ?1
    # upgrade-insecure-requests: 1
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36',
}
url = f'https://mail.10086.cn/Login/Login.ashx?_fv=4&cguid={CGUID}&_=c1c34c4c16723bbfc73ab010017190318624fd7a&resource=indexLogin'
data = {
    'UserName': user_name,
    'passOld': '',
    'auto': '',
    'loginFailureUrl':'https://mail.10086.cn/default.html?smsLogin=1',
    'Password': result,
    'authType': '2'
}
s.post(url, headers=headers, data=data)
r = s.get('https://appmail.mail.10086.cn/m6/html/index.html?sid=00YxODkxMDE5OTAwMDA4MTAw032E474B000007&rnd=625&tab=&comefrom=54&v=60&k=8190&resource=indexLogin&cguid=1715205861051&mtime=294&h=3')
with open('./mail139.html','wb') as f:
    f.write(r.content)