function getRandomNumber(upper, lower) {
    if ( isNaN(upper) || isNaN(lower) ){
        throw new Error("One of your values is a string not a number");
        }else{
            var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower; 
            return randomNumber;
        }
  
}

console.log(getRandomNumber(53, 3));
console.log(getRandomNumber('nine', 24));
console.log(getRandomNumber(200, 74637));
console.log(getRandomNumber(1000, 20000));
console.log(getRandomNumber(50, 'one-hundred'));
