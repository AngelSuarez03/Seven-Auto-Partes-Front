import "../../styles/Layout/HeaderStyle.css";
import SearchBar from "../UI/SearchBar";
import account from "../../assets/account.svg"
import cart from "../../assets/cart.svg"

function HeaderMain() {
    return (
        <>
            <header className="header-main">
                <div className="header-item left">
                    <p className="brand">Seven AutoPartes</p>
                </div>
                <div className="header-item center">
                    <SearchBar />
                </div>
                <div className="header-item right">
                    <button className="login-button">
                        <img src={account} alt="Iniciar Sesión" className="icon" />
                        Iniciar Sesión
                    </button>
                    <button className="cart-button">
                        <img src={cart} alt="Carrito" className="icon" />
                        0
                    </button>
                </div>
            </header>

        </>
    )

}

export default HeaderMain;