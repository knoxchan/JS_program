from Crypto.Cipher import AES
import base64
import requests
import time

value = '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'
key_Decrypt = '0a1fea31626b3b55'

key_Encrypt = '55b3b62613aef1a0'
payload = f'{{"Type":"6","page":14,"expire":{int(time.time() * 1000)}}}'


def AES_Decrypt(key, data):
    vi = key
    data = data.encode('utf8')
    encodebytes = base64.decodebytes(data)
    # ????????????????????????bytes????????????
    cipher = AES.new(key.encode('utf8'), AES.MODE_CBC, vi.encode('utf8'))
    text_decrypted = cipher.decrypt(encodebytes)
    unpad = lambda s: s[0:-s[-1]]
    text_decrypted = unpad(text_decrypted)
    # ?????????
    text_decrypted = text_decrypted.decode('utf8')
    return text_decrypted


def AES_Encrypt(key, data):
    vi = key
    pad = lambda s: s + (16 - len(s) % 16) * chr(16 - len(s) % 16)
    data = pad(data)
    # ???????????????
    cipher = AES.new(key.encode('utf8'), AES.MODE_CBC, vi.encode('utf8'))
    encryptedbytes = cipher.encrypt(data.encode('utf8'))
    # ?????????????????????bytes???????????????
    encodestrs = base64.b64encode(encryptedbytes)
    # ??????Base64????????????,??????byte?????????
    enctext = encodestrs.decode('utf8')
    # ???byte????????????utf-8????????????
    return enctext


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
data = AES_Encrypt(key_Encrypt, payload).encode('unicode_escape')
response = requests.post(url, headers=headers, cookies=cookies, data=data)
#
print(AES_Decrypt(key_Decrypt, response.text))
# print(AES_Encrypt(key_Encrypt, payload))
