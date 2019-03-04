import React from 'react'
import './info.css'
import Header from '../../components/Header'
import backgroundImage from '../../imgs/gazebo2.jpeg'
import Item from './Itens/Item'
import salaogrande from '../../imgs/gallery5.jpg'
import salaograndeTwo from '../../imgs/salaogrande-fora.jpg'
import parqueInfantil from '../../imgs/parqueinf.jpg'
import parqueInfantilTwo from '../../imgs/pqinfant.jpg'
import minizoo from '../../imgs/rabbit.jpg'
import minizooTwo from '../../imgs/bttrfly.jpg'
import pavilhoes from '../../imgs/rustico-sm.jpg'
import pavilhoesTwo from '../../imgs/salaconf-dentro-planos.jpg'
import piscina from '../../imgs/piscinas-sm.jpg'
import piscinaTwo from '../../imgs/gallery3.jpg'
import jardim from '../../imgs/gallery8.jpg'
import jardimTwo from '../../imgs/gallery6.jpg'
import art from '../../imgs/gallery11.jpg'
import artTwo from '../../imgs/batik.jpg'
import parking from '../../imgs/parking.jpg'
import parkingTwo from '../../imgs/parking2.jpg'
import bar from '../../imgs/bar.jpg'
import barTwo from '../../imgs/bar-fora.jpg'
import wc from '../../imgs/wc.jpg'
import equip from '../../imgs/gazebo-old-sm.jpg'
import equipTwo from '../../imgs/chairs.jpg'
import inst from '../../imgs/bbq.jpg'


class Info extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header heading="Faça o seu Evento" imageBackground={backgroundImage}/>
                <section id="info-content">
                    <div className="row">
                        <h2>Ao seu dispôr encontrará:</h2>
                        <hr />
                    </div>
                    <div className="container-info">
                        <div className="ui items">

                            <Item   image={salaogrande}
                                    imageTwo={salaograndeTwo}
                                    heading="Salão de Festas"
                                    info="724 m&sup2;  • "
                                    moreInfo="500+ pessoas"
                                    description="Um salão grande para festas, ideal para festas de buffet, casamentos, conferências, festas de empresa..."
                            />
                            <Item   image={bar}
                                    imageTwo={barTwo}
                                    heading="Bar"
                                    info=""
                                    moreInfo=""
                                    description="Sítio de balcão e bar, com espaço de esplanada."
                            />
                            <Item   image={minizoo}
                                    imageTwo={minizooTwo}
                                    heading="Mini-zoo"
                                    info=""
                                    moreInfo=""
                                    description="No mini-zoo moram a veterana macaca Niki, uma tartaruga, coelhos, e os nossos estimados cães de guarda."
                            
                            />
                               <Item   image={parqueInfantil}
                                    imageTwo={parqueInfantilTwo}
                                    heading="Parque Infantil"
                                    info=""
                                    moreInfo=""
                                    description="Apoiado pelo pavilhão infantil, o parque tem um escorrega, espaço para brincar na relva e pula-pulas 
                                    (insufláveis) para completar a diversão!"
                            />
                        </div>
                </div>
                        <div className="container-info2">
                                <div className="ui items">
                            <Item   image={jardim}
                                    imageTwo={jardimTwo}
                                    heading="Jardins"
                                    info="1.5 hectares"
                                    moreInfo=""
                                    description="Cerca de 1.5 hectares de jardim florido, relva, e diversos tipos de árvores tropicais."
                             />
                             <Item   image={piscina}
                                    imageTwo={piscinaTwo}
                                    heading="Piscinas"
                                    info="2 piscinas"
                                    moreInfo=""
                                    description="Existem duas piscinas - uma para miúdos e outra para graúdos - e sítio de bar e esplanada.
                                    Apoiados por WC feminino e masculino."
                            />
                            <Item   image={art}
                                    imageTwo={artTwo}
                                    heading="Arte"
                                    info="Escultura •"
                                    moreInfo="Batiks"
                                    description="Uma escultura exterior, e batiks na sala de conferência. 
                                    Acolhemos exposições e vernissage, disponibilizando espaço como galeria.
                                    Venha dar o seu curso ou workshop criativo!"
                            />
                            <Item   image={parking}
                                    imageTwo={parkingTwo}
                                    heading="Estacionamento"
                                    info="100+ viaturas"
                                    moreInfo=""
                                    description="Temos espaço de parqueamento dentro do recinto dos Jardins Paloma, com capacidade para cerca de 100 viaturas."
                            />
                        </div>
                    </div>
                    <div className="container-info3">
                        <div className="ui items">
                         <Item  image={pavilhoes}
                                imageTwo={pavilhoesTwo}
                                heading="Pavilhões"
                                info="285 m&sup2; • 63 m&sup2; • 56 m&sup2;"
                                moreInfo=""
                                description="Existem três pavilhões: o Rústico (285 m&sup2;), ideal para aniversários, festas de 15 anos, e outros; 
                                a Sala de Conferências (63 m&sup2;), e o Pavilhão Infantil (56 m&sup2;)."
                            />
                            <Item   image={equip}
                                    imageTwo={equipTwo}
                                    heading="Equipamento"
                                    info=""
                                    moreInfo=""
                                    description="Poderá contar com cadeiras e mesas em madeira para 250 pessoas, gerador de electricidade, um gazebo de cerimónias."
                            />
                            <Item   image={inst}
                                    imageTwo={wc}
                                    heading="Instalações"
                                    info="WC • BBQ • Gerador"
                                    moreInfo=""
                                    description="Recepção, sala de espera para Noivos, WCs exteriores e interior, cozinha de apoio, sítio de BBQ, iluminação exterior"
                            
                            />
                        </div>
                    </div>
            </section>
          </React.Fragment>
        )
    }
}

export default Info