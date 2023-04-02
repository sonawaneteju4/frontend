import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import Spinner from "../component/Spinner";
import ModalImg from '../Pages/ModalImg'

const API = "http://localhost:5000/api/gallery/getimages";
const Gallery = () => {
  const [gallery, setgallery] = useState([]);
  const [loading, setloading] = useState(false);
  const [showMoadl, setshowMoadl] = useState();

  const fetchApiData = async (url) => {
    try {
      setloading(true);
      const res = await fetch(url);
      const data = await res.json();
      setgallery(data);
      setloading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div className="text-black mt-20  bg-slate-600">
      <div className="text-center p-3 bg-gray-200">
        <ButtonGroup variant="text" size="large" aria-label="text button group">
          <Button className="m-2">Car Wrap</Button>
          <Button className="m-2">Bike Wrap</Button>
          <Button className="m-2">Detailing</Button>
          <Button className="m-2">Paint Protection Film</Button>
          <Button className="m-2">Mobile | Laptop Wrap</Button>
          <Button className="m-2">All</Button>
        </ButtonGroup>
      </div>
      {loading && <Spinner />}
      <div className="grid grid-cols-4 gap-4 mt-5 items-center">
        {gallery.map((items) => (
          <div className="m-2" key={items._id}>
            <img
              src={items.link}
              alt={items.title}
              className=" rounded hover:contrast-50"
              onClick={() => setshowMoadl(true)}
            ></img>
          <div>
          {showMoadl ? (
         <>
           <ModalImg image={items.link}  onClick={() => setshowMoadl(false)} />
         </>
       ) : null}
          </div>
          </div>
        ))}
      </div>
       
    </div>
  );
};

export default Gallery;
