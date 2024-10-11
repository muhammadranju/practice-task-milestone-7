import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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

        <section className="flex lg:flex-row flex-col lg:items-start lg:gap-x-5 mt-8">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-4/5 border p-4 rounded-xl gap-5">
            <Card />
          </div>
          <div className="lg:w-1/5 border p-4 lg:mt-0 mt-5 rounded-xl grid grid-cols-2 gap-5 relative">
            <img
              src="https://i.ibb.co.com/s3PXSwD/pet-3.jpg"
              className="rounded-xl w-full h-28 object-cover"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/s3PXSwD/pet-3.jpg"
              className="rounded-xl w-full h-28 object-cover"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/s3PXSwD/pet-3.jpg"
              className="rounded-xl w-full h-28 object-cover"
              alt=""
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
