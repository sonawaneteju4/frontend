import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import CreateAccount from "./CreateAccount";
import LoginComp from "./LoginComp";
import Spinner from "./Spinner";


// import TextField from '@mui/material/TextField';

const Login = () => {
  const [loading, setloading] = useState(false)
  let navigate = useNavigate();
  const [showModal, setshowModal] = useState(false)
  useEffect(()=> {
    if(sessionStorage.getItem("token")){

      navigate('/user')
    }
  
  else{
    navigate('/login')
  }},[]
  );

//   onclick = () =>{
//     setshowModal(true)
//   }
// oncancel = () =>{
//     setshowModal(false)
//   }
  return (
    <div className=" flex justify-center items-center h-screen bg-cover" style={{
      backgroundImage: `url("/image/car2.jpg")`,
    }}>
      {loading && <Spinner/>}
            <div className="mt-20 ">
        <div className="backdrop-sepia-0 bg-white/10 backdrop-blur-sm drop-shadow-xl p-10 rounded-xl ">
          <LoginComp  link={"/user"} setloading={setloading} /> 

              <button
                  className="px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                  onClick={() => setshowModal(true)}
                >
                  {/* Facebook */}
                  <span className="text-2xl px-2">
                    <AiOutlineUsergroupAdd />
                  </span>
                  Create New Account
                </button> 
        </div>

</div>
<div>
{showModal ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-center p-5 border-b border-solid border-slate-200 rounded-xl">
                  <div className="text-xl font-bold text-center">
                     Create New Account
                  </div>
                  <div
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                   
                  >
                    <span className="bg-transparent text-red-800 font-extrabold cursor-pointer text-2xl block outline-none focus:outline-none"  onClick={() => setshowModal(false)}>
                      x
                    </span>
                  </div>
                </div>
                {/*body*/}
               <div>
                
                <CreateAccount/>
               </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-black rounded-lg background-transparent uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowModal(false)}
                  >
                    Alredy Account Login?
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
</div>
    </div>
  );
};

export default Login;
