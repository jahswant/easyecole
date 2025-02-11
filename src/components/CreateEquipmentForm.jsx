import { useState } from "react";
import axios from "axios";

const CreateEquipmentForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    modele: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/equipment`, formData);
      alert("Équipement ajouté !");
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="nom" placeholder="Nom" onChange={handleChange} required />
      <input type="text" name="modele" placeholder="Modèle" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <button type="submit">Créer</button>
    </form>
  );
};

export default CreateEquipmentForm;
