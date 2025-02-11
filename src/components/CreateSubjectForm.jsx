import { useState } from "react";
import axios from "axios";

const CreateSubjectForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    code: "",
    description: "",
    statut: "",
    DepartmentId: "",
    LaboratoryId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/subjects`, formData);
      alert("Matière ajoutée !");
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="nom" placeholder="Nom" onChange={handleChange} required />
      <input type="text" name="code" placeholder="Code" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input type="text" name="statut" placeholder="Statut (optionnel/requis)" onChange={handleChange} required />
      <input type="number" name="DepartmentId" placeholder="ID Département" onChange={handleChange} required />
      <input type="number" name="LaboratoryId" placeholder="ID Laboratoire" onChange={handleChange} required />
      <button type="submit">Créer</button>
    </form>
  );
};

export default CreateSubjectForm;
