function solution(numbers, hand){
    phone = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    result = [];
    left = [];
    right = [];
    for (let i = 0; i < numbers.length; i++){
        if ([1,4,7].includes(numbers[i])){
            result.push('L')
            left.push(numbers[i]);
        }
        else if ([3,6,9].includes(numbers[i])){
            result.push('R')
            right.push(numbers[i])
        }else{
            console.log(phone[left.pop()], phone[right.pop()])
        }
        console.log(result)
    }
    return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
                   // L  R  L  ?  ?  ?  L  L  ?  R  ? 