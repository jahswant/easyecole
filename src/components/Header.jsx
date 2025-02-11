import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">EXAMEN UA1 - GROUPE III</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/users">Utilisateurs</Link></li>
            <li><Link to="/subjects">Matières</Link></li>
            <li><Link to="/departments">Départements</Link></li>
            <li><Link to="/labs">Laboratoires</Link></li>
            <li><Link to="/equipments">Équipements</Link></li>
            <li><Link to="/roles">Rôles</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
