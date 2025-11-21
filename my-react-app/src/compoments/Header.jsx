import { Link } from "react-router-dom";
import imgLogo from "../assets/logo.png";
function Header() {
  return (
    <nav className="my-2 flex items-center justify-between py-2 px-4">
      <Link to="/">
        <img src={imgLogo} alt="Logo" className="h-12 inline-block ml-3" />
      </Link>

      <ul className="flex items-center justify-end font-semibold gap-3 px-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
