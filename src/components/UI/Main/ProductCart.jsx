import "../../../styles/UI/ProductCartStyle.css";
import CartItem from "./CartItem";

function ProductCart(props) {
    return (
        <div className="cart-container">
            <fieldset className="display-products">
                <div className="cart-header">
                    <h4>Carrito</h4>
                    <p>Precio</p>
                </div>
                <div className="cart-items-container">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <p>Subtotal (x productos): <b>$xxxx.xx</b></p>
            </fieldset>

            <div className="cart-summary">
                <fieldset className="cart-price">
                    <p>Subtotal (X productos): ${props.PrecioTotal}</p>
                    <input type="submit" value="Proceder al pago" className="buy-button" />
                </fieldset>

                <div className="advertisement-cart">
                    <div className="advertisement-rectangle-cart">
                        <h4>Publicidad</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;
