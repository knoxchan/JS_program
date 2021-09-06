import requests

from collections import Counter
import re

session = requests.Session()

headers = {
    "Host": 'match.yuanrenxue.com',
    "Connection": 'keep-alive',
    "Content-Length": '0',
    "sec-ch-ua": '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
    "sec-ch-ua-mobile": '?0',
    # "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
    'User-Agent': 'yuanrenxue.project',
    "Accept": '*/*',
    "Origin": 'https://match.yuanrenxue.com',
    "Sec-Fetch-Site": 'same-origin',
    "Sec-Fetch-Mode": 'cors',
    "Sec-Fetch-Dest": 'empty',
    "Referer": 'https://match.yuanrenxue.com/match/3',
    "Accept-Encoding": 'gzip, deflate, br',
    "Accept-Language": 'zh-CN,zh;q=0.9',
    'cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1629860583; qpfccr=true; no-alert3=true; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1629860944',
}
session.headers = headers

value_list = []
for i in range(1, 6):
    r = session.post(url='https://match.yuanrenxue.com/jssm')
    # print(r.headers['Set-Cookie'])
    sessionid = re.findall('(?<=sessionid=).+?(?=;)', r.headers['Set-Cookie'])[0]
    # print(sessionid)
    url = f'http://match.yuanrenxue.com/api/match/3?page={i}'
    r = session.get(url)
    # print(r.request.headers)
    # print(r.json())
    for data in r.json()['data']:
        value_list.append(data['value'])

print(Counter(value_list))
print(Counter(value_list).most_common(1)[0][0])
