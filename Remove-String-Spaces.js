console.log("hello");

function noSpace(x){
   return [...x].filter(e => e !== ' ').join('');
}

console.log(noSpace("de     fefjefje   efeefe"));