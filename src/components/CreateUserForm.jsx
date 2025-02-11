import { useState } from "react";
import axios from "axios";

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    mot_de_passe: "",
    naissance: "",
    DepartmentId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/users`, formData);
      alert("Utilisateur ajouté !");
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="nom" placeholder="Nom" onChange={handleChange} required />
      <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="mot_de_passe" placeholder="Mot de passe" onChange={handleChange} required />
      <input type="date" name="naissance" onChange={handleChange} required />
      <input type="number" name="DepartmentId" placeholder="ID Département" onChange={handleChange} required />
      <button type="submit">Créer</button>
    </form>
  );
};

export default CreateUserForm;
