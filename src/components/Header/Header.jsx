import NavLinkComp from "../NavLink/NavLink";
import {Link} from "react-router-dom";
import {ReactComponent as UserSvg} from "./icons/user.svg";
import {ReactComponent as CartSvg} from "./icons/cart.svg";
import {ReactComponent as UserWhiteSvg} from "./icons/user-white.svg";
import {ReactComponent as CartWhiteSvg} from "./icons/cart-white.svg";
import './Header.scss';
import {useContext} from "react";
import {MenuContext} from "../../context";

const Header = () => {

    // I used context for hide everything except Header menu, I think in this case better use Context, but for me isnt problem to do it via Redux
    const {isMenuOpen, toggleMenu} = useContext(MenuContext);


    return(
        <header className={isMenuOpen ? "header--black" : "header"}>
            {/*I styled global class container in app.css for reuse throughout the application*/}
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo-wrapper">
                        <Link to="/" className={isMenuOpen ? "header__logo white" : "header__logo"}>Logo Here</Link>
                    </div>

                    <nav className={isMenuOpen ? "header__nav-menu open" : "header__nav-menu"}>
                        {/*I made component NavLinkComp for reuse and more clean and DRY code */}
                        <NavLinkComp path="/home" componentOwner="header" color={isMenuOpen ? "#FFFFFF" : "#1F1F1F"}>Home</NavLinkComp>
                        <NavLinkComp path="/features" componentOwner="header" color={isMenuOpen ? "#FFFFFF" : "#1F1F1F"}>Features</NavLinkComp>
                        <NavLinkComp path="/blog" componentOwner="header" color={isMenuOpen ? "#FFFFFF" : "#1F1F1F"}>Blog</NavLinkComp>
                        <NavLinkComp path="/shop" componentOwner="header" color={isMenuOpen ? "#FFFFFF" : "#1F1F1F"}>Shop</NavLinkComp>
                        <NavLinkComp path="/about" componentOwner="header" color={isMenuOpen ? "#FFFFFF" : "#1F1F1F"}>About</NavLinkComp>
                        <NavLinkComp path="/contact" componentOwner="header" color={isMenuOpen ? "#FFFFFF" : "#1F1F1F"}>Contact</NavLinkComp>

                        <div className="header__user-actions">
                            <div className="header__actions-wrapper">
                                <div className="header__user-action">
                                    <Link to="/user">{isMenuOpen ? <UserWhiteSvg/> : <UserSvg/>}</Link>
                                </div>
                                <div className="header__user-action">
                                    {/*unfortunately I could not download white cart svg in right way so its little bit creepy icon when menu open*/}
                                    <Link to="/user">{isMenuOpen ? <CartWhiteSvg/> : <CartSvg/>}</Link>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className={isMenuOpen ? "header__menu-btn open" : "header__menu-btn"}
                        onClick={() => {toggleMenu()}}>
                        <div className={isMenuOpen ? "header__menu-btn--burger white" : "header__menu-btn--burger"}></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;