import React from "react";
import '../hojas-estilos/Cita.css';
import { AiOutlineCloseCircle } from "react-icons/ai";  //AiOutlineCloseCircle es un compónenete de react

//componente Cita

function Cita ({ texto, agendada }){
  return (
    <div className={agendada ? 'cita-cont agendada' : 'cita-cont'}>
      <div className='cita-texto'>
        {texto}
      </div>
      <div className='cita-cont-icono'>
        <AiOutlineCloseCircle className='cita-icono' />
      </div>
    </div>
  );
}

export default Cita;