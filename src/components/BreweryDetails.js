import React, { Component } from 'react';


class BreweryDetails extends Component {
    render() {
        
        const { name } = this.props;

        return (
            <div className="brewery-details">
                <h3>{name}</h3>
            </div>
        )
    }
}
  
  export default BreweryDetails;
  