function solution(n) {
    var answer = 0;
    var dp = Array(n).fill(0)
    console.log(dp)
    dp[0] = 1
    dp[1] = 2
    // dp[2] = 3
    // dp[3] = 5
    // dp[4] = 8 
    
    for(var i=2; i<n; i++){
        var a = dp[i-1] + dp[i-2]
        dp[i] = a %  1000000007
    }
    console.log(dp)
    return dp[n-1];
}
console.log(solution(4))