let myStr = "12,2,1,dde";

// let myArr = [...myStr];
let str2 = " ";

// console.log(myArr);

// myArr.splice(0,2,' ');

// console.log(myArr);
    
// let newArr = myArr.filter(character=> character !== ",");

// if(newArr.length <=1){
//     return null;
// }
console.log(myStr.split(','));


// console.log(newArr);
    
function array(arr){

    const arrayIn = arr.split(',');

    arrayIn.pop();
    arrayIn.shift();

    return arrayIn.length ? arrayIn.join(' ') : null;
};

console.log(array(myStr));