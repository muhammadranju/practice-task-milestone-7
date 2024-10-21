/* eslint-disable react/prop-types */

const BlogList = ({ blog, handelMarkAsRead, handelReadTime, isBookmarked }) => {
  return (
    <div className=" rounded-xl ">
      <img className=" rounded-lg  w-fit" src={blog.image_url} alt="" />
      <div className="flex items-center justify-between gap-5 mt-8">
        <div className="flex gap-5 items-center">
          <img
            className="w-14 rounded-full h-14 object-cover "
            src={blog.author.profile_image_url}
            alt=""
          />
          <div>
            <h3 className="font-bold text-xl">{blog.author.name}</h3>
            <span className="text-gray-500 font-medium">
              {blog.published_date}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <span className="text-lg font-medium text-gray-500">
            {blog.read_time} min read
          </span>
          {isBookmarked ? (
            <img
              onClick={() => handelReadTime(blog.read_time)}
              className="w-6 text-gray-500 h-full cursor-pointer"
              src="../../images/ribbon-color.png"
              alt=""
            />
          ) : (
            <img
              onClick={() => handelReadTime(blog.read_time)}
              className="w-6 text-gray-500 h-full cursor-pointer"
              src="../../images/ribbon.png"
              alt=""
            />
          )}
        </div>
      </div>
      <h1 className="font-bold lg:text-4xl text-2xl lg:w-4/5 my-5">
        {blog.title}
      </h1>
      <p className="text-gray-700 my-5 font-medium text-lg">
        {blog.excerpt}...
      </p>
      <div className="font-medium  text-gray-500 my-5 flex lg:flex-row flex-col justify-between gap-2">
        <div className="flex gap-2">
          {blog.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <div className="flex gap-2">
          Category:{" "}
          {blog.categories.map((category) => (
            <span
              className="underline font-bold cursor-pointer underline-offset-2"
              key={category}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <span
        onClick={() => handelMarkAsRead(blog.title)}
        className="text-indigo-700 font-bold underline underline-offset-2 my-5 cursor-pointer"
      >
        Mark as read
      </span>
      <hr className="border-gray-300 my-8" />
    </div>
  );
};

export default BlogList;
