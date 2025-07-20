import React from "react";
import { useState } from "react";
import { data } from "../data/dataSet.js";

const Card = () => {
  const [totalNo, setTotalNo] = useState(data.length);
  const [product, setProduct] = useState(data);

  const handleDeleteAll = () => {
    setProduct([]), setTotalNo(0);
  };
  const handleReset = () => {
    setProduct(data), setTotalNo(data.length);
  };
  const handleEachDelete = (id) => {
    const update = product.filter((x) => x.id !== id);
    setProduct(update), setTotalNo(update.length);
  };
  return (
    <div>
      <h1 className="text-3xl text-gray-800 text-center pt-5">Card</h1>
      <h1 className="text-2xl font-bold text-center pt-5">
        Card Items:{totalNo}
      </h1>
      <div>
        {product.map((product) => (
          <div
            className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center"
            key={product.id}
          >
            <p>
              product{product.name},Price:{product.price}
            </p>
            <button
              className="bg-black text-white rounded-md p-5"
              onClick={() => {
                handleEachDelete(product.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        className="bg-black text-white w-[100px]"
        onClick={handleDeleteAll}
      >
        Delete All
      </button>
      <button className="bg-black text-white w-[100px]" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Card;
