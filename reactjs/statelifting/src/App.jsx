import React, { useState } from "react";
import Card from "./Card";
import Card2 from "./Card2";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <Card name={name} setName={setName} />
      <p>this is name coming from child:{name}</p>
      <Card2 name={name} />
    </div>
  );
};

export default App;
