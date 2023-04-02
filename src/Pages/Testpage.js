import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobleContext } from '../context/context';


const API = "http://localhost:3000/productinfo"
const Testpage = () => {
 const { _id } = useParams();
 const {getSingleProduct, isSingleLoading, singleProduct} = useGlobleContext();
console.log(singleProduct)


  return (
    <div>
        
    </div>
  )
}

export default Testpage