console.log("jelou");

function getMiddle(word)
{
  let arrStr = [...word];
  
  let show = '';

  //si es par quito 2 ej: abcd kito bc 
  if(arrStr.length % 2 === 0){
    
    show = arrStr.slice((arrStr.length/2) -1,(arrStr.length/2) +1).join('');
    
    console.log(show);
  }
  //si es impar quito solo 1 ej: abcde kito c
  if(arrStr.length % 2 !== 0){
    show = arrStr.slice(Math.floor(arrStr.length/2),Math.floor(arrStr.length/2) +1).join('');
  }
  return show;
}
function getMiddle(word)
{
  let arrStr = [...word];
  
 
return arrStr.length % 2 === 0 ? arrStr.slice((arrStr.length/2) -1,(arrStr.length/2) +1).join(''):
arrStr.slice(Math.floor(arrStr.length/2),Math.floor(arrStr.length/2) +1).join('');

  
}

console.log(getMiddle("abcba"));
// console.log(Math.floor(5/2));