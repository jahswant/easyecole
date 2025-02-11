import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubjectDetailPage = () => {
  const { id } = useParams();
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/subjects/${id}`)
      .then(response => {
        console.log(response.data); // Vérification de la structure des données
        setSubject(response.data); // Accès correct aux données
      })
      .catch(error => console.error("Erreur :", error));
  }, [id]);

  if (!subject) return <p>Chargement...</p>;

  return (
    <div>
      <h2>{subject.nom}</h2>
      <p>Code : {subject.code}</p>
      <p>Description : {subject.description}</p>
      <p>Statut : {subject.statut}</p>
    </div>
  );
};

export default SubjectDetailPage;
