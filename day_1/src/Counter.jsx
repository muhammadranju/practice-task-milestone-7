import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Track visibility

  const handelAdd = () => {
    setCount(count + 1);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  function handelMessage() {
    handelAdd();
  }
  return (
    <>
      <h1 className="text-5xl font-bold">Counter</h1>
      <div className="text-3xl font-semibold my-5">{count}</div>
      <button className="btn" onClick={handelMessage}>
        Add
      </button>

      <span
        className={`text-2xl font-semibold my-5 b p-4 border-[2px] absolute border-sky-500 rounded-xl lg:bottom-20 lg:right-20 bottom-10 right-10 bg-white ${
          isVisible ? "" : "hidden"
        }`}
      >
        Added <span className="text-sky-500 font-bold text-3xl">{count} </span>
        times
      </span>
    </>
  );
}

export default Counter;
