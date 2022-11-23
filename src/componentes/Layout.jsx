import React from 'react';
import {Outlet, Link} from 'react-router-dom';

//Layout va de la mano con index.js

const Layout = () => {
  return (
    <>
      <div className='cont-navBar'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/tramites'>Tramites</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet/>
    </>
  );
};

export default Layout;