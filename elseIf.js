//// run with command: node elseIf.js
x = 400;
b = 300;
z = 20;

// The logic is evaluated to see if true if not true next statement
// is evaluated as true if true statement will console log

function testHowBig() {
  if (x < 35) {
    console.log('  x is less than 30');
  } else if (b < 38) {
    console.log(' b is less than 40');
  } else if (z < 40) {
    console.log(' z is less than 50');
  }
}

testHowBig();
