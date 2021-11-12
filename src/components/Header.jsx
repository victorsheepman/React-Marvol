import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import {Menu} from './Menu';
export const Header = () => {
    const [modal, setModal]=useState(false);
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__top__register">
                    <span className="caption-bold">REGISTRARSE | UNIRSE</span>
                </div>
                <figure className="header__hamburguer" onClick={()=>setModal(!modal)}>
                    <img src="assets/icons/menu.svg" alt="" />
                </figure>
                <figure className="header__logo">
                    <img src="assets/images/Marvel-logo.png" alt="" />
                </figure>
            </div>
            <div className="header__bottom">
                <nav className="header__bottom__nav">
                    <ul className="caption-bold">
                        <li>VIDEOS</li>
                        <li>CARACTERES</li>
                        <li>
                          <Link  to='/comic'>HISTORIETAS</Link> 
                        </li>
                        <li>PELÍCULAS</li>
                        <li>PROGRAMAS DE TELEVISÓN</li>
                        <li>JUEGOS</li>
                        <li>NOTICIAS</li>
                        <li>MÁS</li>
                    </ul>
                </nav>
            </div>
            {modal && <Menu />}
        </header>

    )
}
