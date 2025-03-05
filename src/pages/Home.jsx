import BodyMain from "../components/Layout/BodyMain.jsx";
import Footer from "../components/Layout/Footer.jsx";
import HeaderMain from "../components/Layout/Header.jsx";
import "../styles/index.css"

function Home() {
    return (
        <div className="page-container">
            <HeaderMain />
            <BodyMain />
            <Footer />
        </div>
    )
}

export default Home;