var myArr1 = [1, 2, 3];
var myArr2 = [4, 5];

function mySplice(arr1, arr2, n) {
  var spliceArray1 = [...arr1];
  var spliceArray2 = [...arr2];
  for (var i = 0; i < spliceArray1.length; i++) {
    spliceArray2.splice(n, 0, spliceArray1[i]);
  }
  return spliceArray2;
}

console.log(mySplice(myArr1, myArr2, 1));
module.exports = mySplice;
