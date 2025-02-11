import { useEffect, useState } from "react";
import axios from "axios";
import RoleCard from "../components/RoleCard";
import CreateRoleForm from "../components/CreateRoleForm";

const RolesPage = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/roles`)
      .then(response => {
        console.log(response.data); // Vérification de la structure des données
        setRoles(response.data.data || []); // Accès correct aux données
      })
      .catch(error => console.error("Erreur :", error));
  }, []);

  const handleDelete = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  return (
    <div>
      <h2>Liste des rôles</h2>
      <CreateRoleForm />
      <div className="list">
        {roles.length > 0 ? (
          roles.map(role => (
            <RoleCard key={role.id} role={role} onDelete={handleDelete} />
          ))
        ) : (
          <p>Aucun rôle trouvé.</p> // Message en cas d'absence de données
        )}
      </div>
    </div>
  );
};

export default RolesPage;
