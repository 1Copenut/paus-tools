import { Link } from "react-router-dom";
import "./header.css";

const Header = props => {
  const { currentPage } = props;

  return (
    <header className="continuum-global-header">
      <nav className="continuum-global-nav">
        <Link to="/" className={currentPage === 'home' ? 'continuum-global-link--current' : null}>Home</Link>
        <Link to="/invoices" className={currentPage === 'invoices' ? 'continuum-global-link--current' : null}>Invoices</Link>
        <Link to="/expenses"className={currentPage === 'expenses' ? 'continuum-global-link--current' : null} >Expenses</Link>
      </nav>
    </header>
  );
}

export default Header;
