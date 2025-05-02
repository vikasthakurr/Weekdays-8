/*data types in javascript
What is 'use strict' in js;
The "use strict" directive was new in ECMAScript version 5.
It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

1. Primitive data types (uses the stack memory)
2. Non-primitive  (reference) data types (uses the heap memory)

Primitive data types
1. String
2. Number ==> till range of 2^53 if big number then bigint
3. Boolean
4. Undefined
5. Null ==> is a standalone value of its own type which represents the intentional absence of any object value.
6. Symbol ==> A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below).

Non-primitive data types
1. Object
2. Array
3. Function


what is typOf in javascript
The typeof operator is used to get the data type (returns a string) of its operand.

*/

//
// stack and heap

// let name = "vikas";
// let name2 = name;
// name2 = "akash";
// console.log(name2);
// console.log(name);

// let person = {
//   name: "vikas",
//   age: 25,
//   isMarried: false,
// };

// // console.log(person);
// let obj1 = person;
// obj1.name ="shreekar";
// obj1.age =30;
// console.log(obj1);

// console.log(person);

// let arr= [1,2,3,4,5];
// let arr2= arr;
// arr2[0] = 100;
// console.log(arr2);
// console.log(arr);

// Primitive data types
// 1. String
// let name= "vikas"
// 2. Number ==> till range of 2^53 if big number then bigint

// let number = 1234567890123456789012345678901234567890n; // BigInt
// 3. Boolean
// 4. Undefined
// 5. Null ==> is a standalone value of its own type which represents the intentional absence of any object value.

// console.log(typeof undefined);
// console.log(typeof 3);
// console.log(typeof "vikas");
// console.log(typeof true);
// console.log(typeof null);

// Non-primitive data types
// 1. Object

// let person = {
//   name: "vikas",
//   age: 25,
//   isMarried: false,
//   hobbies: ["cricket", "football"],
// };

// console.log(person.name);
// person.name
// 2. Array

// let arr= [1, 2, 3, 4, 5];

// let arr= new Array(1, 2, 3, 4, 5);
// console.log(arr);
// 3. Function

// function A(){
//     console.log("hello world");
// }

// A();

// var show = function () {
//   console.log("hello world");
// };

// var result = show();
// console.log(typeof result);




// var addition = () =>console.log(10+20);
