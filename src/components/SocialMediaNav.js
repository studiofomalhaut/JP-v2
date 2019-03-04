import React from 'react'
import './socialmedianav.css'
import '../queries.css'

class SocialMediaNav extends React.Component{
    render(){
        return(
            <nav className="vertical-nav">
                <ul>
                    <li><a href="https://www.facebook.com/jardinspaloma/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-facebook"></ion-icon></a></li>
                    <li><a href="https://www.instagram.com/jardinspaloma/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    <li><a href="https://twitter.com/jardinspaloma" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-twitter"></ion-icon></a></li>
                    <li><a href="https://www.linkedin.com/company/jardins-paloma/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    <li><a href="mailto:info@jardinspaloma.com"><ion-icon name="mail"></ion-icon></a></li>
                    <li><a href="tel:+258846219541"><ion-icon name="call"></ion-icon></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=258846219541"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
                </ul>
          </nav>
        )
    }
}

export default SocialMediaNav