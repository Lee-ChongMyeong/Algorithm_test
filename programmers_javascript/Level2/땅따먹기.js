function solution(land) {
    var answer = 0;
    var len = land.length;
    console.log(len)
    
    for(var i =len-2; i>=0; i--){
      land[i][0] = Math.max(land[i+1][1], land[i+1][2], land[i+1][3])+land[i][0];
      land[i][1] = Math.max(land[i+1][0], land[i+1][2], land[i+1][3])+land[i][1];
      land[i][2] = Math.max(land[i+1][0], land[i+1][1], land[i+1][3])+land[i][2];
      land[i][3] = Math.max(land[i+1][0], land[i+1][1], land[i+1][2])+land[i][3];
   }
    console.log(land)
   answer = Math.max.apply(null, land[0])
  
   return answer;
  }


console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]));