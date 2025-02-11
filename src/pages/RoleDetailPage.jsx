import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RoleDetailPage = () => {
  const { id } = useParams();
  const [role, setRole] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/roles/${id}`)
      .then(response => {
        console.log(response.data); // Vérification de la structure des données
        setRole(response.data); // Accès correct aux données
      })
      .catch(error => console.error("Erreur :", error));
  }, [id]);

  if (!role) return <p>Chargement...</p>;

  return (
    <div>
      <h2>{role.titre}</h2>
      <p>Description : {role.description}</p> {/* Ajout d'une description pour plus de détails */}
    </div>
  );
};

export default RoleDetailPage;
