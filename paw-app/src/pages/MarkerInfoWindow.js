import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

// examples:

// consts: [34.0522, -118.2437]

// InfoWindow component
const InfoWindow = (props) => {
  const { place } = props;
  const infoWindowStyle = {
    position: 'relative',
    bottom: 150,
    left: '-45px',
    width: 220,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>
        {place.name}
      </div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: 'grey' }}>
          {place.rating}
          {' '}
        </span>
        <span style={{ color: 'orange' }}>
          {String.fromCharCode(9733).repeat(Math.floor(place.rating))}
        </span>
        <span style={{ color: 'lightgrey' }}>
          {String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}
        </span>
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {place.types[0]}
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {'$'.repeat(place.price_level)}
      </div>
      <div style={{ fontSize: 14, color: 'green' }}>
        {place.opening_hours.open_now ? 'Open' : 'Closed'}
      </div>
    </div>
  );
};

// Marker component
const Marker = ({ show, place }) => {
  const markerStyle = {
    border: '1px solid white',
    borderRadius: '50%',
    height: 10,
    width: 10,
    backgroundColor: show ? 'red' : 'blue',
    cursor: 'pointer',
    zIndex: 10,
  };

  return (
    <>
      <div style={markerStyle} />
      {show && <InfoWindow place={place} />}
    </>
  );
};

class MarkerInfoWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/parks`)
      .then(res => {
        this.setState({ places: res.data }, function () {
          console.log(this.state)
        });
      })
  }

  // onChildClick callback can take two arguments: key and childProps
  onChildClickCallback = (key) => {
    this.setState((state) => {
      const index = state.places.findIndex((e) => e.id === key);
      state.places[index].show = !state.places[index].show; // eslint-disable-line no-param-reassign
      return { places: state.places };
    });
  };

  render() {
    const { places } = this.state;

    return (
      <>
        (
          <GoogleMapReact
            defaultZoom={10}
            defaultCenter={ {
                lat: 39.0997,
                lng: -94.578331
              }}
            bootstrapURLKeys={{}}
            onChildClick={this.onChildClickCallback}
          >
            {places.map((place) => (
              <Marker
                key={place.id}
                lat={place.lat}
                lng={place.lng}
                show={show}
                place={place}
              />
            ))}
          </GoogleMapReact>
        )
      </>
    );
  }
}

InfoWindow.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    population: PropTypes.number,
    quality: PropTypes.number,
  }).isRequired,
};

Marker.propTypes = {
  show: PropTypes.bool.isRequired,
  place: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    population: PropTypes.number,
    quality: PropTypes.number,
  }).isRequired,
};

export default MarkerInfoWindow;