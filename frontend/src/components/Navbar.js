import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo  */}
      <div className="navbar__logo">
        <h2>MERn Shopping Cart</h2>
      </div>
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to='/cart'></Link>
        </li>
      </ul>

      {/* hamburger menu */}
    </nav>
  );
};

export default Navbar;
