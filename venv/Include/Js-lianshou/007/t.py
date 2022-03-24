# -*- coding: utf-8 -*-
# @Time    : 2022/1/25 18:15
# @Author  : knox.chan
# @FileName: t.py
# @Software: PyCharm

import requests
import execjs

# 实例化一个node对象
node = execjs.get()

# 2.js文件编译
ctx = node.compile(open('./t.js', encoding='utf-8').read())

# 3.执行js函数



url = "https://uwf7de983aad7a717eb.youzy.cn/youzy.dms.basiclib.api.college.query"


for page in range(1, 6):
    from_data = f'{{"keyword":"深圳","provinceNames":[],"natureTypes":[],"eduLevel":"","categories":[],"features":[],"pageIndex":{page},"pageSize":20,"sort":11}}'
    u_sign = ctx.eval(f'sdk({from_data})')
    headers = {
        "Host": "uwf7de983aad7a717eb.youzy.cn",
        "Connection": "keep-alive",
        "Content-Length": "138",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
        "u-sign": u_sign,
        "u-token": "",
        "sec-ch-ua-mobile": "?0",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
        "sec-ch-ua-platform": "\"Windows\"",
        "Accept": "*/*",
        "Origin": "https://pv4y-pc.youzy.cn",
        "Sec-Fetch-Site": "same-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://pv4y-pc.youzy.cn/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
    }
    from_data = from_data.encode('utf-8')
    response = requests.post(url, headers=headers, data=from_data)

    print(response.text)
    print(response)
