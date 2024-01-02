import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
// import { Link } from "react-router-dom";
import Login from "./Login";
import Cart from "./Cart";
import { Navigate } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import { useContext } from "react";
import { stateContext } from "../App";
// import Header from "./Header";

const Signin= ()=>{
  const sharedState =useContext(stateContext);
  const {loggedInUser, setLoggedInUser} = sharedState;
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
   let matchedUser= '';
  const [data , setData]= useState([]);
  useEffect(()=>{
    const getUserCredentials= async ()=>{
      const getDataResponse = await axios.get("http://127.0.0.1:8000/api/registration/");
      // const json = await getDataResponse.json();
        setData(getDataResponse.data)
        // Handle successful registration (e.g., show success message)
        // console.log(getDataResponse.data);
        
    }
    getUserCredentials();
  },[]);

    const formik = useFormik({
        initialValues:{
            // name: "",
            email:"",
            password:"",
            // confirm_password:""
        },

        validationSchema: yup.object({
        //    name: yup.string().max(25).min(2).required("Required"),
           email: yup.string().email().required("Required"),
           password: yup.string().required("Required"),
        //    confirm_password: yup.string().oneOf([yup.ref('password'),null], 'password must match').required("Required")  
        }),
        onSubmit: (values) => {
         matchedUser = data.find(
        (item) => item.email === values.email && item.password === values.password
      );

      if (matchedUser) {
        console.log('Welcome!', matchedUser);
        // Redirect to '/cart' if email and password match
        // Update state only if logged-in user data is not set
        setLoggedInUser(matchedUser.name)
        navigate('/payment');
        
      } else {
        console.log( matchedUser);
        setLoginError(true);
        // Handle case where no matching user is found
      }

      formik.resetForm();
    },
         
    })
    return(
        <div className="bg-gray-200 w-100 h-screen py-2 mt-[6rem]">
        <div className="bg-white  w-[350px] h-[300px] mx-auto  my-5 flex flex-col rounded-lg P-3 border border-gray-300">
          <div className="text-center my-5 text-2xl font-sans font-bold"><h3>Login</h3></div>
          <div>
            <form onSubmit={formik.handleSubmit}>
                
                {/* <div className="w-[90%] h-14 mx-5 flex flex-col align-middle my-5 rounded-lg">   
                    <input  className="w-[100%] border border-maroon-400 p-2 rounded-md" 
                    type="text"
                    name="name" 
                    id="name" 
                    placeholder="Name"  
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <p className="text-red-500 text-sm">{formik.errors.name}</p>: null}
                </div> */}
                
                
                 <div className="w-[90%] h-12 mx-5 flex flex-col align-middle my-5  rounded-lg">  
                    <input  className="w-[100%] border border-maroon-400 p-2 rounded-md " 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    />
                    {formik.errors.email ? <p className="text-red-500 text-sm">{formik.errors.email}</p>: null}
                  </div>
                
                
                  <div className="w-[90%] h-12 mx-5 flex flex-col align-middle my-5  rounded-lg"> 
                    <input className="w-[100%] border border-maroon-400 p-2 rounded-md" 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password" 
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    />
                    {formik.errors.password ? <p className="text-red-500 text-sm">{formik.errors.password}</p>: null}
                   </div>
                
                
                  {/* <div className="w-[90%] h-12 mx-5 flex flex-col align-middle my-5  rounded-lg">   
                    <input  className="w-[100%] border border-maroon-400 p-2 rounded-md " 
                    type="password" 
                    name="confirm_password" 
                    id="confirm_password" 
                    placeholder="Confirm Password"  
                    onChange={formik.handleChange}
                    value={formik.values.confirm_password}
                    />
                    {formik.errors.confirm_password ? <p className="text-red-500 text-sm">{formik.errors.confirm_password}</p>: null}
                  </div> */}
                
                
                 {/* <div className="w-20 ml-5 h-10 bg-orange-400 p-2 flex justify-center rounded-lg"> <button type="submit">Register</button> </div>   */}
                <div className="h-50 mx-5"><button type="submit" className="bg-red-500 rounded-md w-20 h-[100%]  text-white text-md p-1.5 hover:bg-red-800 delay-100">Login</button></div>
                
              
                {/* {data.find((item)=>item.email=== formik.values.email && item.password===formik.values.password)?<Link to="/cart"></Link>: <p>Email or password did not match</p>} */}
               
            </form>
            {loginError ===true  &&  <p className="text-sm text-red-700 mx-5">email or password did not match</p>}  
          </div>
         
          </div>
        
        </div>
    )
}

export default Signin;