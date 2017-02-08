import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      provinces: []
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.filterProvinces = this.filterProvinces.bind(this);
  }

  componentDidMount() {
    this.setState({provinces: ["Alberta", "Ontario", "British Columbia", "Quebec",
       "Nova Scotia", "New Brunswick", "Manitoba", "Prince Edward Island",
       "Saskatchewan", "Newfoundland and Labrador",
       "Northwest Territories", "Yukon", "Nunavut"]});
  }

  updateQuery(e) {
    this.setState({query: e.target.value});
  }

  filterProvinces(p) {
    return new RegExp(this.state.query.toLowerCase()).test(p.toLowerCase())
  }

  mapProvinces(p) {
    return (<div key={p}>{p}</div>)
  }

  render() {
    return (
      <div>
        <input value={this.state.query} onChange={this.updateQuery}/>
        <div>
          {this.state.provinces.filter(this.filterProvinces).map(this.mapProvinces)}
        </div>
      </div>
    );
  }
}
export default App;
