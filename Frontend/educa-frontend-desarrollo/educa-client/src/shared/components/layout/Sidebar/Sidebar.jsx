import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  TrendingUp, 
  Users, 
  Book, 
  Users2, 
  LifeBuoy, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { Logo } from './Logo';
import { UserSection } from './UserSection';
import { MenuItem } from './MenuItem';
import './Sidebar.css';

const MAIN_MENU_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: BookOpen, label: 'Cursos', path: '/cursos' },
  { icon: FileText, label: 'Simulaciones', path: '/simulaciones' },
  { icon: TrendingUp, label: 'Seguimiento del aprendizaje', path: '/seguimiento-aprendizaje' },
  { icon: Users, label: 'Administración de Equipos', path: '/administracion-equipos' },
  { icon: Book, label: 'Biblioteca de recursos', path: '/biblioteca-recursos' },
  
  { icon: LifeBuoy, label: 'Soporte Técnico', path: '/soporte-tecnico' },
];

const BOTTOM_MENU_ITEMS = [
  { icon: Settings, label: 'Ajustes', path: '/ajustes' },
  { icon: LogOut, label: 'Cerrar sesión', path: '/logout' },
];

export const Sidebar = ({ isExpanded, setIsExpanded, activeItem, setActiveItem }) => {
  const user = {
    name: 'Jeremy Poveda',
    role: 'Colaborador',
    avatar: 'JP'
  };

  const navigate = useNavigate();

  const handleMenuClick = (label, path) => {
    setActiveItem(label);
    if (path) navigate(path);
  };

  return (
    <aside
      className={`sidebar ${isExpanded ? 'sidebar--expanded' : 'sidebar--collapsed'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Logo isExpanded={isExpanded} />
      
      <UserSection isExpanded={isExpanded} user={user} />

      <nav className="sidebar__nav-main">
        {MAIN_MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isExpanded={isExpanded}
            isActive={activeItem === item.label}
            onClick={() => handleMenuClick(item.label, item.path)}
          />
        ))}
      </nav>

      <div className="sidebar__nav-bottom">
        {BOTTOM_MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isExpanded={isExpanded}
            isActive={activeItem === item.label}
            onClick={() => handleMenuClick(item.label, item.path)}
          />
        ))}
      </div>
    </aside>
  );
};