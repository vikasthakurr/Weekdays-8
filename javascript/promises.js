// let promise1 = new Promise((resolve, reject) => {});

// console.log(promise1);
// console.log(typeof promise1);

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success");
//     }, 6000);
//   });

//   console.log(promise1);

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("failure");
//       // console.log("hii");
//     }, 2000);
//   });

//   // console.log(promise1);
//   promise1
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("process ended");
//     });

// api data fetching

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("vikas kumar,age:24,isMarried:false");
//     }, 2000);
//   });
// }

// fetchData()
//   .then((res) => {
//     console.log("fetching the data.....");
//   })
//   .then((res) => {
//     setTimeout(() => {
//       console.log("data is being processed");
//     }, 2000);
//   })
//   .then((res) => {
//     setTimeout(() => {
//       console.log("data is this");
//     }, 3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const resolvedPromise = Promise.resolve("Already resolved!");
// console.log(resolvedPromise);

//promises methods.....
//promise.all()

// const promise1 = Promise.resolve("First");
// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Second"), 1000)
// );
// const promise3 = Promise.reject("Third");

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// 5.4 Promise.race()
// Returns the first promise that resolves or rejects.
const promise1 = new Promise(reject => setTimeout(() => reject("First"), 500));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Second"), 100));


Promise.allSettled([promise1, promise2])
  .then(result => {
    console.log("Fastest result:", result); // Fastest result: Second
  })
  .catch(error => {
    console.log(error); // First
  });

