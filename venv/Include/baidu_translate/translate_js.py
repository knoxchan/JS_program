# 百度翻译 JS逆向获取翻译结果

import execjs
import requests

# 0 输入需要翻译的字段
word = 'dog'

# 1 实例化node对象
node = execjs.get()

# 2 编译JS程序
ctx = node.compile(open('./baidu_translate.js', encoding='utf-8').read())

# 3 执行解析出加密的内容
functionName = f'getData("{word}")'
result = ctx.eval(functionName)

headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    # 'Content-Length':'129',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'BIDUPSID=0167F33CBEE34631074F5717C93B7E57; PSTM=1619243774; BAIDUID=0167F33CBEE3463181D19B11050E8F2E:FG=1; delPer=0; PSINO=7; H_PS_PSSID=33839_31254_33848_33855_26350_33607_33811; BA_HECTOR=a00k00a4808g0101le1g87cnv0q; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BCLID=12306430761662958302; BDSFRCVID=WOuOJexroG38EYQeAz6Vbo1epLweG7bTDYLEOwXPsp3LGJLVJeC6EG0Pts1-dEu-EHtdogKK3gOTH4PF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF=tR3aQ5rtKRTffjrnhPF3-lIzXP6-hnjy3bAOKxTt5lj0ET6PhTQqKMAWbttf5q3RymJJ2-39LPO2hpRjyxv4y4Ldj4oxJpOJ-bCL0p5aHl51fbbvbURvDP-g3-AJQU5dtjTO2bc_5KnlfMQ_bf--QfbQ0hOhqP-jBRIEoCvt-5rDHJTg5DTjhPrM3PntWMT-MTryKK8y3xTGeqjujljDhT_8K-vfKx-fKHnRhlRNB-3iV-OxDUvnyxAZyxomtfQxtNRJQKDE5p5hKq5S5-OobUPUDUJ9LUkJLgcdot5yBbc8eIna5hjkbfJBQttjQn3hfIkj2CKLK-oj-D_6jjK23e; BCLID_BFESS=12306430761662958302; BDSFRCVID_BFESS=WOuOJexroG38EYQeAz6Vbo1epLweG7bTDYLEOwXPsp3LGJLVJeC6EG0Pts1-dEu-EHtdogKK3gOTH4PF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF_BFESS=tR3aQ5rtKRTffjrnhPF3-lIzXP6-hnjy3bAOKxTt5lj0ET6PhTQqKMAWbttf5q3RymJJ2-39LPO2hpRjyxv4y4Ldj4oxJpOJ-bCL0p5aHl51fbbvbURvDP-g3-AJQU5dtjTO2bc_5KnlfMQ_bf--QfbQ0hOhqP-jBRIEoCvt-5rDHJTg5DTjhPrM3PntWMT-MTryKK8y3xTGeqjujljDhT_8K-vfKx-fKHnRhlRNB-3iV-OxDUvnyxAZyxomtfQxtNRJQKDE5p5hKq5S5-OobUPUDUJ9LUkJLgcdot5yBbc8eIna5hjkbfJBQttjQn3hfIkj2CKLK-oj-D_6jjK23e; __yjs_duid=1_88fecf7d39f3f248a1aad10572608ac51619243867869; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=1619243868; REALTIME_TRANS_SWITCH=1; FANYI_WORD_SWITCH=1; HISTORY_SWITCH=1; SOUND_SPD_SWITCH=1; SOUND_PREFER_SWITCH=1; Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574=1619243916; ab_sr=1.0.0_NTY2ZmZlNzFkOGQ3YzQwZjQ1NGIzNDg4MGU4ZThhOWZjYWExMzNiYjE0MmJiYjhhODkxYWE3Mzc3YzYzOTQ3NGM4NmUwZGZkMzY3MTVhZTg1ZTMyYWY3OGZlNDYyOWMw; __yjs_st=2_NjI0Y2FjYWRiMjhhOGJkZDFmNGQ3YzA5YzIyMzM5YzRmYmY2Yzg1NDFhOTQ0MmY1ZmY1YWMzYjljNjA3N2ZlNGE3NjJjZjQzMzdkOWNjNzc4ZjY0ZDMwNTYzZDBkZGY2OTg5OTdjNDc1MjI3OTViMTVlZWU1M2Q5OTJiNWI5MDk1MTk3YmY1OTQ3MTM2MDI2MTE2NDc0MTIzMTRiM2JiNjBiODY1MDJlMGM4ZjY0OGY5MDY2ZDAyZGIzZmRjYzYzY2I3OTk2Zjk0ZTA4Mzg3ODk2NjQ4NDdkNzM3YjE4OGY5NGQ5M2ViMThmNGMxM2Y2OWM0MWMzZmEyZjFlOGU4ZmUxNTk5Yjg5YjQ2MDg4NmRjZDYxYzkzYjU5ZTYyODYxXzdfYjU3YjgwNmE=',
    'Host': 'fanyi.baidu.com',
    'Origin': 'https://fanyi.baidu.com',
    'Referer': 'https://fanyi.baidu.com/?aldtype=16047',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
}

data = {
    'from': 'zh',
    'to': 'en',
    'query': word,
    'simple_means_flag': '3',
    'sign': result,
    'token': 'f1323786e4bf8b299e820ead93a21779',
    'domain': 'common',
}
url = 'https://fanyi.baidu.com/v2transapi?from=en&to=zh'

r = requests.post(url,headers=headers,data=data)
print(r.json())