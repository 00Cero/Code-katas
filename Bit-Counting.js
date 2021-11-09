console.log("hiii");

var countBits = function(n) {
    let numBinary = (n>>>0).toString(2);
    let sum = 0;
    if(numBinary.length >= 28) sum = 1;
    for (let i = 0; i < numBinary.length; i++){
        if(numBinary[i] == 1) sum += 1;
    }
    return sum;
};

console.log(countBits(8742208808));