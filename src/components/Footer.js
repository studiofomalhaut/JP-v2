import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import mainLogo from '../imgs/jp.png'
import acontece from '../imgs/logo-acontece.png'
import linkados from '../imgs/linkados.png'
import clubofmoz from '../imgs/clubofmoz.png'
import './footer.css'


 const Footer = () => {

    return <React.Fragment>
            <footer>
                <div className="container-footer">
                        <div className="item-one">
                            <Link to="/#header"><img src={mainLogo} id="official-logo" alt="offical logo" /></Link>
                        </div>
                        <div className="item-two">
                            <a href="http://acontece.co.mz/lugares/espacos-eventos" target="_blank" rel="noopener noreferrer"><img src={acontece} id="acontece" alt="Top Espaço de Eventos em Moçambique no Acontece" /></a>
                        </div>
                        <div className="item-two">
                            <a href="https://www.facebook.com/linkadosmedia/" target="_blank" rel="noopener noreferrer"><img src={linkados} id="linkados" alt="Espaço de eventos anunciado no Linkados Media"/></a>
                        </div>
                        <div className="item-two">
                            <a href="https://clubofmozambique.com/business-directory/jardins-paloma-eventos/" target="_blank" rel="noopener noreferrer"><img src={clubofmoz} id="clubofmoz" alt="Event venue listed on Club of Mozambique business directory"/></a>
                        </div>
                        <div className="item-three">
                            <h4>Descubra</h4>
                            <li><Link to="/#header" className="link">Jardins Paloma</Link></li>
                            <li><Link to="/intro#heder" className="link"></Link></li>
                            <li><Link to="/pavilhoes#header" className="link">Espaços</Link></li>
                            <li><Link to="/eventos#header" className="link">Eventos</Link></li>
                            <li><Link to="/galeria#header" className="link">Galeria</Link></li>
                            <li><Link to="/noticias#header" className="link">Notícias</Link></li>
                            <li><Link to="/reservas#header" className="link">Reservas</Link></li>
                        </div>
                        <div className="item-four">
                            <h4>Contacto</h4>
                            <li><Link to="/contacto#contacto" className="link"><ion-icon name="compass"></ion-icon> R. Maganja da Costa, Matola</Link></li>
                            <li><a href="tel:00258846219541" className="link"><ion-icon name="call"></ion-icon> Telefone: (+258) 84 621 9541</a></li>
                            <li><a href="mailto:info@jardinspaloma.com" className="link"><ion-icon name="mail"></ion-icon> Geral: info@jardinspaloma.com</a></li>
                            <li><a href="mailto:ec@jardinspaloma.co.mz" className="link"><ion-icon name="mail"></ion-icon> Reservas: ec@jardinspaloma.co.mz</a></li>
                        </div>
                        <div className="item-five">
                            <h4>Redes Sociais</h4>
                            <li><a href="https://www.facebook.com/jardinspaloma/" target="_blank" className="link" rel="noopener noreferrer"><ion-icon name="logo-facebook"></ion-icon>Facebook</a></li>
                            <li><a href="https://www.instagram.com/jardinspaloma/" target="_blank" className="link" rel="noopener noreferrer"><ion-icon name="logo-instagram"></ion-icon>Instagram</a></li>
                            <li><a href="https://twitter.com/jardinspaloma" target="_blank" className="link" rel="noopener noreferrer"><ion-icon name="logo-twitter"></ion-icon>Twitter</a></li>
                        </div>
                    </div>
                <div className="container">
                    <div id="goodbye" className="row">
                        <p>Jardins Paloma Eventos &copy; 2019 • Todos os direitos reservados. Design concebido por <a href="http://fomalhaut.nl">Fomalhaut</a></p>
                    </div>
                </div>
        </footer>
    </React.Fragment>
}

export default Footer