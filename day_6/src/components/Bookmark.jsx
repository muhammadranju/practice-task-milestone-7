/* eslint-disable react/prop-types */
import BookmarkList from "./BookmarkList";

const Bookmark = ({ readTime, markAsRead }) => {
  return (
    <div>
      <div className="p-5 border border-indigo-500 rounded-xl text-center bg-indigo-100">
        <h1 className="text-indigo-500 font-bold text-2xl">
          Spent time on read : {readTime} min
        </h1>
      </div>
      <BookmarkList markAsRead={markAsRead} />
    </div>
  );
};

export default Bookmark;
