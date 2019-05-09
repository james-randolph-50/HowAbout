import React, { Component } from 'react';
import './App.css';
import BreweryDetails from './components/BreweryDetails';

const APIURL = 'https://api.openbrewerydb.org/breweries?';
const citySearch = 'by_city=boston';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      error: null,
      isLoaded: false,
      breweries: [],
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    fetch(APIURL + citySearch)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            breweries: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, breweries } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div>
        <ul>
        {breweries.map(brewery => (
          <div className="brewery-card">
          <li key={brewery.id}>
          <p id="brewery-name">{brewery.name}</p>
          <p id="brewery-type">{brewery.brewery_type}</p> 
          <p id="brewery-address">{brewery.street} {brewery.city}, {brewery.state} {breweries.postal_code} </p>
          <button onClick={this.handleShow}>Details</button>
          <a href={brewery.website_url} target="_blank">Visit Site</a>


          </li>
          </div>
        ))}
      </ul>
      <BreweryDetails name="default"/>
      </div>
     );
    }
  }
}

export default App;
