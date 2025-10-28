import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import AddItem from "../pages/addItem/AddItem";
import SellItem from "../pages/sellItem/SellItem";
import ConsultItem from "../pages/consultItem/ConsultItem";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-item"
        element={
          <ProtectedRoute>
            <AddItem />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sell-item"
        element={
          <ProtectedRoute>
            <SellItem />
          </ProtectedRoute>
        }
      />
      <Route
        path="/consult-item"
        element={
          <ProtectedRoute>
            <ConsultItem />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
