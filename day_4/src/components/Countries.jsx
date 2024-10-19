import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import CardPlaceholder from "../UI/CardPlaceholder";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      <div className="container mx-auto mt-5">
        <h1 className="text-3xl font-bold my-5">
          Countries: {countries.length > 0 ? countries.length : "Loading..."}
        </h1>
        <div className="grid grid-cols-4 gap-4">
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
      </div>
    </>
  );
};

export default Countries;
