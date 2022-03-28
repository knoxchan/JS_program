# -*- coding: utf-8 -*-
# @Time    : 2022/3/28 16:50
# @Author  : knox.chan
# @FileName: 031_login.py
# @Software: PyCharm

from Crypto.Cipher import AES
import hashlib
import base64

def login_pwd_enctypt(data):
    vi = "1234567812345678"
    m = hashlib.md5()
    m.update("login.189.cn".encode('utf-8'))
    key = m.hexdigest()
    pad = lambda s: s + (16 - len(s) % 16) * chr(16 - len(s) % 16)
    data = pad(data)
    # 字符串补位
    cipher = AES.new(key.encode('utf8'), AES.MODE_CBC, vi.encode('utf8'))
    encryptedbytes = cipher.encrypt(data.encode('utf8'))
    # 加密后得到的是bytes类型的数据
    encodestrs = base64.b64encode(encryptedbytes)
    # 使用Base64进行编码,返回byte字符串
    enctext = encodestrs.decode('utf8')
    # 对byte字符串按utf-8进行解码
    return enctext

print(login_pwd_enctypt('a123456789'))