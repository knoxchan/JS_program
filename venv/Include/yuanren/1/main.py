import requests
import base64
import time
import hashlib

# md5 初始化




num = 0
for page in range(1, 86):
    t = str(int(time.time()))
    s = '9622' + t
    token = base64.b64encode(s.encode())
    m = hashlib.md5(token).hexdigest()

    headers = {
        'authority': 'www.python-spider.com',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'timestamp': t,
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-platform': '"Windows"',
        'safe': m,
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/1',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': 'vaptchaNetway=cn; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1636167234,1636280615,1637155938; no-alert=true; sessionid=ourfvhmgo5c4fsil8xoro11gej3z9mho; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1637156033',
    }
    response = requests.get(f'https://www.python-spider.com/challenge/api/json?page={page}&count=14', headers=headers)
    for data in response.json()['infos']:
        if '招' in data['message']:
            num += 1
print(num)
# NB. Original query string below. It seems impossible to parse and
# reproduce query strings 100% accurately so the one below is given
# in case the reproduced version is not "correct".
# response = requests.get('https://www.python-spider.com/challenge/api/json?page=1&count=14', headers=headers)
