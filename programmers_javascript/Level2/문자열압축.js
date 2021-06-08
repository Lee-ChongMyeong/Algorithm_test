//문자열 압축..
function solution(s) {
    //s는 압축할 문자열..
    let length  = s.length;
    let newArr = [];
    //몇개단위로 자를지확인..
    for(let i=0;i<length;i++){
           let pos = i+1; //몇개 단위...
            //단위를 가지고 이제 반복하는 문 작성...
            let result = "";
            let count = 1; //몇번 반복되었는지 기록할 변수..
            for(let j=0; j<length; j=j+pos){
                console.log('j', j)
               let word = s.substring(j, j+pos); //현재 자른 문자열
               let nextword = s.substring(j+pos, j+pos+pos); //다음 잘릴 문자열..
                if(word===nextword){
                    count++; //횟수 추가..
                }
                else 
                {
                    if(count===1){ //한번밖에 반복 되지않으면 앞에 1을 붙이지 않는다.
                        result = result + word;                        
                    }
                    else{
                        result = result+ count + word;
                    }
                    count = 1; //초기화...
                }
           }
            
        newArr.push(result);           
    }
    newArr.sort(function(a,b){
        return a.length - b.length; //길이별로 sort 
    })
    
    return newArr[0].length; //제일 작은 길이 출력...
}

console.log(solution('aabbaccc'))
