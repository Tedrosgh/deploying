import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="Navigation p-3 border-bottom">
    <ul className="d-flex">
      <li className="me-3">
        <NavLink exact to="/">
          Recipe List
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/add">
          Add New Recipe
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
