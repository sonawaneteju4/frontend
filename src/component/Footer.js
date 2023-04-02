import React from "react";
import { BsInstagram } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="shadow top-full bottom-0 left-0 w-full md:px-1 md:py-1 bg-black">
      <div className="lg:flex  lg:justify-between lg:items-center ">
        <div>
          <Link to="" className="">
            <span className="px-2 text-2xl font-normal font-mono whitespace-nowrap text-white">
              AR COUSTOMS
            </span>
          </Link>
        </div>
        <div className="pt-2">
          <ul className="flex flex-wrap  text-sm text-gray-500 ">
            <li className="px-2 pt-3">
              <a
                href="https://www.instagram.com/_wrap_on_/"
                target="_blank"
                className="mr-4 hover:underline md:mr-6 "
              >
                <span className="text-2xl text-purple-400">
                  <BsInstagram />
                </span>
              </a>
            </li>
            <li className="px-2 pt-3">
              <a
                href="https://goo.gl/maps/igdLQqepJfQC8ZtTA"
                target="_blank"
                className="mr-4 hover:underline md:mr-6"
              >
                <span className="text-2xl ">
                  <SiGooglemaps />
                </span>
              </a>
            </li>
            <li className="px-2 pt-3">
              <a
                href="https://wa.me/918087258100?text=I'm%20interested%20in%20coustomization%20car"
                target="_blank"
                className="mr-4 hover:underline md:mr-6 "
              >
                <span className="text-2xl text-green-700">
                  <FaWhatsapp />
                </span>
              </a>
            </li>
            <li className="px-2 pt-3">
              <a
                href="tel:+9180087258100"
                className="mr-4 hover:underline"
              >
                <span className="text-2xl text-green-700">
                  <AiOutlinePhone />
                </span>
              </a>
            </li>
            <li className="px-2 pt-3">
              <a
                href="tel:+9180087258100"
                
                className="mr-4 hover:underline"
              >
                <span className="text-2xl text-red-700">
                  <AiFillYoutube />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700" />
      <span className="flex justify-center items-center p-1 text-sm text-white sm:text-center ">
        © 2023{" "}
        <a href="" className="hover:underline px-1">
          <span className="">AR</span> Coustoms
        </a>
        . All Rights Reserved. |
        <span className="text-sky-600">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp; Design By- Tejas
        </span>{" "}
        <span className="text-purple-500 px-2 text-xl">
          <AiOutlineHeart />
        </span>
      </span>
    </footer>
  );
};

export default Footer;
