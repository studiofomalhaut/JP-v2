import React from 'react'
import './segmentImages.css'

const SegmentImages = (props) =>{
    return <section id="segment-long">
        <div className="container">
            <div className="box-9" style={{ backgroundImage: `url(${props.image})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover' }}>   

                {/* <img className="flip" src={props.flip} alt="hover-gallery-image"/>                                     */}
            </div>
            <div className="box-10" style={{ backgroundImage: `url(${props.image2})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover' }}>
                                            
                {/* <img className="flip" src={props.flip2} alt="hover-gallery-image"/>  */}
            </div>
        </div> 
     </section>
}

export default SegmentImages