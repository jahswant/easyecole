import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EquipmentDetailPage = () => {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/equipment/${id}`)
      .then(response => {
        console.log(response.data); // Vérifier la structure des données
        setEquipment(response.data.data); // Accès correct aux données
      })
      .catch(error => console.error("Erreur :", error));
  }, [id]);

  if (!equipment) return <p>Chargement...</p>;

  return (
    <div>
      <h2>{equipment.nom}</h2>
      <p>Modèle : {equipment.modele}</p>
      <p>Description : {equipment.description}</p>
    </div>
  );
};

export default EquipmentDetailPage;
