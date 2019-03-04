import React from 'react'
import './segmentLong.css'

const SegmentLong = (props) =>{
    return <section id="segment-long">
        <div className="container">
            <div className="box-five" style={{ backgroundImage: `url(${props.image})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover' }}>   
                {/* <img className="flip" src={props.flip} /> */}
            </div>
            <div className="box-four">
                <div className="text">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </div> 
     </section>
}

export default SegmentLong