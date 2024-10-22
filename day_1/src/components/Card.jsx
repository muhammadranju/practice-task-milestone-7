/* eslint-disable react/prop-types */
import Model from "./ui/Model";
import Adopt from "./ui/Adopt";

function Card({
  post,
  handlePetDetails,
  handelImage,
  handelAdoptModel,
  petDetails,
  counter,
  isAdopted,
}) {
  return (
    <>
      <div className="card card-compact shadow">
        <figure className="w-full h-64 p-3">
          <img
            src={post?.image}
            className="w-full h-full object-cover rounded-xl"
            alt="Pet"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post?.pet_name}</h2>

          <div className="flex flex-col text-gray-500 text-base ">
            <span className="text-base">
              <i className="fa-solid fa-table-cells mr-1"></i>
              <span>Breed: {post?.breed ?? "Not Available"}</span>
            </span>
            <span className="text-base">
              <i className="fa-regular fa-calendar mr-1"></i>
              <span>Birth: {post?.date_of_birth ?? "Not Available"}</span>
            </span>
            <span>
              <i className="fa-solid fa-mercury mr-1"></i>
              <span>Gender: {post?.gender ?? "Not Available"}</span>
            </span>
            <span>
              <i className="fa-solid fa-dollar-sign mr-1"></i>
              <span>
                Price: {post?.price ? post?.price + "$" : "Not Available"}
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
              disabled={isAdopted} // Conditionally disable the button
            >
              {isAdopted ? "Adopted" : "Adopt"} {/* Toggle button text */}
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

      <Model pet={petDetails} />
      <Adopt counter={counter} />
    </>
  );
}

export default Card;
