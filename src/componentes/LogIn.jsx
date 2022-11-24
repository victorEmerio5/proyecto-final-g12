import React from 'react';

const LogIn = ( {tituloBoton} ) => {
  return (
    <>
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
              <input className='contraseña-input' type='text' name='telefono' placeholder='digite su contraseña' size={8}  />
            </li>
            <li>
              <button className='boton-sign-in' type='submit' > {tituloBoton} </button>
            </li>
            <li>
              <button className='boton-sign-up' type='submit' > {tituloBoton} </button>
            </li>  
          </ul>
        </form>
      </div>
    </>
  );
}
export default LogIn;