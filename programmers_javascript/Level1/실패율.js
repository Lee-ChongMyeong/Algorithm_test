function solution(N, stages) {

    let answer = [];
    let failRate = [];
    let number = stages.length;

    for (let i =1 ; i<= N; i++){
        let b = stages.filter((item) => {
            return item == i 
        })
        answer.push(b.length)
    }

    for (let i = 0; i < N; i++){
        if (i == 0 ){
            var c = answer[i] / number
        }else{
            var c = answer[i] / (number -= answer[i-1])
        }
        failRate.push([i+1, c])
    }
    failRate.sort((a,b) => b[1] - a[1]);
    return failRate.map((value) =>value[0])
}

console.log(solution(5, [2,1,2,6,2,4,3,3]));
console.log(solution(4, [4,4,4,4,4]))