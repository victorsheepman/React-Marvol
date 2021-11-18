import React from 'react';
import { Card } from '../components/Card'
import { comics } from '../data/comic'
export const ComicList = () => {
    return (
        <div className="container comiclist">
            <span className="sub-1" >13 DE ENERO: NUEVOS LANZAMIENTOS</span>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
                {comics.map(comic =>(
                    <Card className="column ml-5 " img={comic.img} title={comic.title}/>
                ))} 
            </div>
        </div>
    )
}
