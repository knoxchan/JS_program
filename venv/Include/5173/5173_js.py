# 5173游戏服务网登录 登录JS逆向解析
'''
anthor - knox
createtime - 20210418
encryption - MD5
url - https://passport.5173.com/?returnUrl=http%3a%2f%2fwww.5173.com%2f
'''

import execjs
import time
import requests

# 定义账号密码
user_name = 'p_b4jmn4f'
password = 'a123456788'

# 1 初始化node对象
node = execjs.get()

# 2 编译JS文件
ctx = node.compile(open('./5173.js', encoding='utf-8').read())

# 2.5 访问5173网站 从网页获取SecurityToken【直接用于登录】 PasswordKey【用于破解密码】

url = 'https://passport.5173.com/?returnUrl=http%3a%2f%2fwww.5173.com%2f'
r = requests.get(url)
if r.status_code != 200:
    raise Exception('2.5 requests请求失败')
PasswordKey = r.text.split('PasswordKey:"')[1].split('",\r\n')[0]
SecurityToken = r.text.split('SecurityToken:"')[1].split('",\r\n')[0]
cookie = r.cookies

# 3 执行JS文件 破解出密码
functionName = f'getPwd("{password}","{PasswordKey}")'
result = ctx.eval(functionName)
print(result)

# 4 登录5173网站
headers = {
    'Host': 'passport.5173.com',
    'Connection': 'keep-alive',
    'Accept': '*/*',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://passport.5173.com',
    'Referer': 'https://passport.5173.com/?returnUrl=http%3a%2f%2fwww.5173.com%2f',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8'
}
url = 'https://passport.5173.com/?returnUrl=http%3a%2f%2fwww.5173.com%2f'
data = {
    'smsLogin': '0',
    'userName': user_name,
    'password': result,
    'mobileNo': '',
    'smsCaptcha': '',
    'category': '',
    'passpod': '',
    '__validationToken__': SecurityToken,
    '__validationDna__':''
}
r = requests.post(url, data=data,headers=headers)

# 5.保存登录页面 查看是否登录成功
with open('./5173.html','wb') as f:
    f.write(r.content)
