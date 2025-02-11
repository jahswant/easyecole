import axios from "axios";
import { Link } from "react-router-dom";

const DepartmentCard = ({ department, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/departments/${department.id}`);
      onDelete(department.id);
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  return (
    <div className="card">
      <h3>{department.nom}</h3>
      <p>Domain : {department.domaine}</p>
      <button onClick={handleDelete} className="delete-button">Supprimer</button>
      <Link to={`/departments/${department.id}`}>Voir les détails</Link>
    </div>
  );
};

export default DepartmentCard;
