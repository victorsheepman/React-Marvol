import React from 'react'
import { Card } from '../components/Card'
import { comics } from '../comic'
export const ComicList = () => {
    return (
        <div className="container comiclist">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {comics.map(comic =>(
                    <Card className="column ml-5"  img={comic.img}/>
                ))}
            </div>
        </div>
    )
}
