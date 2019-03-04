import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import './vendors/normalize.min.css'
import Intro from './pages/Intro/Intro'
import Info from './pages/Info/Info'
import Galeria from './pages/Galeria/Galeria'
import Eventos from './pages/Eventos/Eventos'
import Pavilhoes from './pages/Pavilhoes/Pavilhoes'
// import Servicos from './pages/Servicos/Servicos'
import Noticias from './pages/Noticias/Noticias'
import Reservas from './pages/Reservas/Reservas'
// import Loja from './pages/Loja/Loja'
import Contacto from './pages/Contacto/Contacto'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'


class App extends Component {

  render(){

    return (
        <Router>
            <div className="App">
              <div className="container">
                  <Switch>
                    <Route exact path="/" component={Intro}/>
                    <Route exact path="/info" component={Info} />
                    <Route exact path="/galeria" component={Galeria}/>
                    <Route exact path="/eventos" component={Eventos}/>
                    <Route exact path="/pavilhoes" component={Pavilhoes}/>
                    {/* <Route exact path="/servicos" component={Servicos}/> */}
                    <Route exact path="/noticias" component={Noticias}/>
                    <Route exact path="/reservas" component={Reservas}/>
                    {/* <Route exact path="/loja" component={Loja}/> */}
                    <Route exact path="/contacto" component={Contacto}/>
                  </Switch>
                  <BackToTop />
                  <Footer />
              </div>
            </div>
        </Router>
    )
  }
}

export default App;