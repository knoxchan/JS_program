# -*- coding: utf-8 -*-
# @Time    : 2022/3/11 15:33
# @Author  : knox.chan
# @FileName: geetest_slice.py
# @Software: PyCharm
from Include.geetest.image_restore import get_slider_offset_method3
import requests
import time
import json

t = int(time.time() * 1000)
# 获取gt challenge
r = requests.get(f'https://www.geetest.com/demo/gt/register-slide?t={t}')
if r.status_code != 200:
    raise Exception('请求 != 200')
gt, challenge = r.json()['gt'], r.json()['challenge']


headers = {
    "Connection": "keep-alive",
    "sec-ch-ua": "^\\^",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "Accept": "*/*",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Dest": "script",
    "Referer": "https://www.geetest.com/",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
}
cookies = {
    "GeeTestAjaxUser": "28dedcce5c5e9e5c02318ad095f63b85",
    "GeeTestUser": "2ad31472c53ac811fefd1a429efabe99"
}
url = "https://api.geetest.com/ajax.php"
params = {
    "gt": "019924a82c70bb123aae90d483087f94",
    "challenge": "e7113c8c192607edae26167273e3187c",
    "lang": "zh-cn",
    "pt": "0",
    "client_type": "web",
    "w": "3Vmsbt1DSbQEtNEv0crvpVq2tCSLqB3NkZLW2WUgq)7vHnL6VgQK7Xosl1dDiZu6I0nvMI(No1YY0Xa(GyyaHPHFJzAFD97ZF7qBs)2GrRCJl1lex5pSWMwqSJB8EPXz)os(I7)F2q5b)6OTAHtfxSh3vumRAqAHQ3vR93MLu)dO7WvyT3H2l6Js8KE67QHBg9fxkDiaZmqTxdwK09w7k7kRgGPPJiIYrreGz1ZCB6ZlrKoZ0065fap)FUbKnXPTyB30JbPV0AXKx449siItZKP4Cs7hPhizxkJr0Des7d1HI1Tf7R5c3yxBlv2fjYdCe0QtdX9KdDpyOJM7Z4XTi1JSkFu)dgZ1mbPU4ZuC)5GY)Ht(Q9tG1kFPnPPnTycZZeiSAorkf4Eh7hZ3HLEApZYlqS4qaMZ(cRZdY(pLYwHOo)mz(mFeKUaDujGpcTj2nipyGk)01MJPLhoboETQoXv9WZM6o)YDuwYgxzS36jVjmqaRaWJxJPetP8yal1RxiCl3Vka)521vIU4AC2fEznIaoWUUrA5OHbOECgSXBUvj)43ar42dIE)1Pehh68lf3bcZyPoVHk4lyIEbeR1RMg5Q)3s7mnZEhijxQgU5fnObSrYJUfX9mi1hpooiJfQVOquxb(iDyBCsPPn2OnxVArzn8M(noZ524(vvLDFEq6i6mFpu8kPV(fuinhxTL3meKXY54iG1YNQMfHHyTrLmrO6Pe9OaimyVPNumuyjs4GcCSsC)YDbqVS5k(FweLpObLp7tC)H98o0KcDUHER9VGDuds6lsTP9f3pCj6gX4oDKlhpLCbDDt7RBDJrHyOVTSIpAAdtbNIphSWN1ZEJKDg6Kh3NvQGFxZvK)xmti1bjrfwmfYA1YWx2BBulfXNQQuAAxwIGQGUY51iWrrxOitpvKzABWfmy6F2AfZqP8LoBxiZ(vekDoFUFu2wix2RAh)mVFxo5stceIIqxybLGuSPGn5bsHbSpbHdwxmXTAQCQUpwddZSROkmKVpb(vJDA3FZeev9VZ7y0SLdOTOQriMxWmrnQC1lrvmjYbDclr8V9Or(dd9bYPMPaZV8P5jLWmREOE)B(NDfRvv20BMXHtjyFesSO(EXbzeo9MQyAitsv7pQy9QxyU(ooJwON9V)fi4iZJef)Mihkc6B3JWyDPEczt8(22jtAfPILQ)8rLDqlmMarSYVOz)Xf(D2NlqM5LQkIFseOhh0iVUOnYbzQo3ywxI0XhWt)ppculEYl4bKpi6H0JexDu3lvkjsB(oZNTBrcBGl(HSu8E72bYMpv8DaB2RYZvKQ2Av6TeN6jjEsTHwNlhrqwfjHsboDCp1pd47ywIppGStf06LGUsU9MZx60C22S3R2kYzCEib8LFmgN01Q(PFLDaByrepv6Mt8mM5YVK3SoxZkKwJNL83TcFXZwo8QbshbSuLeIk841o2BTJGrm)lmztl3lwZKECQIIJopmYgp4neY7ta5EY5dM9LkpR4GQNGHhg)n193LjmhwDZN3YZcxoLw(SI24SsRhAEYpgoVZd0eQEXO5QUo5V)rehygDu6RW7)n1MsOOsBfMOHIP6iize3qV4CZ9gYHlhee2DLApanwqbqRk1YwxJOn043s1HOh1wtZnIWtfBLKCxs.",
    "callback": "geetest_1647270850292"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)
# 通过gt challenge 获取滑块和图片的其他信息

headers = {
    "Connection": "keep-alive",
    "sec-ch-ua": "^\\^",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "Accept": "*/*",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Dest": "script",
    "Referer": "https://www.geetest.com/",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
}
# cookies = {
#     "GeeTestAjaxUser": "28dedcce5c5e9e5c02318ad095f63b85",
#     "GeeTestUser": "2ad31472c53ac811fefd1a429efabe99"
# }
url = "https://api.geetest.com/get.php"
params = {
    "is_next": "true",
    "type": "slide3",
    "gt": gt,
    "challenge": challenge,
    "lang": "zh-cn",
    "https": "true",
    "protocol": "https://",
    "offline": "false",
    "product": "embed",
    "api_server": "api.geetest.com",
    "isPC": "true",
    "autoReset": "true",
    "width": "100%",
    "callback": f"geetest_{t}"
}
r = requests.get(url, headers=headers, params=params)
if r.status_code != 200:
    raise Exception('请求 != 200')
r = json.loads(r.text.split(f'geetest_{t}(')[1][:-1])
print(r)

