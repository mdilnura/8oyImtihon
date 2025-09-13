import "./Header.css";
import "../button.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="header">
          <img src="/images/logo.svg" alt="Header logo" className="img" />
          <nav className="nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active-link" : "item")}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "item")}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "item")}
            >
              Contact
            </NavLink>
          </nav>
          <button className="btn">Browse recipes</button>
        </div>
      </div>
    </header>
  );
}
