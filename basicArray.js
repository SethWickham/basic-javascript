// run with command: node basicArray

function basicArrayFunc() {
  var array = [1, 2, 7, 8, 7, 2, 1];
  array.splice(3);
  //adding a value onto the end of the array
  array.push(5);
  return array;
}

console.log(basicArrayFunc());
