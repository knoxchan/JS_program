import os
import requests
from fontTools.ttLib import TTFont

# base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
save_woff = './1.woff'
save_xml = './1.xml'

with open(save_woff, "wb") as f:
    font = TTFont(save_woff)
    font.saveXML(save_xml)
