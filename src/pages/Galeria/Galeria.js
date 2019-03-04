import React from 'react'
import Header from '../../components/Header'
import './galeria.css'
import background from '../../imgs/bestmenbestwomen.jpeg'
import SegmentLong from '../../components/Segments/SegmentLong'
import SegmentLongEnd from '../../components/Segments/SegmentLongEnd'
import SegmentLongEndImages from '../../components/Segments/SegmentLongEndImages'
import SegmentMiddle from '../../components/Segments/SegmentMiddle'
import SegmentImages from '../../components/Segments/SegmentImages'
import ThreeImageRow from '../../components/Segments/ThreeImageRow'
import casamento from '../../imgs/casamento-nilzadias.jpg'
import noivos from '../../imgs/casamento-nilzadias-noivos.jpg'
import mesas from '../../imgs/tables.jpg'
import gardenWc from '../../imgs/garden-wc.jpg'
import rustico from '../../imgs/rustico-prof-crop.jpg'
import jardim from '../../imgs/jardim-gazebo.jpg'
import damas from '../../imgs/damasdonor.jpg'
import flower from '../../imgs/flower.jpg'
import festa2 from '../../imgs/festa2.jpg'
import escultura from '../../imgs/20-crop.jpg'
import salaorustico from '../../imgs/salaorustico-fora.jpg'
import batik from '../../imgs/batik.jpg'
import weddingGazebo from '../../imgs/wedding-gazebo.jpg'
import gallery8 from '../../imgs/gallery8.jpg'

class Galeria extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header heading="Galeria" imageBackground={background}/>
                <section id="galeria-intro">
                    <div className="container-welcome">
                        <div className="row">
                            <div className="col span-1-of-2 box">
                                <ul>
                                <li>Junte-se a Nós</li>
                                <li></li>
                                <li>JARDINS PALOMA</li>
                                </ul>
                            </div>
                            <div className="col span-2-of-2 ">
                                <p>Nos nossos espaços poderá concretizar o seu evento de sonho. Os Jardins Paloma acompanham-no nos melhores momentos, e celebram 
                                consigo momentos importantes da sua vida, com o maior profissionalismo, gosto e atenção. Venha festejar connosco!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <SegmentLongEndImages   image={gardenWc}
                                        image2={mesas}
                 />
                <SegmentMiddle  heading="Natureza"
                            text="Venha desfrutar da tranquilidade dos nossos espaços, em convívio com a Natureza.
                            Os nosso jardins são um oásis que proporcionam uma escapadela agradável ao turbilhão urbano."
                            image={flower}
                            image2={festa2}   
                />
                <SegmentImages  image={noivos}
                                image2={casamento}
                 />
                <ThreeImageRow  image={batik}
                                image2={escultura}
                                image3={salaorustico}

                />
                <SegmentLong    heading="Convívio"
                                text="Amigos, família, colegas, alunos e professores, expositores, artistas, apresentadores, equipes e empresas: todos são bem-vindos! A versatilidade dos nossos espaços permite 
                                trazer consigo tanto o seu grupo mais próximo, como a sua network profissional mais alargada."
                                image={weddingGazebo}

                />
                <SegmentLongEnd heading="Bem-estar"
                                text="Dedicamo-nos a prestar os melhores serviços e condições para facilitar o seu evento e torná-lo realidade. A nossa atenciosa equipe está sempre ao seu dispôr para o ajudar, zelando pelo seu bem-estar e o dos seus convidados. Desejamos que o seu evento seja um sucesso memorável!"
                                image={gallery8}

                />
                 <section id="segment-three">
                    <div className="three-lg-imgs">
                        <div className="box-12" style={{ backgroundImage: `url(${rustico})`, 
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover' }}>
                        </div>
                        <div className="box-13" style={{ backgroundImage: `url(${damas})`, 
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover' }}>         
                            </div>
                        <div className="box-14" style={{ backgroundImage: `url(${jardim})`, 
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover'}}>
                            </div>
                    </div> 
                </section>
                <section id="gallery-sendus">
                    <h2>Já fez o seu evento connosco?</h2>
                    <hr/>
                    <h4>Gostamos de receber as suas fotos! Envie para:</h4>
                    <li><a href="mailto:info@jardinspaloma.com"><i className="fas fa-envelope-open-text"></i>info@jardinspaloma.com</a></li>
                </section>
            </React.Fragment>
        )
    }
}

export default Galeria