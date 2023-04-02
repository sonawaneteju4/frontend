import React from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
// import { useTypewriter } from "react-simple-typewriter";
import CountUp, {useCountUp} from 'react-countup';

const Revies = () => {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    
  });
    
  return (
    <>
      <div className="pt-10">
        <div>
          <p className="font-bold text-5xl text-blue-800 text-center mb-8">
            {" "}
            What Google Say About Us?
          </p>
          <div className="grid lg:grid-cols-4 sm:grid-cols-1  lg:gap-4 sm:gap-2 divide-gray-300">
            <div className=" mt-5 bg-slate-50 rounded-xl mx-5 py-5 shadow-xl">
              <p className="text-2xl font-extrabold text-center text-sky-600">
              <CountUp end={2000} duration={5} enableScrollSpy/> +
                <span className="text-xl font-bold text-black">monthly</span>{" "}
              </p>
              <p className="text-2xl font-extrabold text-center text-black">
                Coustomers{" "}
              </p>
            </div>
            <div className=" mt-5 bg-slate-50 rounded-xl mx-5 py-5 shadow-xl">
              <p className="text-2xl font-extrabold text-center text-sky-600 flex justify-center">
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                <AiFillStar />{" "}
                <span className="text-xl font-bold text-black">(4.9/5)</span>{" "}
              </p>
              <p className="text-2xl font-extrabold text-center text-black">
                Google Map Revies{" "}
              </p>
            </div>
            <div className=" mt-5 bg-slate-50 rounded-xl mx-5 py-5 shadow-xl">
              <p className="text-2xl font-extrabold text-center text-sky-600 flex justify-center">
              <CountUp end={17000} duration={5} enableScrollSpy/> + <HiOutlineEmojiHappy />
                <span className="text-xl font-bold text-black">Happy</span>{" "}
              </p>
              <p className="text-2xl font-extrabold text-center text-black">
                Coustomers{" "}
              </p>
            </div>
            <div className=" mt-5 bg-slate-50 rounded-xl mx-5 py-5 shadow-xl">
              <p className="text-2xl font-extrabold text-center text-sky-600">
              <CountUp end={20000}  duration={5} enableScrollSpy/> +
                <span className="text-xl font-bold text-black">monthly</span>{" "}
              </p>
              <p className="text-2xl font-extrabold text-center text-black">
                Visits{" "}
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Revies;
