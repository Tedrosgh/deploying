import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="Navigation p-3 border-bottom">
    <ul className="d-flex bg-secondary justify-content-between">
      <li className="me-3 list-group-item">
        <NavLink exact to="/">
          Deploy
        </NavLink>
      </li>
      <li className="list-group-item">
        <NavLink exact to="/add">
          Add New Deploy
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
