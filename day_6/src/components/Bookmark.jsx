import BookmarkList from "./BookmarkList";

const Bookmark = () => {
  return (
    <div>
      <div className="p-5 border border-indigo-500 rounded-xl text-center bg-indigo-100">
        <h1 className="text-indigo-500 font-bold text-2xl">
          Spent time on read : 177 min
        </h1>
      </div>
      <BookmarkList />
    </div>
  );
};

export default Bookmark;
