import React from 'react'
import { useNavigate } from 'react-router-dom'
export const ModalComic = () => {
    const history = useNavigate();
    const handleBack = ()=>{
        history('/comic');
    }
    return (
        <div className="modalcomic">
            <div className="modalcomic__top">
                <nav className="modalcomic__top__menu">
                    <div className="modalcomic__top__menu__item" onClick={ handleBack}>
                        <img src="assets/icons/icons8.svg" alt="" />
                        <p className="caption-bold">VOLVER</p>
                    </div>
                    <div className="modalcomic__top__menu__item--large">
                        <img src="assets/icons/icons8-back.svg" alt="" />
                        <p className="caption-bold">ANTERIOR</p>
                        
                        <p className="caption-bold">SIGUIENTE</p>
                        <img src="assets/icons/icons8-back 1.svg"  alt="" />   
                    </div>
                </nav> 
                <div className="modalcomic__top--dark ">
                    
                    <figure className="modalcomic__top__img">
                        <img src="assets/images/spiderman.png" srcset="assets/images/spiderman-lg.png 1024w" alt="" />
                    </figure>
                    <div className="modalcomic__top__body">
                        <h1>El asombroso hombre araña (2018) # 57</h1>
                        <div className="modalcomic__top__body__info">
                            <span className="body-2-bold">Publicado:</span>
                            <p className="body-2">13 de enero de 2021</p>
                             
                        </div>
                        <div className="modalcomic__top__body__info--large">
                            <div>
                                <span className="body-2-bold">Escritor:</span>
                                <p className="body-2">Nick Spencer</p>
                            </div>
                            <div>
                                <span className="body-2-bold">Dibujante:</span>
                                <p className="body-2">Mark Bagley</p>
                            </div>     
                        </div>
                        <div className="modalcomic__top__body__info">
                            <span className="body-2-bold">Artista de portada:</span>
                            <p className="body-2">Mark Bagley</p>
                        </div>
                        <div className="modalcomic__top__body__description">
                            <p>
                            Spider-Man continúa recogiendo los pedazos e intentando armar su vida. Pero muchas de las tormentas que se avecinan se arremolinan cada vez más violentamente ... Queremos contarte más, pero ¡¡¡PERDUCIRÍA TANTO DE LOS ÚLTIMOS RESTOS !!!
                            </p>
                        </div>
                    </div>
                    
                </div>
               
            </div>
            <div className="modalcomic__buttom">
                <span className="sub-1">MÁS DETALLES</span>
                <div className="modalcomic__buttom__list">
                    <ul className="body-1-bold">
                        <li>
                            INFORMACIÓN Y CRÉDITOS EXTENDIDOS
                        </li>
                        <li className="body-1">
                            <strong className="body-1-bold">Clasificación: </strong>T nominal
                        </li>
                        <li className="body-1">
                            <strong className="body-1-bold">Formato:  </strong>Comic
                        </li>  
                        <li className="body-1">
                            <strong className="body-1-bold">Precio: </strong>$ 3.99
                        </li>  
                        <li className="body-1">
                            <strong className="body-1-bold">UPC:  </strong>75960608936905711
                        </li>  
                        <li className="body-1">
                            <strong className="body-1-bold">Fecha FOC:  </strong>14 de diciembre de 2020
                        </li>
                    </ul> 
                </div>

                <div className="modalcomic__buttom__list">
                    <ul className="body-1-bold">
                        <li>
                            CUENTOS
                        </li>
                        <li className="body-1">
                            <strong className="body-1-bold">Escritor: </strong>Nick Spencer
                        </li>
                        <li className="body-1">
                            <strong className="body-1-bold">Entintador: </strong>John Dell
                        </li>  
                        <li className="body-1">
                            <strong className="body-1-bold">Colorista:</strong>David Curiel
                        </li>  
                        <li className="body-1">
                            <strong className="body-1-bold">Letterer:  </strong>Vc Joe Caramagna
                        </li>  
                        <li className="body-1">
                            <strong className="body-1-bold">Dibujante:  </strong>Mark Bagley
                        </li>
                    </ul> 
                </div>

                <div className="modalcomic__buttom__list">
                    <ul className="body-1-bold">
                        <li>
                            INFORMACIÓN Y CRÉDITOS EXTENDIDOS
                        </li>
                        <li className="body-1">
                            <strong className="body-1-bold">Clasificación: </strong>T nominal
                        </li>
                        <li className="body-1">
                            <strong className="body-1-bold">Formato:  </strong>Comic
                        </li>  
                        <li className="body-1">
                            <strong className="body-1-bold">Precio: </strong>$ 3.99
                        </li>  
                        <li className="body-1">
                            <strong className="body-1-bold">UPC:  </strong>75960608936905711
                        </li>  
                        <li className="body-1">
                            <strong className="body-1-bold">Fecha FOC:  </strong>14 de diciembre de 2020
                        </li>
                    </ul> 
                </div>
                <div>
                    <ul>
                    </ul> 
                </div>
                <div>
                    <ul>
                    </ul> 
                </div>
            </div>
            

        </div>
    )
}
