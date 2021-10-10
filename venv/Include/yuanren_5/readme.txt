解题思路

题目提示 cookie有效时间只有50s 所以cookie 中一定包含着关于时间的参数 是动态的


多次请求参数比对：
cookie: Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1629532319,1629811529,1630747852; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1633840620; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1633840620; m=52c108a821a0c1f050ca3311e093474e; RM4hZBv0dDon443M=96H+borty+T80wcYF5bFqoukBhvf0vEdKKGnvFC5CgzmlichW88K7vRqaYejOVSCoVVP6CsNy4w+REQ+Z+WzbvtaT16vRBQ4G0sWbgRuNsr+o5eFeauZjr5ugX9CKKVvKYKFYEblNm8pD4ZSm2Awb0RsnkgR2DyloKf2vJeiPoWfN+CpZeoTomhcbygs1jCAiI6ll30psACvPki3niNBvpKiXqLsmH93pKdWcVxLsAw=

cookie: Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1629532319,1629811529,1630747852; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1633840620; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1633840653; m=85d4e4b8c503f6cf72867e8fb142dba7; RM4hZBv0dDon443M=/UJ3coBVT6297cQLBNraIurn4/bzDuR+IjfE9vaHjXumFf+wV9emE9UqyeKbdD1CjLHTqCcKbriohkakE+UkOOwwt4N85Mw8GRkpGjd2htr7vmdiWZX8FtEY6mqTpEvyQ7lE4s3Dr/qlhnSea+8ZySaV1vPQtdRLjuCFw52HxU8An9318GuuAa3Vb2OjJLK/TjMBnDu6XyBys0f0ESVxVOUHFte9XWNxgffIPHBHPVg=

m: 1633840653079
f: 1633840652000

m: 1633840850912
f: 1633840850000

cookie:
m=85d4e4b8c503f6cf72867e8fb142dba7;
RM4hZBv0dDon443M=/UJ3coBVT6297cQLBNraIurn4/bzDuR+IjfE9vaHjXumFf+wV9emE9UqyeKbdD1CjLHTqCcKbriohkakE+UkOOwwt4N85Mw8GRkpGjd2htr7vmdiWZX8FtEY6mqTpEvyQ7lE4s3Dr/qlhnSea+8ZySaV1vPQtdRLjuCFw52HxU8An9318GuuAa3Vb2OjJLK/TjMBnDu6XyBys0f0ESVxVOUHFte9XWNxgffIPHBHPVg=

需要破解部分是请求参数中的 m f cookie 中的 m RM4hZBv0dDon443M


破解思路：
推测：请求参数中的m f 是与毫秒级时间戳有关系 1633840850000 == 2021-10-10 12:40:50

1.m f 参数名字过于常见 所以从 RM4hZBv0dDon443M入手
    RM4hZBv0dDon443M 搜索结果为空 可能是通过一些手段将参数隐藏起来了
    使用hook 定位 cookie 中 RM4hZBv0dDon443M 生成的位置
    发现RM4hZBv0dDon443M 最终是由 _0x4e96b4['_$ss'] 定义的
    * _0x4e96b4(window)
    搜索_$ss 没有结果 推测和RM4hZBv0dDon443M 一样 通过一些手段隐藏起来了
    使用hook 定位window 中 _$ss 生成的位置
    * 一些手段 == 通过_$UH数组对字符做出映射 所以无法直接搜索
    扒下一些 _$ss生成位置的代码 发现是 使用AES编码 处理了一些_$UH数组的映射之后
    出现了 window的两个不知名参数 _$qF _$pr
    _$pr 长度为5的array
    _$qF 长度为4的wordarray

    在研究pr push操作的时候 发现了cookie 中m的生成位置

    暂时停止 pr参数研究 优先解析m的数据生成

    cookie-m 逆向就硬抄，但是有个坑在于 $_zw数组其实不是固定的 有几个位置会变化 01234 23 24
    推测1：23 24 发现和时间戳有关系 可能cookie 50s有关系
    推测2：$_zw 其他位置没有很大关系 只需要注意23 24 时间需要特别定义 不能写死，才可以突破cookie 50s限制
    作为参考 23：1633879662000 24 1633879663000 比 24 = 23 + 1000
    $_zw 的参数不怎么使用 使用在 一直是false
    if ($_qp[$_qp['$_zw'][0x9](_$UH[0x2d5]['str'] + '[\x27$_zw\x27][25][23]')][_$UH[0x43]] === 'http:')
    所以建议直接抄 修改23 24 位置 时间和 wa保持一直即可

    好像还有有问题 应该是全部都抄下来了
    和23 24 没有关系 修改了23 24 也没有区别
    明天更换不一样的$_zw 检查是不是$_zw导致的结果错误





