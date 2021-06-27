function solution(s) {

    let afterStr = s.split(' ')
    
    const maxValue = (Math.max.apply(null, afterStr)).toString();
    const minValue = (Math.min.apply(null, afterStr)).toString();

    let result = minValue.concat(" ", maxValue);
    return result
}

console.log(solution("-1 2 -3 4"));