const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


function eliminateOdds(arr) {
    let num = arr.filter(i => i % 2 ===0);
    return num
}

console.log(eliminateOdds(arr))