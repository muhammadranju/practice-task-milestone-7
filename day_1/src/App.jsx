// import Card from "./components/Card";
import { useState } from "react";
import Hero from "./components/Hero";
import Images from "./components/Images";
import Navbar from "./components/Navbar";
import Cards from "./components/ui/Cards";
import Category from "./components/ui/Category";
import Spinner from "./components/ui/Spinner";

function App() {
  const [imagesArray, setImagesArray] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const handelImagesByCard = (imag) => {
    setImagesArray(imag);
  };
  setTimeout(() => {
    setSpinner(false);
  }, 2000);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto mt-10 xl:container">
        {/* hero section */}
        <section className=" mt-10">
          <Hero />
        </section>
        {/* hero section */}

        {spinner && <Spinner />}

        {!spinner && (
          <section className="grid lg:grid-cols-4 grid-cols-2 justify-between lg:gap-x-44 gap-x-5 lg:gap-y-10 gap-y-4 mt-8 lg:max-w-full mx-auto ">
            <Category />
          </section>
        )}

        <section className="flex justify-between items-center lg:max-w-full mx-auto py-5">
          <h4 className="text-2xl font-bold">Best Deal For you</h4>
          <button
            className="btn bg-[#0E7A81] text-white px-7 rounded-xl hover:bg-[#0c6369]"
            id="sortByPiceButton"
          >
            Sort by Price
          </button>
        </section>
        {spinner && <Spinner />}
        {!spinner && (
          <section className="flex lg:flex-row flex-col lg:items-start lg:gap-x-5 mt-8">
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-4/5 border p-4 rounded-xl gap-5">
              <Cards handelImagesByCard={handelImagesByCard} />
            </div>
            <div className="lg:w-1/5 border p-4 lg:mt-0 mt-5 rounded-xl grid grid-cols-2 gap-5 relative">
              <Images petImages={imagesArray} />
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
