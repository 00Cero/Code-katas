// console.log("jiiiu");

// function sumMix(x){
//     return x.reduce((sum,number)=>{
        
//         return sum + parseFloat(number);
        
//     },0);
//   }

//   console.log(sumMix([9, 3, '7', '3']));

  var countSheep = function (num){
    let strShow = '';

    for(i = 1; i <= num ; i++){
     strShow += `${i} sheep...`;
      
    };
    return strShow;
  }

  
  countSheep=n=>{
      let algo = [];
      algo = [...Array(n).keys()];

      console.log(algo);
      algo.map(x=>`${x+1} sheep...`)
      .join``}

  console.log(countSheep(3));

  console.log([...Array().keys()]);