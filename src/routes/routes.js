import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard';
import TenantDashboard from './pages/tenant/TenantDashboard';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Super Admin Routes */}
        <Route path="/admin/*" element={<AdminDashboard />} />

        {/* Tenant Routes */}
        <Route path="/app/*" element={<TenantDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
