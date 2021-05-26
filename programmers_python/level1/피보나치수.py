def solution(n):
    total = []
    for i in range(0, n+1):
        if i == 0:
            total.append(0)
        elif i == 1:
            total.append(1)
        else:
            total.append(total[i - 2] + total[i - 1])

    print( total [n] % 1234567 )

solution(5)
