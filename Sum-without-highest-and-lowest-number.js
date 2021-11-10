console.log("eeey");

function sumArray(array) {
  if(array.length <= 1) return 0;
  return array.sort((a,b) => a - b).slice(1,-1).reduce((sum,element)=> sum + element);
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]));

