import axios from "axios";
import { Link } from "react-router-dom";

const RoleCard = ({ role, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/roles/${role.id}`);
      onDelete(role.id);
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  return (
    <div className="card">
      <h3>{role.titre}</h3>
      <button onClick={handleDelete} className="delete-button">Supprimer</button>
      <Link to={`/roles/${role.id}`}>Voir les détails</Link>
    </div>
  );
};

export default RoleCard;
