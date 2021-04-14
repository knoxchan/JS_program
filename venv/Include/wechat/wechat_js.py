# 微信公众平台登录密码JS逆向破译
# url:https://mp.weixin.qq.com/
import execjs
# 1实例化一个node对象
node = execjs.get()

# 2.js文件编译
ctx = node.compile(open('./wechat.js',encoding='utf-8').read())

# 3.执行JS函数
function_name = f'getpwd({"123456"})'
result = ctx.eval(function_name)
print(result)