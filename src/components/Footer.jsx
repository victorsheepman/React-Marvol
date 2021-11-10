import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
           
            <section className="footer__wrapper"> 
                <figure>
                    <img src="assets/images/image-ironman-card.png" alt="" />
                </figure>
                <div className="footer__wrapper__body">
                    <span className="body-1-bold">MARVEL MASTERCARD</span>
                    <p className="body-1">Obtenga un crédito de estado de<br />
                        cuenta de $ 25</p>
                    <button>APRENDER MÁS</button>  
                </div>

            </section>
            <div className="footer__wrapper__bottom">
                <img src="assets/images/Marvel-logo.png" alt="" />
                <ul className="body-2-bold">
                    <li>SOBRE MARVEL</li>
                    <li>AYUDA / PREGUNTAS FRECUENTES</li>
                    <li>CARRERAS</li>
                    <li>PASANTÍAS</li>
                    <li>PUBLICIDAD</li>
                    <li>MARVELHQ.COM</li>
                    <li>CANJEAR CÓMICS DIGITALES</li>
                </ul>
                <div className="footer__wrapper__social">
                    <h3 className="body-2-bold">SIGUE A MARVEL</h3>
                    <div className="footer__wrapper__social--icons">
                        <img src="assets/icons/icons8-facebook 1.svg" alt="" />
                        <img src="assets/icons/icons8-instagram 1.svg" alt="" />
                        <img src="assets/icons/icons8-twitter 1.svg" alt="" /> 
                        <img src="assets/icons/icons8-play_button 1.svg" alt="" /> 
                    </div>
                   
                </div>
            </div>
        </footer>
    )
}

export default Footer
