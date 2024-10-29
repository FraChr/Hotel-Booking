import { Link, NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="mainNav">
      <h1 className="hotelTitle">
        <Link to="/">Hotell Nordlys</Link>
      </h1>
      <ul className="navList">
        <li>
          <NavLink exact to="/">
            Hjem
          </NavLink>
        </li>
        <li>
          <NavLink to="/overnatting">Overnatting</NavLink>
        </li>
        <li>
          <NavLink to="/meeting">Møter & Konferanser</NavLink>
        </li>
        <li>
          <NavLink to="/selskap">Selskap & Bryllup</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
