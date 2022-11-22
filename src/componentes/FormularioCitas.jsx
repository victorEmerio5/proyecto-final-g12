import React from 'react';
import '../hojas-estilos/FormularioCitas.css';
import { useState } from 'react';

//componente FormularioCitas, recibimos props usando desestructuracion
//onChange es un eventListener

const FormularioCitas = ({formTitulo, tituloBoton, id, texto}) => {
  const [input, setInput] = useState('');
  const manejarCambio = env => {
    console.log('escribiendo...');
  };
  const manejarEnvio = env => {
    const citaNueva = {
      id: '432',
      texto:''
    }
  };

  return (
    <>
      <h2> {formTitulo} </h2>
      <div className='cont-form'>
        <form className='cita-form'>
          <ul>
            <li>
              <label htmlFor='nombres'>Nombres:</label> <br/>
              <input className='nombres-input' type='text' name='texto' placeholder='digite sus nombres' size={50} onChange={manejarCambio} />
            </li>

            <li>
              <label htmlFor='apellidos'>Apellidos:</label> <br/>
              <input className='ape-input' type='text' name='texto' placeholder='digite sus apellidos' size={50} onChange={manejarCambio} />
            </li>
              
            <li>
              <label htmlFor='telefono'>Telefono:</label> <br/>
              <input className='tel-input' type='number' name='texto' placeholder='digite su num telefonico' size={10} onChange={manejarCambio} />
            </li>  
              
            <li>
              <label htmlFor='fecha'>Fecha:</label> <br/>
              <input className='fecha-input' type='date' name='texto' id='apellidos' placeholder='digite una fecha' size={8} onChange={manejarCambio} /> 
            </li>
            
            <li>
              <button className='form-boton' type='submit'> {tituloBoton} </button>
            </li>
            
          </ul>
        </form>
      </div>
    </>
  );
}
export default FormularioCitas;