import requests
from requests import session

s = session()
headers = {
    'authority': 'www.python-spider.com',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'x-requested-with': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    'origin': 'https://www.python-spider.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.python-spider.com/challenge/6',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cookie': 'sessionid=vo3gbnadntxrcwibztmk6u53vapjifp7; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1636167234,1636280615,1637155938,1637463862; no-alert=true; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1637468043; sign=bgvyzmfnis',
}
from time import sleep

num = 0
for page in range(1, 101):
    data = {
        'page': page
    }
    sleep(0.5)
    response = s.post('https://www.python-spider.com/api/challenge6', data=data)
    if response.status_code == 200:
        a = response.json()
        for i in a['data']:
            num += int(i['value'].strip())
        print(page, '请求成功', num)
    else:
        print(response.status_code)
        print(page, '请求失败')

print(num)
