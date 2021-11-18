import React,{useContext} from 'react'
import { ComicList } from '../containers/ComicList'
import { Movies } from '../components/Movies'
import { series } from '../data/serie'
import { movies } from '../data/movie'
import { AppContext } from '../context/AppContext'
export const ComicPage = () => {
    const {show, tv} = useContext(AppContext)
    return (
        <div className="comicpage  animate__animated animate__fadeIn">
            <div className="comicpage__hero">
                <figure className="comicpage__hero__img">
                    <img src="assets/images/hero-2.png" alt="" />
                </figure>
                <div className="comicpage__hero__body">
                    <span className="body-1-bold">MARVEL ILIMITADO</span> 
                    <h1>QUE VIENE ESTE AÑO</h1>
                    <button className="comicpage__hero__button">ver ahora</button>
                </div>
            </div>
            <ComicList />
            {
                show && <Movies database={movies} title={'Peliculas'} />
            }
            {
                tv && <Movies database={series} title={'PROGRAMAS DE TELEVISIÓN'} />
            }
        </div>
    )
}
