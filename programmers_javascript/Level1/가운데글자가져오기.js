function solution(s) {
    var answer = '';
    // substr ( 시작인덱스, 내가 꺼내고 싶은 갯수)
    if (s.length % 2 == 0){ // 짝수
        answer = s.substr((s.length/2)-1 ,2)
    }else{ // 홀수  
        answer = s.substr(((s.length-1)/2) ,1)
    }                  
    return answer;
}


console.log(solution('abcde'))
console.log(solution('qwer'))