/* eslint-disable react/no-unescaped-entities */
function Hero() {
  return (
    <div className=" text-center flex justify-center items-center flex-col ">
      <div className="max-w-3xl mx-auto space-y-4">
        <span className="text-2xl text-gray-500     font-semibold">
          Bringing Families Together ❤️‍🔥
        </span>
        <h1 className="text-6xl font-bold">
          Your Path to Adoption Starts Here
        </h1>
        <p className="py-6">
          Your path to adoption begins here, with compassionate guidance and
          expert support. Whether you're growing your family or offering a child
          a loving home, we're here to walk you through every step of the
          adoption process, making your journey as smooth and fulfilling as
          possible.
        </p>
        <button className="btn bg-[#0f7d85] px-7 text-white">View More</button>
      </div>
      <img src="../../images/pet.webp" alt="hero" className="rounded-xl" />
    </div>
  );
}

export default Hero;
