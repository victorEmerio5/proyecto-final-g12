import React from 'react';
import '../hojas-estilos/Intro.css';

// componente Intro

function Intro (){
  return(
    <div className='cont-intro'>
      <img className='img-intro' src={require('../imagenes/tonete.png')} alt='imagen mascota' />
      <div className='cont-texto-intro'>
        <p className='mision'>Mision:</p>
        <p className='texto-mision'>Servicio de citas de veterinaria es una empresa que promueve el bienestar de todo tipo de mascota. Nuestro principal objetivo es ofrecer a nuestros clientes las herramientas neceasarias para que puedan acceder a nuestros servicios desde la comodidad de su casa mediante el agendamiento de citas veterinarias las 24 horas del dia.Dentro de nuestro portafolio de servicios tenemos asistencia, cuidados, nutricion, inmunizacion y esterilizacion. De esta manera garantizamos el confort de nuestros clientes y la salud de sus mascotas. </p>
      </div>
    </div>
  );
}

export default Intro;