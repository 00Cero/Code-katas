console.log("heeee");

function getAverage(marks){
  let sum = 0;
  marks.forEach(element => {
    sum += element;
  });
  return Math.floor(sum/marks.length);
}
function getAverage(marks){
  
  return marks.reduce((sum,element) => {
    console.log(sum);
    return Math.floor((sum + element)/2);
  });
  
}

console.log(getAverage([1,2,3,4,5]));