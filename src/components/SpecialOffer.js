import React from "react";
import gaming from "../assets/gaming.jpg";
import Card from "./Card";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
const SpecialOffer = () => {
  const cards = [
    { wallpaper: one, title: "Gaming room" },
    { wallpaper: two, title: "Gaming room" },
    { wallpaper: one, title: "Gaming room" },
    { wallpaper: two, title: "Gaming room" },
    { wallpaper: one, title: "Gaming room" },
    { wallpaper: two, title: "Gaming room" },
    { wallpaper: one, title: "Gaming room" },
    { wallpaper: two, title: "Gaming room" },
    { wallpaper: one, title: "Gaming room" },
    { wallpaper: two, title: "Gaming room" },
  ];
  return (
    <div className="mx-[2rem]  ">
      <p className="text-white pt-6">Games on Discount</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-3">
        {cards.map((card) => (
          <Card wallpaper={card.wallpaper} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;
