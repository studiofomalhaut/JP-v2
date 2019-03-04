import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class JpMap extends React.Component {
    render(){
        return (<Map google={this.props.google} zoom={14} style={{width: '50%', height: '50%', position:'absolute'}}>
                <Marker title={'Jardins Paloma'}
                        position={{lat: -25.943964, lng: 32.469737}}
                        />
        
                <InfoWindow onClose={this.onInfoWindowClose}>
                </InfoWindow>
            </Map>)
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyDFNLkr4h65PMSYgdRRclf55DDhLkEYK-0")
  })(JpMap)