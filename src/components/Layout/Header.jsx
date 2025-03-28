import "../../styles/Layout/HeaderStyle.css";
import SearchBar from "../UI/Main/SearchBar";
import account from "../../assets/account.svg"
import cart from "../../assets/cart.svg"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function HeaderMain() {

    const [user, setUser] = useState()

    useEffect(() => {
        const storedEmail = localStorage.getItem("correo");
        if (storedEmail) {
            setUser(storedEmail);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("correo");
        setUser(null);
    };

  const navigate = useNavigate();

    return (
        <>
            <header className="header-main">
                <div className="header-item left">
                    <p className="brand" onClick={() => navigate("/")}>Seven AutoPartes</p>
                </div>
                <div className="header-item center">
                    <SearchBar />
                </div>
                <div className="header-item right">
                {user ? (
                        <div className="user-info">
                            <p>{user}</p>
                            <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
                        </div>
                    ) : (
                        <button className="login-button" onClick={() => navigate("/login")}>
                            <img src={account} alt="Iniciar Sesión" className="icon" />
                            Iniciar Sesión
                        </button>
                    )}
                    <button className="cart-button" onClick={() => navigate("/cart")}>
                        <img src={cart} alt="Carrito" className="icon" />
                        0
                    </button>
                </div>
            </header>

        </>
    )

}

export default HeaderMain;