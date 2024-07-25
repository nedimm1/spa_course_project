import { NavLink } from "react-router-dom";
import "./PageNav.module.css"; // Assuming you want to style it with a separate CSS file

const PageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" activeClassName="active-link">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" activeClassName="active-link">
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
