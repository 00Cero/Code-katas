console.log("jeeeu");


//[2, 2, 3], [5, 4, 1]

function findDifference(a, b) {
  console.log(a.reduce((sum,number)=> sum + number));
  console.log(b.reduce((sum,number)=> sum + number));
  return b.reduce((sum,number)=> sum + number) - a.reduce((sum,number)=> sum * number);
}

console.log(findDifference([2, 2, 3], [5, 4, 1]));


