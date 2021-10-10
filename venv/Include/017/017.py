# -*- coding: utf-8 -*-
# @Time    : 2021/10/6 11:53
# @Author  : knox.chan
# @FileName: 017.py
# @Software: PyCharm
# 快乐学堂
# http://www.91118.com/Passport/Account/Login?ReturnUrl=http%3a%2f%2ft.91118.com%2f
# 登录逆向 des


parm = {
    'r': '0.4787323161375687',  # 估计 0-1随机值
    'kds': 'yes',  # 固定
    'username': '123456',  # 账号名
    'pass': 'QoqGiG9tATlDW7pq1SOjQw==',  # 密码
    'recordPwd': '1',  # 固定
    'ckcode': '8304',  # 数字验证码4位
    'fscode': 'klxt',   # 固定
    'invite': '',   # 固定
}
