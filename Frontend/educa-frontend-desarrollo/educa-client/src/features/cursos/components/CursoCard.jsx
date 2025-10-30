import React from 'react';
import { Star } from 'lucide-react';

const estadoColors = {
  'success': { background: '#16c784', color: '#fff' },
  'warning': { background: '#f5b942', color: '#fff' },
  'gray': { background: '#bdbdbd', color: '#fff' },
};

const CursoCard = ({ curso }) => (
  <div className="curso-card">
    <h3 className="curso-card__title">{curso.titulo}</h3>
    <div className="curso-card__estado">
      Estado del curso:{' '}
      <span
        className="curso-card__estado-badge"
        style={estadoColors[curso.estadoColor]}
      >
        {curso.estado}
      </span>
    </div>
    <div className="curso-card__info">
      <div>Estudiantes inscritos: <b>{curso.inscritos}</b></div>
      <div>Progreso promedio: <b>{curso.progreso !== null ? `${curso.progreso}%` : '—'}</b></div>
      <div>
        Retroalimentación:{' '}
        <b>
          <Star size={16} style={{ verticalAlign: 'middle', color: '#f5b942' }} />
          {curso.retroalimentacion !== null ? curso.retroalimentacion : '—'}
        </b>
      </div>
    </div>
    <div className="curso-card__actions">
      <button className="curso-card__btn ver">Ver curso</button>
      <button className="curso-card__btn editar">Editar</button>
      <button className="curso-card__btn eliminar">Eliminar</button>
    </div>
  </div>
);

export default CursoCard;
