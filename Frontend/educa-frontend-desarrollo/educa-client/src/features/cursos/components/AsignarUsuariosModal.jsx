import React, { useState } from 'react';
import PropTypes from 'prop-types'; // FIX 1: Importar PropTypes
import { X, ArrowLeft } from 'lucide-react';
import { mockDepartamentos, mockEquipos, mockUsuarios } from '../mock-cursos';

// Se asigna un ID a la etiqueta de input para enlazarla con el label (Líneas 97, 155, 213)
const DEPARTAMENTO_INPUT_ID = "dep-input";
const EQUIPO_INPUT_ID = "equipo-input";
const USER_INPUT_ID = "user-input";

// FIX 1: Añadir validación de props para 'onBack'
const AsignarUsuariosModal = ({ onBack }) => {
  const [depInput, setDepInput] = useState('');
  const [equipoInput, setEquipoInput] = useState('');
  const [userInput, setUserInput] = useState('');
  const [selectedDeps, setSelectedDeps] = useState([]);
  const [selectedEquipos, setSelectedEquipos] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const depSuggestions = mockDepartamentos.filter(
    d => d.toLowerCase().includes(depInput.toLowerCase()) && !selectedDeps.includes(d)
  );
  const equipoSuggestions = mockEquipos.filter(
    e => e.toLowerCase().includes(equipoInput.toLowerCase()) && !selectedEquipos.includes(e)
  );
  const userSuggestions = mockUsuarios.filter(
    u => u.toLowerCase().includes(userInput.toLowerCase()) && !selectedUsers.includes(u)
  );

  const addDep = dep => {
    setSelectedDeps([...selectedDeps, dep]);
    setDepInput('');
  };
  const addEquipo = eq => {
    setSelectedEquipos([...selectedEquipos, eq]);
    setEquipoInput('');
  };
  const addUser = u => {
    setSelectedUsers([...selectedUsers, u]);
    setUserInput('');
  };

  const removeDep = dep => setSelectedDeps(selectedDeps.filter(d => d !== dep));
  const removeEquipo = eq => setSelectedEquipos(selectedEquipos.filter(e => e !== eq));
  const removeUser = u => setSelectedUsers(selectedUsers.filter(us => us !== u));

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
        className="asignar-usuarios-modal"
        style={{
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: 0,
          display: 'flex',
          gap: 32,
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          padding: 32,
        }}
      >
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32, position: 'relative' }}>
          <button
            className="modal-back-btn"
            onClick={onBack}
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
              marginBottom: 8,
              marginTop: -8,
              alignSelf: 'flex-start'
            }}
          >
            <ArrowLeft size={20} />
            Volver a formulario
          </button>
          {/* Departamento */}
          <div style={{ position: 'relative', maxWidth: 320 }}>
            {/* FIX 2: Añadir htmlFor y el 'id' al input */}
            <label htmlFor={DEPARTAMENTO_INPUT_ID} style={{ fontWeight: 600, color: '#111', marginBottom: 4, display: 'block' }}>
              Agregar departamento
            </label>
            <input
              id={DEPARTAMENTO_INPUT_ID} // Añadir ID
              type="text"
              value={depInput}
              onChange={e => setDepInput(e.target.value)}
              placeholder="Buscar departamento..."
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: '1rem',
                color: '#111',
                marginBottom: 0
              }}
              autoComplete="off"
            />
            {depInput && depSuggestions.length > 0 && (
              <ul style={{
                background: '#fff',
                border: '1px solid #d1d5db',
                borderRadius: 8,
                margin: 0,
                marginTop: 2,
                padding: 0,
                listStyle: 'none',
                position: 'absolute',
                zIndex: 10,
                minWidth: '220px',
                maxWidth: 320,
                width: '100%',
                left: 0,
                right: 'auto'
              }}>
                {depSuggestions.map(dep => (
                  <li
                    key={dep}
                    style={{
                      padding: 0, // Remover padding del li, se pone en el botón
                      color: '#111',
                      whiteSpace: 'nowrap',
                      maxWidth: 320,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {/* FIX 3: Usar un botón interactivo dentro del <li> para la acción */}
                    <button
                        onClick={() => addDep(dep)}
                        style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '8px 12px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'inherit',
                            fontSize: '1rem'
                        }}
                    >
                        {dep}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Equipo */}
          <div style={{ position: 'relative', maxWidth: 320 }}>
            {/* FIX 2: Añadir htmlFor y el 'id' al input */}
            <label htmlFor={EQUIPO_INPUT_ID} style={{ fontWeight: 600, color: '#111', marginBottom: 4, display: 'block' }}>
              Agregar equipo
            </label>
            <input
              id={EQUIPO_INPUT_ID} // Añadir ID
              type="text"
              value={equipoInput}
              onChange={e => setEquipoInput(e.target.value)}
              placeholder="Buscar equipo..."
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: '1rem',
                color: '#111',
                marginBottom: 0
              }}
              autoComplete="off"
            />
            {equipoInput && equipoSuggestions.length > 0 && (
              <ul style={{
                background: '#fff',
                border: '1px solid #d1d5db',
                borderRadius: 8,
                margin: 0,
                marginTop: 2,
                padding: 0,
                listStyle: 'none',
                position: 'absolute',
                zIndex: 10,
                minWidth: '220px',
                maxWidth: 320,
                width: '100%',
                left: 0,
                right: 'auto'
              }}>
                {equipoSuggestions.map(eq => (
                  <li
                    key={eq}
                    style={{
                        padding: 0,
                        color: '#111',
                        whiteSpace: 'nowrap',
                        maxWidth: 320,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                  >
                    {/* FIX 3: Usar un botón interactivo dentro del <li> para la acción */}
                    <button
                        onClick={() => addEquipo(eq)}
                        style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '8px 12px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'inherit',
                            fontSize: '1rem'
                        }}
                    >
                        {eq}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Integrante */}
          <div style={{ position: 'relative', maxWidth: 320 }}>
            {/* FIX 2: Añadir htmlFor y el 'id' al input */}
            <label htmlFor={USER_INPUT_ID} style={{ fontWeight: 600, color: '#111', marginBottom: 4, display: 'block' }}>
              Agregar integrante
            </label>
            <input
              id={USER_INPUT_ID} // Añadir ID
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder="Buscar integrante..."
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: '1rem',
                color: '#111',
                marginBottom: 0
              }}
              autoComplete="off"
            />
            {userInput && userSuggestions.length > 0 && (
              <ul style={{
                background: '#fff',
                border: '1px solid #d1d5db',
                borderRadius: 8,
                margin: 0,
                marginTop: 2,
                padding: 0,
                listStyle: 'none',
                position: 'absolute',
                zIndex: 10,
                minWidth: '220px',
                maxWidth: 320,
                width: '100%',
                left: 0,
                right: 'auto'
              }}>
                {userSuggestions.map(u => (
                  <li
                    key={u}
                    style={{
                        padding: 0,
                        color: '#111',
                        whiteSpace: 'nowrap',
                        maxWidth: 320,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                  >
                    {/* FIX 3: Usar un botón interactivo dentro del <li> para la acción */}
                    <button
                        onClick={() => addUser(u)}
                        style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '8px 12px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'inherit',
                            fontSize: '1rem'
                        }}
                    >
                        {u}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Sección derecha: seleccionados */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* Departamentos seleccionados */}
          <div>
            <h2 style={{ fontWeight: 600, color: '#111', marginBottom: 16 }}>Departamentos seleccionados</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {selectedDeps.map(dep => (
                <div
                  key={dep}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: 8,
                    background: '#f3f4f6',
                    border: '1px solid #d1d5db',
                    color: '#111',
                    fontSize: '0.875rem',
                    position: 'relative',
                    whiteSpace: 'nowrap',
                    maxWidth: 320,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {dep}
                  <button
                    onClick={() => removeDep(dep)}
                    style={{
                      marginLeft: 8,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#e63946',
                      fontSize: '1rem',
                      lineHeight: 1
                    }}
                    aria-label={`Eliminar departamento ${dep}`}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Equipos seleccionados */}
          <div>
            <h2 style={{ fontWeight: 600, color: '#111', marginBottom: 16 }}>Equipos seleccionados</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {selectedEquipos.map(eq => (
                <div
                  key={eq}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: 8,
                    background: '#f3f4f6',
                    border: '1px solid #d1d5db',
                    color: '#111',
                    fontSize: '0.875rem',
                    position: 'relative',
                    whiteSpace: 'nowrap',
                    maxWidth: 320,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {eq}
                  <button
                    onClick={() => removeEquipo(eq)}
                    style={{
                      marginLeft: 8,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#e63946',
                      fontSize: '1rem',
                      lineHeight: 1
                    }}
                    aria-label={`Eliminar equipo ${eq}`}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Usuarios seleccionados */}
          <div>
            <h2 style={{ fontWeight: 600, color: '#111', marginBottom: 16 }}>Integrantes seleccionados</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {selectedUsers.map(u => (
                <div
                  key={u}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: 8,
                    background: '#f3f4f6',
                    border: '1px solid #d1d5db',
                    color: '#111',
                    fontSize: '0.875rem',
                    position: 'relative',
                    whiteSpace: 'nowrap',
                    maxWidth: 320,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {u}
                  <button
                    onClick={() => removeUser(u)}
                    style={{
                      marginLeft: 8,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#e63946',
                      fontSize: '1rem',
                      lineHeight: 1
                    }}
                    aria-label={`Eliminar usuario ${u}`}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FIX 1: Añadir la validación de PropTypes
AsignarUsuariosModal.propTypes = {
    onBack: PropTypes.func.isRequired,
};

export default AsignarUsuariosModal;