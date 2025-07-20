import React from "react";
import { useState } from "react";
import { Link } from "react-router";

const InDec = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const handleDeccrement = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <Link to="/">
        <button className="text-sm px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded">
          Go Back
        </button>
      </Link>
      <h1 className="text-3xl text-center text-blue-600 p-7">
        increment/decrement
      </h1>
      <p className="text-center font-bold">count:{count}</p>
      <div className="flex justify-around p-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleDeccrement}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <hr className="border-black" />
    </div>
  );
};

export default InDec;
