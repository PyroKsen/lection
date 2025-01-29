import math
# n = int(input('сколько см ползёт вверх: '))
# m = int(input('сколько см cползает вниз: '))
# y = int(input('сколько см vetka: '))
# form = y - n
# if (n <= m) or (n < 0) or (m < -1) or (y < 0):
#     print('uvi(')
# elif form <= n:
#     print(1)
# else:
#     print(form//(n-m)+1)

# i = 0
# while i <= 4:
#     print(i)
#     i += 1

# text = 'HEllo, nnn!'
# arr = [10, 2, 3, 67, 21]
# for i in text:
#     print(i)

# x_1 = 1
# y_1 = 1
# x_2 = 2
# y_2 = 2

# xy_1 = x_1 + y_1
# xy_2 = x_2 + y_2

# if (xy_1%2 == xy_2%2):
#     print(True)
# else:
#     print(False)

# * 2 * 2 *
# 2 * * * 2
# * * 1 * *
# 2 * * * 2
# * 2 * 2 *

# x_1 = 0
# y_1 = 0
# x_2 = -3
# y_2 = 2

# dx = abs(x_2 - x_1)
# dy = abs(y_2 - y_1)

# if (dx == 2 and dy == 1) or (dx == 1 and dy == 2):
#     print(True)
# else:
#     print(False)

# x_1 = 8
# x_2 = 2
# k = 13
# s = x_1 * x_2

# if ((k%x_1 == 0 or k%x_2 == 0) and s >= k):
#     print(True)
# else:
#     print(False)

'''
x_1 = 10 #длинна (должна быть больше ширины)
x_2 = 5 #ширина
x_1l = 4 #до длинного
x_2sh = 5 #до широкого
dbs = 0 #до ближайшего широкого
dbl = 0 #до ближайшего длинного
if (x_2 - x_1l < x_1l):
    dbs = x_2 - x_1l
else:
    dbs = x_2sh
if (x_1 - x_2sh < x_2sh):
    dbl = x_1 - x_2sh
else:
    dbl = x_1l
if (dbs > dbl):
    print(dbl)
else:
    print(dbs)
'''
# r = 10
# v = 1
# b = 7
# d = 1
# print(1)
# for i in range(2, b):
#     v = 10*v
#     d = d + i*v
#     d_as_str = str(d)
#     r_d = d_as_str[::-1]
#     n_d = int(r_d)
#     print(n_d)
# new_d = str(n_d)
# ddd = new_d[:-1]
# while (b > 1):
#     print(ddd)
#     ddd = ddd[:-1]
#     b -= 1


lst = [2, 3, 4, 4, 5, 6, 7, 8]
print(lst)
print(lst[2])
print(lst[-2])
print(lst[0:4])
print(lst[0:5])
print(lst[0:7:2])
print(lst[1:7:2])
print(lst[7:0:-1])
print(lst[7:0:-2])
print(8)
