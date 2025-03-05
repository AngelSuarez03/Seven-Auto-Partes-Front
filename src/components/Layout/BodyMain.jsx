import React from "react";
import "../../styles/Layout/BodyMainStyle.css"
import ProductFilter from "../UI/ProductFilter";
import ProductCard from "../UI/ProductCard";

function BodyMain() {
    return (
        <div className="body-main-container">
            <div className="left-column">
                <ProductFilter />
                <div className="advertisement">
                    <div className="advertisement-rectangle">
                        <h4>Publicidad</h4>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <ProductCard Imagen="buje" Nombre="Buje Chico" Marca="SYD" Sistema="Motor" Precio="450"/>
            </div>
        </div>
    );
}

export default BodyMain;
