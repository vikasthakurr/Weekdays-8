import React from "react";

const Child = React.memo(() => {
  console.log("Child component rendered");
  return (
    <div>
      {/* <p>{data.name}</p> */}
    </div>
  );
});

export default Child;
