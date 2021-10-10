import time

a = time.time()

num = 0

while num < 10000:
    num = num + 1
    print(num)

print('有"print"时的耗时：%f' % (time.time() - a))

b = time.time()

num = 0

while num < 10000:
    num = num + 1
    if not num % 100:
        print(num)
        num = num

print('没有"print"时的耗时：%f' % (time.time() - b))
