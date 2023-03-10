import { Link } from "react-router-dom";
import "./header.css";

const Header = props => {
  const { currentPage } = props;

  return (
    <header className="continuum-global-header">
      <div className="continuum-global-header-logo">
        <Link to="/">A</Link>
      </div>

      <nav className="continuum-global-nav">
        <Link to="/" className={currentPage === 'home' ? 'continuum-global-link--current' : null}>Home</Link>
        <Link to="/pricing" className={currentPage === 'pricing' ? 'continuum-global-link--current' : null}>Pricing</Link>
        <Link to="/services"className={currentPage === 'services' ? 'continuum-global-link--current' : null} >Services</Link>
      </nav>
    </header>
  );
}

export default Header;
