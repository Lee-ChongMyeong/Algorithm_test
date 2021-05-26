moves = [1,5,3,5,1,2,1,4]
board = [[0,0,0,0,0],   # 0
         [0,0,1,0,3],   # 1
         [0,2,5,0,1],   # 2
         [4,2,4,4,2],   # 3
         [3,5,1,3,1]]   # 4 

result = [] # 4 3 1 1 3 2 0 4 
total = 0

second_num = 0
# len(board) = 5 
for i in moves:
    print(i-1)  # 0 4 2 4 0 1 0 3 
    second_num = i-1 

    for first_num in range(len(board)):
        if (board[first_num][i-1] != 0):
            print("자판기 : " + str(board[first_num][i-1]))
            result.append(board[first_num][i-1])
            board[first_num][i-1] = 0

            if len(result) >= 2:
                if result[-1] == result[-2]:
                    result.pop()
                    result.pop()
                    total += 2
            break

        elif (board[4][i-1] == 0):
            print("자판기 : 0 " )
            break
        
        
print(result)
print(total)    
    # 0 0 -> 0
    # 1 0 -> 0
    # 2 0 -> 0
    # 3 0 -> 4    --> result

    # 0 4 -> 0
    # 1 4 -> 3



