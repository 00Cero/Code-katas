console.log("juuue");

function fakeBin(x){
  let arr = [...x];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr[i] = 0;
    }
    if (arr[i] >= 5) {
      arr[i] = 1;
    }
    
  }
  return arr.join('');
}
function fakeBin(x){
  return arr = [...x].map(element => element < 5 ? element = 0: element = 1).join('');
}



console.log(fakeBin('23456789'));
