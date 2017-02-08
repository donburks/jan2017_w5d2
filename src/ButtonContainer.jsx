import React, {Component} from 'react';
import OrderButton from './OrderButton.jsx';
import styles from './styles.js';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [{name: "Hot Dog", price: 3}, {name: "Fries", price: 2}, {name: "Pop", price: 1}]
    }
    this.mapMenu = this.mapMenu.bind(this);
  }

  mapMenu(item) {
    return <OrderButton name={item.name} price={item.price} key={item.name} handleClick={this.props.handleClick} />
  }

  render() {
    console.log(styles);
    return (
      <div style={styles.btnContainer}>
        {this.state.menu.map(this.mapMenu)} 
      </div>
    );
  }
}
export default ButtonContainer;

