import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">Xylo</div>
      <nav>
        <ul>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <button className="cta-btn">Comienza Ahora</button>
    </header>
  );
}

export default Header;
