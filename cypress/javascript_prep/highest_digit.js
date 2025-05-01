let num = 39482;

function findMaxDigit(num) {
    // Convert number to string, split into individual digits, and find the maximum
    return Math.max(...arguments.num.toString().split('').map(Number));
}

console.log(findMaxDigit(num)); // Output: 9




function checkIdenticalSublists(list1, list2) {
    for (let i in list2) {
        if (list1.length == list2.length  && list2[i] == list1[i]) {
          return 'identical'

    } else {
          return 'Not identical'
      } 
            
    }
  }