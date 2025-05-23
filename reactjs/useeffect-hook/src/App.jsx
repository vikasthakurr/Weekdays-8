import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  // let a = 0;
  // console.log("console.log rendered without need");

  useEffect(() => {
    if (count === 5) {
      console.log("component mounted");
    }
    return () => {
      if (count === 6) {
        console.log("component unmounted");
      }
    };
  }, [count]);

  function handleClick() {
    // a = a + 1;
    // console.log(a);
    setCount(count + 1);
  }

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default App;
