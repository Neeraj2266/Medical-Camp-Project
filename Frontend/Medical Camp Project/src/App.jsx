import AdminLoginPage from "./assets/components/AdminLoginPage";
import Dashboard from "./assets/components/Dashboard";
import PatientRegistration from "./assets/components/PatientRegistration";
import ExistingUser from "./assets/components/ExistingUser";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLoginPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/register" element={<PatientRegistration />} />
      <Route path="/existing" element={<ExistingUser />} />
    </Routes>
  );
}

export default App;