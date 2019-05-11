import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Modal, Segment } from 'semantic-ui-react';

import ContactData from './../../components/Order/ContactData/ContactData';

import * as ordersActions from '../../store/actions/index';
import Aux from './../../hoc/Auxilliary';

class Checkout extends Component {
  state = {
    hasError: false,
    isModalOpen: false,
  }

  handleOpen = () => this.setState({ isModalOpen: true })
  handleClose = () => this.setState({ isModalOpen: false })

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
      // this.handleOpen();
    } else {
      this.setState({ hasError: true });
      this.props.formComplete(false);
    }
  }

  changeHandler = (_, { name, value }) => {
    const inputMap = [...this.props.inputMap];
    inputMap[inputMap.findIndex(x => x.name === name)].value = value;
    this.setState({ inputMap: inputMap, hasError: false });
  }

  errorDetectionHandler = (hasError) => this.setState({ hasError: hasError });
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

        {this.props.reOrderDetails ?
          <Segment
            attached
            inverted={this.props.isNight}
            style={this.props.isNight ? this.props.nightStyle[0] : null}
            content={this.props.reOrderDetails}
          />

          :

          null
        }

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
          <Button.Group attached='bottom'>
            <Button
              content='Cancel'
              icon='remove'
              inverted={this.props.isNight}
              onClick={() => this.props.changeStep(2)}
              style={{ marginTop: '-1px' }}
            />
            <Button
              content='Order'
              icon='shop'
              inverted={this.props.isNight}
              onClick={this.checkoutContinuedHandler}
            />
          </Button.Group>
          :
          null
        }

        <Modal
          trigger={<div />}
          basic
          size='small'
          open={this.state.isModalOpen}
          onClose={this.handleClose}
          closeIcon
        >
          <Header icon='warning' content='Finishing order' />
          <Modal.Content>
            <p>
              Are you really sure you want to place this order?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              basic
              color='red'
              content='No'
              icon='remove'
              inverted
              onClick={() => this.handleClose()}
            />

            <Button
              color='green'
              content='Yes'
              icon='checkmark'
              inverted
              onClick={() => {
                if (this.props.reOrderDetails) {
                  this.props.onOrderAdded(this.props.inputMap, this.props.reOrderIngredients, this.props.reOrderPrice);
                  this.handleClose();
                  this.props.handleReOrderClose();
                } else {
                  this.props.onOrderAdded(this.props.inputMap, this.props.ingredients, this.props.totalPrice);
                  this.props.itemClick('', { name: 'orders' });
                  this.props.history.push('/orders');
                }
              }}
            />
          </Modal.Actions>
        </Modal>

        <div className='boundary-toolbar-page-content' />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.build.ingredients,
    totalPrice: state.build.totalPrice,
    inputMap: state.order.inputMap,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderDetailAdded: (orderDetails) => dispatch(ordersActions.orderDetailsAdded(orderDetails)),
    onOrderAdded: (orderDetails, burgerIngredients, burgerPrice) => dispatch(ordersActions.orderAdded(orderDetails, burgerIngredients, burgerPrice)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
