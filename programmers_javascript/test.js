function solution(texts){

    const lengthArray = [];
    const result = [];

    for (let i = 0; i < texts.length; i++){
        lengthArray.push(texts[i].length);
    }

    const Maxlength = Math.max.apply(null, lengthArray)
    console.log(Maxlength);

    for (let i = 0; i < texts.length; i++){
        if (texts[i].length !== Maxlength){
            result.push(texts[i].padStart(Maxlength));
        }else{
            result.push(texts[i]);
        }
    }
    console.log(result)

}

console.log(solution(["AAA","BBBBB","CCC"]))