console.log("helu");

// 9119 through the function, 811181

function squareDigits(num){
  return Number([...num.toString()].map(num => num**2).join(''));
}

console.log(squareDigits(9119));