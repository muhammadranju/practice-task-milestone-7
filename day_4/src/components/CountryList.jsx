/* eslint-disable react/prop-types */

const CountryList = ({ country }) => {
  console.log(country);
  return (
    <div className="flex lg:flex-row flex-col border rounded-xl shadow-md p-6 lg:space-x-4 bg-slate-100">
      <img
        className="lg:w-5/12 lg:h-96 object-cover rounded-xl"
        src={country.flags.svg}
        alt={`Flag of ${country?.name.common}`}
      />

      <div className="lg:space-y-5 text-xl font-medium">
        <h3 className="font-semibold text-4xl">
          Name:{" "}
          <span className="text-4xl font-bold">{country?.name.common}</span>
        </h3>

        <div className="flex flex-col space-y-1 ">
          <span>
            Official Name:{" "}
            <span className="font-bold">{country?.name?.official}</span>
          </span>
          <span>
            Capital City: <span className="font-bold">{country?.capital}</span>
          </span>
          <span>
            Region: <span className="font-bold">{country?.region}</span>
          </span>
          <span>
            Symbol: <span className="font-bold">{country?.idd.root}</span>
          </span>
        </div>

        <ul>
          {country?.population && (
            <li>
              Population:{" "}
              <span className="font-bold">
                {country?.population.length !== 0
                  ? country?.population
                  : " N/A"}
              </span>
            </li>
          )}
          {country?.fifa && (
            <li>
              Country Short Name:{" "}
              <span className="font-bold">{country?.fifa}</span>
            </li>
          )}
          <li>
            Time Zones: <span className="font-bold">{country?.timezones}</span>
          </li>
        </ul>

        <div className="flex flex-row lg:w-44 space-x-3 justify-around">
          <button className="bg-blue-500 text-white p-3 px-5 font-bold hover:bg-blue-700 rounded-lg ">
            Visited
          </button>
          <button className="bg-green-500 text-white p-3 px-5 font-bold hover:bg-green-700 rounded-lg ">
            Mark
          </button>
        </div>
      </div>

      {/* <div className="flex flex-col gap-1 justify-between">
        <div className="flex flex-col space-y-1">
          <span>
            Capital: <span className="font-bold">{country?.capital}</span>
          </span>
          <span>
            Region: <span className="font-bold">{country?.region}</span>
          </span>
          <span>
            Symbol: <span className="font-bold">{country?.idd.root}</span>
          </span>
        </div>
        <ul>
          {country?.population && (
            <li>
              Population:{" "}
              <span className="font-bold">
                {country?.population.length !== 0
                  ? country?.population
                  : " N/A"}
              </span>
            </li>
          )}
          {country?.fifa && (
            <li>
              FIFA: <span className="font-bold">{country?.fifa}</span>
            </li>
          )}
        </ul>
      </div>
      <div className="flex flex-col w-44 space-y-3 justify-around">
        <button className="bg-blue-500 text-white p-3 px-5 font-bold hover:bg-blue-700 rounded-lg ">
          Visited
        </button>
        <button className="bg-green-500 text-white p-3 px-5 font-bold hover:bg-green-700 rounded-lg ">
          Mark
        </button>
      </div> */}
    </div>
  );
};

export default CountryList;
