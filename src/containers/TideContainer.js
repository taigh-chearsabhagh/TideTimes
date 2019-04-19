import React from 'react';
import TideSelector from '../components/TideSelector';
import TideDetail from '../components/TideDetail';

class TideContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tides: [],
      currentTide: null
    };
    this.handleTideSelected = this.handleTideSelected.bind(this)
  }

  componentDidMount(){
    fetch("https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations",
    method: 'GET',
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.REACT_APP_TIDE_API_KEY
      // above line might need {} pr "{}" around the value
    })

    .then(response => response.json())
    .then(data => this.setState({tides: data}))
  }

  handleTideSelected(index){
    const selectedTide = this.state.tides[index]
    this.setState({currentTide: selectedTide})
  }

  render(){
    return (
      <div>
        <h2>Tide Container</h2>
        <TideSelector tides={this.state.tides}
        onTideSelected={this.handleTideSelected}
        />
        <TideDetail tide={this.state.currentTide}/>
      </div>
    )
  }
}
export default CountryContaier;
