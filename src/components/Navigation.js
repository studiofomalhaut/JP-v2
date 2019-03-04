import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../imgs/jpcopy.png'
import './navigation.css'


class Navigation extends React.Component{

    render(){
        return(
            <React.Fragment>
                <nav id="main-nav">
                    <div className="row">
                         <Link to="/">
                        <img src={logo} className="logo" alt="logo" />
                        </Link>
                        <ul className="main-nav">
                            <li><Link className="navlink" to="/info">INFO</Link></li>
                            <li><Link className="navlink" to="/pavilhoes">ESPAÇOS</Link></li>
                            <li><Link className="navlink" to="/eventos">EVENTOS</Link></li>
                            <li><Link className="navlink" to="/galeria">GALERIA</Link></li>
                            {/* <li><Link to="/servicos">SERVIÇOS</Link></li> */}
                            <li><Link className="navlink" to="/noticias">NOTÍCIAS</Link></li>
                            <li><Link className="navlink" to="/reservas">RESERVAS</Link></li>
                            <li><Link className="navlink" to="/contacto">CONTACTO</Link></li>
                            <li id="ligueja"><Link className="navlink" to="tel:+258846219541"><ion-icon name="call"></ion-icon>LIGUE JÁ</Link></li>
                            </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}


export default Navigation