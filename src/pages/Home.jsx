import React from 'react'
import { Article } from '../components/Article'
import { Hero } from '../components/Hero'
import { Noticia } from '../components/Noticia'
import { Slider } from '../components/Slider'
import NavHero from '../components/NavHero'

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
            <NavHero />

            <Article title={"GUÍA DE REGALOS NAVIDEÑOS 2020"} word={'Los regalos perfectos para todos los fanáticos de Marvel'} />
             <div className="wrapper--white">
                 <Slider />
             </div>
              
            <Article title={"NUEVO EN MARVEL UNLIMITED"} word={'¡Lea estos 28,000 cómics digitales por$ 9.99 al mes!'} />

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
