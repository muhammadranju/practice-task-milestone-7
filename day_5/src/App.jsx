import { useState } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);
  const [imgArray, setImgArray] = useState([]);

  const handelCount = (count) => {
    setCount(count);
  };
  const handelImg = (img) => {
    setImgArray((prev) => [...prev, img]);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header count={count} imgArray={imgArray}></Header>
      <Bottles handelCount={handelCount} handelImg={handelImg} />
    </div>
  );
}

export default App;
