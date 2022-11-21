import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Layout from './componentes/Layout.jsx';
import Home from './componentes/Home.jsx';
import NoPage from './componentes/NoPage.jsx';
import Tramites from './componentes/Tramites.jsx';

//componente NavBar: es la barra de navegacion de nuestra pagina

export default function NavBar () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='tramites' element={<Tramites />} />
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
    <NavBar />
  </React.StrictMode>
);
