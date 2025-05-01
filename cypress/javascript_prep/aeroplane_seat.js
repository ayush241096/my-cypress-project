function iswindowseat(seatnumber) {
    
    return (seatnumber % 6 == 1) || (seatnumber % 6 == 0)
};

const totalseat = 15;

for (let seat = 1; seat <= totalseat; seat ++) {
    if (iswindowseat(seat)) {
        console.log("This is Window seart")
    } else {
        console.log("This is not Window seat")
    }
    
}


let str = "Hello";
let c = "o";




function checkForbiddenLetter(str, c) {
    for (let i = 0; i<str.lenght; i++ ) {
        if (str[i] === c) {
          return "Found"
        }
    }
    return "Not Found"
}

console.log(checkForbiddenLetter(str, c))