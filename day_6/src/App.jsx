import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmark from "./components/Bookmark";
import Header from "./components/Header";

function App() {
  const [readTime, setReadTime] = useState(0);
  const [markAsRead, setMarkAsRead] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handelReadTime = (readTime) => {
    setReadTime((prev) => prev + readTime);
    setIsBookmarked(!isBookmarked);
  };
  const handelMarkAsRead = (title) => {
    setMarkAsRead((prev) => [...prev, title]);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex gap-5">
        <div className="w-full">
          <Blogs
            handelReadTime={handelReadTime}
            handelMarkAsRead={handelMarkAsRead}
            isBookmarked={isBookmarked}
          />
        </div>
        <div className=" w-2/5">
          <Bookmark readTime={readTime} markAsRead={markAsRead} />
        </div>
      </div>
    </div>
  );
}

export default App;
