var myArr1 = ["zyxwuqrtsmp", "qrstu"];

function myMutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) > -1;
    });
}
console.log(myMutation(myArr1));
module.exports = myMutation;
