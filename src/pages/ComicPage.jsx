import React from 'react'
import { ComicList } from '../containers/ComicList'

export const ComicPage = () => {
    return (
        <div className="comicpage">
            <div className="comicpage__hero">
                <figure className="comicpage__hero__img">
                    <img src="assets/images/hero-2.png" alt="" />
                </figure>
                <div className="comicpage__hero__body">
                    <figure className="comicpage__hero__body__img">
                        <img src="assets/images/spiderman_tittle.png" alt="" />
                    </figure>
                    <article className="comicpage__hero__body__article">
                        <h2>¡DISPONIBLE AHORA!</h2>
                        <p className="body-1"> 
                            Experimenta el ascenso de Miles Morales mientras domina nuevos poderes para
                            convertirse en su propio Spider-Man. Exclusivamemente en PlayStation.
                        </p>
                    </article>
                    <button className="comicpage__hero__button">ver ahora</button>
                </div>
            </div>
            <ComicList />
        </div>
    )
}
