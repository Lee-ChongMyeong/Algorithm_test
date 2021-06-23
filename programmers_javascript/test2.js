function solution(serialNumbers){

    let listArray = {};
    let listArrayNubmer = [];
    let result = [];
    let statue = 'same';

    for (let i = 0; i < serialNumbers.length; i++){
        listArray[serialNumbers[i]] = serialNumbers[i].length;
    }
    console.log('객체안에 넣어서 정렬', listArray)

    let keysSorted = Object.keys(listArray).sort(function(a,b){return listArray[a]-listArray[b]})
    console.log('요소를 길이순 배열로 정렬', keysSorted); 
    console.log(keysSorted.sort())

    for (let i = 0; i < serialNumbers.length; i++){
        if(serialNumbers[i].length !== listArrayNubmer[listArrayNubmer.length - 1]){
            if(listArrayNubmer[listArrayNubmer.length - 1] == undefined){
                statue='same';
            }else{
                statue = 'different'
            }
        }
        listArrayNubmer.push(serialNumbers[i].length);
    }

    if(statue == 'same'){
        console.log('all same')
        for(let i = 0; i < serialNumbers.length; i++){
            str = serialNumbers[i].replace(/[^0-9]/g,''); // 문자열에서 숫자만 추출
            console.log(str)
        }
    }else{
        console.log('array different');
        for(let i = 0; i < serialNumbers.length; i++){

        }

    }
}

console.log(solution( ["BBBB","CCCC","SSSA","A910","Z321"] ))