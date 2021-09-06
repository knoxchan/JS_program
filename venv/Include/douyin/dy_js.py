import execjs
import requests
import time

import io
import sys

import io
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='gb18030')

# sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')

uid = '91899704472'
# 初始化node对象
node = execjs.get()

# JS文件编译
ctx = node.compile(open('./douyin.js', encoding='gbk', ).read())

# 执行JS函数
function_name = f'getSignature("{uid}","{"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"}")'
# print(function_name)
print(function_name)
js_pwd = ctx.eval(function_name)
print(js_pwd)
