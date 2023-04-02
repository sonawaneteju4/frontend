import React, { useEffect, useState } from "react";
import { FcServices } from "react-icons/fc";
// import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Revies from "../Pages/Revies";
import FAQ from "../Pages/FAQ";
import SectionUpdate from "../Pages/SectionUpdate";
import Feature from "../Pages/Feature";
import ServicesIndex from "../Pages/ServicesIndex";
import GoogleReviews from "../Pages/GoogleReviews";
import TrustedBy from "./TrustedBy";
import Location from "./Location";


import CarsouelMy from "../Pages/CarsouelMy";
import StoreFront from "../Pages/StoreFront";
import Spinner from "./Spinner";
// import { Carousel } from '../../lib';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="mt-20">
      {isLoading && <Spinner />}
      <div >
        {/* <div className="bg-white  " >
        
        <SectionUpdate />
      </div> */}
        <div
          className="mt-5"
          style={{ backgroundImage: `url("/image/Product/bgmain.png")` }}
        >
          <StoreFront />
        </div>
        <div className="bg-white lg:mt-0 sm:mt-5">
          <div className="  pb-3 rounded-2xl mx-5 ">
            {/* Feature Product */}
            {/* <CarsouelMy/> */}
            <Feature />
          </div>

          <div className=" rounded-2xl mx-5">
            
    <div className="text-5xl flex justify-center font-bold p-10">
      <span>Services</span>
      <FcServices />
    </div>
            {/* Services */}
            <ServicesIndex />
          </div>
          <div className=" pb-5 rounded-2xl mx-5">
            <Revies />
          </div>
          <div className=" pt-3 pb-5 rounded-2xl mx-5">
            <GoogleReviews />
          </div>
          <div className=" pb-5 pt-5 rounded-2xl mx-5">
            <FAQ />
          </div>

          {/* carousel  */}

          {/* Our Team */}

          {/*Trusted By*/}
          <div className="my-24 px-6 mx-auto">
            <TrustedBy />
          </div>

          {/* Maps */}
          <div className="">
            <Location />
          </div>

          {/* Top To Page  */}
        </div>
      </div>
    </div>
  );
};

export default Index;
