import { useEffect, useState } from "react";
import Images from "./Images";
import Model from "./ui/Model";
import Adopt from "./ui/Adopt";
import Spinner from "./ui/Spinner";
const url = "https://openapi.programming-hero.com/api/peddy";

function Card() {
  const [posts, setPosts] = useState([]);
  const [petImages, setPetImages] = useState([]);
  const [petDetails, setPetDetails] = useState({});
  const [counter, setCounter] = useState(3);
  const [isAdopted, setIsAdopted] = useState(false);

  const handelPosts = async () => {
    const response = await fetch(`${url}/pets`);
    const data = await response.json();
    setTimeout(() => {
      setPosts(data.pets);
    }, 2000);
  };

  function handelImage(image) {
    setPetImages((prevImages) => [...prevImages, image]);
    console.log(posts);
  }

  const handlePetDetails = async (id) => {
    const response = await fetch(`${url}/pet/${id}`);
    const data = await response.json();
    console.log(data);
    setPetDetails(data?.petData);
    document.getElementById("petModel").showModal();
  };

  const handelAdoptModel = () => {
    document.getElementById("adoptChallengeModal").showModal();
    const interVal = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          document.getElementById("adoptChallengeModal").close();
          clearInterval(interVal);
          setIsAdopted(true);
          return 3;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    handelPosts();
  }, []);

  return (
    <>
      <Spinner />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-4/5 border p-4 rounded-xl gap-5">
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
                  <span className="">
                    Breed: {post.breed ?? "Not Available"}
                  </span>
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
                <button
                  onClick={() => handelImage(post.image)}
                  className="btn text-xl bg-transparent px-5"
                >
                  <i className="fa-regular fa-thumbs-up"></i>
                </button>
                <button
                  onClick={handelAdoptModel}
                  className="btn text-[#0f7d85] border-0 font-bold bg-transparent shadow px-7"
                  disabled={isAdopted}
                >
                  {isAdopted ? "Adopted" : "Adopt"}
                </button>
                <button
                  onClick={() => handlePetDetails(post.petId)}
                  className="btn text-[#0f7d85] border-0 font-bold bg-transparent shadow px-7"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-1/5 border p-4 lg:mt-0 mt-5 rounded-xl grid grid-cols-2 gap-5 relative">
        {petImages.map((image, index) => (
          <Images key={index} image={image} />
        ))}
      </div>
      <Model pet={petDetails} />
      <Adopt counter={counter} />
    </>
  );
}

export default Card;
