console.log("hello");

function DNAtoRNA(dna) {
    return [...dna].map(letter => {
        if(letter === "T"){letter = "U"};
        return letter;
    }).join('');
}

/****************RegEx***************/
function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U");
}


  console.log(DNAtoRNA("GCAT"));

  