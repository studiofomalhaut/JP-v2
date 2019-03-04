import React from 'react'
import './segmentLongEnd.css'

const SegmentLongEnd = (props) =>{
    return <section id="segment-long-end">
        <div className="container">
            <div className="box-4">
                <div className="text">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
            <div className="box-5" style={{ backgroundImage: `url(${props.image})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover' }}>  
                 {/* <img className="flip" src={props.flip}/>            */}
             </div>
            
        </div> 
     </section>
}

export default SegmentLongEnd