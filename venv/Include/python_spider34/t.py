import requests


headers = {
    "authority": "www.python-spider.com",
    "cache-control": "max-age=0",
    "sec-ch-ua": "^\\^",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "navigate",
    "sec-fetch-user": "?1",
    "sec-fetch-dest": "document",
    "referer": "https://www.python-spider.com/challenge/34",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8"
}
cookies = {
    "sessionid": "x8qm7fckn6xxumlpbd5fuis02e7p3gy1",
    "iloveu": "0b51def3ba7c08305ca102241bb951f61ab900c6",
    # "yuanrenxue34": "vo81qKYQjf",
    "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1645020683,1645537607,1645622595,1647059877",
    "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1647060242"
}
url = "https://www.python-spider.com/challenge/34"
response = requests.get(url, headers=headers, cookies=cookies)

response = requests.get(url, headers=headers, cookies=response.cookies)

print(response.text)