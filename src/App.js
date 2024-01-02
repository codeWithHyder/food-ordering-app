import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import ContactFunction from "./components/ContactFunction";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import BodyContainer from "./components/BodyContainer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signin from "./components/Signin"
import PaymentGateWay from "./components/PaymentGateWay";
import { createContext } from "react";
import Signout from "./components/Signout";

 export const stateContext = createContext();
const AppLayout = ()=> {

   

    const [loggedInUser, setLoggedInUser] = useState('Signup');
    const sharedState= {loggedInUser, setLoggedInUser};

    return(
      <Provider store={appStore}>
      <stateContext.Provider value={sharedState}>
        <div className="">
              <Header />
              <Outlet />
          {/* footer */}
        </div>
      </stateContext.Provider>
      </Provider>
    )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element:<BodyContainer/>
      },

      {
        path: "/contactclass",
        element: <Contact/>,
      },

      {
        path: "/contactfunction",
        element: <ContactFunction/>,
      },

      {
        path: "/about",
        element: <About />,
     },
     {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
     },
     {
        path: "/cart",
        element: <Cart />,
     },

     {
        path: "/login",
        element: <Login />,
     },

     {
        path: "/signout",
        element: <Signout />,
     },

      {
        path: "/signin",
        element: <Signin />,
     },

      {
        path: "/payment",
        element: <PaymentGateWay />,
     },

     {
        path: "*",
        element: <Error />
     }

    ]
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// use of jsx