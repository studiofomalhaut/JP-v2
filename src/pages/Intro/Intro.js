import React from 'react'
import './intro.css'
import '../../vendors/grid.min.css'
import '../../vendors/normalize.min.css'
import Header from '../../components/Header'
import IntroSegment from './IntroSegments'
import background from '../../imgs/tables.jpg'
import rustico from '../../imgs/rustico-prof-crop2.jpg'
import tree from '../../imgs/tree.jpg'
import weddingCake from '../../imgs/wedding-cake.jpg'


class Intro extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header heading="Jardins Paloma" subheading="Eventos" imageBackground={background} >
                </Header>
            
            <div className="container-welcome">
                <div className="row">
                    <div className="col span-1-of-2 box">
                        <ul>
                        <li>BEM-VINDO</li>
                        <li>WELCOME</li>
                        <li>JARDINS PALOMA</li>
                        </ul>
                    </div>
                    <div className="col span-2-of-2 ">
                        <p>Nos Jardins Paloma encontrará espaços de eventos e belíssimos jardins, um grande salão de festas, pavilhões, piscinas, sítio de bar e esplanada, parque infantil e estacionamento. 
                            Localizado na Matola, Moçambique, o Jardins Paloma dispõe de 1.5 hectares, e acolhe variados eventos - desde casamentos, festas de buffet, festa infantil, festa de 15 anos, baptizados, 
                            comemorações de fim de ano, cocktails, festas de empresa, eventos corporativos, eventos start up e team building, eventos de gala, reuniões ou apresentações de empresa, eventos escolares, entre muitos outros. </p>
                    </div>
                
                </div>
            </div>
            <section id="segment-of-three">
                    <div className="three-lg-imgs">
                    <IntroSegment   id="box-12"
                                    backgroundImage={tree} 
                                    title="ESPAÇOS"
                                    text="Encontrará espaços ao seu dispôr, pavilhões, um salão de festas, e jardins para fazer o seu evento."
                                    linkTo="/pavilhoes#header"/>

                    <IntroSegment   id="box-13"
                                    backgroundImage={rustico}
                                    title="EVENTOS"
                                    text="Acolhemos variados tipos de eventos, desde batizados, casamentos, congressos, reuniões, eventos corporativos, e mais!"
                                    linkTo="/eventos#header"/>

                    <IntroSegment   id="box-14"
                                    backgroundImage={weddingCake}
                                    title="RESERVAS"
                                    text="Temos quatro planos de reserva. Escolha o mais adequado ao evento que pretende realizar."
                                    linkTo="/reservas#header"/>

                    </div> 
                </section>
          </React.Fragment>
        )
    }
}

export default Intro