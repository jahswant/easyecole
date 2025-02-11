import { useState } from "react";
import axios from "axios";

const CreateRoleForm = () => {
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/roles`, formData);
      console.log("Rôle ajouté avec succès :", response.data);
      alert("Rôle ajouté !");
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
      if (error.response) {
        console.error("Détails de l'erreur :", error.response.data);
        alert(`Erreur : ${error.response.data.message || "Erreur lors de la création du rôle"}`);
      } else {
        alert("Erreur réseau ou serveur injoignable !");
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Titre du rôle :</label>
      <input
        type="text"
        name="titre"
        placeholder="Titre du rôle"
        value={formData.titre}
        onChange={handleChange}
        required
      />

      <label>Description :</label>
      <textarea
        name="description"
        placeholder="Description du rôle"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <button type="submit">Créer le rôle</button>
    </form>
  );
};

export default CreateRoleForm;
