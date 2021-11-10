console.log("heee");

function digitize(n) {
    return Array.from(String(n),Number).reverse();
    return Array.from(String(n),(e)=> e + "a").reverse();
}

/*el Array.from coge el elemento a iterar en este caso String(n) y antes de meterlo dentro del array
le aplica la funcion que le pasamos despues, que en este caso es Number */
console.log(digitize(12345));