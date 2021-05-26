function solution(a, b) {
    var answer = '';
    const date = new Date(`2016,${a},${b}`);
    console.log(date)
    let day= String(date).split(' ');
    console.log(day)
    answer = day[0].toUpperCase();
    return answer;
}


// 1 3 5 7 8 10 12 -> 31
// 2 -> 29
// 4 6 9 11 -> 30 

// 1  2  3  4  5  6  7 
// 8  9  10 11 12 13 14 
// 15 16 17 18 19 20 21
// 22 23 24 25 26 27 28
// 29 30 31 


console.log(solution(5,24));