# -*- coding: utf-8 -*-
# @Time    : 2021/8/24 11:31
# @Author  : knox.chan
# @FileName: yaunren_1.py
# @Software: PyCharm

import execjs
import requests


class YuanRen1():
    def __init__(self):
        # 1实例化一个node对象
        node = execjs.get()

        # 2.js文件编译
        self.ctx = node.compile(open('./t.js', encoding='utf-8').read())

        # 3.执行JS函数
        self.function_name = f'get_m_value()'

        self.headers = {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
            "cookie": "Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1629429005; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1629429006,1629772851; qpfccr=true; no-alert3=true; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1629772981; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1629773026",
            # "referer": "https://match.yuanrenxue.com/match/1",
            "user-agent": "yuanrenxue.project",
            "x-requested-with": "XMLHttpRequest"
        }

    def get_m_value(self):
        return self.ctx.eval(self.function_name)

    def main(self):
        sum = 0
        num = 0
        import time
        for i in range(1, 6):
            # time.sleep(3)
            url = f'https://match.yuanrenxue.com/api/match/1?page={i}&m={self.get_m_value()}'
            r = requests.get(url, headers=self.headers).json()
            for j in r['data']:
                num += 1
                sum += j['value']
        print(sum / num)


if __name__ == '__main__':
    y = YuanRen1()
    y.main()
