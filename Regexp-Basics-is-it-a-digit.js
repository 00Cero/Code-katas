console.log("regeeeex");

String.prototype.digit = function(x) {
  return /^\d$/.test(x);
};

console.log(String.prototype.digit('7'.digit()));

