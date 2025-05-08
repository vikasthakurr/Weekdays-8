// function outerfunction() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outerfunction();

//currying...

// function sum(a,b,c){
//     return a+b+c;
// }
// var res=sum(2,3);
// console.log(res);

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var res = sum(1)(2)(4);
console.log(res);