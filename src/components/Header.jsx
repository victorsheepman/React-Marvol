import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import {Menu} from './Menu';
import { Movies } from './Movies';



export const Header = () => {
    const {setShow, setTv} = useContext(AppContext);
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
                        <li 
                            onMouseEnter={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                        >PELÍCULAS</li>
                        <li 
                            onMouseEnter={() => setTv(true)}
                            onMouseLeave={() => setTv(false)}
                        >PROGRAMAS DE TELEVISÓN</li>
                        <li>JUEGOS</li>
                        <li>NOTICIAS</li>
                        <li>MÁS</li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}
