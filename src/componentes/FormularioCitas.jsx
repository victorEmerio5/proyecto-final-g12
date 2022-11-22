import React from 'react';
import '../hojas-estilos/FormularioCitas.css';
import { useState } from 'react';

//componente FormularioCitas, recibimos props usando desestructuracion
//onChange y onSubmit son eventListener
//target.value extrae el valor ingresado por el usuario
//preventDefault evita que se cargue toda la aplicacion cuando enviamos el formulario

const FormularioCitas = ({formTitulo, tituloBoton, id, texto}) => {
  const [input, setInput] = useState('');
  const manejarCambio = evento => {
    console.log('escribiendo...');
    setInput (evento.target.value);
    console.log(evento.target.value);
  };
  const manejarEnvio = env => {
    env.preventDefault();
    console.log('enviando formulario...');
    const citaNueva = {
      id: '432',
      texto:input
    }
  };

  return (
    <>
      <h2> {formTitulo} </h2>
      <div className='cont-form'>
        <form className='cita-form' onSubmit={manejarEnvio}>
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