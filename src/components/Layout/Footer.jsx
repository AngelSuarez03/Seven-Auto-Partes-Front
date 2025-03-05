import "../../styles/Layout/FooterStyle.css";
import facebook from "../../assets/facebook.svg"
import email from "../../assets/email.svg"
import whatsapp from "../../assets/whatsapp.svg"
import phone from "../../assets/phone.svg"
import marker from "../../assets/marker.svg"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h3>Redes Sociales</h3>
                <br />
                <a href="https://www.facebook.com/profile.php?id=61563259681957"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" className="icon" />
                </a>
                <span className="social-text">SEVEN AUTOPARTES</span>
            </div>
            <div className="footer-column">
                <h3>Horarios de Atención</h3>
                <br />
                <p>Lunes a Viernes: 9:00 AM - 6:30 PM</p>
            </div>
            <div className="footer-column">
                <h3>Visítanos</h3>
                <br />
                <p><img src={marker} className="icon" alt="Ubicación" />Circunvalación 19-a, Rafael Lucio, 91110 Xalapa-Enríquez, Ver.</p>
            </div>
            <div className="footer-column">
                <h3>Contáctanos</h3>
                <br />
                <p><img src={whatsapp} className="icon" alt="WhatsApp" /> +52 228 175 5798</p>
                <p><img src={phone} className="icon" alt="Teléfono" /> +52 228 175 5798</p>
                <p><img src={email} className="icon" alt="Correo" /> ventas@sevenautopartes.com</p>
            </div>
        </footer>
    );
}

export default Footer;
