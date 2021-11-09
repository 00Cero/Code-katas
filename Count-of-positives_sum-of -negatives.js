console.log("heeeo");

function countPositivesSumNegatives(input) {
    if(input == undefined || input.length === 0) return [];
    let positiveCounter = 0;
    let negativeSum = 0;
    input.forEach(element => element <= 0 ? negativeSum += element: positiveCounter++);
    return [positiveCounter, negativeSum];
}
function countPositivesSumNegatives(input) {
    if(input == undefined || input.length === 0) return [];
    return input.reduce((sum,element)=>{
        if(element > 0) sum[0] += 1;
        else{sum[1] += element;}
        return sum;
    },[0,0]);
}
function countPositivesSumNegatives(input) {
    if(input == undefined || input.length === 0) return [];
    return input.reduce((sum,element)=>{
     element > 0 ? sum[0] += 1: sum[1] += element;
    return sum;
    },[0,0]);
}

// let [positiveCounter, negativeSum] = countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

