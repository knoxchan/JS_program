# -*- coding: utf-8 -*-
# @Time    : 2021/8/25 16:26
# @Author  : knox.chan
# @FileName: yuanren_5.py
# @Software: PyCharm

import requests
import execjs

node = execjs.get()

# 2.js文件编译
ctx = node.compile(open('./t10.js', encoding='utf-8-sig').read())

# # 3.执行JS函数
# function_name = f'main()'

# function_name = f'test("1633943605829")'
# m, encode_m, RM4h = ctx.eval(function_name)
# print(m, encode_m, RM4h)
num = []
for page in range(1, 6):
    function_name = f'main()'
    f, m, encode_m, RM4h = ctx.eval(function_name)
    # print(f,m)
    # print(f'm={encode_m}; RM4hZBv0dDon443M={RM4h}')
    # print(f, m, encode_m, RM4h)

    headers = {
        'authority': 'match.yuanrenxue.com',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'yuanrenxue.project',
        'referer': 'https://match.yuanrenxue.com/match/5',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': f'm={encode_m}; RM4hZBv0dDon443M={RM4h}',
    }
    cookie = {
        'm': encode_m,
        'RM4hZBv0dDon443M': RM4h,
        # 'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1629429005,1629859292,1629884045,1630651179',
        # 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1633916900,1633926520,1633939358,1634029819',
        # 'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1634032031'
    }
    url = f'https://match.yuanrenxue.com/api/match/5?page={page}&m={m}&f={f}'
    # print(url)
    # response = requests.get(url, headers=headers)

    response = requests.get(url, headers=headers, cookies=cookie)
    for d in response.json()['data']:
        num.append(d['value'])

num.sort(reverse=True)

k = 0
for i in range(5):
    k += num[i]

print(k)

