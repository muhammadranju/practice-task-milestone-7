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
          <Card />
        </section>
      </main>
    </>
  );
}

export default App;
