import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobleContext } from '../context/context';
import ProductElem from './ProductElem';
import Spinner from '../component/Spinner';

const CarsouelMy = () => {
  const {isLoading , featureProducts} = useGlobleContext();
  if(isLoading){
    return
  }
    var settings = {
        centerMode: true,
   centerPadding: '60px',
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 1600,
   responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 3
       }
     },
     {
       breakpoint: 480,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     }
   ]
       };
      
  return (
    <div className='grid lg:grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2'>
      
{
  featureProducts.map((curElem)=>{
    return<ProductElem key={curElem._id} {...curElem}/>;
  })
}



   
    <Slider  {...settings} data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
     
    </Slider>
    </div>
  )
}

export default CarsouelMy