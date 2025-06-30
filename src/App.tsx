
// Importo los componentes y utilidades principales de React Router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/LoginCorporativo'; // Componente de login corporativo
import Home from './components/Home'; // Página principal protegida
import ProtectedRoute from './components/ProtectedRoute'; // HOC para proteger rutas
import './App.css';


function App() {
  return (
    <Router>
      {/* Contexto de rutas para toda la app */}
      <div className="App">
        <Routes>
          {/* Ruta de login: muestra el formulario de login */}
          <Route path="/login" element={<Login />} />

          {/* Ruta protegida: solo se accede si hay usuario logueado */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />

          {/* Redirección automática de la raíz a /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Cualquier ruta no definida redirige a /login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
