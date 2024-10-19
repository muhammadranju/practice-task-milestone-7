/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../Card";
const url = "https://openapi.programming-hero.com/api/peddy";

const Cards = (props) => {
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

  props.handelImagesByCard(petImages);

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
    </>
  );
};

export default Cards;
