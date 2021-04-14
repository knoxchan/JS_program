# steam 登录password Js逆向破译
# url:https://store.steampowered.com/login/?redir=&redir_ssl=1&snr=1_4_4__global-header
import execjs
import requests
import time

username = '123123'
password = '123456'
# 1 获取RSA MOD EXP参数
rsa_url = 'https://store.steampowered.com/login/getrsakey/'
rsa_headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'steamCountry=CN%7C29f1ecd497c20a1d43804949f50df58a; browserid=2459502875709702746; sessionid=4527b1acb65037c71ae4f2bc; timezoneOffset=28800,0; _ga=GA1.2.761164390.1617697363; _gid=GA1.2.1905426500.1617697363',
    'Host': 'store.steampowered.com',
    'Origin': 'https://store.steampowered.com',
    'Referer': 'https://store.steampowered.com/login/?redir=&redir_ssl=1&snr=1_4_4__global-header',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
}
post_data = {
    'username': username,
    'donotcache': str(int(time.time() * 100))
}
result = requests.post(rsa_url, post_data, headers=rsa_headers).json()

mod = result['publickey_mod']
exp = result['publickey_exp']
# print(publickey_mod)
# print(publickey_exp)

# 初始化node对象
node = execjs.get()

# JS文件编译
ctx = node.compile(open('./steam.js', encoding='utf-8', ).read())

# 执行JS函数
function_name = 'getpwd("{0}","{1}","{2}")'.format(password, mod,exp)
# print(function_name)
js_pwd = ctx.eval(function_name)
print(js_pwd)
