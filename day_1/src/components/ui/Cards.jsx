/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../Card";
const url = "https://openapi.programming-hero.com/api/peddy";

const Cards = (props) => {
  const [posts, setPosts] = useState([]);
  const [petDetails, setPetDetails] = useState({});
  const [petImages, setPetImages] = useState([]);
  const [counter, setCounter] = useState(3);
  const [adoptedPets, setAdoptedPets] = useState({}); // Store adopted state for each pet

  const handelPosts = async () => {
    const response = await fetch(`${url}/pets`);
    const data = await response.json();
    setPosts(data.pets);
  };

  props.handelImagesByCard(petImages);

  function handelImage(image) {
    setPetImages((prevImages) => [...prevImages, image]);
  }

  const handelAdoptModel = (petId) => {
    document.getElementById("adoptChallengeModal").showModal();
    console.log("Okk");
    const interVal = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          document.getElementById("adoptChallengeModal").close();
          clearInterval(interVal);
          setAdoptedPets((prev) => ({ ...prev, [petId]: true })); // Mark the pet as adopted
          return 3;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handlePetDetails = async (id) => {
    const response = await fetch(`${url}/pet/${id}`);
    const data = await response.json();
    setPetDetails(data?.petData);
    document.getElementById("petModel").showModal();
  };

  useEffect(() => {
    handelPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Card
          key={post.petId}
          post={post}
          handelImage={handelImage}
          handelAdoptModel={() => handelAdoptModel(post.petId)}
          handlePetDetails={handlePetDetails}
          petDetails={petDetails}
          petImages={petImages}
          counter={counter}
          isAdopted={adoptedPets[post.petId]} // Pass the specific adoption status for each pet
        />
      ))}
    </>
  );
};

export default Cards;
