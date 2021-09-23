var myArr1 = [
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

function largestNumFromArr(arr) {
  var maxNumArray = [];
  for (var i = 0; i < arr.length; i++) {
    var max = Math.max(...arr[i]);
    maxNumArray.push(max);
  }
  return maxNumArray;
}

console.log(largestNumFromArr(myArr1));
module.exports = largestNumFromArr;
