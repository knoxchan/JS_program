# 飞卢小说网 登录JS逆向解析
'''
anthor - knox
createtime - 20210414
encryption - MD5
url - https://u.faloo.com/regist/Login.aspx?txtUserID=123%40qq.com&txtPwd=cead71ef5e8f21b2a2ecbc9d6717bc14&txtPwd4temp=&verifyCode=dddd&ts=1618407163&t=2&vw469054=0414&backurl=https%3A%2F%2Fu.faloo.com%2FI%2F0%2F0.html
'''

import execjs
import time
import requests

# 登录名 密码
user_name = '1319220340'
password = 'a123456789'

# 1 实例化node对象
node = execjs.get()

# 2 编译JS文件
ctx = node.compile(open('./faloo.js', encoding='utf-8').read())

# 3 逆向得到密码
functionName = f'getPwd("{password}","{int(time.time())}")'
result = ctx.eval(functionName)
print(result)

# 4 构建请求头 发送登录请求
headers = {
    'Host': 'www.aipai.com',
    'Connection': 'keep-alive',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://u.faloo.com',
    'Referer': 'https://u.faloo.com/Regist/Login.aspx',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
}
data = {
    'txtUserID': user_name,
    'txtPwd': result,
    'ts': str(int(time.time())),
    't': 2
}
url = f'https://u.faloo.com/Regist/Login.aspx?txtUserID={user_name}&txtPwd={result}&txtPwd4temp=&verifyCode=4b85&ts={str(int(time.time()))}&t=2&Yc574836=0418&backurl=http%3A%2F%2Fwww.faloo.com%2F'
# url = f'https://u.faloo.com/Regist/Login.aspx?txtUserID={user_name}&txtPwd={result}&txtPwd4temp=&verifyCode=4b85&ts={str(int(time.time()))}&t=2&Yc574836=0418&backurl=http%3A%2F%2Fwww.faloo.com%2F'

# 5 发送登录请求
r = requests.get(url, headers)
print(r.json()['msg'])

# 获取COOKIE ？
