import React from 'react'
import { Card } from './Card'
export const Movies = ({database, title}) => {

    return (
        <div className="movie animate__animated animate__fadeIn">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
                {database.map(item =>(
                    <Card className="column ml-5 " img={item.img} title={item.title}/>
                ))} 
            </div>
        </div>
    )
}
