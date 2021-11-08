console.log("hello");

const sheeps = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];


function countSheeps(arrayOfSheep) {
    // return arrayOfSheep.filter((sheep)=> sheep === true).length;   
    // return arrayOfSheep.filter((sheep)=> Boolean(sheep)).length;   
    return arrayOfSheep.filter(Boolean).length;   
}

console.log(countSheeps(sheeps));