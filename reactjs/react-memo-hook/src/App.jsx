import React, { useCallback } from "react";
import { useState } from "react";
import Child from "./Child";

const App = () => {
  console.log("App component rendered");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const increment1 = () => {
    console.log("increment1 function called");
    setCount2(count2 + 1);
  };
  const val = useCallback(increment1, [count2]);
  // const sum = () => {
  //   console.log("sum function called and that is expensive");
  //   let total = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     total += i;
  //   }
  //   return total;
  // };
  // const result = sum();
  // const result = useMemo(sum, []);

  return (
    <div>
      <p>The count is: {count}</p>
      <button onClick={increment}>increase</button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <p>second count is : {count2}</p>
      <button onClick={increment1}>click me</button>
      <Child increment1={val} />
    </div>
  );
};

export default App;
