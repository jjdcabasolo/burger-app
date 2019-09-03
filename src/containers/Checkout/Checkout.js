import React, { Component } from 'react';
import { Button, Header, Modal, Segment } from 'semantic-ui-react';

import ContactData from './../../components/Order/ContactData/ContactData';

import * as ordersActions from '../../store/actions/index';
import Aux from './../../hoc/Auxilliary';

class Checkout extends Component {
  state = {
    hasError: false,
  }

  changeHandler = (_, { name, value }) => {
    const inputMap = [...this.props.inputMap];
    inputMap[inputMap.findIndex(x => x.name === name)].value = value;
    this.setState({ inputMap: inputMap, hasError: false });
  }

  render() {
    return (
      <Aux>
        <Header
          block
          as='h5'
          attached='top'
          content='/ DELIVERY DETAILS'
          style={this.props.isNight ? this.props.nightStyle[1] : null}
        />

        <Segment
          attached
          inverted={this.props.isNight}
          style={this.props.isNight ? this.props.nightStyle[0] : null}
          content={
            <ContactData
              isNight={this.props.isNight}
              changeState={this.changeHandler}
              inputMap={this.props.inputMap}
              hasError={this.state.hasError}
            />
          }
        />

        <div className='boundary-toolbar-page-content' />
      </Aux>
    );
  }
}

export default Checkout;
