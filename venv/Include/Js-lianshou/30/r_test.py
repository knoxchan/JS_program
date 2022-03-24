import requests

headers = {
    "Connection": "keep-alive",
    "sec-ch-ua": "^\\^",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "Content-Type": "application/json; charset=UTF-8",
    "Accept": "*/*",
    "Origin": "https://www.maomaozu.com",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://www.maomaozu.com/",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
}
cookies = {
    "PHPSESSID": "gsu3n9sifs7it3li4eu53eik2j",
    "Hm_lvt_6cd598ca665714ffcd8aca3aafc5e0dc": "1647744695",
    "Hm_lpvt_6cd598ca665714ffcd8aca3aafc5e0dc": "1647744695",
    "SECKEY_ABVK": "pUgbRO2eJCn6zLJZmX3cl21Oabv7/qF2rBlZUuR6M6Y^%^3D",
    "BMAP_SECKEY": "HHF3g6RjJwfm6H66D27GT_PkvE09bZjn6e6yKt9UUZN9PJyWLcmmRUhXg9KlPK0JuVs4BdgYMMh5yj_okN29VeVSo7coxZOn4ytl_02RdNLVxUKb2F2pKmrl29KCg0DAY1_hLDWB-ZAitNMLHVobxXzeXzWk7VwXH8sKmoVm47Bp_bNdiD4jRPn7QRGWEpuS"
}
url = "https://www.maomaozu.com/index/office.json"
data = 'CqiLoe/MhYW+0XbDZ7A5qCacdg513FGvclHXdfrgONygPNGwe+uVIrU4jz1ChDTP'.encode('unicode_escape')
response = requests.post(url, headers=headers, cookies=cookies, data=data)
response1 = requests.post(url, headers=headers, data=data)

print(response.text == response1.text)
# print(response)
