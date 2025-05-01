// 1. Find the missing number in an array of consecutive numbers
function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Test case
console.log('Missing Number:', findMissingNumber([1, 2, 4, 5, 6])); // Output: 3

// 2. Check if two strings are anagrams
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const charCount = {};
    
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of str2) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    
    return true;
}

// Test case
console.log('Are Anagrams:', areAnagrams('listen', 'silent')); // Output: true

// 3. Find the first non-repeating character in a string
function firstNonRepeatingChar(str) {
    const charCount = {};
    
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of str) {
        if (charCount[char] === 1) return char;
    }
    
    return null;
}

// Test case
console.log('First Non-Repeating Char:', firstNonRepeatingChar('aabbccd')); // Output: d

// 4. Implement a function to flatten a nested array
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

// Test case
console.log('Flattened Array:', flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]

// 5. Find the longest substring without repeating characters
function longestSubstringWithoutRepeating(str) {
    let longest = '';
    let current = '';
    
    for (let char of str) {
        const index = current.indexOf(char);
        if (index !== -1) {
            current = current.slice(index + 1);
        }
        current += char;
        if (current.length > longest.length) {
            longest = current;
        }
    }
    
    return longest;
}

// Test case
console.log('Longest Substring:', longestSubstringWithoutRepeating('abcabcbb')); // Output: abc

// 6. Implement a function to check if a number is a palindrome
function isPalindrome(num) {
    if (num < 0) return false;
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

// Test case
console.log('Is Palindrome:', isPalindrome(121)); // Output: true

// 7. Find the maximum sum of any contiguous subarray
function maxSubarraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Test case
console.log('Max Subarray Sum:', maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

// 8. Implement a function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Test case
console.log('Merged Arrays:', mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

// 9. Implement a function to find the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Test case
console.log('Factorial:', factorial(5)); // Output: 120

// 10. Implement a function to check if a string is a valid parentheses sequence
function isValidParentheses(str) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of str) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (pairs[last] !== char) return false;
        }
    }
    
    return stack.length === 0;
}

// Test case
console.log('Valid Parentheses:', isValidParentheses('()[]{}')); // Output: true

// 11. Calculate multiplicative persistence of a number
function persistence(num) {
    let count = 0;
    
    // Convert number to string to work with digits
    let currentNum = num.toString();
    
    // Continue until we get a single digit
    while (currentNum.length > 1) {
        // Multiply all digits together
        currentNum = currentNum
            .split('')
            .reduce((product, digit) => product * parseInt(digit), 1)
            .toString();
        count++;
    }
    
    return count;
}

// Test cases
console.log('Multiplicative Persistence (39):', persistence(39)); // Output: 3 (3*9=27, 2*7=14, 1*4=4)
console.log('Multiplicative Persistence (999):', persistence(999)); // Output: 4 (9*9*9=729, 7*2*9=126, 1*2*6=12, 1*2=2)
console.log('Multiplicative Persistence (4):', persistence(4)); // Output: 0 (already single digit)

// 12. String Reversal - Multiple Approaches
const str = 'Ayush';

// Approach 1: Using built-in methods
function reverseString1(str) {
    return str.split('').reverse().join('');
}

// Approach 2: Using for loop
function reverseString2(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Approach 3: Using reduce
function reverseString3(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

// Approach 4: Using recursion
function reverseString4(str) {
    if (str === '') return '';
    return reverseString4(str.substr(1)) + str[0];
}

// Test cases
console.log('String Reversal (Approach 1):', reverseString1(str)); // Output: hsuya
console.log('String Reversal (Approach 2):', reverseString2(str)); // Output: hsuya
console.log('String Reversal (Approach 3):', reverseString3(str)); // Output: hsuya
console.log('String Reversal (Approach 4):', reverseString4(str)); // Output: hsuya

// 13. File Reading with Exception Handling
const fs = require('fs');
const path = require('path');

function readFileWithExceptionHandling(filePath) {
    try {
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        // Read file content
        const content = fs.readFileSync(filePath, 'utf8');
        console.log('File content:');
        console.log(content);
        return content;
    } catch (error) {
        // Handle different types of errors
        if (error.code === 'ENOENT') {
            console.error(`Error: File not found at path: ${filePath}`);
        } else if (error.code === 'EACCES') {
            console.error(`Error: Permission denied to read file: ${filePath}`);
        } else {
            console.error(`Error reading file: ${error.message}`);
        }
        return null;
    }
}

// Test cases
const filePath = path.join(__dirname, 'sample.txt');
const nonExistentFilePath = path.join(__dirname, 'nonexistent.txt');

console.log('\nReading existing file:');
readFileWithExceptionHandling(filePath);

console.log('\nReading non-existent file:');
readFileWithExceptionHandling(nonExistentFilePath); 