function solution(numbers) {

    var answer = numbers.map((v) => v+'')
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');

    return answer[0]==='0'?'0':answer;    //배열의 모든 값이 0이면 00000.. 이 아닌 그냥 0
}
 
console.log( solution([3, 30, 34, 5, 9]) )

// 예시
const scores= [3, 30, 34, 5, 9];
scores.sort((a, b) => {
    console.log('a: ', a);
    console.log('b: ', b);
    console.log('a-b: ', a-b);
    return a-b;
});

console.log(scores)

// https://velog.io/@jimmyjoo/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EC%A0%95%EB%A0%AC-%EB%A9%94%EC%86%8C%EB%93%9C-sort