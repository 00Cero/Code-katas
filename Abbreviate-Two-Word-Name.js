console.log("heee");


// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

  return name.split(' ').map(element=> element.slice(0,1)).join('.').toUpperCase();

}

console.log(abbrevName("patrick feeney"));

