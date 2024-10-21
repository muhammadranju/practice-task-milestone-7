const Header = () => {
  return (
    <div className=" my-10">
      <div className="flex justify-between ">
        <h1 className="font-bold text-4xl">Knowledge Cafe</h1>
        <img
          src="../../images/author/1.jpeg"
          className=" rounded-full w-14 h-14 object-cover"
          alt=""
        />
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default Header;
