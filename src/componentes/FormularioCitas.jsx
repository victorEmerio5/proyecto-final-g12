import React from 'react';
import '../hojas-estilos/FormularioCitas.css';
import { useState } from 'react';  //useState para los hooks
import {v4 as uuidv4} from 'uuid'; //uuid genera un id automatico para cada cita lo asignamos al id

//componente FormularioCitas, recibimos props usando desestructuracion
//onChange y onSubmit son eventListener
//target.value extrae el valor ingresado por el usuario
//preventDefault evita que se cargue toda la aplicacion cuando enviamos el formulario

const FormularioCitas = ({formTitulo}) => {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  
  const manejarCambio1 = evento => {
    //console.log('escribiendo...');
    setInput1 (evento.target.value);
    //console.log(evento.target.value);
  };
  const manejarCambio2 = evento =>{
    setInput2(evento.target.value);
  };
  const manejarCambio3 = evento =>{
    setInput3(evento.target.value);
  };
  const manejarCambio4 = evento =>{
    setInput4(evento.target.value);
  };
  
  const manejarEnvio = evento => {
    evento.preventDefault();
    console.log('enviando formulario...');
    const citaNueva = {
      id: uuidv4(),
      nombres:input1,
      apellidos:input2,
      telefono:input3,
      fecha:input4
    }
    console.log(citaNueva);
  };

  return (
    <>
      <h2> {formTitulo} </h2>
      <div className='cont-general'>
        <div className='cont-form'>
          <form className='cita-form' onSubmit={manejarEnvio}>
            <ul>
              <li>
                <label htmlFor='nombres'>Nombres:</label> <br/>
                <input id='input1' className='nombres-input' type='text' name='nombres' placeholder='digite sus nombres' required size={50} onChange={manejarCambio1} />
              </li>

              <li>
                <label htmlFor='apellidos'>Apellidos:</label> <br/>
                <input id='input2' className='ape-input' type='text' name='apellidos' placeholder='digite sus apellidos' required size={50} onChange={manejarCambio2} />
              </li>
                
              <li>
                <label htmlFor='telefono'>Telefono:</label> <br/>
                <input id='input3' className='tel-input' type='number' name='telefono' placeholder='digite su num telefonico' required size={10} onChange={manejarCambio3} />
              </li>  
                
              <li>
                <label htmlFor='fecha'>Fecha:</label> <br/>
                <input id='input4' className='fecha-input' type='date' name='fecha' placeholder='digite una fecha' required size={8} onChange={manejarCambio4} /> 
              </li>

            </ul>
            <div className='cont-botones-form'>
              <button className='form-boton' type='submit' > Agendar Cita </button>
              <button className='form-boton' type='submit' > Consultar Cita </button>
              <button className='form-boton' type='submit' > Cancelar Cita </button>
              <button className='form-boton' type='reset'>Limpiar Formulario</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default FormularioCitas;