import React, {Component} from 'react';
import styles from './styles.js';

class OrderButton extends Component {
  constructor(props) {
    super(props);
    this.updateTotal = this.updateTotal.bind(this);
  }

  updateTotal() {
    this.props.handleClick(this.props.price);
  }

  render() {
    return (
      <div>
        <button style={styles.btn} onClick={this.updateTotal}>Buy {this.props.name}</button>
      </div>
    );
  }
}

export default OrderButton;

