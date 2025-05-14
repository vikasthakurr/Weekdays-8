let obj1 = {
  fname: "vikas",
  lname: "thakur",
};
function printFullName(city, state, country) {
  console.log(this.fname + " " + this.lname + "from " + city, state, country);
}

let obj2 = {
  fname: "akash",
  lname: "thakur",
};

//call method:
// printFullName.call(obj2, "etawah", "UP", "India");

//apply method...
// printFullName.apply(obj2, ["etawah", "UP", "India"]);


//bind method.....
let binding=printFullName.bind(obj2, "etawah", "UP", "India");
binding();
