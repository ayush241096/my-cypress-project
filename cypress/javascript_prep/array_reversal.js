function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements at left and right indices
        [arr[left], arr[right]] = [arr[right], arr[left]];
        
        // Move pointers towards the center
        left++;
        right--;
    }
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
reverseArray(numbers);
console.log("Reversed Array:", numbers);
