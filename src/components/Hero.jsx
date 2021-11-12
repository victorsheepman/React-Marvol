import React from 'react'

export const Hero = () => {
    return (
        <>
        <div className="hero">
            <figure className="hero__img">
            </figure>
            <div className="hero__body">
                <figure className="hero__body__img">
                    <img src="assets/images/spiderman_tittle.png" alt="" />
                </figure>
                <article className="hero__body__article">
                    <h2>¡DISPONIBLE AHORA!</h2>
                    <p className="body-1"> 
                         Experimenta el ascenso de Miles Morales mientras domina nuevos poderes para
                        convertirse en su propio Spider-Man. Exclusivamemente en PlayStation.
                    </p>
                </article>
                <button className="hero__button">ver ahora</button>
            </div>
            <div className="wrapper__white">

            </div>
        </div>
        
        </>
    )
}
