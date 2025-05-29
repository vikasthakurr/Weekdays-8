import React from "react";
import Custom from "./Custom";

const App = () => {
  const [data] = Custom("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
