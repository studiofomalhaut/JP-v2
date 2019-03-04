import React from 'react';
import {Link} from 'react-router-dom'

const IntroSegment = (props) => {

    return(
        <div className={props.id} style={{  backgroundImage: `url(${props.backgroundImage})`,
                                            backgroundPosition: 'fixed',
                                            backgroundRepeat:'no-repeat'}}>

            <Link to={props.linkTo}>
                <div className="intro-pic-hover">
                    <h4>{props.title}</h4>
                    <p>{props.text}</p>
                </div>
            </Link> 
        </div>
    )
}

export default IntroSegment