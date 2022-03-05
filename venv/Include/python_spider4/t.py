import requests

headers = {
    "authority": "www.python-spider.com",
    "cache-control": "max-age=0",
    "sec-ch-ua": "^\\^",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-user": "?1",
    "sec-fetch-dest": "image",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cookie": "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1639063606,1640412050,1640488446; no-alert=true; m=07863bf894d6717d05a30a84441c8620^|1641313128000; sessionid=mlt2usr0gnvkobhqid5isx5kctsb0k7c; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1641341109",
    "Cache-Control": "max-age=0",
    "Referer": "https://www.python-spider.com/challenge/4",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    "Connection": "keep-alive",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Sec-Fetch-Site": "cross-site",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Dest": "image",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "If-None-Match": "^\\^XxDMkOmUTmCoPXFnKMOklTS1blY=^^",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    "origin": "https://www.python-spider.com",
    "referer": "https://www.python-spider.com/challenge/4",
    "Upgrade-Insecure-Requests": "1"
}
cookies = {
    "HMACCOUNT_BFESS": "6844D93A2197F974",
    "BAIDUID_BFESS": "7DBE80E7335F029340513FBF000F558C:FG=1"
}
url = "https://www.python-spider.com/challenge/4"
s = 0

for page in range(1, 101):
    proxy_data = requests.get(
        'http://webapi.http.zhimacangku.com/getip?num=1&type=2&pro=&city=0&yys=0&port=1&time=1&ts=0&ys=0&cs=0&lb=1&sb=0&pb=4&mr=1&regions=').json()[
        'data'][0]
    data = {
        "page": page
    }
    # proxy = {'http': f'http://{proxy_data["ip"]}:{proxy_data["port"]}'}
    proxies = {
        'http': 'http://' f'{proxy_data["ip"]}:{proxy_data["port"]}',
        'https': 'https://' f'{proxy_data["ip"]}:{proxy_data["port"]}',
    }
    print(proxies)
    print(requests.get('http://httpbin.org/ip',proxies=proxies).text)
    try:
        response = requests.post(url, headers=headers, cookies=cookies, data=data, proxies=proxies)
        for d in response.json()['data']:
            s += int(d.strip())
        print(page, '访问成功')
    except Exception as e:
        print(e)
print(s)
