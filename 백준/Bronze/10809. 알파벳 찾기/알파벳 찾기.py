S = list(input())
l = [-1]*26
for i in range(len(S)):
    l[ord(S[i])-97] = S.index(S[i])
for i in range(len(l)):
    print(l[i], end=" ")