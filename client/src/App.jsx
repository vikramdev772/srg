import React from "react";
import "./App.css";
import B from "./components/B";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import C from "./components/C";
import L from "./components/L";
import Main from "./components/Main";
import Math from "./components/Math";
const App = () => {
  return (
    <div>
      {/* <h1>hello</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<L />} />
          <Route path="/main" element={<Main/>} />
          <Route path="/m" element={<Math/>} />

          {/* <Route path="/bg" element={<C />} /> */}
          {/* <Route  path="/home" element={} /> */}
         </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
