/* eslint-disable react/prop-types */

const BookmarkList = ({ markAsRead }) => {
  return (
    <div className="p-5 bg-gray-100 rounded-xl mt-8">
      <h1 className=" font-bold text-xl">
        Bookmarked Blogs : {markAsRead.length}
      </h1>
      {markAsRead.map((mark, inx) => (
        <div
          key={inx}
          className="p-5 font-bold text-xl bg-white rounded-xl my-5 "
        >
          <span>{mark.title}</span>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
