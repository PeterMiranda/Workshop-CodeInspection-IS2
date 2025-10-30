import React, { useState } from 'react';
import { PlusCircle, Search } from 'lucide-react';
import { CursoCard } from '../components/CursoCard';
import { CrearCursoModal } from '../components/CrearCursoModal';
import { AsignarUsuariosModal } from '../components/AsignarUsuariosModal';
import { mockCursos } from '../mocks/mock-cursos';
import '../styles/Cursos.css';

export const CursosPage = () => {
  const [search, setSearch] = useState('');
  const [orden, setOrden] = useState('');
  const [showCrear, setShowCrear] = useState(false);
  const [showAsignar, setShowAsignar] = useState(false);

  const cursosFiltrados = mockCursos.filter(c =>
    c.titulo.toLowerCase().includes(search.toLowerCase())
  );

  if (showAsignar) {
    return (
      <AsignarUsuariosModal onBack={() => setShowAsignar(false)} />
    );
  }

  if (showCrear) {
    return (
      <CrearCursoModal
        onClose={() => setShowCrear(false)}
        onNext={() => {
          setShowCrear(false);
          setShowAsignar(true);
        }}
      />
    );
  }

  return (
    <div className="cursos-container">
      <div className="cursos-toolbar">
        <select
          className="cursos-ordenar"
          value={orden}
          onChange={e => setOrden(e.target.value)}
        >
          <option value="">Ordenar por</option>
          <option value="titulo">Título</option>
          <option value="estado">Estado</option>
          <option value="inscritos">Inscritos</option>
        </select>
        <div className="cursos-buscar">
          <Search size={18} className="cursos-buscar-icon" />
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="cursos-grid">
        {cursosFiltrados.map((curso, idx) => (
          <CursoCard key={idx} curso={curso} />
        ))}
      </div>
      <div className="cursos-crear-btn-container">
        <button className="cursos-crear-btn" onClick={() => setShowCrear(true)}>
          <PlusCircle size={28} />
          Crear curso
        </button>
      </div>
    </div>
  );
};
