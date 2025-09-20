import "./Header.css";
import "../button.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container">
        <div className="header">
          <img
            src="../assets/images/logo.svg"
            alt="Header logo"
            className="imags"
          />
          <nav className="nav-links desktop">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active-link" : "item")}
            >
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "item")}
            >
              <span>About</span>
            </NavLink>

            <NavLink
              to="/recipes"
              className={({ isActive }) => (isActive ? "active-link" : "item")}
            >
              <span>Recipes</span>
            </NavLink>
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? "active-link" : "item")}
            >
              <span>CreateRecipe</span>
            </NavLink>
          </nav>
          <button className="btn desktop">Browse recipes</button>

          <div className="tablet">
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
              <img src="../assets/images/header-icon.svg" alt="" />
            </button>
            {isOpen && (
              <div>
                <nav className="links">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive ? "active-link" : "item "
                    }
                  >
                    <span className="links-item">Home</span>
                  </NavLink>

                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "active-link" : "item "
                    }
                  >
                    <span className="links-item">About</span>
                  </NavLink>

                  <NavLink
                    to="/recipes"
                    className={({ isActive }) =>
                      isActive ? "active-link" : "item "
                    }
                  >
                    <span className="links-item">Recipes</span>
                  </NavLink>
                  <NavLink
                    to="/create"
                    className={({ isActive }) =>
                      isActive ? "active-link" : "item "
                    }
                  >
                    <span className="links-item">CreateRecipe</span>
                  </NavLink>
                  <button className="btn ">Browse recipes</button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
