console.log("hello");

const myArr = [34, 15, 88, 2];

function findSmallestInt(args) {
    return args.sort((a,b)=> a - b).shift();
}
 
console.log(findSmallestInt(myArr));

let numero = 12;

console.log(typeof numero.toString());