// function solution(progresses, speeds) {
//     var answer = [];
//     var RealAnswer = [];
//     count = 0;
//     MaxNumber = 0;
//     MaxCount = 1;

//     for (let i =0; i < progresses.length; i++){
//         for ( let j = progresses[i]; j < 100; j = j + speeds[i]){
//             count += 1
//         }
//         answer.push(count)
//         count = 0
//     }
//     console.log(answer.length)
//     for (let i =0; i < answer.length; i++){
//         if(answer[i] < answer[i+1]){
//             RealAnswer.push(MaxCount);
//             Maxcount = 1;
//         }else if(answer[i] >= answer[i+1]){
//             if(MaxNumber < answer[i]){
//                 MaxNumber = answer[i];
//                 MaxCount += 1;
//             }else if(MaxNumber == answer[i]){
//                 MaxCount += 1;
//             }
//         }
//         if(answer[i] == answer.length){
//             RealAnswer.push(MaxCount)
//         }
//     }
//     console.log(answer)
//     return RealAnswer;
// }


function solution(progresses, speeds) {
    let result = [];
    let doneList = [];
    console.log(progresses.length)    
	// progresses 내 요소가 없어질 때까지
    while(progresses.length > 0){
    	// 현재까지의 구현 단계와 구현 속도를 더한다
        for(let i = 0; i < progresses.length; i++){
            progresses[i] += speeds[i];
        }
        // 맨 앞 작업의 구현 단계가 100 이상이라면
        if(progresses[0] >= 100){
        	// 맨 앞 작업 ~ 마지막 작업까지 구현 단계가 100 이상인 것들을 찾는다
            for(let i = 0; i < progresses.length; i++){
                // 100 이상이라면 doneList에 저장한다
                if(progresses[i] >= 100){
                    doneList.push(progresses[i]);
                // 중간에 구현 단계가 100미만의 작업이 나온다면 break로 탈출한다
                }else{
                    break;
                }
            }
        // result에 몇 개 작업이 완료-배포되었는지 저장하고,
        result.push(doneList.length);
        // doneList, progresses, speeds의 요소들을 앞에서부터 제거한다.
        while(doneList.length > 0){
            progresses.shift();
            speeds.shift();
            doneList.shift();
        }
    }
    }
    
    return result;
}
console.log(solution([95, 90, 99, 99, 80, 99], [1,1,1,1,1,1]))