import React from "react";
import { Link } from "react-router";

const JustIn = () => {
  return (
    <div className="flex flex-col py-7 gap-5">
      <Link to="/in">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Increment/decrement
        </button>
      </Link>
      <Link to="/card">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Card
        </button>
      </Link>
    </div>
  );
};

export default JustIn;
