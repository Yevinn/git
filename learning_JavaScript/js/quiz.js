var quiz = [
  ['How many states are in the United States?', 50],
  ['How many legs does an insect have?', 6],
  ['How many continents are there?', 7]
]
var questionsRight= [];
var questionsWrong = [];
var answerRight = 0;
var answerWrong = 0;
var html;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
function buildList( arr ){
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i+=1){
      listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}

for (var i =0; i < quiz.length; i +=1){
  answer = parseInt(prompt(quiz[i][0]));
  if( answer === quiz[i][1]){
    questionsRight.push(quiz[i][0]);
    answerRight +=1;
  } else{
    questionsWrong.push(quiz[i][0]);
    answerWrong +=1;
  }
}

html = 'You got ' + answerRight + ' question(s) right.';
html += '<h2>You go these questions correct:</h2>';
html+= buildList(questionsRight);
html+='<h2>You go these questions wrong:</h2>';
html+= buildList(questionsWrong);

print(html);
