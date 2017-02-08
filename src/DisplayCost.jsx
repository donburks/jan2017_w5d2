import React, {Component} from 'react';
import styles from './styles.js';

class DisplayCost extends Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
  }

  reset() {
    let yn = confirm("Are you sure you want to checkout?");
    if (yn) {
      this.props.handleClick();
    }
  }

  boo() {
    alert("BOO!");
  }

  render() {
    return (
      <div style={styles.total}>
        <h1>${this.props.total}</h1>
        <button className="checkout" onClick={this.reset}>Checkout</button>
        <button onClick={this.boo}>Click me</button>
      </div>
    );
  }
}

export default DisplayCost;
