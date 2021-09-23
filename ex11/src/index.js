var myArr1 = ["a", "b", "c", "d"];

function splitArrayInGroups(arr, n) {
  var result = [];
  for (var i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}
console.log(splitArrayInGroups(myArr1, 2));
module.exports = splitArrayInGroups;
