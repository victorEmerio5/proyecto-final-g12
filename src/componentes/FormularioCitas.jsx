import React from 'react';
import '../hojas-estilos/FormularioCitas.css';

//componente FormularioCitas

const FormularioCitas = (props) => {
  return (
    <>
      <h2> {props.titulo} </h2>
      <form>
        <ul>
          <li className='nomb'>
            <label htmlFor='nombres'>Nombres:</label> <br/>
            <input type='text' name='nombres' id='nombres' placeholder='digite sus nombres' size={50} />
          </li>

          <li className='ape'>
            <label htmlFor='apellidos'>Apellidos:</label> <br/>
            <input type='text' name='apellidos' id='apellidos' placeholder='digite sus apellidos' size={50} />
          </li>
            
          <li className='tel'>
            <label htmlFor='telefono'>Telefono:</label> <br/>
            <input type='number' name='telefono' id='telefono' placeholder='digite su num telefonico' size={50} />
          </li>  
            
          <li className='fech'>
            <label htmlFor='fecha'>Fecha:</label> <br/>
            <input type='date' name='fecha' id='apellidos' placeholder='digite una fecha' size={15} /> 
          </li>
          
          <li className='boton'>
            <button className='boton' type='submit'>ENVIAR</button>
          </li>
          
        </ul>
      </form>
    </>
  );
}
export default FormularioCitas;