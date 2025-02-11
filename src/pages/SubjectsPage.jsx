import { useEffect, useState } from "react";
import axios from "axios";
import SubjectCard from "../components/SubjectCard";
import CreateSubjectForm from "../components/CreateSubjectForm";

const SubjectsPage = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/subjects`)
      .then(response => {
        console.log(response.data); // Vérification de la structure des données
        setSubjects(response.data.data.subjects || []); // Accès correct aux données
      })
      .catch(error => console.error("Erreur :", error));
  }, []);

  const handleDelete = (id) => {
    setSubjects(subjects.filter(subject => subject.id !== id));
  };

  return (
    <div>
      <h2>Liste des matières</h2>
      <CreateSubjectForm />
      <div className="list">
        {subjects.length > 0 ? (
          subjects.map(subject => (
            <SubjectCard key={subject.id} subject={subject} onDelete={handleDelete} />
          ))
        ) : (
          <p>Aucune matière trouvée.</p> // Message en cas d'absence de données
        )}
      </div>
    </div>
  );
};

export default SubjectsPage;
