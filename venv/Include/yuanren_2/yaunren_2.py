# -*- coding: utf-8 -*-,
# @Time    : "2021/8/24 14:15",
# @Author  : "knox.chan",
# @FileName: "yaunren_2.py",
# @Software: "PyCharm",
import requests
import execjs

# 1实例化一个node对象
node = execjs.get()

# 2.js文件编译
ctx = node.compile(open('t.js', encoding='utf-8').read())

# 3.执行JS函数
function_name = f'get_m_value()'

import time

sum = 0
num = 0
for i in range(1, 6):
    time.sleep(1)
    headers = {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cache-control": "max-age=0",
        "cookie": f"Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1629429005; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1629429006,1629772851; no-alert3=true; vaptchaNetway=cn; tk=-829094767749864059; sessionid=uxyws1rfdcara4u8tcgx1azojpvd3fok; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1629785644; m={ctx.eval(function_name)}; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1629785665",
        "referer": "https://match.yuanrenxue.com/match/2",
        "user-agent": "yuanrenxue.project",
    }

    r = requests.get(f'https://match.yuanrenxue.com/api/match/2?page={i}', headers=headers).json()

    for j in r['data']:
        sum += j['value']
        num += 1
print(sum)
