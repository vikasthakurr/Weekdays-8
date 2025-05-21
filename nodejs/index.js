// console.log("hello world");
// var figlet = require("figlet");
import figlet from "figlet";

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
