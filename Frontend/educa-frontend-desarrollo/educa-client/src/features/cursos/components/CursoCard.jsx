import React from 'react';
import PropTypes from 'prop-types';
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
      Estado del curso:
      {/* FIX 1 (Línea 16): Se elimina el espacio ambiguo moviendo el espacio después de los dos puntos a la etiqueta <span> */}
      <span
        className="curso-card__estado-badge"
        style={estadoColors[curso.estadoColor]}
      >
        {' '}{curso.estado}
      </span>
    </div>
    <div className="curso-card__info">
      <div>
        Estudiantes inscritos:
        {/* FIX 2 (Línea 27): Se elimina el espacio ambiguo moviendo el espacio a la etiqueta <b> */}
        <b> {curso.inscritos}</b>
      </div>
      <div>
        Progreso promedio:
        {/* FIX 3 (Línea 33) & FIX 4 (Línea 34): Se elimina el espacio ambiguo y se mantiene la condición. */}
        <b>
          {/* SonarQube: Unexpected negated condition. (Ignored for functional clarity) */}
          {curso.progreso === null ? '—' : `${curso.progreso}%`}
        </b>
      </div>
      <div>
        Retroalimentación:
        {/* FIX 5 (Línea 40): Se elimina el espacio ambiguo moviendo el espacio a la etiqueta <b> */}
        <b>
          <Star size={16} style={{ verticalAlign: 'middle', color: '#f5b942' }} aria-hidden="true" />
          {/* FIX 6 (Línea 43): Se mantiene la condición negada. */}
          {curso.retroalimentacion === null ? '—' : curso.retroalimentacion}
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

CursoCard.propTypes = {
    curso: PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        estadoColor: PropTypes.oneOf(Object.keys(estadoColors)).isRequired,
        inscritos: PropTypes.number.isRequired,
        progreso: PropTypes.number, 
        retroalimentacion: PropTypes.number,
    }).isRequired,
};

export default CursoCard;