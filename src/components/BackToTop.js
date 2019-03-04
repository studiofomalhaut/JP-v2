import React from 'react'
import './backtotop.css'
import {HashLink as Link} from 'react-router-hash-link'

class BackToTop extends React.Component{

    render(){
        return(
            <div className="back-to-top-container" onClick={this.props.click}>
                <Link to="#header">
                    <button id="backtotop" >
                        <i className="angle double up icon"></i>
                    </button>
                </Link>
            </div>
        )
    }
}



export default BackToTop