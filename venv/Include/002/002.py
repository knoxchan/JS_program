# -*- coding: utf-8 -*-
# @Time    : 2021/10/5 16:04
# @Author  : knox.chan
# @FileName: 002.py
# @Software: PyCharm
# 搜狐网
# https://www.sohu.com/
# 目标 密码逆向 但是没有破解点选验证码
import requests
import execjs
import time
import random
from hashlib import md5

acc = ''  # 手机号
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
# python 方法
pwd_result = md5(pwd.encode()).hexdigest()
print(pwd_result)

headers = {
    'authority': 'v4.passport.sohu.com',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'origin': 'https://v4.passport.sohu.com',
    'content-type': 'application/x-www-form-urlencoded',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'iframe',
    'referer': 'https://v4.passport.sohu.com/fe/login',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cookie': 'SUV=03c75d6b74ec072a; gidinf=x099980109ee0f17a12719c730000499360e858fa8b4; __gads=ID=1e643d227fb9d985:T=1595315901:S=ALNI_MaUdttpQZ_OcWCyXES_CE7jLuEMNA; BAIDU_SSP_lcr=https://www.baidu.com/link?url=omAijAUQqHCWEhsM6jgxjMCDVgXy1UQ6NjaHtSRcoXy&wd=&eqid=ea36f913001853ee00000006615bfee0; reqtype=pc; IPLOC=CN4403; cityIpLocation=59.40.149.212; _sgid=_SSA.68423e3a8762446aa8fdf01f637dee33; t=1633421133913; jv=a0cdb8e251c27c2906880e183cc184e7-Tn7ZMRnZ1633421595945',
}

data = {
    'userid': f'86-{acc}',
    'password': pwd_result,
    'validate': 'b303a5db-a54c-4b06-9341-1f749653c715',
    'appid': '999801',
    'callback': 'passport4072_cb1633421133927'
}

# response = requests.post('https://v4.passport.sohu.com/i/login/999801', headers=headers, data=data)
