import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

const Header = ()=> {
    const onlineStatus = UseOnlineStatus();
    const [btnName, setBtnName] = useState("Login");
    const cartItems = useSelector((store)=>store.cart.items)
    return (
        <div className="flex justify-between shadow-lg  w-[100%]">
            <div className="logo">
                <img  className="w-24 p-2" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex items-center justify-evenly pr-3 text-lg font-normal">
                  <li className="px-5">onlineStatus:{onlineStatus?<span className="animate-pulse">🟢</span> :<span className="animate-ping">🔴</span> }</li>
                  <li className="px-5"><Link className="link" to="/">Home</Link></li>
                  <li className="px-5"><Link className="link" to="/about">AboutUs</Link></li>
                  <li className="px-5"><Link className="link" to="/contactclass">Contact</Link></li>
                  <li className="px-5  text-lg"><Link to="/cart">🛒<span className="rounded-[70%] px-2  bg-yellow-200 text-red">{cartItems.length}</span></Link></li>
                  <button className=" bg-slate-400 p-1 w-20 rounded-lg" onClick={()=>{
                    btnName=="Login"? setBtnName("Logout"): setBtnName("Login");
                  }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;