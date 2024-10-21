import { useState } from "react";

const BookmarkList = () => {
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [bookmark, setBookmark] = useState([]);

  return (
    <div className="p-5 bg-gray-100 rounded-xl mt-8">
      <h1 className=" font-bold text-xl">Bookmarked Blogs : {bookmarkCount}</h1>
      {bookmark.map((bookmark, inx) => (
        <div
          key={inx}
          className="p-5 font-bold text-xl bg-white rounded-xl my-5 "
        >
          <span>{bookmark.title}</span>
          <span>Master Microsoft Power Platform and Become an In-Demand!</span>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
