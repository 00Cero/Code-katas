console.log("heey");

function betterThanAverage(classPoints, yourPoints) {
    console.log((classPoints.reduce((sum,element)=> (sum + element))/classPoints.length));
    return yourPoints > (classPoints.reduce((sum,element)=> (sum + element))/classPoints.length);
  }

  console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));
  