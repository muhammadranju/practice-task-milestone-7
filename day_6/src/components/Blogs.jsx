import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/muhammadranju/practice-task-milestone-7/refs/heads/main/day_6/public/blog.json"
      );
      const data = await res.json();
      setBlogs(data);
    };
    getData();
  }, []);
  return (
    <>
      {blogs.map((blog) => (
        <BlogList key={blog.id} blog={blog} />
      ))}
    </>
  );
};

export default Blogs;
