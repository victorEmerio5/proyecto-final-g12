import React from 'react';
import './App.css';
import Intro from './intro/Intro.jsx';

//componente principal del programa

function App() {
  return (
    <div className="App">
      <h1>SERVICIO DE CITAS DE VETERINARIA</h1>
      <div className='cont-princ'>
        <Intro 
        titulo='Mision:'
        descripcion='Servicio de citas de veterinaria es una empresa que promueve el bienestar de todo tipo de mascota. Nuestro principal objetivo es ofrecer a nuestros clientes las herramientas neceasarias para que puedan acceder a nuestros servicios desde la comodidad de su casa mediante el agendamiento de citas veterinarias las 24 horas del dia.Dentro de nuestro portafolio de servicios tenemos asistencia, cuidados, nutricion, inmunizacion y esterilizacion. De esta manera garantizamos el confort de nuestros clientes y la salud de sus mascotas.'
        />
      </div>
    </div>
  );
}

export default App;
