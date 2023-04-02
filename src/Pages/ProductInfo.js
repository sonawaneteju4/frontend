import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FiShoppingCart } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGlobleContext } from "../context/context";
import Spinner from "../component/Spinner";
import PageNavigation from "./PageNavigation";
import FormatPrice from "../helper.js/FormatPrice";
import LoginComp from "../component/LoginComp";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { SiBlueprint } from "react-icons/si";
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";
import Feature from "../Pages/Feature";
import { useNavigate } from "react-router-dom";
const API = "https://backend-production-9640.up.railway.app/api/product/fetchproduct";




//https://gist.githubusercontent.com/hanse/4458506/raw/a702c19d07bd7693ee75efef18502c421b565949/phones.json
const mobileBrand = [
  { label: "Samsung" },
  { label: "Apple" },
  { label: "One+" },
  { label: "Real Me" },
  { label: "Asus" },
  { label: "Nothing Phone" },
  { label: "Oppo" },
  { label: "Vivo" },
  { label: "Nokia" },
];

const mobileDevice = [
  { label: "Galaxy S21 Ultra", brand: "Samsung" },
  { label: "Galaxy S21", brand: "Samsung" },
  { label: "Galaxy A52", brand: "Samsung" },
  { label: "Nord", brand: "One+" },
  { label: "8T", brand: "One+" },
  { label: "Galaxy Note 20", brand: "Samsung" },
  { label: "Galaxy Z Fold2", brand: "Samsung" },
  { label: "iPhone 13 Pro", brand: "Apple" },
  { label: "iPhone 13", brand: "Apple" },
  { label: "iPhone SE", brand: "Apple" },
  { label: "OnePlus 9 Pro", brand: "OnePlus" },
  { label: "OnePlus 9", brand: "OnePlus" },
  { label: "OnePlus Nord 2", brand: "OnePlus" },
  { label: "Realme 8 Pro", brand: "Realme" },
  { label: "Realme GT", brand: "Realme" },
  { label: "Asus Zenfone 8", brand: "Asus" },
  { label: "Asus ROG Phone 5", brand: "Asus" },
  { label: "Nothing Phone 1", brand: "Nothing" },
  { label: "Nothing Phone 2", brand: "Nothing" },
  { label: "Oppo F19 Pro+", brand: "Oppo" },
  { label: "Oppo Reno5 Pro 5G", brand: "Oppo" },
  { label: "Vivo X70 Pro+", brand: "Vivo" },
  { label: "Vivo Y72 5G", brand: "Vivo" },
  { label: "Nokia G50", brand: "Nokia" },
  { label: "Nokia XR20", brand: "Nokia" },
  { label: "Google Pixel 6 Pro", brand: "Google" },
  { label: "Google Pixel 6", brand: "Google" },
  { label: "Motorola Edge 20 Pro", brand: "Motorola" },
  { label: "Motorola Moto G Stylus 5G", brand: "Motorola" },
  { label: "Xiaomi Mi 11 Ultra", brand: "Xiaomi" },
  { label: "Xiaomi Mi 11 Lite", brand: "Xiaomi" },
  { label: "Huawei P50 Pro", brand: "Huawei" },
  { label: "Huawei P50", brand: "Huawei" },
];

