# -*- coding: utf-8 -*-
# @Time    : 2021/8/9 15:46
# @Author  : knox.chan
# @FileName: img_download_1.py
# @ProjectName: InstagramScrap
# @Software: PyCharm

import requests
from pymongo import MongoClient
import os
from time import sleep
from urllib.request import urlretrieve
from pymongo import ASCENDING

sess = requests.session()

client = MongoClient('mongodb://127.0.0.1:27017')
db = client['instagram']

user_content = db.post_content


def img_download(img_list, img_id):
    path = f'd:/crawl_download/instagram/content/img/{img_id}'
    os.makedirs(path, exist_ok=True)
    imgs = []
    for num, url in enumerate(img_list):
        img_path = path + f'/{img_id}_{num}.jpg'
        try:
            urlretrieve(url, img_path)
            print(img_path,'文件下载完成')
            imgs.append({'id': f'{img_id}_{num}.jpg', 'url': url, 'path': img_path})
        except:
            imgs.append({'id': 'error', 'url': url, 'path': 'error'})
    return imgs

# urlretrieve(video_url, path)


while 1:
    content = user_content.find_one({"data.image_info": {'$type': 2}}, sort=[("crawl_time", ASCENDING)], skip=30)
    if content:
        if content['data']['image_info']:
            url = content['data']['image_info']
            id = content['data']['content_id']
            image_info = img_download(url, id)
            # user_content.update_one({'data.content_id': id}, {'$set': {"data.image_info": image_info}}, False)
        else:
            print('搜索有问题', content['content_id'])
    else:
        print('开始休眠')
        sleep(600)
        print('休眠结束')
