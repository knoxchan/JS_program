import requests

headers = {
    "authority": "www.python-spider.com",
    "sec-ch-ua": "^\\^",
    "accept": "application/json, text/javascript, */*; q=0.01",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    "sec-ch-ua-mobile": "?0",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "origin": "https://www.python-spider.com",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "referer": "https://www.python-spider.com/challenge/4",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8"
}
cookies = {
    "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1639063606,1640412050,1640488446",
    "no-alert": "true",
    "m": "07863bf894d6717d05a30a84441c8620^|1641313128000",
    "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1641382991"
}
url = "https://www.python-spider.com/api/challenge4"
s = 0

from time import sleep
def r(s, data):
    try:
        sleep(2)
        pro = requests.get(
            'http://webapi.http.zhimacangku.com/getip?num=1&type=2&pro=&city=0&yys=0&port=1&time=1&ts=0&ys=0&cs=0&lb=1&sb=0&pb=4&mr=1&regions=').json()
        # pro['data'][0]['ip']

        proxy = {'http': f"http://{pro['data'][0]['ip']}:{pro['data'][0]['port']}",
                 'https': f"https://{pro['data'][0]['ip']}:{pro['data'][0]['port']}"}
    except:
        print(pro)
        print(123)
    try:
        response = requests.post(url, headers=headers, cookies=cookies, data=data, proxies=proxy)
        for d in response.json()['data']:
            s += int(d['value'].strip())
        return s
    except Exception as e:
        print('访问失败', e)
        print(requests.get('http://httpbin.org/get', proxies=proxy).text)
        return r(s, data)


for page in range(96, 101):
    data = {
        "page": page
    }
    # print(requests.get('http://httpbin.org/ip', proxies=proxy).text)
    s = r(s, data)
    print(page, '访问成功')

print(s)
