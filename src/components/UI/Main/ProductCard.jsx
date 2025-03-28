import "../../../styles/UI/ProductCardStyle.css";
import buje from "../../../assets/buje.jpg";

function ProductCard(props) {
    return (
        <div className="product-container">
            <div className="image-container">
                <img className="image-product" src={buje} alt="Imagen Producto" />
            </div>

            <div className="product-details">
                <h5 className="product-title">{props.Descripcion}</h5>
                <div className="distributor-text">{props.Linea}</div>

                <div className="product-info-row">
                    <div>
                        <p className="data-title">Categoría:</p>
                        <p className="product-data">{props.Categoria}</p>
                    </div>
                    <div style={{ marginLeft: "2vw" }}>
                        <p className="data-title">Aplicación:</p>
                        <p className="product-data">{props.Aplicacion}</p>
                    </div>
                </div>

                <div className="product-info-row">
                    <div>
                        <p className="data-title">Artículo:</p>
                        <p className="product-data">{props.Id}</p>
                    </div>
                    <div style={{ marginLeft: "2vw" }}>
                        <p className="data-title">Existencia:</p>
                        <p className="product-data">1</p>
                    </div>
                </div>

                <p className="data-title">Precio:</p>
                <p className="product-data">$ {props.Precio} MXN</p>

                <div className="button-container">
                    <button className="add-cart-button">Añadir al Carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
