import axios from "axios";
import { Link } from "react-router-dom";

const SubjectCard = ({ subject, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/subjects/${subject.id}`);
      onDelete(subject.id);
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  return (
    <div className="card">
      <h3>{subject.nom}</h3>
      <p>Code : {subject.code}</p>
      <p>Statut : {subject.statut}</p>
      <button onClick={handleDelete} className="delete-button">Supprimer</button>
      <Link to={`/subjects/${subject.id}`}>Voir les détails</Link>
    </div>
  );
};

export default SubjectCard;
