import requests

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
    'referer': 'https://www.python-spider.com/challenge/4',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cookie': 'sessionid=vo3gbnadntxrcwibztmk6u53vapjifp7; sign=1637464445~YWlkaW5nX3dpbjE2Mzc0NjQ0NDUxNjA=|fe5181b059b6e187da0fde159d6cf115; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1636167234,1636280615,1637155938,1637463862; no-alert=true; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1637464753',
}
from time import sleep

num = 0
# for page in range(99, 101):
#     print(f'{page}页前 num总数为{num}')
#     data = {
#         'page': page
#     }
#     sleep(1.5)
#     data = requests.get('http://webapi.http.zhimacangku.com/getip?num=1&type=2&pro=&city=0&yys=0&port=1&time=1&ts=0&ys=0&cs=0&lb=1&sb=0&pb=4&mr=1&regions=').json()
#
#     proxies = {
#         'http': f"{data['data'][0]['ip']}:{data['data'][0]['port']}",
#         'https': f"{data['data'][0]['ip']}:{data['data'][0]['port']}",
#     }
#     # print(proxies)
#     response = requests.post('https://www.python-spider.com/api/challenge4', headers=headers, data=data,
#                              proxies=proxies)
#     if response.status_code == 200:
#         a = response.json()
#         for i in a['data']:
#             num += int(i['value'].strip())
#     else:
#         print(response.status_code)


print(num)

print('4906100')