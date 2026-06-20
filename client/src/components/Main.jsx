import { useEffect, useState } from "react";

const Main = () => {
  let [v, setV] = useState("🍎");
  function x() {
    if (v == "🍎") {
      setV("🍏");
    } else if (v == "🍏") {
      setV("🍎");
    }
  }
  useEffect(x,[v])
  return (
    <div>
      <h1>appple : {v}</h1>
      <button onClick={x}>change</button>
      {console.log("\n\t apple : " + v)}
    </div>
  );
};

export default Main;
