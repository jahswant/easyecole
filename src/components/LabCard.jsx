import axios from "axios";
import { Link } from "react-router-dom";

const LabCard = ({ lab, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/laboratories/${lab.id}`);
      onDelete(lab.id);
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  return (
    <div className="card">
      <h3>{lab.nom}</h3>
      <p>Salle : {lab.salle}</p>
      <button onClick={handleDelete} className="delete-button">Supprimer</button>
      <Link to={`/labs/${lab.id}`}>Voir les détails</Link>
    </div>
  );
};

export default LabCard;
