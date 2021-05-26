function solution(arr){
    var answer = 0;
    if (arr.length % 2 == 0){
        answer = (arr[arr.length/2-1] + arr[arr.length/2])/2
    }else{
        answer = arr[arr.length/2]
    }
    return answer;
}

arr1 = [1,2,3,4]
console.log(solution([1,2,3,4]))
console.log(arr1.length%2 == 0)