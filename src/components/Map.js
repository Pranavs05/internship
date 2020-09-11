import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import sample from '../assets/shorter_address.json';
class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 25.76168,
      lng: -80.19179,
    },
    zoom: 9,
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      });
  };

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  render() {
    return (
      <Map
        style={{ height: '100%', width: '100%', margin: '0 auto' }}
        google={this.props.google}
        initialCenter={this.props.center}
        zoom={this.props.zoom}
      >
        {sample.features.map((address, index) => {
          return (
            <Marker
              key={index}
              name={address.properties.SNAME}
              position={{
                lat: location.lat,
                lng: location.lng 
              }}
               onClick={this.onMarkerClick}
            ></Marker>
          );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <div style={{color:'black'}}>{this.state.selectedPlace.name}</div>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.API_KEY,
})(MapContainer);
