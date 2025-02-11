import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DepartmentDetailPage = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/departments/${id}`)
      .then(response => setDepartment(response.data.data))
      .catch(error => console.error("Erreur :", error));
  }, [id]);

  if (!department) return <p>Chargement...</p>;

  return (
    <div>
      <h2>{department.nom}</h2>
      <p>Histoire : {department.histoire}</p>
      <p>Domaine : {department.domaine}</p>
    </div>
  );
};

export default DepartmentDetailPage;
