import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './component/Product';
import Login from './component/Login';
import Services from './component/Services';
import Gallery from './component/Gallery';
import ProductInfo from './Pages/ProductInfo';
import Cart from './component/Cart';
import Index from './component/Index';
import Footer from './component/Footer';
import ContactUs from './component/ContactUs';
import {BsFillArrowUpCircleFill} from "react-icons/bs";
import { useEffect, useState } from 'react';
import ServiceComp from './Pages/ServiceComp';
import NotFound from './Pages/NotFound';
import ContactusAdmin from './admin/ContactusAdmin';
import UserIndex from './userPages/UserIndex';
import GetQoute from './component/GetQoute';
import CreateAccount from './component/CreateAccount';
import AdminDashbord from './admin/AdminDashbord';
import QuoteService from './Pages/QuoteService';


function App() {
 
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div
    //  className='bg-gradient-to-r from-purple-500 to-pink-500'
     >
      <BrowserRouter>
          <Navbar />
         
          <div className='bg-white'>

          <Routes>
          
            <Route exact path="/product" element={<Product />}></Route>
            <Route exact path="/*" element={<NotFound />}></Route>
            <Route exact path="/oops404PageNotFound!" element={<NotFound />}></Route>
            <Route exact path="/gallery" element={<Gallery />}></Route>
            <Route exact path="/productinfo/:_id" element={<ProductInfo />}></Route>
            <Route  path="/" element={<Index />}></Route>
            <Route  path="/home" element={<Index />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route exact path="/contactus" element={<ContactUs />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/servicesComp/:_id" element={<ServiceComp/>}></Route>
            <Route exact path="/adminDashboard" element={<AdminDashbord/>}></Route>
            <Route exact path="/adminDashboard/contactus" element={<ContactusAdmin/>}></Route>
            <Route exact path="/user" element={<UserIndex /> }></Route>
            <Route exact path="/getqoute" element={<GetQoute/> }></Route>
            <Route exact path="/getqoute/getService" element={<QuoteService/> }></Route>
            <Route exact path="/createuser" element={<CreateAccount /> }></Route>
           
            </Routes>
              </div>
            <Footer/>
            </BrowserRouter>
    </div>
  );
}

export default App;
