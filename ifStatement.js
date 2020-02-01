// run with command: node ifStatement.js

function trueOrFalse() {
  // if keyword followed by parens inside is our statement that get evaluated
  // as a boolean as either true or false
  if (3 >= 2) {
    //if statement is evaluated as true return:
    return '4 is less than or equal to 2';
  }
  {
    // if statement is evaluated as false return:
    return 'what???';
  }
}

console.log(trueOrFalse());
