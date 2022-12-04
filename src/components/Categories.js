import React from "react";

const Categories = () => {
  return (
    <div className="gradient mx-[2rem] pl-4 pr-2 mt-8 flex items-center justify-between rounded-full  py-[0.1rem]  ">
      <ul className="flex items-center py-1.5 text-white text-[14px] gap-10">
        <li>
          <p>Explore</p>
        </li>
        <li>
          <p>Trending</p>
        </li>
        <li>
          <p>Action</p>
        </li>
        <li>
          <p>WorldCup</p>
        </li>
        <li>
          <p>Classics</p>
        </li>
        <li>
          <p>More</p>
        </li>
      </ul>

      <input
        type="search"
        placeholder="Search"
        className="pl-4 rounded-full placeholder:text-black "
      />
    </div>
  );
};

export default Categories;
