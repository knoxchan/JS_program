import os
import requests
from fontTools.ttLib import TTFont

# base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
save_woff = './a.woff'
save_xml = './b.xml'

# resp = requests.get(
#     url='https://www.osapublishing.org/captcha/(S(ai5pyemesnzniycybedihodx))/fonts/font_b_21fb3d1d1a91a7e80dff456205f3380b.woff')
# f = open(save_woff, "rb")
font = TTFont('./b.woff')
font.saveXML(save_xml)
