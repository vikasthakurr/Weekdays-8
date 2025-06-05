import React, { useContext } from "react";
import { postman } from "./App";

const Child1 = () => {
  const data = useContext(postman);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.age}</p>
    </div>
  );
};

export default Child1;
