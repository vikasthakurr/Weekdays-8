// var a = 24;
// var b = 30;
// console.log(a);

// console.log(a);
// const a=10;
// console.log(a);

// function sum(num1, num2) {
//   return num1 + num2;
//   console.log("inside function");
// }
// var res = sum(5, 10);
// console.log(res);
// var res1 = sum(a, b);
// console.log(res1);

// const myPromise = new Promise((resolve, reject) => {
//   let result = true;
//   if (result) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .then((res) => {
//     console.log("hii");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("failure");
//     // console.log("hii");
//   }, 2000);
// });

// // console.log(promise1);
// promise1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("process ended");
//   });
function outerfunction() {
  var a = 10;
  function inner() {
    var a = 20;
    console.log(a);
  }
  return inner;
}
var innerfunction = outerfunction();
// console.log(innerfunction);
innerfunction();