import React from 'react';

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper blue lighten-4">
      <a href="#" className="brand-logo">React + TypeScript</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">To do list</a></li>
        <li><a href="/">Informatin</a></li>
        <li><a href="/">About</a></li>
      </ul>
    </div>
  </nav>
)