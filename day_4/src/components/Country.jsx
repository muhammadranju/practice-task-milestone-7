/* eslint-disable react/prop-types */

import { useState } from "react";

const Country = ({ country }) => {
  const [isVisited, setIsVisited] = useState(false);
  const [isMark, setIsMark] = useState(false);

  const handelVisit = () => {
    setIsVisited(!isVisited);
  };
  const handelMark = () => {
    setIsMark(!isMark);
  };
  return (
    <div
      className={`border rounded-xl shadow-md p-6 space-y-4 ${
        isVisited && isMark ? "bg-stone-300" : "bg-slate-100"
      } `}
    >
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
              Sorted: <span className="font-bold">{country?.fifa}</span>
            </li>
          )}
        </ul>
      </div>
      <div className="flex justify-around">
        <button
          onClick={handelVisit}
          className={`text-white p-3 px-5 font-bold rounded-lg ${
            isVisited
              ? "bg-blue-700  hover:bg-blue-700"
              : "bg-blue-500  hover:bg-blue-700"
          }`}
        >
          {isVisited ? "Visited" : "Visit"}
        </button>
        <button
          onClick={handelMark}
          className={` text-white p-3 px-5 font-bold  rounded-lg ${
            isMark
              ? "hover:bg-green-700 bg-green-700"
              : "hover:bg-green-700 bg-green-500"
          }`}
        >
          {isMark ? "Marked" : "Mark"}
        </button>
      </div>
    </div>
  );
};

export default Country;
