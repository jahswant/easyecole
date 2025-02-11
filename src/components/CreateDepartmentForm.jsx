import { useState } from "react";
import axios from "axios";

const CreateDepartmentForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    histoire: "",
    domaine: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/departments`, formData);
      alert("Département ajouté !");
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="nom" placeholder="Nom" onChange={handleChange} required />
      <textarea name="histoire" placeholder="Histoire" onChange={handleChange}></textarea>
      <input type="text" name="domaine" placeholder="Domaine" onChange={handleChange} required />
      <button type="submit">Créer</button>
    </form>
  );
};

export default CreateDepartmentForm;
