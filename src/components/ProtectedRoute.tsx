// Componente para proteger rutas privadas
import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Verifico si hay usuario en localStorage (autenticado)
  const user = localStorage.getItem('user');
  
  // Si no hay usuario, redirijo a login
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  // Si hay usuario, muestro el contenido protegido
  return <>{children}</>;
};

export default ProtectedRoute;
