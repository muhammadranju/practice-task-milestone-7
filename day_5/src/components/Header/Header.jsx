import PropTypes from "prop-types";

const Header = ({ count, imgArray }) => {
  console.log(imgArray);
  return (
    <>
      <h1 className="text-3xl font-bold my-10">Bottles Available: {count} </h1>

      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {imgArray.map((img) => (
          <img className="w-28" src={img} alt="" key={img} />
        ))}
        <img src="" alt="" />
      </div>
    </>
  );
};

Header.propTypes = {
  count: PropTypes.number.isRequired,
  imgArray: PropTypes.array.isRequired,
};

export default Header;
