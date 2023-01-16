import React from "react";
import { categories } from "../Category-item/categories";
import CategoryItem from "../Category-item/CategoryItem";

const Directory = () => {
  return (
    // categories container
    <div className=" p-2 w-full flex flex-wrap justify-between">
      {/* category container */}
      {categories.map((categories) => (
        <CategoryItem categories={categories} key={categories.id} />
      ))}
    </div>
  );
};

export default Directory;
