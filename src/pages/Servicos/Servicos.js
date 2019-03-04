import React from 'react'
import './servicos.css'
import Header from '../../components/Header'
import background from '../../imgs/gala-drinks.jpg'

class Servicos extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header heading="Serviços" imageBackground={background}/>
            </React.Fragment>
        )
    }
}

export default Servicos