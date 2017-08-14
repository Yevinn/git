var message = '';
var student;

function print(messag){
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for(var i = 0; i < students.length; i+=1){
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
  message+= '<p>Track: ' + student.track + '</p>';
  message+= '<p>Achievement: ' + student.achievements + '</p>';
  message+='<p>Scores: ' + student.scores + '</p>';
}
print(message);
