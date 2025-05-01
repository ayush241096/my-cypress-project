// Simple file reading program for beginners

// Step 1: Import the required modules
const fs = require('fs');

// Step 2: Define the file path
const filePath = 'sample.txt';

// Step 3: Create a function to read the file
function readFile() {
    try {
        // Try to read the file
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        // If successful, print the content
        console.log('File content:');
        console.log(fileContent);
    } catch (error) {
        // If there's an error, show a simple message
        console.log('Oops! Something went wrong:');
        console.log('The file might not exist or you might not have permission to read it.');
    }
}

// Step 4: Call the function to read the file
console.log('Starting to read the file...');
readFile();
console.log('Program finished!'); 