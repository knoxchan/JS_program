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

s = requests.session()

acc = '13192290340'  # 手机号
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
    "Host": "v4.passport.sohu.com",
    "Connection": "keep-alive",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
    "sec-ch-ua-platform": "\"Windows\"",
    "Accept": "*/*",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Dest": "script",
    "Referer": "https://www.sohu.com/",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cookie": "IPLOC=CN4403; SUV=220106152503BGYH; gidinf=x099980109ee14866e769604e000391ec81c7cca0dca; beans_dmp=%7B%2210191%22%3A1641453961%2C%22admaster%22%3A1641453961%2C%22shunfei%22%3A1641453961%2C%22reachmax%22%3A1641453961%2C%22lingji%22%3A1641453961%2C%22yoyi%22%3A1641453961%2C%22ipinyou%22%3A1641453961%2C%22ipinyou_admaster%22%3A1641453961%2C%22miaozhen%22%3A1641453961%2C%22diantong%22%3A1641453961%2C%22huayang%22%3A1641453961%2C%22precisionS%22%3A1641453961%7D; __gads=ID=62a9aad1f1409e6f-22600d930cd000f1:T=1642666290:RT=1642666290:S=ALNI_MYdU78xGVxaGAstxkieY6YNPVbiSg; cityIpLocation=113.110.198.31; _sgid=_SSA.a03d810e8974a91fbe5ae74648dbacea; reqtype=pc; BAIDU_SSP_lcr=https://pos.baidu.com/; t=1643099253184; jv=8ca9b37a3d335f8cd7a30e41d1290b6b-SiRbpt8n1643099267803"
}
r = requests.get('https://v4.passport.sohu.com/i/jf/code?callback=passport403_cb1643099253188&type=0&_=1643099304249',headers=headers)

print(r.text.split('"')[1])

