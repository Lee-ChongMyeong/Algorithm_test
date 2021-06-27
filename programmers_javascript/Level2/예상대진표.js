function solution(n,a,b){
    let answer = 0;
    let numA = a;
    let numB = b;
    
  	while(numA!=numB){
      numA = Math.ceil(numA /2);
      numB = Math.ceil(numB /2);
      answer += 1;
  }

  //  1,2  3,4  5,6  7,8 
  //  1    2    3    4 
  //  1         2 
  
  return answer
}

console.log(solution(8,4,7))