import fs from "fs";

// fs.writeFileSync("vikas.pdf", "hii....this is new file");

// writefile async

// fs.writeFile("abc.txt","this is weekdays-8",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file created");
//     }
// })
// fs.writeFileSync("abc.txt", "this is changes....");
// fs.appendFileSync("abc.txt", "\n this is changes22....");

// let data =fs.readFileSync("hello.pdf", "utf-8");
// console.log(data);

// readfile async

// fs.readFile("vikas.pdf", "utf-8", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// import fs from "fs";

fs.writeFile("sohail.txt", "Hello", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File Created");
});

let readvalue = fs.readFileSync("sohail.txt", "utf-8");

console.log("File Content", readvalue);

// console.log(readvalue);
