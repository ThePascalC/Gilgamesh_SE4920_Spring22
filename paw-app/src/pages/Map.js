import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import React from 'react';
import axios from 'axios';
class GetMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { parksData: [] };
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/parks`)
    .then(res => {
      this.setState({ parksData: res.data }, function () {
        console.log(this.state)
      });
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



  render (){ 
    return(<div>
       <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ }}
        defaultCenter={{
          lat: 38.7577,
          lng: -93.7405
        }}
        defaultZoom={10}
      >
                    {this.state.parksData.map(record => {
            return (

              <Marker key={record.id}
                lat={record.latitude}
                lng={record.longitude}
                color={"red"}
              />
            )
          })}
          {/* { <Marker 
          lat={this.parkState.parksData[0].latitude}
          lng={this.parkState.parksData[0].longitude}
          color={"red"}          
    />  }
          <Marker 
          lat={38.757739}
          lng={-93.741559}
          color={"red"}          
          /> */}
        

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