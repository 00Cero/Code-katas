console.log("heeeo");


//  [1,2,3,4,6,7,8]
//[6,7,8,9,10,11,12,13,14]
//[-2,-1,0,1,2,4,5,6]

function firstNonConsecutive (arr) {
    for (let index = 0; index < arr.length; index++) {
        
        if(index + 1 === arr.length) return null;
        if(arr[index] + 1 !== arr[index + 1]) return arr[index + 1];
        
        // console.log("dentro del for");
    }
    return null;
}
console.log(firstNonConsecutive([1,2,3,4,6,7,8]));

