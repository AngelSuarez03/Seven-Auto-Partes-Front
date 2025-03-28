import { useState } from "react";
import "../styles/Layout/CartStyle.css"
import Footer from "../components/Layout/Footer";
import HeaderMain from "../components/Layout/Header";
import ProductCart from "../components/UI/Main/ProductCart";

function Cart() {
    return (
        <div className="cart-page">
            <HeaderMain />
            <div className="content">
                <ProductCart />
            </div>
            <Footer />
        </div>
    );
}

export default Cart;