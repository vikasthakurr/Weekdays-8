import React, { createContext } from "react";
import Child from "./Child";

// eslint-disable-next-line react-refresh/only-export-components
export const postman = createContext();
const App = () => {
  const data = {
    name: "vikas",
    age: 24,
  };
  return (
    <postman.Provider value ={data}>
    <div>
      <Child />
    </div>
    </postman.Provider>
  );
};

export default App;
