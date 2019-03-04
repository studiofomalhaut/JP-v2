import React from 'react'
import './segments.css'

const Segment = (props) =>{
    return <section id="segment">
                <div className="container">
                    <div className="box-1" style={{ backgroundImage: `url(${props.image})`, 
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover' }}>
                        
                    </div>
                    <div className="box-2" style={{ backgroundImage: `url(${props.image2})`, 
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover' }}>             
                        </div>
                    <div className="box-3" style={{ backgroundImage: `url(${props.image3})`, 
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover'}}>
                        </div>
                </div> 
        </section>
}

export default Segment