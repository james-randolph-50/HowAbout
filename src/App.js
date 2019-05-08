import React from 'react';
import './App.css';

const APIURL = `https://api.openbrewerydb.org/breweries`;
const citySearch = //get user input from form

class App extends Component {
  constructor() {
    super()

    this.state = {
      error: null,
      isLoaded: false,
      itms: []
    };
  }

  componentDidMount() {
    fetch(APIURL + citySearch)

  }

  render() {

    return (
      <div></div>
    )
  }
}

export default App;
