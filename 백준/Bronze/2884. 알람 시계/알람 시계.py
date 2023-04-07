(h, m) = (map(int, input().split()))

if m < 45:
    d = 45 - m
    m = 60 - d
    if h == 0:
        h = 23
    else:
        h = h - 1
else:
    m = m - 45
print(h, m)