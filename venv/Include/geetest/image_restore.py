# -*- coding: utf-8 -*-
# @Time    : 2022/3/4 16:08
# @Author  : knox.chan
# @FileName: image_restore.py
# @Software: PyCharm

import PIL
from PIL import Image, ImageDraw


def img_restore(path):
    origin_image = Image.open(path)
    # tiled_image = Image.new(mode='RGB', size=(origin_image.size[0] * 2, origin_image.size[1] // 2))
    origin_size = origin_image.size
    new_image = Image.new(mode='RGB', size=(260, 160))
    image_restore = [39, 38, 48, 49, 41, 40, 46, 47, 35, 34, 50, 51, 33, 32, 28, 29, 27,
                     26, 36, 37, 31, 30, 44, 45, 43, 42, 12, 13, 23, 22, 14, 15, 21, 20, 8, 9, 25, 24, 6, 7, 3, 2, 0, 1,
                     11, 10, 4, 5, 19, 18, 16, 17]
    # image_restore = [12]

    # restore_size = 52
    restore_size = len(image_restore)
    for num, index in enumerate(image_restore):
        if index < 26:
            left = index * 12
            upper = 0
        else:
            left = (index - 26) * 12
            upper = origin_size[1] // 2
        left += 1
        right = left + 10
        down = upper + origin_size[1] // 2

        _ = (left, upper, right, down)
        # print(_, index)

        if num < restore_size / 2:
            _left = num * 12
            _upper = 0
        else:
            _left = (num - 26) * 12
            _upper = origin_size[1] // 2
        _left -= (num % 26 * 2)
        _right = _left + 10
        _down = _upper + origin_size[1] // 2

        _2 = (_left, _upper, _right, _down)

        new_image.paste(origin_image.crop(_), _2)
    # origin_image.show()
    # new_image.show()
    # print(new_image.size)
    return new_image


def get_slider_offset_method3(pic_path, cut_pic_path, threshold=60):
    """比较两张图片的像素点RGB的绝对值是否小于阈值60,如果在阈值内则相同,反之不同"""
    pic_img = img_restore(pic_path)
    cut_img = img_restore(cut_pic_path)
    width, height = pic_img.size
    for x in range(40, width - 40):  # 从左往右
        for y in range(5, height - 10):  # 从上往下
            pixel1 = pic_img.load()[x, y]
            pixel2 = cut_img.load()[x, y]
            if abs(pixel1[0] - pixel2[0]) < threshold and abs(pixel1[1] - pixel2[1]) < threshold and abs(
                    pixel1[2] - pixel2[2]) < threshold:
                continue
            else:
                ImageDraw.ImageDraw(cut_img).rectangle([(x-10, y-10), (x + 52, y + 50)], outline='red')
                cut_img.show()
                return x - 6


# print(get_slider_offset_method3('./fbg.jpg', './bg.jpg'))
# print(151)