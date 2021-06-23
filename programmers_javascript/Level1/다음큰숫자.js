function solution(n) {
    const totalOne = (n.toString(2)).match(/1/g).length;
    console.log('totalOne', totalOne);
    while(1){
        if(((++n).toString(2)).match(/1/g).length == totalOne){
            return n;
        }
    }
}

console.log(solution(78));
