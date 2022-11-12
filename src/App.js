import React from 'react';
import './App.css';
import Intro from './componentes/Intro.jsx';

//componente principal del programa

function App() {
  return (
    <div className="App">
     <h1>SERVICIO DE CITAS DE VETERINARIA</h1>
     <div className='cont-princ'>
       <Intro />
     </div>
    </div>
  );
}

export default App;
