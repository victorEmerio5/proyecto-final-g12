import React from 'react';
import '../hojas-estilos/LogIn.css';

const LogIn = ( {tituloBoton} ) => {
  return (
    <>
      <hr></hr>
      <h2>LogIn</h2>
      <div className='cont-login'>
        <form>
          <ul>
            <li>
              <label htmlFor='nombres'>Nombres:</label> <br/>
              <input className='nombres-input' type='text' name='nombres' placeholder='digite sus nombres' size={50}  />
            </li>

            <li>
              <label htmlFor='apellidos'>Apellidos:</label> <br/>
              <input className='apellidos-input' type='text' name='apellidos' placeholder='digite sus apellidos' size={50}  />
            </li>
              
            <li>
              <label htmlFor='contraseña'>Contraseña:</label> <br/>
              <input className='contraseña-input' type='text' name='contraseña' placeholder='digite su contraseña' size={15}  />
            </li>
            <li>
              <button className='boton-iniciarCesion' type='submit' > {tituloBoton} </button>
            </li> 
          </ul>
        </form>
      </div>
    </>
  );
}
export default LogIn;