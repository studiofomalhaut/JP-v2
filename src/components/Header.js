import React from 'react'
import './header.css'
import Navigation from './Navigation'
import SocialMediaNav from './SocialMediaNav'
import MobileNavButton from './MobileNavButton'
import MobileNav from './MobileNav'

class Header extends React.Component{
    state = {
        mobileNavOpen: false,
      };
    
      mobileNavTogglerHandler = () => {
          this.setState((prevState) => {
              return {mobileNavOpen: !prevState.mobileNavOpen};
          });
      }

      mobileLinkClickHandler = () => {
        this.setState({mobileNavOpen:false})
    }


    render(){

    const {heading, subheading, imageBackground} = this.props;

        return(
          <section  id="header" style = {{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${imageBackground})` }}>
              <Navigation />
              <SocialMediaNav />
              <MobileNav show={this.state.mobileNavOpen} linkOnClik={this.mobileLinkClickHandler}/>
              <MobileNavButton clickHandler = {this.mobileNavTogglerHandler} />
              <div className="row">
                <h1>{heading}</h1>
                <h2 className="subheading">{subheading}</h2>
              </div>
        </section>
        )
      }
}

export default Header
