import requests
import time
import re
import base64
from fontTools.ttLib import TTFont
headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cookie': 'f=n; commontopbar_new_city_info=4%7C%E6%B7%B1%E5%9C%B3%7Csz; myLat=""; myLon=""; id58=s0XqumBkfe/XgntetzC/jQ==; spm=u-2d2yxv86y3v43nkddh1.BDPCPZ_BT; mcity=sz; f=n; city=sz; 58home=sz; commontopbar_new_city_info=4%7C%E6%B7%B1%E5%9C%B3%7Csz; commontopbar_ipcity=sz%7C%E6%B7%B1%E5%9C%B3%7C0; 58tj_uuid=63317593-3001-455c-a9b1-6d48729e9e33; new_uv=1; utm_source=market; init_refer=https%253A%252F%252Fwww.baidu.com%252Fother.php%253Fsc.af000004fDSD7d_9Qfm2F96TZXU3LU-FrR2USEfxxjJAVTRd5_2c2gHSuIErL1k19rOgM0NYOTnoTzk6a1-NamGC6qmK1AzgVMMMdaw_HSd_uaMAOCXhblPDUiQPD1wvpfHoXriP1Ax6HnKpw7DvphwJf_ZdktVq0KQSVm-eukJ3Abdl9QT19NIHrt9-WfxoHM6xEOWjVnSJJZ_Rwc4nemmWER8w.DY_NR2Ar5Od66z3PrrW6ButVvkDj3n-vHwYxw_vU85YIMAQV8qhORGyAp7WIu8L6.TLFWgv-b5HDkrfK1ThPGujYknHb0THY0IAYq18ysztv__tT0IgP-T-qYXgK-5H00mywxIZ-suHY10ZIEThfq18ysztv__tT0ThPv5HD0IgF_gv-b5HDdnWfkrHD3rHn0UgNxpyfqnHfznWckrjm0UNqGujYknj6vPWndPsKVIZK_gv-b5HDznWT10ZKvgv-b5H00pywW5R9rf6KWThnqPjbkn1T%2526ck%253D8385.1.92.275.162.272.152.282%2526dt%253D16171; wmda_uuid=e13faaebfb24e5386ef33181da325227; wmda_new_uuid=1; wmda_session_id_11187958619315=1617198579309-6c0914e1-1a00-7455; xxzl_deviceid=ZLurIgbPq9%2FLKtDhGc0IZq1Oecr6wE6vJ1rfsUDdzhna9ITIu%2Bhy27lgUwDJsPRz; als=0; new_session=0; wmda_session_id_1731916484865=1617198615740-eccc148e-e0ff-844b; sessionid=3fdeee13-e955-412c-8c7f-88fe6a3f708a; Hm_lvt_5bcc464efd3454091cf2095d3515ea05=1617198627; ppStore_fingerprint=CDFFDFF0EA91221B0477FA43F006BF5AC04959AA79C5CC79%EF%BC%BF1617198646983; gr_user_id=a4e54aab-e21c-430a-8bcd-92354c2fc775; gr_session_id_b4113ecf7096b7d6=0f0fb9f1-0bdc-40da-b5dc-5bc4f0196c53; gr_session_id_b4113ecf7096b7d6_0f0fb9f1-0bdc-40da-b5dc-5bc4f0196c53=true; Hm_lpvt_5bcc464efd3454091cf2095d3515ea05=1617198650; param8616=1; param8716kop=1; wmda_session_id_10104579731767=1617198724492-e5bb4cfb-754b-0173; wmda_visited_projects=%3B11187958619315%3B1731916484865%3B10104579731767; crmvip=""; dk_cookie=""; www58com="UserID=61102883471362&UserName=knox_chan"; 58cooper="userid=61102883471362&username=knox_chan"; 58uname=knox_chan; PPU=UID=61102883471362&UN=knox_chan&TT=293881b192951f83f33070197be9511a&PBODY=KqLGk1dJKVvdwE1lrdwxHKOiPT_zUD4qlTw_S-gjLMRGkCyh_KWn4F1Mx7iZei6ZfwA2Z85wJAh7lrjlGgESWY_iTvFyjmKzwYmUjgRwixBAp2HhaSHfUSTS7WQx5mScPuiEAuE4g2_SrOrywqXJ0eAhnUuLQr2Cg-Qt34H4NMA&VER=1; isSmartSortTipShowed=true; xxzl_smartid=cda414302e7964d2fe70289ff167cde7; ljrzfc=1; JSESSIONID=BECCFB97AC3D01804B657C40C1B69DAF; jl_list_left_banner=2; Hm_lvt_a3013634de7e7a5d307653e15a0584cf=1617198770,1617199011; Hm_lpvt_a3013634de7e7a5d307653e15a0584cf=1617199011; xxzl_cid=2055c1dc067f469a924e18cb56fcfe25; xzuid=706ecda0-579f-47ea-a958-47c43f955db2',
    'referer': 'https://sz.58.com/searchjob/',
    # 'sec-fetch-dest': 'document',
    # 'sec-fetch-mode': 'navigate',
    # 'sec-fetch-site': 'same-origin',
    # 'sec-fetch-user': '?1',
    # 'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
}
response = requests.get(url=f'https://sz.58.com/searchjob/?pts={str(int(time.time() * 1000))}&PGTID=0d302409-0000-4b08-0301-f0e3fdb095e9&ClickID=5', headers=headers).text
result = re.search(r"base64,(.*?)\)",response,flags=re.S).group(1)
b = base64.b64decode(result)

with open('ztku01.woff','wb') as f:
    f.write(b)

fonts = TTFont('ztku01.woff')
fonts.save('ztku01.xml')