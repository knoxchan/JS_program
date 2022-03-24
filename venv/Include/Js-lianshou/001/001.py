# -*- coding: utf-8 -*-
# @Time    : 2021/10/5 14:30
# @Author  : knox.chan
# @FileName: 001.py
# @Software: PyCharm
# 有道翻译
# 链接 https://fanyi.youdao.com/
# 目标:破解逆向 输入中文 翻译成 英文

# 需要逆向的参数 salt sign

import requests
import execjs
import time
import random
from hashlib import md5

k = input('请输入需要翻译的文字(中文)')

# ---- JS方法 ---

# 1实例化一个node对象
node = execjs.get()

# 2.js文件编译
ctx = node.compile(open('./t.js', encoding='utf-8').read())

# 3.执行JS函数
function_name = f'get_value("{k}")'
lts, salt, sign = ctx.eval(function_name)

# python 方法
lts = str(int(time.time() * 1000))
salt = lts + str(random.randint(0, 9))
sign = md5(("fanyideskweb" + k + salt + "Y2FYu%TNSbMCxc3t2u^XT").encode()).hexdigest()

data = {
    'i': k,
    'from': 'AUTO',
    'to': 'AUTO',
    'smartresult': 'dict',
    'client': 'fanyideskweb',
    'salt': salt,
    'sign': sign,
    'lts': lts,
    'bv': '5f70acd84d315e3a3e7e05f2a4744dfa',
    'doctype': 'json',
    'version': '2.1',
    'keyfrom': 'fanyi.web',
    'action': 'FY_BY_REALTlME'
}

cookies = {
    'OUTFOX_SEARCH_USER_ID': '-45666114@10.169.0.102',
    'JSESSIONID': 'aaaeSFuQqBGWc46m2jpXx',
    'OUTFOX_SEARCH_USER_ID_NCOO': '1026917301.3684874',
    '___rl__test__cookies': '1633415561678',
}

headers = {
    'Connection': 'keep-alive',
    'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    'Origin': 'https://fanyi.youdao.com',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://fanyi.youdao.com/',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
}

params = (
    ('smartresult', ['dict', 'rule']),
)

response = requests.post('https://fanyi.youdao.com/translate_o', headers=headers, params=params, cookies=cookies,
                         data=data)

print(response.text)
