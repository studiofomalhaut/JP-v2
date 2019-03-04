import React from 'react'
import './contacto.css'
import Header from '../../components/Header'
import background from '../../imgs/casamento-mesas.jpeg'



class Contacto extends React.Component{

    componentDidMount(){
        this.renderMap()
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDWcaUioI2rJdO4aL1xHYuNdCMHT5l4l7Q&callback=initMap")
        window.initMap = this.initMap
    }

    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: -25.943964, lng: 32.469737},
      });
      const marker = new window.google.maps.Marker({
          position: {lat: -25.943964, lng: 32.469737},
          map: map,
          title: 'Jardins Paloma',
      });
      }

    render(){
        return(
            <React.Fragment>
                <Header heading="Contacto" imageBackground={background} />
                <section id="contacto">
                    <div className="container-contacto">
                            <div className="contact-box">
                            <h4>Contacto</h4>
                                <ul className="contact-list">
                                    <li><i className="fas fa-map-marker-alt"></i>Rua Maganja da Costa, Matola - Maputo</li>
                                    <li><i className="far fa-envelope"></i>Geral: <a href="mailto:info@jardinspaloma.com">info@jardinspaloma.com</a></li>
                                    <li><i className="far fa-envelope"></i>Reservas: <a href="mailto:ec@jardinspaloma.co.mz">ec@jardinspaloma.co.mz</a></li>
                                    <li><i className="fas fa-phone"></i>T/WhatsApp: <a href="tel:+258846219541">+258 84 621 9541</a></li>
                                    </ul>
                                <h4>Horário</h4>
                                <ul className="contact-list">
                                        <li><ion-icon name="clock"></ion-icon>Aberto todos os dias das 7h30 às 17h, excepto feriados nacionais.</li>
                                </ul>
                            </div>
                            <div className="map-box">
                                <div id="map"></div>
                                </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

function loadScript(url){
    let index = window.document.getElementsByTagName("script")[0]
    let script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script,index)
}

export default Contacto 
