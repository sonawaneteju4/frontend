import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsBox } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import { BiPaperPlane } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { BsFillSave2Fill } from "react-icons/bs";
import { GiHomeGarage } from "react-icons/gi";
import Cart from "./Cart";
// import { Bars3Icon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <>
      <nav
        className="lg:flex lg:justify-between sm:hidden  md:block md:w-auto
       px-2 sm:px-4 py-2.5 h-20 bg-black fixed lg:w-full top-0 mt-0 z-10 sm:w-max"
      >
        {
          !mobileMenuOpen ? (
            <>
            <div className="lg:hidden sm:bg-black text-white">
            <img
                src="/image/logo.png"
                className="m-2 sm:h-20 sm:w-20 lg:h-12 w-12"
                alt="logo"
              ></img>
            </div>

            
             <div className="sm:hidden lg:w-full md:block md:w-auto ">
          <ul  className="text-white order-first flex flex-col lg:bg-black sm:flex sm:flex-row sm:bg-slate-900">
            <Link to="/">
              <img
                src="/image/logo.png"
                className="m-2 sm:hidden lg:block lg:h-12 w-12"
                alt="logo"
              ></img>
            </Link>
            <li className="m-5 sm:block  lg:flex hover:text-lg">
              <span className=" m-1 text-xl">
                <GiHomeGarage />
              </span>
              <Link
                to="/"
                className={`hover:text-lg  ${
                  location.pathname === "/" ? "text-sky-500" : ""
                }  `}
              >
                Home
              </Link>
            </li>
            <li className="m-5 flex hover:text-lg">
              <span className=" m-1 text-xl">
                <BsBox />
              </span>
              <Link
                to="/product"
                className={`hover:text-lg  ${
                  location.pathname === "/product" ? "text-sky-500" : ""
                }  `}
              >
                Product
              </Link>
            </li>
            <li className="m-5 flex hover:text-lg">
              <span className=" m-1 text-xl">
                <BsGear />
              </span>
              <Link
                to="/services"
                className={`hover:text-lg  ${
                  location.pathname === "/services" ? "text-sky-500" : ""
                }  `}
              >
                {" "}
                Services
              </Link>
            </li>
            <li className="m-5 flex hover:text-lg">
              <span className=" m-1 text-xl">
                <TfiGallery />
              </span>
              <Link
                to="/gallery"
                className={`hover:text-lg  ${
                  location.pathname === "/gallery" ? "text-sky-500" : ""
                }  `}
              >
                {" "}
                Gallery
              </Link>
            </li>
            <li className="m-5 flex hover:text-lg">
              <span className=" m-1 text-xl">
                <BsFillSave2Fill />
              </span>
              <Link
                className={`hover:text-lg  ${
                  location.pathname === "/getqoute" ? "text-sky-500" : ""
                }  `}
                to="/getqoute"
              >
                Get Qoutes
              </Link>
            </li>
            <li className="m-5 flex hover:text-lg">
              <span className=" m-1 text-xl">
                <FcAbout />
              </span>
              <Link
                className={`hover:text-lg  ${
                  location.pathname === "/blogs" ? "text-sky-500" : ""
                }  `}
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li className="m-5 flex hover:text-lg">
              <span className=" m-1 text-xl">
                <BiPaperPlane />
              </span>
              <Link
                className={`hover:text-lg  ${
                  location.pathname === "/contactus" ? "text-sky-500" : ""
                }  `}
                to="/contactus"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="order-last">
            <ul className="text-white flex"></ul>
          </div>
        </div>


        {/* section login serch and cart */}
        <div className="">
          <ul className="text-white order-first flex">

          
          <li className="m-5 flex hover:text-xl">
            <Link
            to="/cart"
              className={`hover:text-lg  ${
                location.pathname === "/cart" ? "text-sky-500" : ""
              }  `}            >
                
              <FiShoppingCart />
            </Link>
          </li>
          {!sessionStorage.getItem("token") ? (
            <li className="m-5 flex hover:text-xl!">
              <Link
                className={`hover:text-lg  ${
                  location.pathname === "/login" ? "text-sky-500" : ""
                }  `}
                to="/login"
              >
                <AiOutlineUser />
              </Link>
            </li>
          ) : (
            <li className="m-5 flex hover:text-xl text-sky-500">
              <Link
                className={`hover:text-lg  ${
                  location.pathname === "/login" ? "text-sky-500" : ""
                }  `}
                to="/login"
              >
                <AiOutlineUser />
              </Link>
            </li>
          )}
                  </ul>
        </div>

            </>
          )
            : null
        }
       
        <div className="flex lg:hidden sm:w-full">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <span className="h-6 w-6" aria-hidden="true" > X </span>
            </button>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            > 
              <span className="sr-only">Open main menu</span>
              <span className="h-6 w-6" aria-hidden="true" > + </span>
            </button>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
