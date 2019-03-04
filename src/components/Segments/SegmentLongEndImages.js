import React from 'react'
import './segmentlongendimages.css'

const SegmentLongEndImages = (props) =>{
    return <section id="segment-long-end">
        <div className="container">
            <div className="box-0" style={{ backgroundImage: `url(${props.image})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover' }}>

                {/* <img className="flip" src={props.flip}/> */}
            </div>
            <div className="box-1" style={{ backgroundImage: `url(${props.image2})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover' }}>  
                                                       
                {/* <img className="flip" src={props.flip2} /> */}
             </div>
            
        </div> 
     </section>
}

export default SegmentLongEndImages