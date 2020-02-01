// run with command: node multipleIf

//both equations need to evaluate to true in order to return true
function doubleCheckerT() {
  if (3 < 4 && 8 > 7) {
    return true;
  }
  {
    return false;
  }
}

function doubleCheckerF() {
  if (3 < 4 && 8 == 7) {
    return true;
  }
  {
    return false;
  }
}

console.log(doubleCheckerT());

console.log(doubleCheckerF());
