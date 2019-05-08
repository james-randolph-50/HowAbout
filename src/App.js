import React, { Component } from 'react';
import './App.css';

const APIURL = 'https://api.openbrewerydb.org/breweries?';
const citySearch = 'by_city=boston';

class App extends Component {
  constructor() {
    super()

    this.state = {
      error: null,
      isLoaded: false,
      breweries: []
    };
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
          <ul>
            {breweries.map(brewery => (
              <div>
              <li key={brewery.id}>
              <p id="brewery-name">{brewery.name}</p>
              <p id="brewery-type">{brewery.brewery_type}</p> 
              <p id="brewery-address">{brewery.street} {brewery.city}, {brewery.state} {breweries.postal_code} </p>
              <button href={brewery.website_url} target="_blank">Visit Site</button>
              </li>
              </div>
            ))}
          </ul>
     );
    }
  }
}

export default App;
