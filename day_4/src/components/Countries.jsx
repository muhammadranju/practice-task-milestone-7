import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();

      const sortedCountries = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sortedCountries);
    }
    getCountries();
  }, []);

  console.log(countries);
  return (
    <div className="container mx-auto">
      <h1>Countries: {countries.length}</h1>
      <div className="grid grid-cols-4 gap-4">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
