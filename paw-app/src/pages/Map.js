import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import React from 'react';
import axios from 'axios';


class GetMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      parksData: [],
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
                id={record.id}
                lat={record.latitude}
                lng={record.longitude}
                address={record.address}
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
