import axios from "axios";
import { Link } from "react-router-dom";

const EquipmentCard = ({ equipment, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/equipment/${equipment.id}`);
      onDelete(equipment.id);
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  return (
    <div className="card">
      <h3>{equipment.nom}</h3>
      <p>Modèle : {equipment.modele}</p>
      <button onClick={handleDelete} className="delete-button">Supprimer</button>
      <Link to={`/equipments/${equipment.id}`}>Voir les détails</Link>
    </div>
  );
};

export default EquipmentCard;
