// run with command: node ifOr

//using the operator || as an or statement checking if either equation evaluates
// as true
function ifOrFunc() {
  if (3 == 3 || 2 < 1) {
    return 'at least one is true';
  }
  {
    return 'both are not true ';
  }
}

console.log(ifOrFunc());
