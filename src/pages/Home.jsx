import React from 'react'
import { Hero } from '../components/Hero'
import { Noticia } from '../components/Noticia'
import { Slider } from '../components/Slider'

export const Home = () => {
    const news = [
        {   id:1,
            title:'REMOLQUES Y EXTRAS',
            word:'¡Los orígenes de BATTLEWORLD! | Marvel Reino de Campeones',
            img:'assets/images/img-2.jpg'
        },
        {
            id:2,
            title:'REMOLQUES Y EXTRAS',
            word:'¡Los orígenes de BATTLEWORLD! | Marvel Reino de Campeones',
            img:'assets/images/img-2.jpg'
        },
        {
            id:3,
            title:'REMOLQUES Y EXTRAS',
            word:'¡Los orígenes de BATTLEWORLD! | Marvel Reino de Campeones',
            img:'assets/images/img-2.jpg'
        }
    ]
    return (
        <>
            <Hero />
            <article className="navidad">
                <figure className="navidad__img" ></figure>
                <div className="navidad__body">
                    <h2>GUÍA DE REGALOS<br />
                        NAVIDEÑOS 2020</h2>
                    <p className="body-1">
                    Los regalos perfectos para todos los fanáticos de Marvel
                    </p>
                    <button className="navidad__button">ver ahora</button>
                </div>
            </article>
            <Slider />
            <article className="navidad">
                <figure className="navidad__img" ></figure>
                <div className="navidad__body--big">
                    <h1>NUEVO EN MARVEL UNLIMITED</h1>
                    <p className="body-1">
                    ¡Lea estos 28,000 cómics digitales por$ 9.99 al 
                        mes!
                    </p>
                    <button className="navidad__button--large">OBTÉN MARVEL UNLIMITED </button>
                </div>
            </article>
            <div className=" navidad__noticias">
                <h2>LO ULTIMO</h2>
                <div className="navidad__noticias__wrapper">
                    
                    {news.map((n) => (
                        <Noticia key={n.id} img={n.img} title={n.title} word={n.word} />
                    
                    ))}
                </div>
                
            </div>

        </>
    )
}
