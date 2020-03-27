import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return(
    <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="Be The Hero" />

            <form>
                <input placeholder="Sua ID"/>
                <button className="button" type="subimit">Entrar</button>

                <a href="/register" ><FiLogIn size={16} color="#e02041"/>Não tenho cadastro</a>
            </form>
        </section>

        <img src={heroesImg} alt="Heroes" />
    
        
    </div>
    );
}