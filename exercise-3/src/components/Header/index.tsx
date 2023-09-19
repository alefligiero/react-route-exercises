import { Link } from "react-router-dom";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="site-container">
        <Link to={"/"}>
          <h1>MeuSite</h1>
        </Link>
        <div className="navbar-items">
          <div className="navbar-item">
            <NavLink
              className={({ isActive }) => (isActive ? "menu-active" : "")}
              to={"/"}
            >
              Início
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink
              className={({ isActive }) => (isActive ? "menu-active" : "")}
              to={"/promotion"}
            >
              Promoção
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink
              className={({ isActive }) => (isActive ? "menu-active" : "")}
              to={"/registration"}
            >
              Participar
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}