import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserSubjectsPage = () => {
  const { id } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/users/${id}/subjects`)
      .then(response => {
        const data = response.data.data;
        if (data.length > 0) {
          setUser(data[0].subject_user);
        }
        setSubjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des matières :", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement des données...</p>;

  return (
    <div>
      <h2>Matières de l'utilisateur {user ? user.id : id}</h2>
      {subjects.length > 0 ? (
        <div className="subject-list">
          {subjects.map(subject => (
            <div key={subject.id} className="subject-card">
              <img
                src={`${import.meta.env.VITE_SERVER_URL}/images/${subject.image}`}
                alt={subject.nom}
                className="subject-image"
              />
              <h3>{subject.nom}</h3>
              <p><strong>Code :</strong> {subject.code}</p>
              <p><strong>Description :</strong> {subject.description}</p>
              <p><strong>Statut :</strong> {subject.statut}</p>
              <p><strong>Département ID :</strong> {subject.DepartmentId}</p>
              <p><strong>Laboratoire ID :</strong> {subject.LaboratoryId}</p>
              <p><small>Inscrit le : {new Date(subject.subject_user.createdAt).toLocaleDateString()}</small></p>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucune matière trouvée pour cet utilisateur.</p>
      )}
    </div>
  );
};

export default UserSubjectsPage;
