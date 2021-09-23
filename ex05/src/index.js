var myNestedArray = [["Toblerone", 5]];

function myNestedFunction(arr) {
  var mySecondArray = ["Milka", 3];
  arr.push(mySecondArray);
  return arr;
}

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;
