/* eslint-disable react/prop-types */

const BlogList = ({ blog }) => {
  return (
    <div>
      <img className="w-64 h-44 object-cover" src={blog.image_url} alt="" />
    </div>
  );
};

export default BlogList;
