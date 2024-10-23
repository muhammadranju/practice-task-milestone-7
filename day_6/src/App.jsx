import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmark from "./components/Bookmark";
import Header from "./components/Header";
import { toast } from "react-toastify";

function App() {
  const [readTime, setReadTime] = useState(0);
  const [markAsRead, setMarkAsRead] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState({});

  const handelMarkAsRead = (id, blog) => {
    const alreadyMarked = markAsRead.some((item) => item.id === id);

    if (!alreadyMarked) {
      setMarkAsRead((prev) => [...prev, blog]);
      toast.success("Bookmarked Success!");
    } else {
      toast.info("Already Marked as Read!");
    }

    setIsBookmarked((prev) => ({ ...prev, [id]: true }));
  };

  const handelReadTime = (id, readTime) => {
    const alreadyMarked = markAsRead.some((item) => item.id === id);

    if (alreadyMarked) {
      setReadTime((prev) => prev + readTime);
      const remainingBookmark = markAsRead.filter(
        (bookmark) => bookmark.id !== id
      );
      setMarkAsRead(remainingBookmark);
      toast.success("Mark as read Success!");
      setIsBookmarked((prev) => ({ ...prev, [id]: false }));
    } else {
      toast.info("Already Marked as Read!");
    }
  };

  return (
    <div className="lg:w-11/12 md:w-11/12 w-11/12 xl:container mx-auto ">
      <Header />
      <div className="flex lg:flex-row flex-col-reverse gap-5">
        <div className="w-full">
          <Blogs
            handelReadTime={handelReadTime}
            handelMarkAsRead={handelMarkAsRead}
            isBookmarked={isBookmarked}
          />
        </div>
        <div className=" lg:w-2/5 ">
          <Bookmark readTime={readTime} markAsRead={markAsRead} />
        </div>
      </div>
    </div>
  );
}

export default App;
