import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout/Layout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import Products from "../pages/Products/Products";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;