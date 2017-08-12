var quiz = [
  ['How many states are in the United States?', 50],
  ['How many legs does an insect have?', 6],
  ['How many continents are there?', 7]
]
var questionsRight= [];
var questionsWrong = [];
var answerRight = 0;
var answerWrong = 0;
var message;

function print(message) {
  document.write(message);
}

for (var i =0; i < quiz.length; i +=1){
  answer = prompt(quiz[i][0]);
  if( answer == quiz[i][1]){
    questionsRight += quiz[i][0];
    answerRight +=1;
  } else{
    questionsWrong += quiz[i][0];
    answerWrong +=1;
  }
}
if(answerRight >= quiz.length){
  message = '<h1>Congrats</h1>' + '<p>You got ' + answerRight + ' questions right.</p>';
} else if( answerRight >= quiz.length - 1){
  message = '<h1>Almost</h1>' + '<p>You got ' + answerRight + ' questions right.</p>';
}else{
  message = '<h1>Better Luck Next Time</h1>' + '<p>You only got ' + answerRight + ' questions right.</p>';
}

print(message);
