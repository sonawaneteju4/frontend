import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper.js/FormatPrice";
import ProductOffer from "./ProductOffer";

const ProductElem = (curElem) => {
  const {_id, name, image, price, description, category } = curElem;

  return (
    <>
    {image ? (
  <NavLink to={`/productinfo/${_id}`}>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <ProductOffer /> */}
      <img
        className="w-full h-80 hover:contrast-50 transition-all ease-in-out delay-300"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-3 py-4">
        <div className="font-bold text-base mb-2 flex justify-between">
          <div>{name || "Ohh Nooo You Search Somthing Wrong "}</div>
          <div>
            <FormatPrice price={price}/>
          </div>
        </div>
      </div>
    </div>
  </NavLink>
) : (
  <div className="max-w rounded overflow-hidden shadow-lg opacity-90 cursor-not-allowed">
    <img
      className="w-full h-96"
      src="https://i.ibb.co/6rkfZ2R/Oh-Nooo-1.jpg"
      alt="Sunset in the mountains"
    />
    <div className="px-3 py-4">
      <div className="font-bold text-base mb-2 flex justify-between">
        <div>Ohh Nooo You Search Somthing Wrong?</div>
        <div>
          <FormatPrice price={69.69}/>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default ProductElem;
