import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import React from 'react';
import axios from 'axios';
class GetMap extends React.Component {
  // parkState = {
  //   parksData: []
  // }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/parks`)
    .then(res => {
        const parks = res.data;
        console.log(parks);
        this.setState({parksData: parks});
        console.log(this.state.parksData[0].latitude);
        
    })
}

  
  // const renderMarkers = (map, maps) => {
  //   let marker = new maps.Marker({
  //     position: { lat: latitude, lng: longitude},
  //     map,
  //     title: "Marker"
  //   }); 
  //   return marker;
  // }
  state = {
    center: {
      lat: 38.7577,
      lng: -93.7405
    },
    zoom: 10,
    parksData: []
}


  render (){ 
    return(<div>
       <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ }}
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
      >
          
          {/* <Marker 
          lat={this.state.parksData.latitude}
          lng={this.state.parksData.longitude}
          color={"red"}          
    />  */}
          <Marker 
          lat={38.757739}
          lng={-93.741559}
          color={"red"}          
          />
        
        
      </GoogleMapReact>
    </div>
    </div>)
}

}

export default GetMap


/*
 <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ }}
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
      >
    
          <Marker 
          lat={38.770939}
          lng={-93.761933}
          color={"red"}          
          />
                    <Marker 
          lat={38.757739}
          lng={-93.741559}
          color={"red"}          
          />
        
        
      </GoogleMapReact>
    </div>
    */