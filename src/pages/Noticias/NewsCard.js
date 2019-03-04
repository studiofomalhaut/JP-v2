import React from 'react'

const NewsCard = (props) => {
    return <div className="ui cards">
            <div className="card">
                <div className="image">
                    <img src={props.picture} alt="Promoções, marketing e comunicações dos Jardins Paloma"/>
                </div>
                <div className="content">
                    <div className="header">{props.heading}</div>
                    <div className="meta">
                        <p>{props.subheading}</p>
                    </div>
                    <div className="description">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
}

export default NewsCard