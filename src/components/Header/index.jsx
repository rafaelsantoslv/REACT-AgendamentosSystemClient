import React from 'react';
import {SectionNav } from './styles';
import Logo from '../../assets/logo300.png'

function Header() {
  return (
      <SectionNav>
        <div>
          <a href="#">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">
              Serviços
            </a>
          </li>
          <li>
            <a href="#">
              Contato
            </a>
          </li>
        </ul>
        <button>
          Agendar Online
        </button>
      </SectionNav>
  );
}

export default Header;
