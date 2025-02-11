import { useEffect, useState } from "react";
import axios from "axios";
import DepartmentCard from "../components/DepartmentCard";
import CreateDepartmentForm from "../components/CreateDepartmentForm";

const DepartmentsPage = () => {
  const [departments, setDepartments] = useState([]);

  console.log(`${import.meta.env.VITE_SERVER_URL}/departments/`);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/departments`)
      .then(response => {
        console.log(response.data); // Vérification de la structure des données
        setDepartments(response.data.data.departments || []); // Accès correct aux données
      })
      .catch(error => console.error("Erreur :", error));
  }, []);

  const handleDelete = (id) => {
    setDepartments(departments.filter(department => department.id !== id));
  };

  console.log(departments);

  return (
    <div>
      <h2>Liste des départements</h2>
      <CreateDepartmentForm />
      <div className="list">
        {departments.length > 0 ? (
          departments.map(department => (
            <DepartmentCard key={department.id} department={department} onDelete={handleDelete} />
          ))
        ) : (
          <p>Aucun département trouvé.</p> // Message en cas d'absence de données
        )}
      </div>
    </div>
  );
};

export default DepartmentsPage;
