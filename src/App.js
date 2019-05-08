import React from 'react';
import './App.css';

const APIURL = `https://api.openbrewerydb.org/breweries`;
//const citySearch = get user input from form

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
    fetch(APIURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            breweries: result.breweries
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
              {brewery.name} {brewery.city}
              </li>
            ))}
          </ul>
     );
    }
  }
}

export default App;
