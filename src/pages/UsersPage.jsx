import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import CreateUserForm from "../components/CreateUserForm";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/users`)
      .then(response => {
        console.log(response.data);
        setUsers(response.data.data.users || []);
      })
      .catch(error => console.error("Erreur :", error));
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  console.log(users);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <CreateUserForm />
      <div className="list">
        {users.length > 0 ? (
          users.map(user => (
            <UserCard key={user.id} user={user} onDelete={handleDelete} />
          ))
        ) : (
          <p>Aucun utilisateur trouvé.</p> // Message en cas d'absence de données
        )}
      </div>
    </div>
  );
};

export default UsersPage;
