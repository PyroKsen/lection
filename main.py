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

x_1 = 0
y_1 = 0
x_2 = -3
y_2 = 2

x1 = int(input())
x2 = int(input())
x3 = int(input())
x4 = int(input())

if (x_2 + 1 == x_1 and y_2 - 2 == y_1) or (x_2 + 2 == x_1 and y_2 - 1 == y_1) or (x_2 - 1 == x_1 and y_2 - 2 == y_1) or (x_2 - 2 == x_1 and y_2 - 1 == y_1) or (x_2 - 2 == x_1 and y_2 + 1 == y_1) or (x_2 - 1 == x_1 and y_2 + 2 == y_1) or (x_2 + 1 == x_1 and y_2 + 2 == y_1) or (x_2 + 2 == x_1 and y_2 + 1 == y_1):
    print(True)
else:
    print(False)
