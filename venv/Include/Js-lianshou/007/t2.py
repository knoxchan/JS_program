import requests
import json

url = "https://uwf7de983aad7a717eb.youzy.cn/youzy.dms.basiclib.api.college.query"
#
payload = json.dumps({
    "keyword": "",
    "provinceNames": [],
    "natureTypes": [],
    "eduLevel": "",
    "categories": [],
    "features": [],
    "pageIndex": 1,
    "pageSize": 20,
    "sort": 11
})
print(payload)
payload = '{"keyword":"","provinceNames":[],"natureTypes":[],"eduLevel":"","categories":[],"features":[],"pageIndex":1,"pageSize":20,"sort":7}'

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    'u-sign': 'eb7b5572395269b4c9cfbebcdbfde5a6',
    'u-token': '',
    'sec-ch-ua-mobile': '?0',
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    'Accept': '*/*',
    'Origin': 'https://pv4y-pc.youzy.cn',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://pv4y-pc.youzy.cn/',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cookie': 'acw_tc=707c9f9d16431713723682259e0237c3b47b3c8c5a75a14f561ee68d0e4c65'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
