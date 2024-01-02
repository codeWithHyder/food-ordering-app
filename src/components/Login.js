import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const Login= ()=>{
    const formik = useFormik({
        initialValues:{
            name: "",
            email:"",
            password:"",
            confirm_password:""
        },

        validationSchema: yup.object({
           name: yup.string().max(25).min(2).required("Required"),
           email: yup.string().email().required("Required"),
           password: yup.string().required("Required"),
           confirm_password: yup.string().oneOf([yup.ref('password'),null], 'password must match').required("Required")  
        }),
        onSubmit: async (values) => {
      try {
        // Send a POST request to your Django API endpoint using axios
        const response = await axios.post("http://127.0.0.1:8000/api/registration/", values);

        // Handle successful registration (e.g., show success message)
        console.log("Registration successful!", response.data);
        formik.resetForm();
      } catch (error) {
        // Handle registration failure (e.g., show error message)
        console.error("Registration failed!", error.message);
      }
    },

    })
    return(
        <div className="bg-gray-400 w-100 h-screen py-2 mt-[6rem]">
        <div className="bg-white  w-[350px] h-[460px] mx-auto  my-5 flex flex-col rounded-lg P-3">
          <div className="text-center my-5 text-2xl font-sans font-bold"><h3>Registration Details</h3></div>
          <div>
            <form onSubmit={formik.handleSubmit}>
                
                <div className="w-[90%] h-14 mx-5 flex flex-col align-middle my-5 rounded-lg">   
                    <input  className="w-[100%] border border-maroon-400 p-2 rounded-md" 
                    type="text"
                    name="name" 
                    id="name" 
                    placeholder="Name"  
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <p className="text-red-500 text-sm">{formik.errors.name}</p>: null}
                </div>
                
                
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
                
                
                  <div className="w-[90%] h-12 mx-5 flex flex-col align-middle my-5  rounded-lg">   
                    <input  className="w-[100%] border border-maroon-400 p-2 rounded-md " 
                    type="password" 
                    name="confirm_password" 
                    id="confirm_password" 
                    placeholder="Confirm Password"  
                    onChange={formik.handleChange}
                    value={formik.values.confirm_password}
                    />
                    {formik.errors.confirm_password ? <p className="text-red-500 text-sm">{formik.errors.confirm_password}</p>: null}
                  </div>
                
                
                 <div className="w-20 ml-5 h-10 bg-orange-400 p-2 flex justify-center rounded-lg"> <button type="submit">Register</button> </div>  
                
            </form>
          </div>
          <div><span className="text-xs font-sans text-green-500 mx-5"> You have already account ?</span> <Link to="/signin">  <button className="bg-red-500 rounded-md w-15 text-white text-sm p-2">Login</button></Link></div>
        </div>
        </div>
    )
}

export default Login;