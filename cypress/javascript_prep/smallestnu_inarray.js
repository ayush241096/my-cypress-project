const arr = [3, 1, 7, 9, 2, -1]

function findSmallestNumber(arr) {
    let num = Infinity;

    for (let i = 0; i < arr.length; i++) {
        num = Math.min(num, arr[i]);
    }
    return num;
}

console.log(findSmallestNumber(arr))