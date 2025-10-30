import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

// Define IDs para los controles de formulario y para los títulos de grupo (A11y)
const TITULO_INPUT_ID = "titulo-curso-input";
const CATEGORIA_TITLE_ID = "categoria-curso-title"; 
const TIPO_CONTENIDO_TITLE_ID = "tipo-contenido-title";
const DESCRIPCION_INPUT_ID = "descripcion-curso-input";


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
          
          {/* Título del curso - Usa <label> asociado al <input> */}
          <label className="crear-curso-label" htmlFor={TITULO_INPUT_ID}>Título del curso</label>
          <input
            id={TITULO_INPUT_ID}
            className="crear-curso-input"
            type="text"
            placeholder="Ingrese el título del curso"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
          />

          {/* Categoría - Usa un div como título y se asocia al radiogroup (Línea 94 corregida) */}
          <div className="crear-curso-label" id={CATEGORIA_TITLE_ID} style={{ fontWeight: 600, color: '#111' }}>
            Categoría
          </div>
          <div className="crear-curso-btn-group" role="radiogroup" aria-labelledby={CATEGORIA_TITLE_ID}>
            {categorias.map((cat, index) => (
              <React.Fragment key={cat}>
                <input
                  type="radio"
                  id={`cat-${index}`}
                  name="categoria"
                  value={cat}
                  checked={categoria === cat}
                  onChange={() => setCategoria(cat)}
                  // Ocultar visualmente el input nativo
                  style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                />
                <label
                  htmlFor={`cat-${index}`}
                  className={`crear-curso-btn-option${categoria === cat ? ' selected' : ''}`}
                  // Estilos para que el label se vea como un botón
                  style={{ cursor: 'pointer', padding: '10px 15px', border: '1px solid #d1d5db', borderRadius: '8px' }} 
                >
                  {cat}
                </label>
              </React.Fragment>
            ))}
          </div>

          {/* Tipo de Contenido - Usa un div como título y se asocia al radiogroup (Línea 121 corregida) */}
          <div className="crear-curso-label" id={TIPO_CONTENIDO_TITLE_ID} style={{ fontWeight: 600, color: '#111' }}>
            Tipo de Contenido
          </div>
          <div className="crear-curso-btn-group" role="radiogroup" aria-labelledby={TIPO_CONTENIDO_TITLE_ID}>
            {tiposContenido.map((tipo, index) => (
              <React.Fragment key={tipo}>
                <input
                  type="radio"
                  id={`tipo-${index}`}
                  name="tipoContenido"
                  value={tipo}
                  checked={tipoContenido === tipo}
                  onChange={() => setTipoContenido(tipo)}
                  // Ocultar visualmente el input nativo
                  style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                />
                <label
                  htmlFor={`tipo-${index}`}
                  className={`crear-curso-btn-option${tipoContenido === tipo ? ' selected' : ''}`}
                  // Estilos para que el label se vea como un botón
                  style={{ cursor: 'pointer', padding: '10px 15px', border: '1px solid #d1d5db', borderRadius: '8px' }}
                >
                  {tipo}
                </label>
              </React.Fragment>
            ))}
          </div>

          {/* Breve descripción / objetivo - Usa <label> asociado al <input> */}
          <label className="crear-curso-label" htmlFor={DESCRIPCION_INPUT_ID}>Breve descripción / objetivo</label>
          <input
            id={DESCRIPCION_INPUT_ID}
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

// Se añade la validación de PropTypes
CrearCursoModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
};

export default CrearCursoModal;