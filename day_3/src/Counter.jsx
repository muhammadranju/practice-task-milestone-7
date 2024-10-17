import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handelAdd = (num) => {
    setCount((prev) => prev + num);

    if (count < 0) {
      setCount(0);
    }
  };
  console.log("Rendering", count);
  return (
    <div className="space-y-4">
      <div>
        Counter: <span className="font-bold text-4xl">{count}</span>{" "}
      </div>
      <div className="space-x-4">
        <button className="btn" onClick={() => handelAdd(1)}>
          Add
        </button>
        <button className="btn" onClick={() => handelAdd(-1)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Counter;

// function useState(value) {
//     function() {

//     }
// }
