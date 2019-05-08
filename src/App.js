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
              <li key={brewery.id}>
              <p>Name: {brewery.name} Type: {brewery.brewery_type} Address: {brewery.street} | {brewery.city} | {brewery.state} | {breweries.postal_code} <a href={brewery.website_url} target="_blank">Visit Site</a> </p>
              </li>
            ))}
          </ul>
     );
    }
  }
}

export default App;
