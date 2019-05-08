import React from 'react';
import GoogleMapReact from 'google-map-react';

const BreweryDetails = ({ brewery }) => (
    <div key={brewery.id} className="brewery-details">
        <h3>{brewery.name}</h3>
        <p id="brewery-address">{brewery.street} {brewery.city}, {brewery.state} {breweries.postal_code} </p>

    </div>
)

class SimpleMap extends Component {
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
   
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <BreweryDetails
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
   
  export default SimpleMap;
  