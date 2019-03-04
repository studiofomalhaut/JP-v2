import React from 'react'

class PlanoRes extends React.Component{
    render(){

        const {tipo, descricao, imagem } = this.props;

        return(
             <div className="col span-1-of-4 box-plan">
                <ul>
                    <img src={imagem} alt="Quatro planos de reserva disponíveis, com salao, catering e ou decoração" />
                    <li>{tipo}</li>
                    <li>{descricao}</li>
                <hr/>
                <li>PEDIDO DE COTAÇÃO</li>
                    <li><a className="call-to-action" href="https://wa.me/258846219541"><ion-icon name="logo-whatsapp"></ion-icon>WhatsApp</a></li>
                    <li><a className="call-to-action" href="tel:00258846219541"><ion-icon name="call"></ion-icon>Telefone</a></li>
                    <li><a className="call-to-action" href="mailto:ec@jardinspaloma.co.mz"><ion-icon name="mail"></ion-icon> E-mail</a></li>
                </ul>
        </div> 
        )
    }
}

export default PlanoRes