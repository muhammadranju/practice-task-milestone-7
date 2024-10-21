import PropType from "prop-types";

const Bottle = ({ bottle, handelImg }) => {
  return (
    <div className="border shadow-xl p-5 rounded-xl font-semibold space-y-3">
      <img className="rounded-xl w-full" src={bottle.img} alt="" />
      <span className="mt-6">#{bottle.category}</span>
      <h1 className="text-xl font-bold">Title: {bottle.name}</h1>
      <p>Price: ${bottle.price}</p>
      <p>Stock: {bottle.stock}</p>
      <span>Seller: {bottle.seller}</span>

      <div className="flex justify-between">
        <span>Ratings: {bottle.ratings}</span>
        <span>Sells: {bottle.shipping}</span>
      </div>
      <button
        type="button"
        onClick={() => handelImg(bottle.img)}
        className="p-3 bg-blue-500 hover:bg-blue-700  text-white rounded-xl float-end"
      >
        Add to Cart
      </button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropType.object.isRequired,
  handelImg: PropType.string.isRequired,
};
export default Bottle;
