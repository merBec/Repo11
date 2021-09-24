var myArr1 = [[2], [5, 6, 7], [8, 9]];
var myArr2 = [[2.5, 2], [0.5, 0.2], [8]];
var myArr3 = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9],
];

var arr = [];
function multiplyArrayFunction(myArray) {
  var sum = 0;
  var product = 1;
  for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
      sum += myArray[i][j];
      product *= myArray[i][j];
    }
  }
  arr.push(product, sum);
  return arr;
}
console.log(multiplyArrayFunction(myArr3));
module.exports = multiplyArrayFunction;
