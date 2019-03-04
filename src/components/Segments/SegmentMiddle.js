import React from 'react'
import './segmentMiddle.css'

const SegmentMiddle = (props) =>{
    return <section id="segment-middle">
        <div className="container">
            <div className="box-6" style={{ backgroundImage: `url(${props.image})`,
                                            CbackgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover' }}>    
                    {/* <img className="flip" src={props.flip}/>          */}
            </div>
            <div className="box-7">
                <div className="text">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
            <div className="box-8" style={{ backgroundImage: `url(${props.image2})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover' }}>
                    {/* <img className="flip" src={props.flip2}/> */}
                </div>
            </div> 
     </section>
}

export default SegmentMiddle