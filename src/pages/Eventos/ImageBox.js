import React from 'react'

const ImageBox = (props) =>{

    return <div className={`${props.name} clearfix`} style={{ backgroundImage: `url(${props.picture})`,
                                                backgroundSize: 'cover'
                                                }}>
                {/* <img className="flip" src={props.flip} alt="hovered-picture"/> */}
    </div>
}

export default ImageBox