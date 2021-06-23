
function flat(arr) {
    answer = arr.flat(Infinity);

    return answer
}


console.log(flat( [1, [2, [3, [4, [5, 6], 7], 8], 9], 10] ))