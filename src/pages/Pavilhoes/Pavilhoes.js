import React from 'react'
import './pavilhoes.css'
import Header from '../../components/Header'
import background from '../../imgs/salaodecorado.jpg'
import Segment from '../../components/Segments/Segment'
import SegmentLong from '../../components/Segments/SegmentLong'
import SegmentMiddle from '../../components/Segments/SegmentMiddle'
import SegmentLongEnd from '../../components/Segments/SegmentLongEnd'
import salaofestas from '../../imgs/salaogrande-fora.jpg'
import salaofestas2 from '../../imgs/salao-dentro.jpg'
import rustico from '../../imgs/rustico.jpg'
import gazebo from '../../imgs/gazebo-crop.jpg'
import rabbit from '../../imgs/rabbit.jpg'
import outside from '../../imgs/piscinas-sm-crop.jpg'
import reunioes2 from '../../imgs/salaconf-dentro.jpg'
import reunioes from '../../imgs/salaconf-fora.jpg'
import jp from '../../imgs/rustico-fora.jpg'
import infantil2 from '../../imgs/pavinfant.jpg'
import infantil from '../../imgs/pqinfant.jpg'

class Pavilhoes extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header heading="Espaços" imageBackground={background} />
                <section id="pavilhoes-intro">
                <div className="container-welcome">
                        <div className="row">
                            <div className="col span-1-of-2 box">
                                <ul>
                                <li>Os nossos espaços</li>
                                <li></li>
                                <li>JARDINS PALOMA</li>
                                </ul>
                            </div>
                            <div className="col span-2-of-2 ">
                                <p>Rodeados de jardins floridos e de árvores tropicais, os espaços nos Jardins Paloma convidam-no a fazer o seu evento em convívio com a Natureza. Proporcionam um local tranquilo, natural, florido, para si,
                        sua família, equipe, amigos, e grupos convidados ao seu evento.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Segment    image={salaofestas}
                            image2={salaofestas2}
                            heading="SALÃO DE FESTAS"
                            text="Sala de 700 m&sup2;, ideal para eventos de maior envergadura ou número elevado de convidados,
                            como conferências, casamentos, bodas de prata e ouro, festas de gala, congressos, cocktails, feiras, ou eventos corporativos.
                            Dispõe de cozinha de apoio, WCs masculino e feminino, pista de dança, janelões, ar-condicionado."
                />
                <SegmentLong image={rustico}
                            heading="PAVILHÃO RÚSTICO"
                            text="Este espaço trará um toque mais tradicional e íntimo ao seu evento. Com uma lindíssima arquitectura tradicional, 
                            este pavilhão é revestido de janelões, proporcionando excelente luz natural.
                            Com 285 m&sup2;, o pavilhão tem capacidade para cerca de 250 pessoas. É ideal para casamentos, baptizados, aniversários, festas de empresa, e mais!"
                />
                 <SegmentLongEnd image={outside}
                            heading="PISCINAS"
                            text="Perto da entrada nos jardins encontrará duas piscinas rodeadas de arbustos e flores. 
                            As piscinas são o sítio mais atrativo para as crianças, principalmente em tempo de férias escolares, e dias de muito calor. 
                            O acesso é pago ao dia."
                />
                <SegmentMiddle image={reunioes}
                            image2={reunioes2}
                            heading="SALA DE REUNIÕES"
                            text="Nesta sala de arquitectura rústica, e janelas que revestem o espaço do chão ao teto, poderá fazer reuniões, cursos, workshops, ou apresentações.
                            Dispõe de 63 m&sup2; e chega a acolher 40+ pessoas."
                />
                <SegmentLong image={jp}
                             heading="ESTILO TRADICIONAL"
                             text="Três dos nossos espaços apresentam uma construção tradicional, em vigas de madeira e colmo natural, tornando o espaço acolhedor.
                             A manutenção dos espaços é feita por uma equipe atenciosa, que diáriamente presta os melhores cuidados."
                />
                <Segment    image={infantil}
                            image2={infantil2}
                            heading="PARQUE INFANTIL"
                            text="Situado no centro dos Jardins Paloma, o parque tem escorrega, pula-pulas insufláveis, e casinha de brincar.
                            É servido de um mini-pavilhão de apoio ao parque infantil. Dispõe de 56 m&sup2; e é o sítio mais divertido para as crianças "
                />
                <SegmentMiddle  image={gazebo}
                                image2={rabbit}
                                heading="E MAIS"
                                text="Encontrará ainda um gazebo para cerimónias de casamento, com caminho ao altar ladeado de arbustos, para tornar o seu evento ainda mais especial.
                                Temos ainda um mini-zoo, onde encontrará vários animais domésticos e outros, incluíndo a nossa veterana macaca Niki, que adora visitas e festinhas."
                />
            </React.Fragment>
        )
    }
}

export default Pavilhoes