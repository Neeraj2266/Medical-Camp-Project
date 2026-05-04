import AdminLoginPage from "./assets/components/AdminLoginPage";
import Dashboard from "./assets/components/Dashboard";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLoginPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;