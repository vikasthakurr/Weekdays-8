import React from "react";
import Products from "../data-api/Products";
import Card from "./Card";

const Home = () => {
  return (
    <div className="flex justify-around flex-wrap gap-6">
      {Products.map((Products) => (
        <Card key={Products.id} productObj={Products} />
      ))}
    </div>
  );
};

export default Home;
