console.log("helo");


const myArr = [1,2,2];

function squareSum(numbers){
    let sum = 0;
   numbers.forEach(element => {
       sum += element**2; 
   });
   return sum;
}

function squareSum(numbers){
    
   return numbers.reduce((acumulator,element) => acumulator += element**2 ,0);
   
}

console.log(squareSum(myArr));


// function squareSum(numbers){
//     numbers.reduce((acumulator,number)=>{
//         return acumulator ** 2 + number;
//     });
// }