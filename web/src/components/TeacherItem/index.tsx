import React from 'react';
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
         <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/54520187?s=460&u=54eda9da3b0e5e9db24bb7eb3220c5787a8009ca&v=4" alt="Jason Volney"/>
                        <div>
                            <strong>Jason Volney</strong>
                            <span>JavaScript | TypeScript | ReactJs | React Native| NodeJs</span>
                        </div> 
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias para desenvolvimento Web / Mobile. 
                        <br/><br/>
                        Apaixonado por criar layouts, aplicativos e por mudar a vida das pessoas através de experiências.
                    </p>
                    <footer>
                        <p>Preço/hora</p>
                        <strong>R$80,00</strong>
                        <button type="button">
                            <img src={WhatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;