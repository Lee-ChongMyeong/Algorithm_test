function solution(scoville, k){

    let scovilleSort = scoville.sort((a,b) => a-b)
    console.log(scovilleSort, scovilleSort[0])
    var count = 0;

    while(scovilleSort[0] > k){
        count += 1;
        let firstN = scovilleSort.shift();
        let secondN = scovilleSort.shift();
        console.log(firstN. secondN)
        let newNumber = (firstN + secondN * 2);
        console.log(newNumber)
        scovilleSort.push(newNumber)
    }
    console.log(scovilleSort)

}

console.log(solution([1,2, 12, 10, 9], 7))