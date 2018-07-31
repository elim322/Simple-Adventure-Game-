//adventure game 
var message = prompt('You are Emilio, a knight seeking adventure. You take your horse, Jericho, into the nearest forest. You reach a branched path. Will you go left or right?');
if (message.toLowerCase() === 'left') {
  var message = prompt('Oh no a monster appeared! Would you like to fight, or run?')
  if (message.toLowerCase() ==='run')
    alert('You are a crippling pussy!');
    else if (message.toLowerCase() === 'fight')
    var message = prompt('Do you dance, show cat pictures, stab it with a knife, or punch it in the face?');
    if (message.includes('dance'))
    var message = alert('You get totally destroyed in the dance battle!');
    if (message.includes('cat pictures'))
    var message = alert('It has a cuter cat at home. You lose!');
    if (message.includes('knife'))
    var message = alert('You go back to the castle and crowned as a hero!');
    if (message.includes('punch'))
    var message = alert('You go back to the castle and crowned as a hero!');
}; 
if (message.toLowerCase() === 'right'){
  var message = prompt('you meet a pretty princess! Would you like to run, or take her back to the castle? ;)')
  if (message.toLowerCase() === 'run'){
    var message = alert('aww dude you really missed out on some tail! You lose!')
  };
  if (message.includes('back')) {
    var message = prompt('Great! Now would you like to get freaky or respect women?')
  }
  if (message.includes('freaky')) 
    var message = alert('Looks like HE had a little extra below the belt. You lose!')
    else if (message.includes('women')) {
      var message = alert('Thats the way bro. You win!')
    }
};



