import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react'



class Map extends Component {
  static defaultProps = {
    center: {
      lat: 27.595537,
      lng: -81.514373
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <Link
          to="/">
          Back to the list
        </Link>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAlON1P3WcMsZMFUhEOXrvVftIg02fEVN4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;


// https://github.com/google-map-react/google-map-react
