function solution(lottos, win_nums) {
    // 6 -> 0, 1개
    // 5 -> 2개
    // 4 -> 3개
    // 3 -> 4개
    // 2 -> 5개 
    // 1 -> 6개

    let zeroCount = lottos.filter(element => 0 === element).length;
    console.log(zeroCount);

    let sameNumber = lottos.filter(it => win_nums.includes(it));
    console.log(sameNumber);

    let lowPrize;
    let numberCount = sameNumber.length
    console.log('numbercount', numberCount)



    if (numberCount == 0 || numberCount == 1 ){
        lowPrize = 6
    }else if (numberCount == 2){
        lowPrize = 5
    }else if (numberCount == 3){
        lowPrize = 4 
    }else if (numberCount == 4){
        lowPrize = 3
    }else if (numberCount == 5){
        lowPrize = 2
    }else if (numberCount == 6){
        lowPrize = 1
    }

    console.log('lowPrize', lowPrize)

    highPrizeCount = numberCount + zeroCount

    if (highPrizeCount == 0 || highPrizeCount == 1 ){
        highPrize = 6
    }else if (highPrizeCount == 2){
        highPrize = 5
    }else if (highPrizeCount == 3){
        highPrize = 4 
    }else if (highPrizeCount == 4){
        highPrize = 3
    }else if (highPrizeCount == 5){
        highPrize = 2
    }else if (highPrizeCount == 6){
        highPrize = 1
    }

    result = [lowPrize, highPrize]

    return result
}   

console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35] ))
