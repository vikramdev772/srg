import React, { use, useState } from "react";

const Math = () => {
  let [r, setR] = useState(0);
  let [v, setV] = useState(1);
  let api = "https://srg-sat7.onrender.com/fact?n";
  async function apiCall() {
    let req = await fetch(`${api}=${v}`);
    let res = await req.text();
    console.log("\n\t fact " + v + " : " + res);
    setR(res);
  }

  return (
    <>
      <input type="text" placeholder="enter a num " onChange={(e) => {
        console.log(e.target.value);
        setV(e.target.value);
      }} />
      <br />
      <button onClick={apiCall}>submit</button>
      <div>output : {r}</div>
    </>
  );
};

export default Math;
