import React from "react";

const Card = ({ productObj }) => {
  let { title, category, price, thumbnail, rating } = productObj;
  return (
    <div className="card bg-red-100 w-75 shadow-sm">
      <figure>
        <img className="h-40" src={thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{title}</h2>
        <p>
          <span className="badge badge-primary">{category}</span>
        </p>
        <p className="text-black">Rating: {rating}</p>
        <p className="text-xl font-bold text-black">${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
