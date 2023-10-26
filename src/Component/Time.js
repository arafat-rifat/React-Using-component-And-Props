import React from "react";

const Time = () => {
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();
  const closingHour = 11;
  const openingHour = 9;
  const isOpen = hour >= openingHour && hour <= closingHour;

  return (
    <div>
      <h1 className="text-xl text-yellow-800 text-center my-10 font-bold flex justify-center items-center">
        {hour} : {min}: {sec}
        <span className="font-normal text-2xl flex flex-col lg:flex-row ">
          <h1>--We're Currently {isOpen ? "Open!!" : "Close!!"}</h1>
        </span>
      </h1>
    </div>
  );
};

export default Time;
