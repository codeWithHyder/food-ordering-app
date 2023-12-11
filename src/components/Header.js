import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=> {
    const onlineStatus = UseOnlineStatus();
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="flex justify-between shadow-2xl  w-[100%]">
            <div className="logo">
                <img  className="w-24 p-2" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex items-center justify-evenly pr-3 text-lg font-normal">
                  <li className="px-5">onlineStatus:{onlineStatus?<span className="animate-ping">🟢</span> :<span className="animate-ping">🔴</span> }</li>
                  <li className="px-5"><Link className="link" to="/">Home</Link></li>
                  <li className="px-5"><Link className="link" to="/about">AboutUs</Link></li>
                  <li className="px-5"><Link className="link" to="/contactclass">Contact</Link></li>
                  <li className="px-5">Cart</li>
                  <button className=" bg-slate-400 p-1 w-20 rounded-lg" onClick={()=>{
                    btnName=="Login"? setBtnName("Logout"): setBtnName("Login");
                  }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;