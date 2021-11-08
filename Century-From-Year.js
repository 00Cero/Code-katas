console.log("hello");


// function century(year) {
    
//     const strYear = String(year);

//     if (strYear.length <=2 ) return 1;
//     let sum = 0;
//     let yearArr = strYear.split('');
    
//     if (yearArr.length <= 3) {
//         sum = yearArr[0];
//         if (yearArr[1] + yearArr[2] > 0) {
//             sum++;
//         }
//     };
//     if (yearArr.length > 3) {
//         sum = `${yearArr[0]}${yearArr[1]}`;

//         if (yearArr[2] + yearArr[3] > 0) {
//             sum++;
//         }
//     };

//     return Number(sum);
// }


function century(year){
    
    const strYear = String(year);
    if(strYear.length <= 2) return 1;

    const lastTwo = strYear.slice(-2);
    const arrYear = [...strYear];

    arrYear.splice(-2);

    let numShow = Number(arrYear.join(''));

    if (lastTwo > 0) numShow++;  

    return numShow;
}

function century(year){
    return Math.ceil(year/100);
}


console.log(century(23001));



