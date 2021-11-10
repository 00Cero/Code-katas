console.log("eeee");

function disemvowel(str) {
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  console.log([...str]);
  return [...str].filter(element => !vowels.includes(element)).join('');
}

console.log(disemvowel("This website is for losers LOL!"));

