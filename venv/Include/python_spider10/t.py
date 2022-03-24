import requests
import collections

url = "https://www.python-spider.com/api/challenge10"


headers = {
    "Host": "www.python-spider.com",
    "Connection": "keep-alive",
    "Content-Length": "6",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36",
    "sec-ch-ua-platform": "\"Windows\"",
    "Origin": "https://www.python-spider.com",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://www.python-spider.com/challenge/10",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cookie": "sessionid=ehniyamhdz1xh8gq081skh41a6q3ew5r; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1645020683; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1645327950"
}
# headers = collections.OrderedDict(headers)
# print(type(headers))
http = requests.session()
http.headers.clear()
http.headers.update(headers)


# payload = {'page':"1"}
# response = http.post(url, data=payload, headers=headers).json()
# print(response['data'])

_sum = 0
for page in range(1,101):
    print(page,'请求成功')
    payload = {'page':str(page)}
    response = http.post(url, data=payload, headers=headers).json()
    for data in response['data']:
        _sum += int(data['value'].strip())
# print(response.headers)
# print(response.request.headers)
# print(response.text)
print(_sum)
