var message = '';
var student;
var search;
function print(messag){
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

while (true){
  search = prompt("Search student records: type a name [Jody] (or type 'quit' to end)")
  if ( search === 'quit'){
    break;
  }else{
    for(var i = 0; i < students.length; i+=1){
      if(search === students[i].name){
        student = students[i];
        message += '<h2>Student: ' + student.name + '</h2>';
        message+= '<p>Track: ' + student.track + '</p>';
        message+= '<p>Achievement: ' + student.achievements + '</p>';
        message+='<p>Scores: ' + student.points + '</p>';
        break;
      }else {
        message += '<p>The search ' + search + ' didn\'t load anything.</p>'
      }
    }
  }
}


print(message);
