import React from 'react';
import '../hojas-estilos/FormularioCitas.css';

//componente FormularioCitas

const FormularioCitas = (props) => {
  return (
    <>
      <h2> {props.titulo} </h2>
      <form className='cita-form'>
        <ul>
          <li>
            <label htmlFor='nombres'>Nombres:</label> <br/>
            <input className='nombres-input' type='text' name='texto' placeholder='digite sus nombres' size={50} />
          </li>

          <li>
            <label htmlFor='apellidos'>Apellidos:</label> <br/>
            <input className='ape-input' type='text' name='texto' placeholder='digite sus apellidos' size={50} />
          </li>
            
          <li>
            <label htmlFor='telefono'>Telefono:</label> <br/>
            <input className='tel-input' type='number' name='texto' placeholder='digite su num telefonico' size={10} />
          </li>  
            
          <li>
            <label htmlFor='fecha'>Fecha:</label> <br/>
            <input className='fecha-input' type='date' name='texto' id='apellidos' placeholder='digite una fecha' size={8} /> 
          </li>
          
          <li>
            <button className='enviar-boton' type='submit'>ENVIAR</button>
          </li>
          
        </ul>
      </form>
    </>
  );
}
export default FormularioCitas;