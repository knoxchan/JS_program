# -*- coding: utf-8 -*-
# @Time    : 2021/12/13 16:00
# @Author  : knox.chan
# @FileName: yuanren_6.py
# @Software: PyCharm


import requests

headers = {
    "authority": "match.yuanrenxue.com",
    "pragma": "no-cache",
    "cache-control": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
    "accept": "application/json, text/javascript, */*; q=0.01",
    "x-requested-with": "XMLHttpRequest",
    "sec-ch-ua-mobile": "?0",
    "user-agent": "yuanrenxue.project",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "referer": "https://match.yuanrenxue.com/match/6",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8"
}
cookies = {
    "Hm_lvt_c99546cf032aaa5a679230de9a95c7db": "1639039680",
    "no-alert3": "true",
    "tk": "5710725569069056079",
    "Hm_lvt_9bcbda9cbf86757998a2339a0437208e": "1639039697",
    "m": "d1333215fd809bf708065f692703a545",
    "RM4hZBv0dDon443M": "udWq+gDDpPPNsbsj+vAyLnXM9AWIGb7Psz71vjh6ON1jOrcnZylpzJpT8A+STpzYbMixtVA7GtZQFO92AYPke62GzCVsJPyuANmq5iBy2Z7APrfFR4UxT6ek5jUprWaqNXU/mFKrrPegSS4lRUBQLSVI+F2O8YyccW9m4Z996/mEKVrE06Dm1Yr/nk2TCOTdT+Ci2WKjjGnlRYkiqYLAFIorJsUsuApYQwuB6xoAwhY=",
    "Hm_lpvt_9bcbda9cbf86757998a2339a0437208e": "1639041459",
    "Hm_lpvt_c99546cf032aaa5a679230de9a95c7db": "1639382421"
}
url = "https://match.yuanrenxue.com/api/match/6"

import execjs

node = execjs.get()

# 2.js文件编译
ctx = node.compile(open('./t.js', encoding='utf-8').read())

num = 0
for page in range(1, 6):
    function_name = f'rsa_decode()'
    m, q = ctx.eval(function_name)
    params = {
        'page': page,
        "m": m,
        "q": q
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    # print(1234)
    for i in response.json()['data']:
        # print(page)
        # print(i['value'])
        num += i['value'] * 24

print(num)
