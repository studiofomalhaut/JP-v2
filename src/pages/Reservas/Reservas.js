import React from 'react'
import { Link } from 'react-router-dom'
import './reservas.css'
import Header from '../../components/Header'
import PlanoRes from './PlanoRes/PlanoRes'
import background from '../../imgs/newyear.jpg'
import completo from '../../imgs/casamento-mesas-planos.jpg'
import decor from '../../imgs/decor-planos.jpg'
import catering from '../../imgs/cake-plans.jpg'
import simples from '../../imgs/salaconf-dentro-planos.jpg'

class Reservas extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header heading="Reservas" imageBackground={background} />
                <section id="plans">
                <div className="container-welcome">
                        <div className="row">
                            <div className="col span-1-of-2 box">
                                <ul>
                                <li>PLANOS DE RESERVA</li>
                                <li></li>
                                <li>JARDINS PALOMA</li>
                                </ul>
                            </div>
                            <div className="col span-2-of-2 ">
                                <p>Poderá escolher o plano correspondente ao tipo de evento que pretende. Os preços variam conforme os seus requisitos.
                                O Jardins Paloma poderá organisar catering e decoração do evento, e incluir no orçamento total; ou estes poderão ficar ao critério do cliente. 
                                <Link className="internal-link" to="/contacto"> Contacte-nos</Link> para obter um preçário.</p>
                            </div>
                        </div>
                    </div>
                    <h2>Os nossos planos</h2>
                    <hr />
                    <div className="container-plans">
                        <div className="row">
                        <PlanoRes   tipo="COMPLETO" 
                                    descricao="Aluguer de espaço ou sala, com decoração e catering incluídos."
                                    imagem={completo} 
                                    />
                        <PlanoRes   tipo="SALA &amp; DECORAÇÃO" 
                                    descricao="Aluguer de espaço ou sala com decoração incluída."
                                    imagem={decor}
                                    />
                        <PlanoRes   tipo="SALA &amp; CATERING" 
                                    descricao="Aluguer de espaço ou sala com catering incluído." 
                                    imagem={catering}
                                    />
                        <PlanoRes   tipo="SIMPLES" 
                                    descricao="Aluguer de espaço ou sala (decoração e catering ao critério do cliente)" 
                                    imagem={simples}
                                    />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Reservas