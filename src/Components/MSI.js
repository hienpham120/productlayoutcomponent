import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductLaptop from "./ProductLaptop";
import ProductMobile from "./ProductMobile";
import Product from "./ProductMobile";
import Slider from "./Slider";

export default class MSI extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductMobile />
        <ProductLaptop />
        <Footer />
      </div>
    );
  }
}
