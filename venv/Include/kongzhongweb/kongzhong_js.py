import execjs
import requests
import time

# 0 准备好账号密码
username = '123@qq.com'
password = '123456'

# 1 获取data dc参数
headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Cookie': 'KSPSSIONID=48AA3D4FDE4621F2AD3A3F13B74BA3BF; SSO-KGZQRT=077AE3EB9DBF71EFD0F641A479D90DE8; SESSION_COOKIE=40; Hm_lvt_1287c2225a527abe3386233dd9316f99=1618234801; Hm_lpvt_1287c2225a527abe3386233dd9316f99=1618234801; SSO-KGZLT=2ece3228-f15e-4d15-ab9c-2f84f9b98a73; SSO-KGZIT=8a51261f-59e7-4685-bf7d-d2c6c6866f7f',
    'Referer': 'https://passport.kongzhong.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
}
url = f'https://sso.kongzhong.com/ajaxLogin?j=j&jsonp=j&service=https://passport.kongzhong.com/&_={str(int(time.time() * 1000))}'
data = requests.get(url, headers=headers)
dc = data.text.split('"dc":"')[1].split('","')[0]

# 2 初始化node对象
node = execjs.get()

# 3 JS文件编译
ctx = node.compile(open('./kongzhong.js', encoding='utf-8', ).read())

# 4 执行JS函数 得到加密后的密码
function_name = 'getPwd("{0}","{1}")'.format(password, dc)
# print(function_name)
js_pwd = ctx.eval(function_name)
print(js_pwd)
