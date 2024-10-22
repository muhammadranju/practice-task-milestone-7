/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import BlogCardPlaceholder from "./BlogCardPlaceholder";
const Blogs = ({ handelReadTime, handelMarkAsRead, isBookmarked }) => {
  const [blogs, setBlogs] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/muhammadranju/practice-task-milestone-7/refs/heads/main/day_6/public/blog.json"
      );
      const data = await res.json();
      setBlogs(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-y-3">
      {isLoading && (
        <>
          <BlogCardPlaceholder />
          <BlogCardPlaceholder />
          <BlogCardPlaceholder />
          <BlogCardPlaceholder />
        </>
      )}
      {!isLoading &&
        blogs.map((blog) => (
          <BlogList
            key={blog.id}
            blog={blog}
            handelReadTime={handelReadTime}
            handelMarkAsRead={handelMarkAsRead}
            isBookmarked={isBookmarked[blogs.id]}
          />
        ))}
    </div>
  );
};

export default Blogs;
