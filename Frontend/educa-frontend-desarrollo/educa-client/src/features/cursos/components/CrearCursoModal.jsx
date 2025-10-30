import React, { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';

const categorias = [
  'Nutrición',
  'Cocina Saludable',
  'Seguridad alimentaria',
  'Ciencia'
];

const tiposContenido = [
  'Texto + voz + video animado con avatar IA',
  'Texto + voz generada por IA',
  'Solo texto'
];

const CrearCursoModal = ({ onClose, onNext }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipoContenido, setTipoContenido] = useState('');
  const [descripcion, setDescripcion] = useState('');

  return (
    <div
      className="cursos-container"
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '32px 16px 0 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        className="crear-curso-modal"
        style={{
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: 0,
        }}
      >
        <button className="modal-close-btn" onClick={onClose}>
          <X size={24} />
        </button>
        <button
          className="modal-back-btn"
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'none',
            border: 'none',
            color: '#0a2540',
            fontSize: '1rem',
            fontWeight: 500,
            cursor: 'pointer',
            marginBottom: 16,
            marginTop: 8
          }}
        >
          <ArrowLeft size={20} />
          Volver a cursos
        </button>
        <h2 className="crear-curso-title">Formulario de Creación de Curso</h2>
        <p className="crear-curso-desc">Ingrese los detalles de su curso a continuación.</p>
        <form className="crear-curso-form" onSubmit={e => { e.preventDefault(); onNext(); }}>
          <label className="crear-curso-label">Título del curso</label>
          <input
            className="crear-curso-input"
            type="text"
            placeholder="Ingrese el título del curso"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
          />

          <label className="crear-curso-label">Categoría</label>
          <div className="crear-curso-btn-group">
            {categorias.map(cat => (
              <button
                type="button"
                key={cat}
                className={`crear-curso-btn-option${categoria === cat ? ' selected' : ''}`}
                onClick={() => setCategoria(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <label className="crear-curso-label">Tipo de Contenido</label>
          <div className="crear-curso-btn-group">
            {tiposContenido.map(tipo => (
              <button
                type="button"
                key={tipo}
                className={`crear-curso-btn-option${tipoContenido === tipo ? ' selected' : ''}`}
                onClick={() => setTipoContenido(tipo)}
              >
                {tipo}
              </button>
            ))}
          </div>

          <label className="crear-curso-label">Breve descripción / objetivo</label>
          <input
            className="crear-curso-input"
            type="text"
            placeholder="Describa el objetivo del curso"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            required
          />

          <button className="crear-curso-submit-btn" type="submit">
            Generar con IA
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearCursoModal;
