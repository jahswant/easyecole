import { useState } from "react";
import axios from "axios";

const CreateLabForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    salle: "",
    information: "",
    DepartmentId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/laboratories`, formData);
      alert("Laboratoire ajouté !");
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="nom" placeholder="Nom" onChange={handleChange} required />
      <input type="text" name="salle" placeholder="Salle" onChange={handleChange} required />
      <textarea name="information" placeholder="Information" onChange={handleChange}></textarea>
      <input type="number" name="DepartmentId" placeholder="ID Département" onChange={handleChange} required />
      <button type="submit">Créer</button>
    </form>
  );
};

export default CreateLabForm;
