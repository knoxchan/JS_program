# 爱拍网 登录JS逆向解析
'''
anthor - knox
createtime - 20210414
encryption - MD5
url - http://www.aipai.com/lastest_aipai/register.php
'''
import execjs
import requests
import time

# 登录名 密码
user_name = '69591858'
password = 'a123456789'

# 1 实例化node对象
node = execjs.get()

# 2 编译JS文件
ctx = node.compile(open('./aipai.js', encoding='utf-8').read())

# 3 逆向得到密码

functionName = f'md5("{password}")'
result = ctx.eval(functionName)
# print(result)

# 4 构建请求头 发送登录请求
headers = {
    'Host': 'www.aipai.com',
    'Connection': 'keep-alive',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'http://www.aipai.com',
    'Referer': 'http://www.aipai.com/lastest_aipai/register.php',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
}
data = {
    'action': 'loginNew',
    'user': user_name,
    'password': result,
    'keeplogin': 1,
    'comouterTime': 1,
    'userNowTime': str(int(time.time()))
}
url = 'http://www.aipai.com/login.php'

# 5 发送登录请求
r = requests.post(url, data, headers)
print(r.json()['msg'])

# 获取COOKIE ？

