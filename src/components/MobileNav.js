import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

class MobileNav extends React.Component{

    render(){

        let mobileNavClasses = ['container-links'];
        if (this.props.show){
            mobileNavClasses = 'container-links slide';
        }

        let links = document.getElementsByClassName('mobile-nav-link');
        for (let i=0; i<links.length; i++){
            links[i].setAttribute("onClick", `${this.props.linkOnClick}`)
        }
    

        return (
            <div id="mobile-links" className={mobileNavClasses}>
                <ul>
                    <li><Link className="mobile-nav-link" to="/info#header">INFO</Link></li>
                    <li><Link className="mobile-nav-link" to="/galeria#header">GALERIA</Link></li>
                    <li><Link className="mobile-nav-link" to="/eventos#header">EVENTOS</Link></li>
                    <li><Link className="mobile-nav-link" to="/pavilhoes#header">ESPAÇOS</Link></li>
                    {/* <li><Link to="/reservas">SERVIÇOS</Link></li> */}
                    <li><Link className="mobile-nav-link" to="/noticias#header">NOTÍCIAS</Link></li>
                    <li><Link className="mobile-nav-link" to="/reservas#header">RESERVAS</Link></li>
                    <li><Link className="mobile-nav-link" to="/contacto#header">CONTACTO</Link></li>
                </ul>
            </div>
        )
    }
   
}

export default MobileNav