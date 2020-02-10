//run with command: node switchStatement.js

//I wanted to demonstrate how the value being passed through
// is not TYPE specific in Javascript
//therefore, we can pass a string and
//a number and the code will still run
function switchIt(val) {
  var openDoor = '';
  switch (val) {
    case 'One':
      openDoor = 'Door 1 open';
      break;
    case 2:
      openDoor = 'Door 2 open';
      break;
  }
  return openDoor;
}

console.log(switchIt('One'));
console.log(switchIt(2));
