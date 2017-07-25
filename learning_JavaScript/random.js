function getRandomNumber(upper, lower) {
  var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower; 
    console.log(upper, lower);
  return randomNumber;
}

console.log(getRandomNumber(53, 3));
