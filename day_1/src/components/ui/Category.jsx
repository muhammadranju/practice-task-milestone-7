/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";

const Category = () => {
  const [petCategory, setPetCategory] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/peddy/categories"
      );
      const data = await res.json();
      setPetCategory(data.categories);
    }
    getData();
  }, [petCategory]);

  return (
    <>
      {petCategory.map((items) => (
        <div className="flex justify-center items-center cursor-pointer border-[2px] rounded-xl lg:px-14 px-7 py-3 lg:space-x-4">
          <img
            src={items.category_icon}
            className="w-full h-full object-cover"
            alt="Dogs"
          />
          <span className="font-bold text-2xl">{items.category}</span>
        </div>
      ))}
    </>
  );
};

export default Category;
