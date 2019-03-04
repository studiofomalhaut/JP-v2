import React, {Component} from 'react'
import './eventos.css'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import ImageBox from './ImageBox'
import background from '../../imgs/decor.jpg'
import empresa from '../../imgs/empresa.jpeg'
import aniversario from '../../imgs/festa.jpg'
import casamento from '../../imgs/wedding-ceremony.jpeg'
import aula from '../../imgs/aula.jpg'

class Eventos extends Component{
    render(){
        return(
            <React.Fragment>
                <Header heading="Eventos" imageBackground = {background}/>
            <section id="eventos">
                <div className="container-title">
                    <h2>Eventos que acolhemos</h2>
                        <hr/> 
                </div>
                    <div className="container-events-list">
                        <div className="item-one">
                            <ul className="events-list">
                                <li><i className="fas fa-birthday-cake"></i>Aniversários</li>
                                <li><i className="fas fa-chalkboard-teacher"></i>Apresentações</li>
                                <li><i className="fas fa-baby"></i>Baptizados</li>
                            </ul>
                        </div>
                        <div className="item-two">
                            <ul className="events-list">
                                <li><i className="fas fa-dove"></i>Casamentos</li>
                                <li><i className="fas fa-drum"></i>Comemorações</li>
                                <li><i className="fas fa-cocktail"></i>Festa de cocktail</li>
                            </ul>
                        </div>
                        <div className="item-three">
                            <ul className="events-list">
                                <li><i className="fab fa-black-tie"></i>Conferências</li>
                                 <li><i className="fas fa-handshake"></i>Confraternizações</li>
                                <li><i className="fas fa-briefcase"></i>Congressos</li>
                            </ul>
                        </div>
                        <div className="item-four">
                        <ul className="events-list">
                            <li><i className="fas fa-object-group"></i>Cursos</li> 
                            <li><i className="fas fa-network-wired"></i>Eventos corporativos</li>
                            <li><i className="fas fa-palette"></i>Exposições</li>
                        </ul>
                        </div>
                        <div className="item-five">
                            <ul className="events-list">
                                <li><i className="fas fa-kiwi-bird"></i>Festa Infantil</li>
                                <li><i className="fas fa-concierge-bell"></i>Festa de Buffet</li>
                                <li><i className="fas fa-hand-spock"></i>Festa dos 15 anos</li>
                            </ul>
                        </div>
                        <div className="item-six">
                            <ul className="events-list">
                                <li><i className="fas fa-users"></i>Festas de Empresa</li>
                                <li><i className="fas fa-pen-fancy"></i>Reuniões</li>
                                <li><i className="fas fa-users-cog"></i>Treino empresarial</li>
                            </ul>
                        </div>
                        <div className="item-seven">
                            <ul className="events-list">
                                <li><i className="fas fa-book"></i>Treino académico</li>
                                <li><i className="fas fa-glass-cheers"></i>Vernissage</li>
                                <li><i className="fas fa-user-graduate"></i>Workshops</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <Link to="/reservas"><button><i className="fas fa-phone-volume"></i>Reservas</button></Link>                        
                    </div>
            </section>
            <section id="showcase">
                <div className="container-squares">
                    <ImageBox name="square-1"
                              picture={aniversario}
                    />
                    <ImageBox name="square-2"
                              picture={empresa}
                    />
                    <ImageBox name="square-3"
                              picture={casamento}
                    />
                    <ImageBox name="square-4"
                              picture={aula}
                    />
                </div>
            </section>
        </React.Fragment>
        )
    }
}

export default Eventos