import execjs
import time
import requests

# 1 实例化node对象
node = execjs.get()

# 2 编译JS文件
ctx = node.compile(open('./t.js', encoding='GB18030').read())

uid = '3702804938514856'
functionName = f"getSign({uid})"
print(functionName)
result = ctx.eval(functionName)
print(result)
exit()
import json

print(json.loads(result))

# a = 'yĹg,(lfi~ah`{mv,-n|jqewVxp{rvmmx,&effkx[!cs\"l\".Pq%widthl\"@q&heightl\"vr*getContextx$\"2d[!cs#l#,*;?|u.|uc{uq$fontl#vr(fillTextx$$龘ฑภ경2<[#c}l#2q*shadowBlurl#1q-shadowOffsetXl#$$limeq+shadowColorl#vr#arcx88802[%c}l#vr&strokex[ c}l\"v,)}eOmyoZB]mx[ cs!0s$l$Pb<k7l l!r&lengthb%^l$1+s$j\u0002l  s#i$1ek1s$gr#tack4)zgr#tac$! +0o![#cj?o ]!l$b%s\"o ]!l\"l$b*b^0d#>>>s!0s%yA0s\"l\"l!r&lengthb<k+l\"^l\"1+s\"j\u0005l  s&l&z0l!$ +[\"cs'(0l#i'1ps9wxb&s() &{s)/s(gr&Stringr,fromCharCodes)0s*yWl ._b&s o!])l l Jb<k$.aj;l .Tb<k$.gj/l .^b<k&i\"-4j!\u001f+& s+yPo!]+s!l!l Hd>&l!l Bd>&+l!l <d>&+l!l 6d>&+l!l &+ s,y=o!o!]/q\"13o!l q\"10o!],l 2d>& s.{s-yMo!o!]0q\"13o!]*Ld<l 4d#>>>b|s!o!l q\"10o!],l!& s/yIo!o!].q\"13o!],o!]*Jd<l 6d#>>>b|&o!]+l &+ s0l-l!&l-l!i'1z141z4b/@d<l\"b|&+l-l(l!b^&+l-l&zl'g,)gk}ejo{cm,)|yn~Lij~em[\"cl$b%@d<l&zl'l $ +[\"cl$b%b|&+l-l%8d<@b|l!b^&+ '
