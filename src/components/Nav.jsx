import "./Nav.css"
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.svg"

const Nav = () => {
    return ( 
        <nav>
            <NavLink to={"/"}><img className="logo" src={Logo} alt="Beer-Logo"/></NavLink>
        </nav>
     );
}
 
export default Nav;