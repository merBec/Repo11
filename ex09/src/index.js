var myArr1 = [7, "ate", false, "", 9, NaN];

function myBouncer(arr) {
  arr = arr.filter(Boolean);
  return arr;
}
console.log(myBouncer(myArr1));
module.exports = myBouncer;
