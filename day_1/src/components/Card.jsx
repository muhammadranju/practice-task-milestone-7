import { useEffect, useState } from "react";

function Card() {
  const [posts, setPosts] = useState([]);

  const handelPosts = async () => {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets"
    );
    const data = await response.json();
    setPosts(data.pets);
  };
  useEffect(() => {
    handelPosts();
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <div key={post.id || index} className="card card-compact shadow">
          <figure className="w-full h-64 p-3">
            <img
              src={post.image}
              className="w-full h-full object-cover rounded-xl "
              alt="Pet"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.pet_name}</h2>

            <div className="flex flex-col text-gray-500 text-base ">
              <span className="text-base">
                <i className="fa-solid fa-table-cells mr-1"></i>
                <span className="">Breed: {post.breed ?? "Not Available"}</span>
              </span>
              <span className="text-base">
                <i className="fa-regular fa-calendar mr-1"></i>
                <span className="">
                  Birth: {post.date_of_birth ?? "Not Available"}
                </span>
              </span>
              <span>
                <i className="fa-solid fa-mercury mr-1"></i>
                <span className="">
                  Gender: {post.gender ?? "Not Available"}
                </span>
              </span>
              <span>
                <i className="fa-solid fa-dollar-sign mr-1"></i>
                <span className="">
                  Price: {post.price ? post.price + "$" : "Not Available"}
                </span>
              </span>
            </div>

            <div className="flex justify-between ">
              <button className="btn text-xl bg-transparent px-5">
                <i className="fa-regular fa-thumbs-up"></i>
              </button>
              <button className="btn text-[#0f7d85] border-0 font-bold bg-transparent shadow px-7">
                Adopt
              </button>
              <button className="btn text-[#0f7d85] border-0 font-bold bg-transparent shadow px-7">
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
