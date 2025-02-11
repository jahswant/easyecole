import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/users/${id}`)
      .then(response => {
        console.log(response.data.data); 
        setUser(response.data.data); 
      })
      .catch(error => console.error("Erreur :", error));
  }, [id]);

  if (!user) return <p>Chargement...</p>;

  return (
    <div>
      <img
          src={`${import.meta.env.VITE_SERVER_URL}/images/${user.photo}`}
          alt={user.nom}
          className="image"
        />
      <h2>{user.nom} {user.prenom}</h2>
      <p>Email : {user.email}</p>
      <p>Date de naissance : {user.naissance}</p>
      <p>Département ID : {user.DepartmentId}</p>
    </div>
  );
};

export default UserDetailPage;
