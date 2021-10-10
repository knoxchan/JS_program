# 5173游戏服务网登录 登录JS逆向解析 登录还是失败了 验证码错误
'''
anthor - knox
createtime - 20210418
encryption - MD5
url - https://passport.5173.com/?returnUrl=http%3a%2f%2fwww.5173.com%2f
'''

import execjs
import time
import requests

# 定义账号密码
user_name = 'p_b4jmn4f'
password = 'a123456789'

# 初始化session
s = requests.session()
headers = {
    'Host': 'passport.5173.com',
    'Connection': 'keep-alive',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://passport.5173.com',
    'Referer': 'https://passport.5173.com/?returnUrl=http%3a%2f%2fwww.5173.com%2f',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8'
}
s.headers = headers

# 1 初始化node对象
node = execjs.get()

# 2 编译JS文件
ctx = node.compile(open('./5173.js', encoding='utf-8').read())

# 2.5 访问5173网站 从网页获取SecurityToken【直接用于登录】 PasswordKey【用于破解密码】
url = 'https://passport.5173.com/?returnUrl=http%3a%2f%2fwww.5173.com%2f'
r = s.get(url)
if r.status_code != 200:
    raise Exception('2.5 requests请求失败')
PasswordKey = r.text.split('PasswordKey":"')[1].split('",')[0]
SecurityToken = r.text.split('SecurityToken":"')[1].split('",')[0]
# cookie = r.cookies

# 2.6 破解验证码
url = f'https://passport.5173.com/Sso/ValidateSlide?token={SecurityToken}'
data = {
    't': str(int(time.time() * 1000)),
    'vs': [
        31,
        26,
        46,
        31,
        25,
        54,
        33,
        24,
        70,
        40,
        23,
        78,
        48,
        21,
        86,
        58,
        20,
        94,
        68,
        20,
        102,
        80,
        20,
        110,
        94,
        20,
        118,
        114,
        20,
        126,
        138,
        20,
        134,
        160,
        20,
        142,
        185,
        20,
        156,
        220,
        20,
        174,
        292,
        19,
        188,
        338,
        19,
        204,
        360,
        19,
        209,
        379,
        19,
        214,
        394,
        19,
        223,
        408,
        19,
        230,
        419,
        19,
        238,
        429,
        19,
        246,
        440,
        19,
        254,
        449,
        19,
        262,
        459,
        19,
        270,
        467,
        19,
        277,
        475,
        19,
        286,
        483,
        19,
        294,
        490,
        19,
        302,
        496,
        19,
        310
    ],
    'x': 32,
    'y': 26,
}
r = s.post(url, data)
if r.status_code != 200:
    raise Exception('2.6 requests请求失败')
print(r.text)

# 3 执行JS文件 破解出密码
functionName = f'getPwd("{password}","{PasswordKey}")'
result = ctx.eval(functionName)
print(result)

# 4 登录5173网站

url = 'https://passport.5173.com/?returnUrl=http://www.5173.com/'
data = {
    'smsLogin': 0,
    'userName': user_name,
    'password': result,
    'mobileNo': '',
    'smsCaptcha': '',
    'category': '',
    'passpod': '',
    '__validationToken__': SecurityToken,
    '__validationDna__': ''
}

r = s.post(url, data=data, headers=headers)

# 5.保存登录页面 查看是否登录成功
with open('./5173.html', 'wb') as f:
    f.write(r.content)
