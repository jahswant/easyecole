import { useEffect, useState } from "react";
import axios from "axios";
import EquipmentCard from "../components/EquipmentCard";
import CreateEquipmentForm from "../components/CreateEquipmentForm";

const EquipmentsPage = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/equipment`)
      .then(response => {
        console.log(response.data); // Vérification de la structure des données
        setEquipments(response.data.data.equipments || []); // Accès correct aux données
      })
      .catch(error => console.error("Erreur :", error));
  }, []);

  const handleDelete = (id) => {
    setEquipments(equipments.filter(equipment => equipment.id !== id));
  };

  return (
    <div>
      <h2>Liste des équipements</h2>
      <CreateEquipmentForm />
      <div className="list">
        {equipments.length > 0 ? (
          equipments.map(equipment => (
            <EquipmentCard key={equipment.id} equipment={equipment} onDelete={handleDelete} />
          ))
        ) : (
          <p>Aucun équipement trouvé.</p> // Message en cas d'absence de données
        )}
      </div>
    </div>
  );
};

export default EquipmentsPage;
