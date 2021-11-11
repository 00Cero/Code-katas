console.log("heee");

function lovefunc(flower1, flower2){
    console.log(flower1 % 2 !== 0);
    console.log(flower2 % 2 === 0);
    if (flower1 % 2 !== 0 && flower2 % 2 === 0 || flower2 % 2 !== 0 && flower1 % 2 === 0) {
        return true; 
    }
    return false;
  }
function lovefunc(flower1, flower2){
    return flower1 % 2 !== 0 && flower2 % 2 === 0 || flower2 % 2 !== 0 && flower1 % 2 === 0;
}
  console.log(lovefunc(2,1));