function solution(nums) {
    
    let sum = []
    let remain = []
    let answer = []
    for (let i =0; i < nums.length; i ++ ){
        for (let j =(i+1); j < nums.length ; j++ ){
            for ( let k = (j+1); k < nums.length; k++ ){
                let total = nums[i] + nums[j] + nums[k];
                sum.push(total) 
            }
        }
    }
    for ( let i = 0; i < sum.length; i++ ) {
        for ( let j = 1; j <= sum[i]; j++ ) {
            if ( sum[i] % j == 0 ){
                remain.push(j)
            }
        }
        if (remain.length == 2){
            answer.push(sum[i])
            remain = []
        }else{
            remain = []
        }
    }
    return answer.length
}
