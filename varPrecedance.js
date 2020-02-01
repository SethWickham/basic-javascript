// run with command: node varPrecedance

//the LOCAL variable will take precedence over the GLOBAL variable
//if variables have the same name

var color = 'Blue';

function varPrec() {
  //local var with same name
  var color = 'Red';
  return color;
}

//LOCAL variable console log:
console.log(varPrec());

//GLOBAL variable console log:
console.log(color);
