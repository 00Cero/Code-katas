console.log("reeeeg");

function getNumberFromString(s) {
  let numbers = s.replace(/[a-z]\:/gi, '');
  console.log(numbers);
  return numbers;
}

console.log(getNumberFromString('this is number: 7'));