// run with command: node globalVariable

//this is a global variable becuase its defined before function is called
var numberOne = 88;
var numberTwo = 8;
function aroundTheGlobe() {
  //function has access to the global variables
  return numberOne * numberTwo;
}

//console log the return value of the function
console.log(aroundTheGlobe());

//console log the value of the global variable
console.log(numberOne);
