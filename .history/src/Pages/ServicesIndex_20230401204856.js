import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import servicesDB from '../StaticDB/servicesDB';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import Spinner from '../component/Spinner';
import ServiceCard from './ServiceCard';


// const API =  axios.create({ 
//  baseURL : "http://localhost:5000/api/services/getservices" 
// })
const API = "http://localhost:5000/api/services/getservices" 

const ServicesIndex = () => {
  const [loading, setLoading] = useState(true)
  // const [data, setdata] = useState([])
  // useEffect(()=>{
  //   axios.get("")
  // })

  

  let navigate = useNavigate();
  
  const [services, setservices] = useState([]);

  const fetchApiData = async(url) => {
    try {
        const res = await fetch(url);
        setLoading(true)
        const data = await res.json();
        setservices(data)
        setLoading(false)
        console.log(data)
      } catch (error) {
        console.log(error)
        
      }
    }
  
    useEffect(()=>{
  fetchApiData(API)
  },[])
  // const service = ()=>{
  //   setdata(servicesDB)
  // }
  // const [data, setdata] = useState(second)


  
  return (
    <div className='h-screen'>
    {loading && <Spinner />}
        
   
    
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 m-5">
    {
      services.map((item)=>
       
 <NavLink to={`/servicesComp/${item._id}`} key={item._id} className="text-center" >
       <div className='relative'>
        {/* <img
          src={item.img}
          alt={item.title + "Service"}
          className="contrast-50  hover:contrast-100"
          ></img>
          <div className='absolute bottom-3  left-0 right-0 text-center text-2xl font-bold font-serif px-4'>{item.title}</div> */}
          <ServiceCard img={item.img} title={item.title} category={item.category} description={item.description} />
          </div>
       
      </NavLink>
        )
      }
     

    </div>
   
  </div>
  )
}

export default ServicesIndex