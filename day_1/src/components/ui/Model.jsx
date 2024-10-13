/* eslint-disable react/prop-types */
function Model({ pet }) {
  return (
    <dialog id="petModel" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box lg:w-11/12 lg:max-w-3xl">
        <figure className="lg:p-5 p-3 w-full h-96">
          <img
            src={pet?.image}
            className="rounded-xl object-cover w-full h-full "
            alt="Shoes"
          />
        </figure>
        <h1 className="text-2xl font-bold my-3">{pet?.pet_name}</h1>
        <div className="flex">
          <ul>
            <li>
              <i className="fa-solid fa-table-cells mr-1"></i>
              Breed: {pet?.breed ?? "Not Available"}
            </li>

            <li>
              <i className="fa-solid fa-mercury mr-1"></i>
              Gender: {pet?.gender ?? "Not Available"}
            </li>
            <li>
              <i className="fa-solid fa-mercury mr-1"></i>
              Vaccinated status: {pet?.vaccinated_status ?? "Not Available"}
            </li>
          </ul>
          <ul>
            <li>
              <i className="fa-regular fa-calendar mr-1"></i>
              Birth: {pet?.date_of_birth ?? "Not Available"}
            </li>
            <li>
              <i className="fa-solid fa-dollar-sign mr-1"></i>
              Price: {pet?.price ? pet?.price + "$" : "Not Available"}
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div>
          <h4 className="text-lg font-bold">Details Information</h4>
          <p>{pet?.pet_details}</p>
        </div>
        <div className="modal-action w-full">
          <form method="dialog" className="w-full">
            <button className="btn w-full text-colorPrimary border-[#0E7A811A] bg-[#0E7A811A] hover:bg-[#0E7A811A] hover:border-[#0E7A811A]">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default Model;
