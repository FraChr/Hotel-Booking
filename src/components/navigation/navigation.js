import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/">Hotell navn</Link>
      </h1>
      <ul>
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
