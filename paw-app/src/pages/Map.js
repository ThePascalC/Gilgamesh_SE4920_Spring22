import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import React from 'react';
import axios from 'axios';
import AuthService from "../services/auth.service";


class GetMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      parksData: [],
      currentUser: AuthService.getCurrentUser()
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/parks`)
      .then(res => {
        this.setState({ parksData: res.data }, function () {
          console.log(this.state)
        });
      })
  }
  


  render() {
    return (<div>
      <div style={{ height: '80vh', width: '80%', margin: '3rem auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{}}
          defaultCenter={{
            lat: 39.0997,
            lng: -94.578331
          }}
          defaultZoom={10}
        >
          {this.state.parksData.map(record => {
            return (

              <Marker 
                title={record.title}
                rating={record.rating}
                population={record.population}
                quality={record.quality}
                key={record.id}
                lat={record.latitude}
                lng={record.longitude}
                color={"#57a8cc"}
              />

            )
          })}

        </GoogleMapReact>
      </div>
    </div>)
  }

}

export default GetMap
