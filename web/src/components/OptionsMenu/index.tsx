import React from 'react';

import Board from '../../assets/images/icons/board.svg';
import Elearning from '../../assets/images/icons/elearning.svg';
import Chemistry from '../../assets/images/icons/chemistry.svg';
import Painter from '../../assets/images/icons/painter.svg';
import Certificate from '../../assets/images/icons/certificate.svg';

import './styles.css'

 function OptionsMenu() {
  return (
    <div>
      <span>
        <li id="1"><img src={Board} alt="Lousa" title="Aula de Finanças"/></li>
        <li id="2"><img src={Elearning} alt="Aula de Computação" title="Aula de Computação"/></li>
        <li id="3"><img src={Chemistry} alt="Aula de química" title="Aula de química"/></li>
        <li id="4"><img src={Painter} alt="Aula de Pintura" title="Aula de Pintura"/></li>
        <li id="5"><img src={Certificate} alt="Diploma" title="Certificado"/></li>
      </span>
        
    </div>
  );
}


export default OptionsMenu;