import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";

import Carts from "../Ul/cart/Carts.js";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;