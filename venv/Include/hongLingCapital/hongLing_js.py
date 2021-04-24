# 红岭创投 登录JS逆向解析
'''
anthor - knox
createtime - 20210414
encryption - MD5
url - https://sso.my089.com/sso
'''
import execjs
import requests

# 0 输入账号密码 该网站暂停注册 无法验证是否可以正常登录
user_name = '123@qq.com'
password = '123456'

# 1 初始化node对象
node = execjs.get()

# 2 编译JS文件
ctx = node.compile(open('./hongLing.js',encoding='utf-8').read())

# 3 执行JS文件 反编译出密码
functionName = f'getPwd("{password}")'
result = ctx.eval(functionName)
print(result)

# 构建请求头
# data = {
#
# }

