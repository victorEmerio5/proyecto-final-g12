import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import NavBar from './componentes/NavBar.jsx';
import Home from './componentes/Home.jsx';
import NoPage from './componentes/NoPage.jsx';
import Tramites from './componentes/Tramites.jsx';
import LogIn from './componentes/LogIn';
import Intro from './componentes/Intro';

//componente NavBarRoute: es la barra de navegacion de nuestra pagina

export default function NavBarRoute () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Intro />} />
            <Route path='tramites' element={<Tramites />} />
            <Route path='LogIn' element={<LogIn tituloBoton='Iniciar Cesion' />} />
            <Route path='*' element={<NoPage />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavBarRoute />
  </React.StrictMode>
);
