import "../../../styles/UI/ProductCardStyle.css";
import buje from "../../../assets/buje.jpg"

function ProductCard(props) {
    return (
        <div className="product-container">
            <div className="image-container">
                <img className="image-product" src={buje} alt="Imagen Producto" />
            </div>
            <h5 className="product-title">{props.Descripcion}</h5>
            <div className="distributor-text">{props.Linea}</div>
            <div className="data-product-container">
                <div className="product-info-row">
                    <div style={{ marginRight:"2vw" }}>
                        <p className="data-title">Aplicacion:</p>
                        <p className="product-data">{props.Aplicacion}</p>
                    </div>
                    <div>
                        <p className="data-title">Sistema:</p>
                        <p className="product-data">{props.Categoria}</p>
                    </div>
                </div>
                <p className="data-title">Precio:</p>
                <p className="product-data">$ {props.Precio} MXN</p>
            </div>
            <div className="button-container">
                <button className="add-cart-button">Añadir al Carrito</button>
            </div>
        </div>
    );
}

export default ProductCard;
