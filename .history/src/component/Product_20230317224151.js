import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ProductView from "../Pages/ProductView";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../context/FilterContext";
import ProductElem from "../Pages/ProductElem";
import Spinner from "./Spinner";
import SearchButton from "../Pages/SearchButton";
import Rhombus from "../helper.js/Rhombus";

const API = "http://localhost:5000/api/product/fetchproduct";

const Product = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setproduct] = useState([]);
  const [category, setCategory] = useState("");
  const [sortType, setSortType] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      setLoading(true);
      const data = await res.json();
      setproduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let url = API;
    if (category || category === "") {
      url += `?category=${category}`;
    }
    if (sortType === "priceAsc") {
      url += "&sort=price";
    } else if (sortType === "priceDesc") {
      url += "&sort=-price";
    } else if (sortType === "dateDesc") {
      url += "&sort=-Date";
    }
    if (searchTerm) {
      url += `&name=${searchTerm}`;
    }
    fetchData(url);
  }, [category, sortType, searchTerm]);

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const { filter_products } = useFilterContext();

  return (
    <>
      <div className="mt-20 h-max">
        <div className="flex justify-between items-center p-1">
          <div className="flex  pl-5 pr-10">
            <Rhombus onClick={() => setCategory("")} value={"All Product"} />
            <Rhombus onClick={() => setCategory("mobile")} value={"Mobile"} />
            <Rhombus onClick={() => setCategory("laptop")} value={"Laptop"} />
            <Rhombus
              onClick={() => setCategory("accessories")}
              value={"Accessories"}
            />
          </div>

          <div
            className="flex p-3 pl-10 relative items-center bg-stone-300"
            style={{
              borderRadius: 0,
              clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-y-0  left-10 flex items-center pl-5 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-black dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <SearchButton onChange={(e) => setSearchTerm(e.target.value)} />
            {/* <input
              type="search"
              className="rounded-2xl block w-full px-8 py-2 text-sm text-black   mx-2 text-center "
              placeholder="Type To Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            /> */}
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center  bg-gray-100/95">
          <div className="px-5">
            {" "}
            {`${filter_products.length}: Product avaible`}{" "}
          </div>
          <div className="order-last mr-8">
            <FormControl
              htmlFor="sort-select"
              sx={{ m: 1, minWidth: 120 }}
              size="small"
            >
              <InputLabel id="demo-select-small">Sort</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
                value={sortType}
                onChange={handleSortChange}
              >
                <MenuItem value="All Product" onClick={() => setCategory("")}>
                  <em>All Product</em>
                </MenuItem>
                <MenuItem value="dateDesc">New Launch</MenuItem>
                <MenuItem value="priceAsc">Low To High</MenuItem>
                <MenuItem value="priceDesc">High To Low</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <hr />
        {loading && <Spinner />}
        <div>
          <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 bg-white p-5">
            {Array.isArray(product) && product.length > 0 ? (
              product.map((items) => (
                <div key={items._id}>
                  <ProductElem
                    _id={items._id}
                    name={items.name}
                    image={items.image}
                    price={items.price}
                    description={items.description}
                    category={items.category}
                  />
                </div>
              ))
            ) : product ? (
              <div key={product._id}>
                <ProductElem
                  _id={product._id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center h-screen">
                <p className="text-center bg-black text-4xl text-white">
                  Ohhh No Product Found ?
                </p>
              </div>
            )}
          </div>
        </div>

        {/* {loading && <Spinner  />} */}
      </div>
    </>
  );
};

export default Product;
