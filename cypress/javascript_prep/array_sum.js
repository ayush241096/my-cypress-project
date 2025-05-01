function calculateSum(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5]; // Sample input array
console.log("Sum of elements:", calculateSum(numbers));
