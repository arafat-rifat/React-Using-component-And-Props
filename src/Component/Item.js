import React from "react";

const Item = (props) => {
  console.log("🚀 ~ file: Item.js:4 ~ Item ~ props:", props);

  return (
    <div className="px-4 py-4  flex justify-center shadow-lg hover:shadow-xl mt-8 rounded-lg bg-white">
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <div className="rounded-lg h-48 w-48">
          <img src={props.img} alt="pizza" className="w-full h-full" />
        </div>

        <h3 className="font-semibold text-black-300 text-black-400 text-2xl">
          {props.name}
        </h3>
        <p className="font-light text-black text-lg">
          Chicken,Tommato,onion,garlic,chesse
        </p>
        <h3 className="font-semibold text-black text-lg">
          Price : {props.price}Tk
        </h3>
        <a
          href="#"
          className="lg:px-5 lg:py-2 border-2 border- text-black rounded-[6px] bg-yellow-300"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

export default Item;
