import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Segment } from 'semantic-ui-react';

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

  checkoutContinuedHandler = () => {
    let inputMap = [...this.props.inputMap,];

    let isDataComplete = true;
    for (const item in inputMap) {
      let conditionEmpty = inputMap[item].value === '';

      if (conditionEmpty) {
        inputMap[item].error = true;
        isDataComplete = false;
      } else {
        inputMap[item].error = false;
      }
    }

    this.setState({ inputMap: inputMap, });

    if (isDataComplete) {
      this.props.onOrderDetailAdded(this.props.inputMap);
      this.props.formComplete(true);
      this.props.changeStep(4);
    } else {
      this.setState({ hasError: true });
      this.props.formComplete(false);
    }
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

        {this.props.stepNumber === 3 ?
          <Button.Group attached='bottom' className='segment-btn-grp'>
            <Button
              content='cancel'
              icon='remove'
              inverted={this.props.isNight}
              onClick={() => this.props.changeStep(2)}
              style={{ marginTop: '-1px' }}
            />
            <Button
              content='order'
              icon='shop'
              inverted={this.props.isNight}
              onClick={this.checkoutContinuedHandler}
            />
          </Button.Group>
          :
          null
        }

        <div className='boundary-toolbar-page-content' />
      </Aux>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderDetailAdded: (orderDetails) => dispatch(ordersActions.orderDetailsAdded(orderDetails)),
  };
}

export default connect(null, mapDispatchToProps)(Checkout);
