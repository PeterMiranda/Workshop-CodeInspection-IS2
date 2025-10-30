import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from './shared/components/layout/Sidebar/Sidebar';
import { Header } from './shared/components/layout/Header/Header';

// Importa las páginas
import Dashboard from "./features/dashboard/Dashboard";
import Cursos from "./features/cursos/Cursos";
import Simulaciones from "./features/simulaciones/Simulaciones";
import SeguimientoAprendizaje from "./features/seguimiento-aprendizaje/SeguimientoAprendizaje";
import AdministracionEquipos from "./features/administracion-equipos/AdministracionEquipos";
import BibliotecaRecursos from "./features/biblioteca-recursos/BibliotecaRecursos";
import Comunidad from "./features/comunidad/Comunidad";
import SoporteTecnico from "./features/soporte-tecnico/SoporteTecnico";
import Ajustes from "./features/ajustes/Ajustes";
import Logout from "./features/logout/Logout";

const routeTitles = {
  '/dashboard': 'Dashboard',
  '/cursos': 'Mis cursos',
  '/simulaciones': 'Simulaciones',
  '/seguimiento-aprendizaje': 'Seguimiento del aprendizaje',
  '/administracion-equipos': 'Administración de Equipos',
  '/biblioteca-recursos': 'Biblioteca de recursos',
  '/comunidad': 'Comunidad',
  '/soporte-tecnico': 'Soporte Técnico',
  '/ajustes': 'Ajustes',
  '/logout': 'Cerrar sesión',
};

function MainLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const location = useLocation();
  const title = routeTitles[location.pathname] || 'Mi Dashboard';

  const sidebarWidth = isExpanded ? 260 : 80;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f6f8fa' }}>
      <Sidebar
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <div
        style={{
          flex: 1,
          marginLeft: sidebarWidth,
          transition: 'margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          width: `calc(100% - ${sidebarWidth}px)`,
        }}
      >
        <div
          style={{
            position: 'fixed',
            top: 0,
            width: `calc(100% - ${sidebarWidth}px)`,
            zIndex: 100,
            transition: 'width 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            background: '#ffffff',
          }}
        >
          <Header title={title} />
        </div>
        <main
          style={{
            flex: 1,
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '104px 32px 32px 32px',
            boxSizing: 'border-box',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/simulaciones" element={<Simulaciones />} />
                <Route path="/seguimiento-aprendizaje" element={<SeguimientoAprendizaje />} />
                <Route path="/administracion-equipos" element={<AdministracionEquipos />} />
                <Route path="/biblioteca-recursos" element={<BibliotecaRecursos />} />
                <Route path="/comunidad" element={<Comunidad />} />
                <Route path="/soporte-tecnico" element={<SoporteTecnico />} />
                <Route path="/ajustes" element={<Ajustes />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;