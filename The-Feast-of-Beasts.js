console.log("beeaast");

function feast(...args) {

   // return /^(.).*(.),\1.*\2$/.test(args);

   /**
    * ^ asserts position at start of the string
      -1st Capturing Group (.)
      . matches any character (except for line terminators)
      . matches any character (except for line terminators)
      * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
      -2nd Capturing Group (.)
      . matches any character (except for line terminators)
      , matches the character , with index 4410 (2C16 or 548) literally (case sensitive)
      \1 matches the same text as most recently matched by the 1st capturing group
      . matches any character (except for line terminators)
      * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
      \2 matches the same text as most recently matched by the 2nd capturing group
      $ asserts position at the end of the string, or before the line terminator right at the end of the string (if any)
    
    */
   return args[1][0] === args[0][0] && args[1][args[1].length -1] === args[0][args[0].length -1];
}

console.log(feast("sossd", "aaaabbbbd"));