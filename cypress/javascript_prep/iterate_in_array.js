const arr = [2, 4, 6, 7, 9, 10];
const num = 7;

function calculateSum(arr, num) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {  // Loop through all elements
        if (arr[i] > num) {  // Check if element is greater than num
            sum += arr[i];  // Add the element to sum
        }
    }
    return sum; // Return the computed sum
}

console.log(calculateSum(arr, num)); // Calling the function and printing the result
