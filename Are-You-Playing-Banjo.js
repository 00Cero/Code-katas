console.log("banjooo");

function areYouPlayingBanjo(name) {
   let variable = "r";
   let regex = new RegExp(`^${variable}`, 'i');
   return regex.test(name) ? `${name} plays banjo` : `${name} does not play banjo`;
   
}

 console.log(areYouPlayingBanjo('Bober'));