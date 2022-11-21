import React from 'react';
import FormularioCitas from './FormularioCitas';

const Tramites = () => {
  return (
    <>
      <div className='tramites'>
        <FormularioCitas titulo='Agendar cita:'/>
        <FormularioCitas titulo='Cancelar cita:'/>
        <FormularioCitas titulo='Consultar cita:'/>
      </div>
    </>
  );
};

export default Tramites;