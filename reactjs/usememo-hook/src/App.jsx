import React from "react";
import { useState, useMemo } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const sum = () => {
    console.log("sum function called and that is expensive");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total;
  };
  // const result = sum();
  const result = useMemo(sum, []);
  return (
    <div>
      <h1>the sum is : {result}</h1>
      <br></br>
      <br></br>
      <br></br>
      <p>The count is: {count}</p>
      <button onClick={increment}>increase</button>

      <Child/>
    </div>
  );
};

export default App;
