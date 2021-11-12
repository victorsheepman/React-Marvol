import React from 'react'

export const Article = ({title, word}) => {
    return (
        <article className="navidad">
            <figure className="navidad__img" ></figure>
            <div className="navidad__body">
                <h2>{title}</h2>
                <p className="body-1">
                    {word}
                </p>
                <button className="navidad__button">ver ahora</button>
            </div>
        </article>
    )
}
