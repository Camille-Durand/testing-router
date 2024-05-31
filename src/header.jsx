import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
    return (
        <div className="Header">
              <div id="HeaderMenu" className="HeaderContain">
                  <Link to={`/`}>Accueil</Link>
                  <Link to={`/gite`}>Découvrir le gîte</Link>
                  <Link to={`/region`}>Découvrir la région</Link>
                  <Link to={`/reservations`}>Réservations</Link>
                  <Link to={`/contact`}>Contact</Link>
              </div>
        </div>

    );
}

export default Header