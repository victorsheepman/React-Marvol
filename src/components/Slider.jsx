import React from 'react'

export const Slider = () => {
    return (
        <div className="slider">
            <div className="slider__card">
                <figure className="slider__card__img">
                    <img src="assets/images/monopoly.png" alt="" />
                </figure>
                <div className="slider__card__body">
                <span className="body-2-bold">ENGRANAJE</span>  
                    <p className="body-2-bold">Guía de regalos navideños: Marvel Pins</p>
                </div>
            </div>
            <div className="slider__card">
                <figure className="slider__card__img">
                    <img src="assets/images/card-2.png" alt="" />
                </figure>
                <div className="slider__card__body">
                <span className="body-2-bold">ENGRANAJE</span>  
                    <p className="body-2-bold">Guía de regalos navideños: para aquellos que aman 3000</p>
                </div>
            </div>
            <div className="slider__card">
                <figure className="slider__card__img">
                    <img src="assets/images/card-3.png" alt="" />
                </figure>
                <div className="slider__card__body">
                   <span className="body-2-bold">ENGRANAJE</span>  
                    <p className="body-2-bold">Guía de regalos navideños: funko Pops</p>
                </div>
            </div>
            
            
        </div>
    )
}
