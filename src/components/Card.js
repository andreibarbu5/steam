import React from "react";

const Card = ({ wallpaper, title }) => {
  return (
    <div>
      <div>
        <img src={wallpaper} alt="" />
        <div className="bg-blue-800 h-[8rem]">
          <p className="text-[18px] text-white pl-4  pt-2">Christmass Deal</p>
          <p className="text-[12px] text-white pl-4  pt-2">
            Offer ending in 2 days
          </p>
          <div className="max-w-[6rem]">
            <p className="ml-4 text-[28px] text-white bg-[#5c7e10] pl-1 mt-2">
              -50%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
