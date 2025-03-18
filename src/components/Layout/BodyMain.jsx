import React, { useEffect, useState } from "react";
import "../../styles/Layout/BodyMainStyle.css"
import ProductFilter from "../UI/Main/ProductFilter";
import ProductCard from "../UI/Main/ProductCard";
import { getProducts } from "../../api/services/productService";

function BodyMain() {

    const [errorMessage, setErrorMessage] = useState("")
    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await getProducts()
            setProductsData(response.data.message)
            console.log(response.data.message)
        }
        fetchData()
    }, [])

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
                {productsData.slice(9090, 10000).map((product, index) => (
                    <ProductCard
                        key={index}
                        Id={product.Articulo}
                        Imagen={product.Imagen}
                        Descripcion={product.Descripcion}
                        Categoria={product.Categoria}
                        Linea={product.Linea}
                        Aplicacion={product.Aplicacion}
                        Precio={product.Precio}
                    />
                ))}
            </div>
        </div>
    );
}

export default BodyMain;
