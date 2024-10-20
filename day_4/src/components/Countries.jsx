import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import CardPlaceholder from "../UI/CardPlaceholder";
import CountryList from "./CountryList";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGridView, setIsGridView] = useState(true);
  useEffect(() => {
    async function getCountries() {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();

      const sortedCountries = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sortedCountries);
      setIsLoading(false);
    }
    getCountries();
  }, []);

  return (
    <>
      <div className="container mx-auto pt-5  ">
        <h1 className="text-3xl font-bold my-5 ">
          Countries: {countries.length > 0 ? countries.length : "Loading..."}
        </h1>
        <button
          className={` text-white p-3 mb-5 px-5 font-bold  rounded-lg ${
            isGridView
              ? "bg-blue-500 hover:bg-blue-700 "
              : "bg-green-500 hover:bg-green-700 "
          }`}
          onClick={() => setIsGridView(!isGridView)}
        >
          {isGridView ? "List View" : "Grid View"}
        </button>

        {!isGridView && (
          <div className="grid grid-cols-1 gap-4 ">
            {!isLoading &&
              countries.map((country) => (
                <CountryList key={country.cca3} country={country} />
              ))}
          </div>
        )}

        {isGridView && (
          <div className="grid grid-cols-4 gap-4 ">
            {isLoading && (
              <>
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
              </>
            )}

            {!isLoading &&
              countries.map((country) => (
                <Country key={country.cca3} country={country} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Countries;
