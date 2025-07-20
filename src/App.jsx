import React from "react";
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import JustIn from "./components/justIn";
import InDec from "./components/InDec";
import Card from "./components/card";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JustIn />} />
          <Route path="/in" element={<InDec />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
