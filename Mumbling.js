console.log("jejeu");

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(s) {
  let newS = s.toUpperCase();
  // console.log(newS);
	let arrLetter = [...newS];
  console.log(arrLetter);
  return arrLetter.map((letter, index) => {
    let newOne = "";
    for (let t = 0; t < index; t++) {
      newOne += letter.toLowerCase();
    }
    return letter + newOne;
  }).join('-');
  
}

let letter1 = "hola";

// console.log(letter1 + "grgrgr");

console.log(accum("abcd"));


// for (let t = 0; t < index; t++) {
//   // console.log("dentro del for");
//   letter += 2;
//   console.log(letter);
// }