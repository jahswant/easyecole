import axios from "axios";
import { Link } from "react-router-dom";

const UserCard = ({ user, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/users/${user.id}`);
      onDelete(user.id);
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  return (
    <div className="card">
      <h3>{user.nom} {user.prenom}</h3>
      <p>Email : {user.email}</p>
      <p>Département ID : {user.DepartmentId}</p>
      <button onClick={handleDelete} className="delete-button">Supprimer</button>
      <Link to={`/users/${user.id}/department`}>Voir Departement</Link>
      <Link to={`/users/${user.id}`}>Voir Profil</Link>
      <Link to={`/users/${user.id}/subjects`}>Voir Matieres</Link>
    </div>
  );
};

export default UserCard;
