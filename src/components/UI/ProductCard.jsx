import "../../styles/UI/ProductCardStyle.css";
import buje from "../../assets/buje.jpg"

function ProductCard(props) {
    return (
        <div className="product-container">
            <div className="image-container">
                <img className="image-product" src={buje} alt="Nombre Producto" />
            </div>
            <h4 className="product-title">{props.Nombre}</h4>
            <div className="data-product-container">
                <div className="product-info-row">
                    <div style={{ marginRight:"2vw" }}>
                        <p className="data-title">Marca:</p>
                        <p className="product-data">{props.Marca}</p>
                    </div>
                    <div>
                        <p className="data-title">Sistema:</p>
                        <p className="product-data">{props.Sistema}</p>
                    </div>
                </div>
                <p className="data-title">Precio:</p>
                <p className="product-data">$ {props.Precio}</p>
            </div>
            <div className="button-container">
                <button className="add-cart-button">Añadir al Carrito</button>
            </div>
        </div>
    );
}

export default ProductCard;
