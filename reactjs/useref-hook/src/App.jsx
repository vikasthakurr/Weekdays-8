import React from "react";
import { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // let value = 0;
  let value = useRef(0);
  // console.log(value);
  let a = useRef(0);
  console.log(a);
  const change = () => {
    // value = value + 1;
    value.current = value.current + 1;
    console.log("value", value.current);
    setCount(count + 1);
  };
  a.current.innerText = `value is ${value.current}`;
  a.current.style.color = "red";
  return (
    <div>
      count is {count}
      <br />
      <button onClick={change}>Increment</button>
      <p ref={a}></p>
    </div>
  );
};

export default App;
