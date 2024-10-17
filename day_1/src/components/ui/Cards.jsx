import { useEffect, useState } from "react";
import Card from "../Card";
import Images from "../Images";
const url = "https://openapi.programming-hero.com/api/peddy";

const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [petDetails, setPetDetails] = useState({});
  const [petImages, setPetImages] = useState([]);
  const [counter, setCounter] = useState(3);
  const [isAdopted, setIsAdopted] = useState(false);

  const handelPosts = async () => {
    const response = await fetch(`${url}/pets`);
    const data = await response.json();
    setPosts(data.pets);
  };

  function handelImage(image) {
    setPetImages((prevImages) => [...prevImages, image]);
  }

  const handelAdoptModel = () => {
    document.getElementById("adoptChallengeModal").showModal();
    const interVal = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          document.getElementById("adoptChallengeModal").close();
          clearInterval(interVal);
          setIsAdopted(!isAdopted);
          return 3;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handlePetDetails = async (id) => {
    const response = await fetch(`${url}/pet/${id}`);
    const data = await response.json();
    console.log(data);
    setPetDetails(data?.petData);
    document.getElementById("petModel").showModal();
  };

  useEffect(() => {
    handelPosts();
  }, []);
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-4/5 border p-4 rounded-xl gap-5">
        {posts.map((post) => (
          <Card
            key={post.petId}
            post={post}
            handelImage={handelImage}
            handelAdoptModel={handelAdoptModel}
            handlePetDetails={handlePetDetails}
            petDetails={petDetails}
            petImages={petImages}
            counter={counter}
            isAdopted={isAdopted[post.petId] || false}
          />
        ))}
      </div>
      <div className="lg:w-1/5 border p-4 lg:mt-0 mt-5 rounded-xl grid grid-cols-2 gap-5 relative">
        <Images petImages={petImages} />
      </div>
    </>
  );
};

export default Cards;
