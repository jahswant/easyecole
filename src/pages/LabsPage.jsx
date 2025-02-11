import { useEffect, useState } from "react";
import axios from "axios";
import LabCard from "../components/LabCard";
import CreateLabForm from "../components/CreateLabForm";

const LabsPage = () => {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/laboratories`)
      .then(response => {
        console.log(response.data); // Vérification de la structure des données
        setLabs(response.data.data.laboratories || []); // Accès correct aux données
      })
      .catch(error => console.error("Erreur :", error));
  }, []);

  const handleDelete = (id) => {
    setLabs(labs.filter(lab => lab.id !== id));
  };

  return (
    <div>
      <h2>Liste des laboratoires</h2>
      <CreateLabForm />
      <div className="list">
        {labs.length > 0 ? (
          labs.map(lab => (
            <LabCard key={lab.id} lab={lab} onDelete={handleDelete} />
          ))
        ) : (
          <p>Aucun laboratoire trouvé.</p> // Message en cas d'absence de données
        )}
      </div>
    </div>
  );
};

export default LabsPage;
