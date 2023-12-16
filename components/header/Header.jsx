import logoImg from "../../img/icons/logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <Link to="/" className="header__logo">
                        <img src={logoImg} alt="logo" />
                        <span>Sneakers</span>
                    </Link>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                {" "}
                                <Link to="Catalog" className="header__nav-item">CATALOGUE</Link>
                            </li>
                            <li>
                                <a href="#!">FASHION</a>
                            </li>
                            <li>
                                <a href="#!">FAVOURITE</a>
                            </li>
                            <li>
                                {" "}
                                <Link to="Cart" className="header__nav-item">CART</Link>
                            </li>
                            <li>
                                <a href="#!" className="header__nav-btn">SIGN UP</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
