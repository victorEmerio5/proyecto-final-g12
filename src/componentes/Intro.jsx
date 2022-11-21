import React from 'react';
import '../hojas-estilos/Intro.css';

// componente Intro

function Intro (props){
  return(
    <>
      <div className='cont-intro'>
      <img className='img-intro' src={require('../imagenes/tonete.png')} alt='imagen mascota' />
        <div className='cont-texto-intro'>
          <p className='mision'>{props.titulo}</p>
          <p className='texto-mision'>{props.descripcion}</p>
        </div>
      </div>
    </>
    
  );
}

export default Intro;