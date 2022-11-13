import React from "react";
import '../hojas-estilos/Cita.css';

//componente Cita

function Cita ({ texto }){
  return (
    <div className='cita-cont'>
      <div className='cita-texto'>
        {texto}
      </div>
      <div className='cita-icono'>
        eliminarCita
      </div>
    </div>
  );
}

export default Cita;