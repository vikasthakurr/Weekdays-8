import React from "react";
import Child1 from "./Child1";

const Child = ({name}) => {
  return (
    <div>
      <Child1 name={name}/>
    </div>
  );
};

export default Child;
