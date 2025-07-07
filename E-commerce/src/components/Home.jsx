import React from "react";
import Products from "../data-api/Products";
import Card from "./Card";
import { useSearch } from "../context/SearchContext";

const Home = () => {
  const {search} = useSearch();
  const filteredProducts = Products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex justify-around flex-wrap gap-6">
      {filteredProducts.map((Products) => (
        <Card key={Products.id} productObj={Products} />
      ))}
    </div>
  );
};

export default Home;
