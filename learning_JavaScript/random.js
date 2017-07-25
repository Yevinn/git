function getRandomNumber(upper) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}
console.log(getRandomNumber(6));
console.log(getRandomNumber(100));
console.log(getRandomNumber(10000));
console.log(getRandomNumber(2));