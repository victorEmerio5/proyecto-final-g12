import React from 'react';
import {Outlet, Link} from 'react-router-dom';  //outlet es un componente react
import { AiFillHome } from "react-icons/ai";  //icono react
import { AiOutlineSchedule } from "react-icons/ai";  //icono react
import { AiOutlineUser} from "react-icons/ai";  //icono react
import '../hojas-estilos/NavBar.css';


//NavBar va de la mano con index.js
//componente NavBar

const NavBar = () => {
  return (
    <>
      <div className='cont-navBar'>
        <nav>
          <ul>
            <li>
              <Link to='/'> Home {<AiFillHome />} </Link>
            </li>
            <li>
              <Link to='/login'> LogIn {<AiOutlineUser />} </Link>
            </li>
            <li>
              <Link to='/tramites'> Tramites {<AiOutlineSchedule />} </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet/>
    </>
  );
};

export default NavBar;