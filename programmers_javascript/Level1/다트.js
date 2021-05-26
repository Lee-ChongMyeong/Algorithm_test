// function solution(dartResult){

//     let len = dartResult.length
//     let answer = 0;
//     let answerList = [];
//     for (let i = 0; i < len; i++){
//         console.log(dartResult[i])
//         if (dartResult[i] == 'S'){
//             answerList.push(Math.pow(dartResult[i-1], 1))
//             console.log(answerList)
//         }else if (dartResult[i] === 'D'){
//             answerList.push(Math.pow(dartResult[i-1], 2))
//             console.log(answerList) 
//         }else if (dartResult[i] === 'T'){
//             answerList.push(Math.pow(dartResult[i-1], 3))
//             console.log(answerList)
//         }else if (dartResult[i] === '#'){
//             answerList[answerList.length-1]*=-1;
//             console.log(answerList)
//         }else if (dartResult[i] === '*'){
//             answerList[answerList.length-1]*=2;
//             answerList[answerList.length-2]*=2;
//             console.log(answerList)
//         }

//         for(let i =0; i < answerList.length; i++){
//             answer += Number(answerList[i])
//         }
//         return answer;
//     }
// }



function solution(dartResult) {
    var num = 0;
    var temp = 0;
    var answer = [];
    for(var i = 0; i < dartResult.length; i++) {
        if(dartResult[i] >= 0 && dartResult[i] <= 9) {
            if(dartResult[i] == 1 && dartResult[i+1] == 0) {
                temp = 10;
                i++;
            }
            else {
                temp = dartResult[i];
            }
        }
        else if(dartResult[i] === 'S') {
            answer.push(temp);
        }
        else if(dartResult[i] === 'D') {
            answer.push(Math.pow(temp, 2));
        }
        else if(dartResult[i] === 'T'){
            answer.push(Math.pow(temp, 3));
        }
        else if(dartResult[i] == '#') {
           answer[answer.length-1]*=-1;
        }
        else if(dartResult[i] == '*') {
            answer[answer.length-1]*=2;
            answer[answer.length-2]*=2;
        }
    }
    for(var i = 0; i < answer.length; i++) {
        num +=Number(answer[i]);
    }
    return num;
}

console.log(solution('1S2D*3T'))