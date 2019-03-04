import React from 'react';
import './mobilenavbutton.css'

class MobileNavButton extends React.Component {
    render(){
        return(
            <button className="mobile-nav-button " onClick={this.props.clickHandler}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
            </button>
        );
    }
}


export default MobileNavButton