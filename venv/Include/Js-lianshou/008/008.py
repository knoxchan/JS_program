# -*- coding: utf-8 -*-
# @Time    : 2021/10/6 10:42
# @Author  : knox.chan
# @FileName: 007.py
# @Software: PyCharm
# 全国中等职业学校学生信息管理系统
# http://zzxt.hee.gov.cn/Home.action
# 账号密码逆向 账号：base64加密 密码 MD5 + 盐


import execjs
from hashlib import md5

acc = '13192290340'
pwd = 'zxcasdqwe123'
# ---- JS方法 ---
# 1实例化一个node对象
node = execjs.get()

# 2.js文件编译
ctx = node.compile(open('./t.js', encoding='utf-8').read())

# 3.执行JS函数
function_name = f'md5("{pwd}")'
pwd_result = ctx.eval(function_name)
print(pwd_result)

import base64
# 用户名base64编码

encode_str = base64.encodebytes(acc.encode('utf8'))
print(str(encode_str))



