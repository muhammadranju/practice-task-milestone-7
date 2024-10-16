// import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cards from "./components/ui/Cards";
import Category from "./components/ui/Category";

function App() {
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

        <section className="grid lg:grid-cols-4 grid-cols-2 justify-between lg:gap-x-44 gap-x-5 lg:gap-y-10 gap-y-4 mt-8 lg:max-w-full mx-auto ">
          <Category />
        </section>

        <section className="flex justify-between items-center lg:max-w-full mx-auto">
          <h4 className="text-2xl font-bold">Best Deal For you</h4>
          <button
            className="btn bg-[#0E7A81] text-white px-7 rounded-xl hover:bg-[#0c6369]"
            id="sortByPiceButton"
          >
            Sort by Price
          </button>
        </section>
        <section className="flex lg:flex-row flex-col lg:items-start lg:gap-x-5 mt-8">
          <Cards />
        </section>
      </main>
    </>
  );
}

export default App;
