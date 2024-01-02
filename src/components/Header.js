import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { stateContext } from "../App";
import Logout from "./Logout";
// import { useDispatch } from "react-redux";

const Header = ()=> {
    const [showSignOut, setShowSignOut] = useState(false);
    const [activeItem, setActiveItem] = useState('home');
    const onlineStatus = UseOnlineStatus();
    // const [btnName, setBtnName] = useState("Signup");
    const sharedState = useContext(stateContext);
    const {loggedInUser,setLoggedInUser} = sharedState;
    const cartItems = useSelector((store)=>store.cart.items)

    // const linkStyles ={
    //     textDecoration: isUnderLine? 'underline': 'none',
    //     cursor: 'pointer' ,
    //     // color: 'red',
    //     fontFamily: 'bold'
    // }

    // const handleStyleUnderLine=()=>{
    //     setIsUnderLine(!isUnderLine);
    // }
    
    const handleMouseClick=()=>{
        setShowSignOut(true);
    }

     const handlSetSignup=()=>{
    setLoggedInUser("Signup")
    }
    return (
        <div className="flex justify-between shadow-lg  w-[100%] fixed z-50 bg-gray-200 mb-20 top-0 mb-10">
            <div className="logo">
                <img  className="w-24 p-2" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex items-center justify-e venly pr-3 text-lg font-normal">
                  <li className="px-5">Net{onlineStatus?<span className="animate-pulse">🟢</span> :<span className="animate-ping">🔴</span> }</li>
                  <li  className='px-5'  onClick={()=>setActiveItem('home')}><Link className={activeItem ==='home'? 'border border-b-orange-800 p-1 ':''} to="/">Home</Link></li>
                  <li className="px-5"><Link className={activeItem ==='about'? 'border border-b-orange-800 p-1':''} to="/about"  onClick={()=>setActiveItem('about')}>AboutUs</Link></li>
                  <li className="px-5 "><Link className={activeItem ==='contact'? 'border border-b-orange-800 p-1' :''} to="/contactclass" onClick={()=>setActiveItem('contact')}>Contact</Link></li>
                  <li className="px-5  text-lg"><Link to="/cart" className="relative"><span className={activeItem==='cart'? 'border border-b-orange-800 p-1': ''} onClick={()=>{setActiveItem('cart')}}>🛒</span><span className=" flex justify-center items-center absolute w-[28px] h-[28px] -top-6  -right-0.5 rounded-full p-1 border border-red-500 bg-red-200"> <span>{cartItems.length}</span></span></Link></li>
                  { loggedInUser === 'Signup' ?
                   <li><button className=" bg-slate-400 p-1 w-50  rounded-lg"><Link to="/login">{loggedInUser}</Link></button></li>: 
                  <li> <button className="w-8 h-8 bg-lime-300 rounded-[50%] p-1 font-semibold" onClick={handleMouseClick}>{loggedInUser.slice(0,2)}</button> {showSignOut && (<div className="absolute top-[65px] right-5 bg-white border border-gray-400 p-2 rounded-md cursor-pointer bg-lime-200 hover:text-orange-500 font-serif w-[100px] h-[80px]" onClick={handlSetSignup}>signout</div>)}</li>
                   }
                </ul>
            </div>
        </div>
    )
};

export default Header;