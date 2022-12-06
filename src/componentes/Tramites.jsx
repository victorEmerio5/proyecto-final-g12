import React from 'react';
import FormularioCitas from './FormularioCitas';

const Tramites = () => {
  return (
    <>
      <div className='cont-tramites'>
        <hr/>
        <FormularioCitas formTitulo='Qué deseas hacer hoy?' />
        <hr/>
      </div>
    </>
  );
};

export default Tramites;