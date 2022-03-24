# -*- coding: utf-8 -*-
# @Time    : 2022/3/8 15:26
# @Author  : knox.chan
# @FileName: get_rsa.py
# @Software: PyCharm
import rsa
from binascii import b2a_hex


def rsa_encrypt_text(key, _text: str):
    """
    RSA加密
    :param key: 公钥的参数
    :param _text: 待加密的明文
    :return: 加密后的数据
    """
    e = int('10001', 16)
    n = int(key, 16)
    pub_key = rsa.PublicKey(e=e, n=n)
    return b2a_hex(rsa.encrypt(_text.encode(), pub_key)).decode()


print(rsa_encrypt_text(
    '00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81',
    '1234'))

{"lang": "zh-cn", "userresponse": "5dd58d58885d853003a", "passtime": 240, "imgload": 160,
 "aa": "l(!l!Iswsvssssstytosystsstsqs(!!(0E912020:11941111120999", "ep": {"v": "7.8.6", "$_BHR": false, "me": true,
                                                                          "tm": {"a": 1646728032192, "b": 1646728032316,
                                                                                 "c": 1646728032317, "d": 0, "e": 0,
                                                                                 "f": 1646728032193, "g": 1646728032193,
                                                                                 "h": 1646728032193, "i": 1646728032193,
                                                                                 "j": 1646728032193, "k": 0,
                                                                                 "l": 1646728032195, "m": 1646728032313,
                                                                                 "n": 1646728032314, "o": 1646728032317,
                                                                                 "p": 1646728032509, "q": 1646728032509,
                                                                                 "r": 1646728032511, "s": 1646728032511,
                                                                                 "t": 1646728032511,
                                                                                 "u": 1646728032511}, "td": -1},
 "fk9t": "1841120131", "rp": "159b154a7c4bee0f14ec3e13358992fb"}
