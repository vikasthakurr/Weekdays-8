import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  function increse() {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increse}>Increment</button>
    </div>
  );
};

export default App;
