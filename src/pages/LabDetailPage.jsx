import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const LabDetailPage = () => {
  const { id } = useParams();
  const [lab, setLab] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/laboratories/${id}`)
      .then(response => {
        console.log(response.data); // Vérification de la structure des données
        setLab(response.data.data); // Accès correct aux données
      })
      .catch(error => console.error("Erreur :", error));
  }, [id]);

  if (!lab) return <p>Chargement...</p>;

  return (
    <div>
      <h2>{lab.nom}</h2>
      <p>Salle : {lab.salle}</p>
      <p>Information : {lab.information}</p>
    </div>
  );
};

export default LabDetailPage;
