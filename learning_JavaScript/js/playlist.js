var playList = [
  ['I Did It My Way', 'Frank Sinatra'],
  ['Respect', 'Aretha Franklin'],
  ['Imagine', 'John Elway'],
  ['Born to Run', 'Bruce Fatface'],
  ['Louie, Louie', 'The Kingsmen'],
  ['Maybellene', 'The Dead Hookers'],
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] +  '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);
