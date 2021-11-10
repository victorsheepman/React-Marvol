import React from 'react'

export const Noticia = ({title, img, word}) => {
    return (
        <article className="noticia">
            <figure className="noticia__img">
                <img src={img} alt="" />
            </figure>
            <div className="noticia__body">
                <h3  className="body-2-bold" >{title}</h3>
                <p className="caption-bold">{word}</p>
            </div>
        </article>
    )
}
