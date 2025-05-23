// import React from "react";

// const App = () => {
//   function SayHii() {
//     console.log("hi");
//   }
//   return (
//     <div>
//       <button onClick={SayHii}>click me</button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [Count, setCount] = useState(0);
//   console.log("page has rendered");
//   // let a = 0
//   function increment() {
//     // a = a + 1;
//     setCount(Count + 1);
//   }
//   function decrement() {
//     setCount(Count - 1);
//   }
//   function reset() {
//     setCount(0);
//   }
//   return (
//     <div>
//       <h1>Value: {Count}</h1>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Nav from "./component/Nav";

// const App = () => {
//   let login = false;
//   return <>{login === true ? <Nav /> : "login is not true"}</>;
// };

// export default App;

import React from "react";
import Profile from "./component/Profile";

const App = () => {
  return (
    <>
      <Profile name={"vikas"} age={24} location={"india"} profession={"trainer"} />
      <Profile name={"sachin"} age={25} location={"india"} profession={"trainer"} />
      <Profile name={"saurabh"} age={26} location={"india"} profession={"trainer"} />
    </>
  );
};

export default App;
