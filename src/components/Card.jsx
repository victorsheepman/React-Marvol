import React from 'react'

export const Card = ({img}) => {
    return (
        <div className="card">
            <figure>
                <img src={img}alt="" />
            </figure>
            <p className="body-2-bold"></p>
            <span className="caption"></span>
        </div>
    )
}
