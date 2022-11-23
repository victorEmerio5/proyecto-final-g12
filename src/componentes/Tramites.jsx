import React from 'react';
import FormularioCitas from './FormularioCitas';


const Tramites = () => {
  return (
    <>
      <div className='tramites'>
        <hr/>
        <FormularioCitas formTitulo='Agendar cita:' tituloBoton='Agendar' />
        <hr/>
        <FormularioCitas formTitulo='Cancelar cita:' tituloBoton='Cancelar' />
        <hr/>
        <FormularioCitas formTitulo='consultar cita:' tituloBoton='Consultar' />
      </div>
    </>
  );
};

export default Tramites;