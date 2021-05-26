arr = [1,5,4,7,9]

if len(arr) == 1:
    print(arr);
else:
    arr.sort(reverse=True)
    arr.pop()
    print(arr)
