console.log("juuu");

const myArr = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];

// function findNeedle(haystack) {
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i].toLowerCase() === 'needle') return i;    
//     }
// }

// function findNeedle(haystack) {
//     return haystack.indexOf('needle');
    
// }
function findNeedle(haystack) {
    let index = 0;
    haystack.forEach((e,i) => {
        if(e.toLowerCase() === 'needle') index = i;     
    });
    return index;
}



console.log(findNeedle(myArr));