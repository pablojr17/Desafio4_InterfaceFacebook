import React from 'react';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.png';

function Header() {
  return (
    <header>
    <img src={logo} />
    <p>Meu perfil</p>
    <img id='logo1' src={logo1} />
    </header>
  );
}

export default Header;