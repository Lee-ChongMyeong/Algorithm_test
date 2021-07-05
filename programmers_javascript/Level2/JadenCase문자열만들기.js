function solution(s) {
    s = s.toLowerCase()
    console.log(s.split(" "))
    let answer = s.split(" ").map(s => {
        let arr = s.split("")
        console.log
        if(arr[0] != null){
            arr[0] = arr[0].toUpperCase();
        }
        // arr[0] = arr[0].toUpperCase();
        return arr.join(''); 
    }).join(' '); 
    return answer; 
}

console.log(solution("3people unFollowed me"));
