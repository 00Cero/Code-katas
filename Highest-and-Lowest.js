console.log("helou");

//"8 3 -5 42 -1 0 0 -9 4 7 4 -4"

function highAndLow(numbers){
 let numbersOff = numbers.split(' ').sort((a,b)=> b - a);
 if (numbersOff.length <=1) return numbers + ' ' + numbers;
 console.log(numbersOff);
  let done = numbersOff.splice(1,numbersOff.length - 2);
  console.log(numbersOff);
  return numbersOff.join(' ');
 console.log(done);
 
}
// function highAndLow(numbers){
//  return (numbers.split(' ').sort((a,b)=> b - a).splice(1,numbers.length - 2)).join(' ');
 
// }

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// let blabla = ["-5", "-4", "-1", "0", "0", "3", "4", "4", "7", "8", "42"];

// console.log(blabla.slice(1, blabla.length - 1));