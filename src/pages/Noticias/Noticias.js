import React from 'react'
import './noticias.css'
import Header from '../../components/Header'
import NewsCard from './NewsCard'
import background from '../../imgs/festivo.jpeg'
import acontece from '../../imgs/top-acontece.jpg'
import promo from '../../imgs/nydiscount-instagram.jpg'
import linkadosPic from '../../imgs/linkados-ad.jpg'

class Noticias extends React.Component{
    render(){

        return(
            <React.Fragment>
                <Header heading="Notícias" imageBackground={background}/>
                <section id="noticias">
                    <div className="row">
                        <h2>AS ÚLTIMAS NOVIDADES</h2>
                        <hr />
                    </div>
                    <NewsCard   picture={linkadosPic}
                                heading="Linkados Media"
                                subheading="Fevereiro 2019"
                                description="Anúncio na 3a edição dos Linkados Media"
                    />
                    <NewsCard   picture={promo}
                                heading="Promoção Festiva"
                                subheading="24 Dez. 2018 - 15 Fev. 2019"
                                description="Promoção especial de festas. ESGOTADO"
                    />
                    <NewsCard   picture={acontece}
                                heading="Acontece" 
                                subheading="TOP Espaços de Eventos"
                                description="Os Jardins Paloma foram escolhidos como um dos locais de eventos de referência em Maputo,
                                            pela plataforma Acontece"  
                    />
                </section>
            </React.Fragment>
        )
    }
}

export default Noticias