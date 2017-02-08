import React, {Component} from 'react';
import ButtonContainer from './ButtonContainer.jsx';
import DisplayCost from './DisplayCost.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
    this.updateTotal = this.updateTotal.bind(this);
    this.resetTotal = this.resetTotal.bind(this);
  }

  updateTotal(amount) {
    this.setState({total: this.state.total + amount});
  }

  resetTotal() {
    this.setState({total: 0});
  }

  render() {
    return (
      <div>
        <ButtonContainer handleClick={this.updateTotal} />
        <DisplayCost total={this.state.total} handleClick={this.resetTotal} />
      </div>
    );
  }
}
export default App;
