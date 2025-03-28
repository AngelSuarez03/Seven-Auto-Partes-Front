import "../../../styles/UI/CartItemStyle.css";
import buje from "../../../assets/buje.jpg"

function CartItem(props) {
    return (
        <div className="cart-item">
            <img className="cart-item-image" src={buje} alt={props.Descripcion} />

            <div className="cart-item-details">
                <p className="cart-item-description">Filtro de Aire SYD-234</p>
                <p className="cart-item-availability">Disponible</p>

                <div className="cart-item-quantity">
                    <button className="quantity-btn">-</button>
                    <span className="quantity-value">1</span>
                    <button className="quantity-btn">+</button>
                </div>
            </div>

            <div className="cart-item-price">
                $ 450.00
            </div>
        </div>
    );
}

export default CartItem;