const ProductInfo = () => {
  const [loading, setloading] = useState(false)
  const [showLogin, setshowLogin] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const [showModalmain, setshowModalmain] = useState(false);
  const [filteredMobileDevices, setFilteredMobileDevices] =
    useState(mobileDevice);

  const [modalImage, setModalImage] = useState(null);
  const [devices, setDevices] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");



  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  // const [data, setdata] = useState()
  const handleModal = () => {
    setshowModal(!showModal);
  };

  useEffect(() => {
    getSingleProduct(`${API}?_id=${_id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { _id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useGlobleContext();

  const handleBrandChange = (event, value) => {
    if (value !== null) {
      const filteredDevices = mobileDevice.filter(
        (device) => device.brand === value.label
      );
      setSelectedBrand(value.label);
      setDevices(filteredDevices);
    } else {
      setSelectedBrand(null);
      setDevices([]);
    }
  };

  const handleDeviceChange = (event, value) => {
    if (value !== null) {
      setSelectedDevice(value.label);
    } else {
      setSelectedDevice(null);
    }
  };

 
  // useEffect(()=>{
  //   fetch("https://gist.githubusercontent.com/hanse/4458506/raw/a702c19d07bd7693ee75efef18502c421b565949/phones.json",{
  //     method : "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": sessionStorage.getItem("token"),
  //     },
  //     body: JSON.stringify(data),
  //   })
  // })

  useEffect(() => {
    if (selectedBrand) {
      setFilteredMobileDevices(
        mobileDevice.filter((device) => device.brand === selectedBrand.label)
      );
    } else {
      setFilteredMobileDevices(mobileDevice);
    }
  }, [selectedBrand]);

  const {
    _id: alias,
    name,
    price,
    image,
    link,
    category,
    rating,
    shiping,
    type,
    color,
    stock,
    description,
  } = singleProduct;

  console.log("Prod", singleProduct);
  // console.log("img",  e);

  const data = {
    productId: _id,
    price,
    quantity: 1,
    brand: selectedBrand?.label, // pass the label of the selected brand
    device: selectedDevice?.label
  
  };
 const navigate = useNavigate();
 
  const handleAddToCart = () => {
    if (sessionStorage.getItem("token")) {
      setshowLogin(false);
      fetch("https://backend-production-9640.up.railway.app/api/cart/addtocart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          navigate("/cart");
        } else {
          // Handle error response
        }
      })
      .catch((error) => {
        // Handle fetch error
      });
    } else {
      setshowLogin(true);
    }
  };

  const handleLoginSuccess = () => {
  setloading(false)
  };




  return (
    <div key={alias} className="mt-20 bg-white">
      <PageNavigation title={name} category={category} />
      {isSingleLoading && <Spinner />}
      <div className="flex lg:flex-row sm:flex-col">
        <div className="basis-8/12">
          <div className="">
            <div className="h-80 w-80 ml-auto mr-auto m-5 ">
              <img
                src={image}
                alt="Two each of gray, white, and black shirts laying flat."
                className="h-full w-full object-cover object-cente rounded-2xl hover:contrast-50 cursor-pointer"
                onClick={() => setshowModalmain(true)}
              />
            </div>
            <div className="flex justify-center">
              {Array.isArray(link) &&
                link.map((item, index) => (
                  <div key={index} className="h-40 w-40 m-3">
                    <img
                      src={item}
                      alt={`Model wearing plain ${color} basic tee.`}
                      className="h-full w-full object-cover object-center rounded-xl cursor-pointer"
                      onClick={() => {
                        setModalImage(item);
                        setshowModal(true);
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="basis-1/3  lg:mr-5 sm:mx-5">
          <div className="mt-3">
            <p className="text-xl sm:text-center lg:text-left font-mono font-bold">3M Mobile Wrap</p>
          </div>
          <div className="mt-3">
            <h1 className="text-2xl sm:text-center lg:text-left font-extrabold">{name}</h1>
          </div>
          <div className="mt-3">
            <p className="text-base sm:text-center lg:text-left font-normal text-slate-700">
              {description}
            </p>
          </div>
          <div className="mt-3 flex items-baseline sm:justify-center lg:justify-start">
            <div>
              <p className="text-2xl pr-5 font-bold ">
                <span className="p-1 font-bold ">
                  <FormatPrice price={price} />
                </span>
              </p>
            </div>
            <div>
              <p className="text-base pr-5 font-extralight">
                <span className="p-1 font-bold line-through">
                  <FormatPrice price={price + 200} />
                </span>
              </p>
            </div>
          </div>
          <hr />
          <div className="sm:flex sm:justify-center lg:justify-start">
            Available:{" "}
            <span>
              {stock > 0
                ? "In stock"
                : "Not Available (Check Back After Some Hour)"}
            </span>
          </div>
          <hr className="mt-2" />
          <div className="flex">
            <div
              style={{ backgroundColor: "whitesmoke" }}
              className="basis-1/4 h-24 w-full mr-5 mt-2 rounded-xl  flex flex-col justify-center items-center"
            >
              <span className="object-center mb-2">
                <CiDeliveryTruck className="h-10 w-10" />
              </span>
              <p className="text-xs px-2 text-center">
                5-7 Days Express Delivery
              </p>
            </div>

            <div
              style={{ backgroundColor: "whitesmoke" }}
              className="basis-1/4 h-24 w-full mr-5 mt-2 rounded-xl  flex flex-col justify-center items-center"
            >
              <span className="object-center mb-2">
                <img src="/image/3m.png" className="h-10 w-10 grayscale" />
              </span>
              <p className="text-xs px-2 text-center">
                3M <br />
                Material
              </p>
            </div>
            <div
              style={{ backgroundColor: "whitesmoke" }}
              className="basis-1/4 h-24 w-full mr-5 mt-2 rounded-xl  flex flex-col justify-center items-center"
            >
              <span className="object-center mb-2">
                <MdOutlineLocalOffer className="h-10 w-10" />
              </span>
              <p className="text-xs px-2 text-center">Upto 50% Off</p>
            </div>
            <div
              style={{ backgroundColor: "whitesmoke" }}
              className="basis-1/4 h-24 w-full mr-5 mt-2 rounded-xl  flex flex-col justify-center items-center"
            >
              <span className="object-center mb-2">
                <SiBlueprint className="h-10 w-10" />
              </span>
              <p className="text-xs px-2 text-center">
                Print Your Own Design Available
              </p>
            </div>
          </div>
          <hr className="mt-2" />

          <div className="mt-5 flex my-1 lg:justify-between sm:justify-center">
            <div>
              <Autocomplete
                id="brand"
                options={mobileBrand}
                getOptionLabel={(option) => option.label}
                sx={{ width: 300 }} 
                onChange={(event, value) => setSelectedBrand(value)}
                renderInput={(params) => (
                  
                  <TextField {...params} label="Brand" variant="outlined" />
                )}
              />
            </div>
            <div className="mx-2">
              <Autocomplete
                id="device"
                options={filteredMobileDevices}
                getOptionLabel={(option) => option.label}
                onChange={(event, value) => setSelectedDevice(value)}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Device" variant="outlined" />
                )}
                filterOptions={(options, { inputValue }) =>
                  options.filter(
                    (option) =>
                      option.brand === selectedBrand?.label &&
                      option.label
                        .toLowerCase()
                        .indexOf(inputValue.toLowerCase()) !== -1
                  )
                }
              />
            </div>
          </div>

          {/* Cart Toggle */}
          <div className="mt-5 flex lg:justify-end  sm:justify-center items-center" disabled={stock === 0}>
            {/* <CartToggle setIncrease={setIncrease} setDecrease={setDecrease} amount={amount} stock={stock}/> */}

            <div className="lg:mr-5  sm:m-1">
              <button
                disabled={stock === 0}
                style={{
                  backgroundColor: `${stock > 0 ? "#050505" : "#808080"}`,
                }}
                className="flex items-center  text-white hover:bg-slate-900 rounded-3xl px-5 p-3"
                to="#"
                onClick={handleAddToCart}
              >
                <span className="px-2">
                  <FiShoppingCart />
                </span>
                {stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
            <div className="   ">
              <a
                disabled={stock === 0}
                style={{
                  backgroundColor: `${stock > 0 ? "#050505" : "#808080"}`,
                }}
                target="_blank"
                className="flex items-center text-white hover:bg-slate-900 rounded-3xl px-5 p-3"
                href={`https://wa.me/919421041540?text=OrderProductWithId-%20${_id}%20${name}%20${color}`}
              >
                <span className="px-2 text-green-500">
                  <IoLogoWhatsapp />
                </span>
                {stock > 0 ? "Buy On Whatsapp" : "Out of Stock"}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-max pt-5 m-5">
          <hr />
          <Feature />
        </div>
        <div className="flex">
          <div className="basis-1/2">Product Overwiew</div>
          <div className="basis-1/2">How To USe </div>
        </div>

        {showModalmain ? (
          <>
            <div
              className="fixed top-0 left-0 right-0 backdrop-sepia-0 bg-white/10 backdrop-blur-sm bottom-0 z-50 flex items-center justify-center cursor-zoom-out"
              onClick={() => setshowModalmain(false)}
            >
              <button
                className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-gray-900 opacity-50 blur-sm"
                onClick={() => setshowModalmain(false)}
              ></button>
              <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt="modal"
                    className="w-96 ml-auto mr-auto"
                  />
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div>
        {showModal ? (
          <div
            className="fixed top-0 backdrop-sepia-0 bg-white/10 backdrop-blur-sm left-0 right-0 bottom-0 z-50 flex items-center justify-center cursor-pointer"
            onClick={() => setshowModal(false)}
          >
            <button
              className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-gray-900 opacity-50 blur-sm"
              onClick={() => setshowModal(false)}
            ></button>
            <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={modalImage}
                  alt="modal"
                  className="w-96 ml-auto mr-auto cursor-pointer"
                />
              </div>
            </div>
          </div>
        ) : null}
        {showLogin ? (
          <div
            className="fixed top-20 backdrop-sepia-0 bg-black/50 backdrop-blur-sm left-0 right-0 bottom-0 z-50 flex items-center justify-center cursor-pointer"
            // onClick={() => setshowModal(false)}
          >
              <LoginComp link="" onLoginSuccess={handleLoginSuccess} setloading={setloading}  onClose={() => setshowLogin(false)} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductInfo;
