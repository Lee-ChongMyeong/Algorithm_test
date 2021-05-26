C = int(input())

for i in range(C):
    score = list(map(int, input().split()))
    cnt =0
    if score[0] == len(score)-1:
        aver = (sum(score)-score[0]) / score[0]
    
    for j in range(1,len(score)):
        if aver < score[j]:
            cnt +=1
    print('%0.3f%%'%((cnt/score[0])*100))

