// let person = {
//   name: "vikas",
//   age: 24,
//   isMarried: false,
//   salary: 2123344,
// };
// console.log(person);
// console.log(person.name);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let response = {
//   status: 200,
//   header: "vikas",
//   ip: "127.0.0.1",
//   token: 1223455,
//   data: {
//     name: "vikas",
//     age: 24,
//     isMarried: false,
//     salary: 2123344,
//   },
// };

// let {
//   data: { name, age, salary },
// } = response;
// console.log(name, age, salary);
// console.log(response.data);

// const person = [
//   {
//     name: "vikas",
//     age: 24,
//     isMarried: false,
//   },
//   {
//     name: "vikas",
//     age: 24,
//     isMarried: false,
//   },
// ];

// let response2 = {
//   status: 200,
//   header: "vikas",
//   ip: "127.0.0.1",
//   token: 1223455,
//   data: {
//     name: "vikas",
//     age: 24,
//     isMarried: false,
//     salary: 2123344,
//   },
//   data2: {
//     name: {
//       first: "vikas",
//       last: "thakur",
//     },
//     age: 24,
//     isMarried: false,
//     salary: 2123344,
//   },
// };

// let {
//   data2: {
//     name: { first, last },
//   },
// } = response2;
// console.log(first, last);

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [7, 8, 9, 10, 11, 12];

// let result = [...arr1,...arr2];
// console.log(result);

// const arr3 = ["apple", "banana", "cherry", "date", "elderberry"];
// const [first, second, ...others] = arr3;
// console.log(first);
// console.log(second);
// console.log(others);

let obj1 = {
  name: "vikas",
  age: 24,
  isMarried: false,
  address: {
    city: "jaipur",
    country: "india",
  },
};

// normal copy of object.....
// let obj2 = obj1;
// obj2.name = "vikas thakur";
// console.log(obj2);
// console.log(obj1);

//shallow copy of object......
let obj2 = { ...obj1 };
obj2.name = "vikas thakur";
obj2.address.city = "delhi";
// console.log(obj2);
// console.log(obj1);

// let details= {
//   name: "vikas",
//   age: 24,
//   isMarried: false,
//   city: "jaipur",
//   country: "india",
// };

// let result = JSON.stringify(details);
// // console.log(result);
// // console.log(typeof result);

// let result2 = JSON.parse(result);;
// console.log(result2);
// console.log(typeof result2);

//deep copy

let person1 = {
  name: "vikas",
  age: 24,
  isMarried: false,
  address: {
    city: "jaipur",
    country: "india",
  },
};

let person2 = structuredClone(person1);
// let person2 = JSON.parse(JSON.stringify(person1));
person2.name = "vikas thakur";
person2.address.city = "delhi";
console.log(person2);
console.log(person1);
