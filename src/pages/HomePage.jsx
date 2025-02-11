import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section" style={{ textAlign: "center" }}>
        <h1>Bienvenue sur l'application de Gestion Scolaire</h1>
        <p>Gérez facilement vos utilisateurs, départements, matières et bien plus encore.</p>

        <div className="quick-actions">
          <h2>Actions Rapides</h2>
          <div className="actions-grid">
            <Link to="/users" className="action-link">
              <i className="fas fa-users"></i>
              <span>Gérer les Utilisateurs</span>
            </Link>
            <Link to="/departments" className="action-link">
              <i className="fas fa-building"></i>
              <span>Voir les Départements</span>
            </Link>
            <Link to="/subjects" className="action-link">
              <i className="fas fa-book"></i>
              <span>Consulter les Matières</span>
            </Link>
            <Link to="/labs" className="action-link">
              <i className="fas fa-flask"></i>
              <span>Laboratoires</span>
            </Link>
            <Link to="/equipments" className="action-link">
              <i className="fas fa-tools"></i>
              <span>Équipements</span>
            </Link>
            <Link to="/roles" className="action-link">
              <i className="fas fa-user-tag"></i>
              <span>Rôles et Permissions</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;