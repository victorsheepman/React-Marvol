import React from 'react';
import { useNavigate} from "react-router-dom";

export const Card = ({img, title}) => {
    let history = useNavigate();
    const handleClick= ()=>{
        history('/modal');
    }
    return (
        <div className="card shadow-sm" onClick={handleClick}>
            <figure>
                <img src={img}alt="" />
            </figure>
            <p className="body-2-bold">
                {title}
            </p>
            <span className="caption"></span>
        </div>
    )
}
