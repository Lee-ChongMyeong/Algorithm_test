// function solution(d, budget){
    
//     let count = 0;
//     b = d.sort();
//     console.log(b)

//     for(let i =0; i < d.length; i++ ){
//         if ((budget - b.sort()[i]) >= 0){
//             budget -= b.sort()[i]
//             count += 1;
//         }else{
//             break;
//         }  
//     };

//     return count;
// }

function solution(d, budget){

    let count = 0;
    let b = d.sort();

    b.map((number) => {
        if (budget - number >= 0) {
            budget -= number;
            count += 1;
        }
    })
    return count;
}

console.log(solution([2,2,3,3], 10));
console.log(solution([1,3,2,5,4], 9));