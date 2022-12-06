import React from 'react';
import '../hojas-estilos/LogIn.css';
import { useState } from 'react'; //hook

const LogIn = ( {tituloBoton} ) => {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const manejCambio1 = evento => {
    //console.log('escribiendo...');
    setInput1 (evento.target.value);
    //console.log(evento.target.value);
  };

  const manejCambio2 = evento =>{
    setInput2(evento.target.value);
  };

  const manejCambio3 = evento =>{
    setInput3(evento.target.value);
  };

  const manejEnvio = evento => {
    evento.preventDefault();
    console.log('enviando formulario...');
    const usuarioNuevo = {
      nombres:input1,
      apellidos:input2,
      contrasena:input3,
    }
    console.log(usuarioNuevo);
  };
  return (
    <>
      <hr></hr>
      <h2>LogIn</h2>
      <div className='cont-login'>
        <form className='formulario-login' onSubmit={manejEnvio} >
          <ul>
            <li>
              <label htmlFor='nombres'>Nombres:</label> <br/>
              <input className='nombres-input' type='text' name='nombres' placeholder='digite sus nombres' required size={50} onChange={manejCambio1} />
            </li>

            <li>
              <label htmlFor='apellidos'>Apellidos:</label> <br/>
              <input className='apellidos-input' type='text' name='apellidos' placeholder='digite sus apellidos' required size={50} onChange={manejCambio2}   />
            </li>
              
            <li>
              <label htmlFor='contraseña'>Contraseña:</label> <br/>
              <input className='contraseña-input' type='password' name='contraseña' placeholder='digite su contraseña' required size={15} onChange={manejCambio3} />
            </li>
            <li>
              <button className='boton-iniciarCesion' type='submit' > {tituloBoton} </button>
            </li> 
          </ul>
        </form>
      </div>
    </>
  );
};

export default LogIn;