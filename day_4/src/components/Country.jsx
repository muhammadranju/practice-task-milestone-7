/* eslint-disable react/prop-types */

const Country = ({ country }) => {
  console.log(country);
  return (
    <div className="border rounded-xl shadow-md p-6 space-y-4 bg-slate-100">
      <img
        className="w-full h-64 object-cover rounded-xl"
        src={country.flags.svg}
        alt={`Flag of ${country?.name.common}`}
      />
      <h3 className="font-bold text-xl">
        Name: <span className="text-3xl font-bold">{country?.name.common}</span>
      </h3>
      <div className="flex gap-1 justify-between">
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
      <div className="flex justify-around">
        <button className="bg-blue-500 text-white p-3 px-5 font-bold hover:bg-blue-700 rounded-lg ">
          Visited
        </button>
        <button className="bg-green-500 text-white p-3 px-5 font-bold hover:bg-green-700 rounded-lg ">
          Mark
        </button>
      </div>
    </div>
  );
};

export default Country;
