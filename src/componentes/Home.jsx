import React from 'react';
import Intro from './Intro';
import '../hojas-estilos/Home.css';

const Home = () => {
  return (
    <div>
      <div className='cont-home'>
        <div className='cont-princ'>
          <Intro 
            titulo='Mision:'
            descripcion='Promover el bienestar de todo tipo de mascotas. Nuestro objetivo es ofrecer las herramientas neceasarias para que puedan acceder a nuestros servicios mediante el agendamiento de citas veterinarias las 24 horas del dia. Dentro de nuestro portafolio de servicios tenemos asistencia, cuidados, nutricion, inmunizacion y esterilizacion. De esta manera garantizamos el confort de nuestros clientes y la salud de sus mascotas.'
          /> 
        </div>
      </div>
      <h2>Bienvenido!</h2>
    </div>
  );
};

export default Home;