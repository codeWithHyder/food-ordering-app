import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import ContactFunction from "./components/ContactFunction";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import BodyContainer from "./components/BodyContainer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = ()=> {
    return(
      <div className="app-container">
            <Header />
            <Outlet />
        {/* footer */}
      </div>
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
        path: "*",
        element: <Error />
     }

    ]
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// use of jsx