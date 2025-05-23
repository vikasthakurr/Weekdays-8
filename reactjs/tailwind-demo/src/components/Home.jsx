import React from "react";
import products from "../Products.js";
import Card from "./Card.jsx";

const Home = () => {
  return (
    <div className="flex justify-around flex-wrap gap-15 p-4">
      {products.map((product) => (
        <Card key={product.id} productObj={product} />
      ))}
    </div>
  );
};

export default Home;