import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import UserDetailPage from "./pages/UserDetailPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetailPage from "./pages/DepartmentDetailPage";
import SubjectsPage from "./pages/SubjectsPage";
import SubjectDetailPage from "./pages/SubjectDetailPage";
import LabsPage from "./pages/LabsPage";
import LabDetailPage from "./pages/LabDetailPage";
import EquipmentsPage from "./pages/EquipmentsPage";
import EquipmentDetailPage from "./pages/EquipmentDetailPage";
import RolesPage from "./pages/RolesPage";
import RoleDetailPage from "./pages/RoleDetailPage";
import UserSubjectsPage from "./pages/UserSubjectsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetailPage />} />
          <Route path="/users/:id/subjects" element={<UserSubjectsPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="departments/:id" element={<DepartmentDetailPage />} />
          <Route path="users/:id/department" element={<DepartmentDetailPage />} />
          <Route path="subjects" element={<SubjectsPage />} />
          <Route path="subjects/:id" element={<SubjectDetailPage />} />
          <Route path="labs" element={<LabsPage />} />
          <Route path="labs/:id" element={<LabDetailPage />} />
          <Route path="equipments" element={<EquipmentsPage />} />
          <Route path="equipments/:id" element={<EquipmentDetailPage />} />
          <Route path="roles" element={<RolesPage />} />
          <Route path="roles/:id" element={<RoleDetailPage />} />
          <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
