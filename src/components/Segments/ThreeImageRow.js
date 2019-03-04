import React from 'react'
import './threeimagerow.css'

const ThreeImageRow = (props) =>{
    return <section id="three-img-row">
        <div className="container">
            <div className="box-a" style={{ backgroundImage: `url(${props.image})`,
                                            CbackgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover' }}>   

                {/* <img className="flip" src={props.flip} />           */}
            </div>
            <div className="box-b" style={{ backgroundImage: `url(${props.image2})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover' }}>
                
                {/* <img className="flip" src={props.flip2} /> */}
            </div>
            <div className="box-c" style={{ backgroundImage: `url(${props.image3})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover' }}>
                                            
                {/* <img className="flip" src={props.flip3} /> */}
            </div>
            </div> 
     </section>
}

export default ThreeImageRow