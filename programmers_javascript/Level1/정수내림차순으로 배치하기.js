function solution(n){
    let n2 = String(n).split('')   
    let n3 = n2.sort().reverse().join("")
    return parseInt(n3);
}

console.log(solution(118372))