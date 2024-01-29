import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";

const Main = () => (
  <React.Fragment>
    <Header />
    <Outlet />
    <Footer />
  </React.Fragment>
);

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);

const ele = ReactDOM.createRoot(document.getElementById("root"));
ele.render(<RouterProvider router={approuter}></RouterProvider>);
