// function Greet(name, cb) {
//   console.log("hello" + name);
//   cb();
// }
// function sayHi() {
//   console.log("good morning");
// }

// Greet("vikas", sayHi);

// task-1
// recipe to make sandwich
//1. bread baked
//2. stuffing
//3.grilled
//4.serve

// function step1(bread, callback) {
//   console.log("break baked");
//   callback();
// }
// function step2(bread, callback) {
//   console.log("stuffing is done");
//   callback();
// }

// function step3(bread, callback) {
//   console.log("grilled");
//   callback();
// }

// function serve(bread) {
//   console.log("serve");
// }

// setTimeout(() => {
//   console.log("hii");
// }, 2000);

function bakeBread(bread, cb) {
  setTimeout(() => {
    console.log("bread is baked");
    cb();
  }, 3000);
}

function stuffing(bread, cb) {
  setTimeout(() => {
    console.log("stuffing is done");
    cb();
  }, 3000);
}

function grilled(bread, cb) {
  setTimeout(() => {
    console.log("grilled");
    cb();
  }, 3000);
}

bakeBread("bread", () => {
  stuffing("bread", () => {
    grilled("bread", () => {
      console.log("sandwich is ready to serve");
    });
  });
});
