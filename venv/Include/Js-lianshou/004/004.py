# -*- coding: utf-8 -*-
# @Time    : 2021/10/6 9:40
# @Author  : knox.chan
# @FileName: 004.py
# @Software: PyCharm
# 99安全中心
# https://aq.99.com/V3/NDUser_Login.htm


acc = '13192290340'  # 手机号
pwd = '1234'  # 密码

import requests
import execjs
import time
import random
from hashlib import md5

# ---- JS方法 ---
# 1实例化一个node对象
node = execjs.get()

# 2.js文件编译
ctx = node.compile(open('./t.js', encoding='utf-8').read())

# 3.执行JS函数
function_name = f'md5("{pwd}")'
pwd_result = ctx.eval(function_name)
print(pwd_result)

params = (
    ('CallBack', 'jQuery112407514228564424048_1633484707252'),  # 疑似固定参数
    ('siteflag', '995'),  # 疑似固定参数
    ('nduseraction', 'login'),  # 疑似固定参数
    ('txtUserName', acc),
    ('txtPassword', pwd_result),  # 需要JS逆向的参数
    ('checkcode', 'ehjj'),  # 验证码识别结果
    ('Rnd', '0.4871869881029567'),  # math.randon() --> random.random()
    ('aws', '6416000cfe73c97b33c2f52382395808'),  # 疑似固定参数
    ('_', '1633484707261'),  # 推测时间 str(int(time.time() * 1000))
)

cookies = {
    'ASP.NET_SessionId': 'gf5xoh455cdeyk454kmtey55',
    '0FF535D2-3733-4059-AA48-73EFB0DA00CE': '376FC8AE-EA0A-4aa9-8CF8-BDCF086DAFE7=2021-10-06 09:41:12&43CB770B-ECB7-4262-9F28-474C756FA85C=0c853794-2c06-4f41-96c1-a48315ff67b3&77A7D26A-7211-4b2a-A04A-1A3F9959F179=992515540&BF191744-3205-4d76-B8FC-3E0387F7EEFE=419135346a7faba3971d7ddb890b33f1',
    'fdgdf': 'null',
    '0FF535D2-3733-4059-AA48-73EFB0DA00CEUsers': '45764A894F8C55D6C8D50943CC058702',
    'UM_distinctid': '17c5345fb9d17-008a876a7fe781-b7a1a38-1fa400-17c5345fb9e5b4',
    'UserCookie': '3b2895d4615cffd76b29b056',
    'h': 'd8-0.00783s',
}

headers = {
    'Connection': 'keep-alive',
    'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    'Accept': 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://aq.99.com/V3/NDUser_Login.htm',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
}

# response = requests.get('https://aq.99.com/AjaxAction/AC_userlogin.ashx', headers=headers, params=params,
#                         cookies=cookies)

# response = requests.get('https://aq.99.com/AjaxAction/AC_userlogin.ashx?CallBack=jQuery112407514228564424048_1633484707252&siteflag=995&nduseraction=login&txtUserName=13192290340&txtPassword=83cbb4ab748457aecd3c31347a7dc66a&checkcode=ehjj&Rnd=0.4871869881029567&aws=6416000cfe73c97b33c2f52382395808&_=1633484707261', headers=headers, cookies=cookies)
