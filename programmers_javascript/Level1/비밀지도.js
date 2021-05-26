function solution(n, arr1, arr2){
    
    var answer = [];
    var password = [];

    for (let i = 0; i < n; i++) {
        password.push((arr1[i] | arr2[i]).toString(2).padStart(n, 0)); 
    }    
    console.log(password)

    for (let i =0; i < n; i++){
        console.log(password[i])
        let password2 = password[i].replace(/1/g, "#")
        let password3 = password2.replace(/0/g, " ")
        answer.push(password3)
    }
    
    return answer
}

console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]))