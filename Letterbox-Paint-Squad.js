console.log("hiii");


var paintLetterboxes = function(start, end) {
  let arrNumbers = [];
  for (let index = 0; index <= end - start; index++) {
    arrNumbers.push(start + index);
    
  }
  console.log(arrNumbers.join(''));
  let myArr = [...arrNumbers.join('')];
  console.log(myArr);
  let showArr = [0,0,0,0,0,0,0,0,0,0];
  // let showArr = [0,0,0,0,0,0,0,0,0,0];
  myArr.forEach(element => {
    for (let t = 0; t < 10 ; t++) {
      // console.log(element);
      // console.log(t);
      if(t === Number(element)) {
        // console.log("dentro del if");
        showArr[t] += 1;
      };
      // console.log(showArr);
      
    }
  });
  // console.log(showArr);
  return showArr;
}

console.log(paintLetterboxes(125,132));
