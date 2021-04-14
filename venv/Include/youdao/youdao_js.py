# 有道翻译 JS逆向破解

import time
from hashlib import md5
import requests
import random

url = 'http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule'

headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'OUTFOX_SEARCH_USER_ID=398524504@10.108.160.102; JSESSIONID=aaag-QwyyH7kt_Z1pJgIx; OUTFOX_SEARCH_USER_ID_NCOO=1785800305.3071988; ___rl__test__cookies=1617165424510',
    'Host': 'fanyi.youdao.com',
    'origin': 'http://fanyi.youdao.com/',
    'Referer': 'http://fanyi.youdao.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
}
word = str(input('请输入要翻译的内容'))
lts = str(int(time.time() * 1000))
salt = lts + str(random.randint(0, 9))
s = "fanyideskweb" + word + salt + "Tbh5E8=q6U3EXe+&L[4c@"
sign = md5(s.encode()).hexdigest()
data = {
    'i': word,  # 目标关键词
    'from': 'AUTO',
    'to': 'AUTO',
    'smartresult': 'dict',
    'client': 'fanyideskweb',
    'salt': salt,
    'sign': sign,
    'lts': lts,
    'bv': '3da01a09873456cfb5dba05f2124b148',
    'doctype': 'json',
    'version': '2.1',
    'keyfrom': 'fanyi.web',
    'action': 'FY_BY_REALTlME'
}

html = requests.post(url, headers=headers, data=data).json()
print(html)
