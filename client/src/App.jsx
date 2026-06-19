import React from "react";
import "./App.css";
import B from "./components/B";
import Card from "./components/Card";
const App = () => {
  return (
    <div>
      <div className="container">
        <Card f="apple" s="🍎" />
        <Card f="fruit" s="🍑"  />
        <Card f="mango" s="🥭"  />
      </div>
      <br />
      <B />
    </div>
  );
};

export default App;
