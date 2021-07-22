# https://www.codewars.com/kata/5583090cbe83f4fd8c000051/

def digitize(n):
    digits = [int(i) for i in list(str(n))]
    digits.reverse()
    return digits

print(digitize(35231))