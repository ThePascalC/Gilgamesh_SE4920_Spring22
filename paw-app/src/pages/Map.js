import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import * as parkData from "../parks.json";
const AnyReactComponent = ({ text }) => <div>{text}</div>;


function GetMap({latitude, longitude}) {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: latitude, lng: longitude},
      map,
      title: "Marker"
    }); 
    return marker;
  }
  const defaultProps = {
    center: {
      lat: 38.7577,
      lng: -93.7405
    },
    zoom: 10
  }

  return (
<div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
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
  );
}


export default GetMap;
