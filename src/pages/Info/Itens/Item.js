import React from 'react'

class Item extends React.Component{
    render(){

        const { image, imageTwo, heading, info, moreInfo, description } = this.props
        return(
            <React.Fragment>
                    <div className="ui card">
                    <div className="ui slide masked reveal image">
                        <img src={image} className="visible content" alt="jpcontent" />
                        <img src={imageTwo} className="hidden content" alt="jpcontent"/>
                    </div>
                        <div className="content">
                            <div className="header">{heading}</div>
                            <div className="meta">
                                <span className="info">{info} </span>
                                <span className="moreInfo">{moreInfo} </span>
                            </div>
                            <div className="description">
                                {description}
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Item