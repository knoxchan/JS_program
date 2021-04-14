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
