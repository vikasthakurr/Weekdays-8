    state,
    country
  );
}
// obj1.printFullName("etawah");

obj2 = {
  fname: "akash",
  lname: "thakur",
};
obj3 = {
  fname: "shreekar",
  lname: "thakur",
};

// printFullName.call(obj2, "saifai");
// printFullName.apply(obj2, ["saifai", "UP", "India"]);

//bind=>binds a function to an object and returns a new function that can be called later
let binding=printFullName.bind(obj3, "saifai", "UP", "India");
binding();


let name = "vikas";
let salary = 123456;

console.log(`my name is ${name} and my salary is ${salary}`);