function solution(nums){
    
    const set = Array.from(new Set(nums)); 
    if (set.length <= (nums.length)/2) {
        return set.length
    }else if (set.length > (nums.length)/2 ){
        return (nums.length)/2
    }
}

// 1 2 3 
console.log(solution([1,1,2,2,3,3,3,3]))
console.log(solution([3,1,2,3]))