import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class LoadMap extends Component {
  constructor(props) {
    super(props);
    this.changeLocation = this.changeLocation.bind(this);
    //10.883280, 106.781627
    this.state = { lat: 10.883280, lng: 106.781627 };
  }

  changeLocation() {
    this.setState({ lat: this.state.lat + 0.0001, lng: this.state.lng + 0.0001 });
  }

  render() {
    console.log(this.state);
    const style = {
      width: "100%",
      height: "100%"
    };
    console.log(this.props);
    return (
      <div style={style}>
        <Map
          google={this.props.google}
          initialCenter={this.state}
          center={this.state}
          onClick={this.changeLocation}
          zoom={17}
        >
          <Marker 
            position={this.state}
          />
          <InfoWindow onClose={this.onInfoWindowClose} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDoR4RxlVoLzuMU13jMDRC3SdOeAkW_Rs8"
})(LoadMap);
