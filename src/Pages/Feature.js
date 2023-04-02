import React from "react";
import { AiOutlineDropbox } from "react-icons/ai";
import CarsouelMy from "./CarsouelMy";

const Feature = () => {
  return (
    <>
      <div className="">
        <div className="lg:text-5xl sm:text-5xl flex justify-center font-bold mb-10 md:">
          <span className="text-yellow-300">
            <AiOutlineDropbox />
            </span>
          <span>Feature Product</span>
        </div>
        <div className="px-10">
          <CarsouelMy/>
        </div>
      </div>
    </>
  );
};

export default Feature;
