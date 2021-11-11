console.log("jeeeu");

function countBy(x, n) {
    let z = [];
    let numPush = 0;
    for (let index = 0; index < n; index++) {
        numPush += x;
        z.push(numPush);
    }
    return z;
  }

  console.log(countBy(2,10));