import React from "react";

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