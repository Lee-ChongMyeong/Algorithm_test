function solution(s)
{
    let arrayList = [];
    for (let i = 0; i < s.length; i++){
        if (s[i] == arrayList[arrayList.length-1]){
            arrayList.pop()
        }else{
            arrayList.push(s[i]);
        }
    }

    if(arrayList.length == 0){
        return 1;
    }else{
        return 0;
    }
    // return stack.length==0 ? 1 : 0;
}

console.log(solution('baabaa'));