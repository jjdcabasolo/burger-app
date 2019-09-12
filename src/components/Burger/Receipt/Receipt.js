import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Divider, Header, List, Segment, Grid, Modal } from 'semantic-ui-react';

import * as ordersActions from '../../../store/actions/index';

import Aux from '../../../hoc/Auxilliary';
import './Receipt.css';

const formatInput = (inputMap) => {
  return [
    {
      entry: inputMap[4].value,
      value: inputMap[0].value + " " + inputMap[1].value,
      icon: "user",
    },
    {
      entry: inputMap[2].value,
      value: inputMap[3].value,
      icon: "address card outline",
    },
  ];
}

class Receipt extends Component {
  state = {
    hasError: false,
    isModalOpen: false,
  }

  handleOpen = () => this.setState({ isModalOpen: true })

  handleClose = () => this.setState({ isModalOpen: false })

  render () {
    const data = formatInput(this.props.inputMap);

    return (
      <Aux>
        <Header
          block
          as='h5'
          attached='top'
          content='/ RECEIPT'
          style={this.props.isNight ? this.props.nightStyle[1] : null} />

        <Segment
          attached
          inverted={this.props.isNight}
          style={this.props.isNight ? this.props.nightStyle[0] : null} >

          <p className='secondary-font font-normal'>Almost done! Please double check the information you have provided before finally placing the order.</p>
          <Divider className='receipt-divider-space' />

          {this.props.form ?
            <Grid>
              <Grid.Column width={5} textAlign='right' verticalAlign='middle'>
                <span className='receipt-total'>{'$ ' + parseFloat(this.props.price).toFixed(2)}</span>
                <p className='font-normal'>cost</p>
              </Grid.Column>
              <Grid.Column width={11}>
                {data.map((element) => {
                  return (
                    <List id='receipt' inverted={this.props.isNight}>
                      <List.Item>
                        <List.Icon name={element.icon} className='receipt-icon' />
                        <List.Content>
                          <List.Header className='secondary-font receipt-value'>
                            {element.value}
                          </List.Header>
                          <List.Description className='secondary-font font-normal'>
                            {element.entry}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  );
                })}
              </Grid.Column>
            </Grid>
            :
            null
          }

          <Divider className='receipt-divider-space' />
          <p className='secondary-font font-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi lectus, eleifend non varius sit amet, tristique eget leo. Duis ut tristique libero. </p>
        </Segment>

        <Button.Group attached='bottom' className='segment-btn-grp'>
          <Button
            content='builder'
            icon='add'
            onClick={() => this.props.changeStep(1)}
            classname='receipt-builder-btn'
          />
          <Button
            content='delivery'
            icon='truck'
            onClick={() => this.props.changeStep(3)}
          />
          <Button
            content='place order'
            icon='checkmark'
            onClick={() => this.handleOpen()}
            className='receipt-place-order'
          />
        </Button.Group>

        <Modal
          trigger={<div />}
          basic
          size='small'
          open={this.state.isModalOpen}
          onClose={this.handleClose}
        >
          <Header content='PLACING ORDER' className='primary-font font-large' />
          <Modal.Content>
            <p className='secondary-font font-normal'>
              Are you really sure you want to place this order?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              basic
              id='btn-secondary'
              content='No'
              icon='remove'
              inverted
              onClick={() => this.handleClose()}
            />

            <Button
              basic
              id='btn-primary'
              content='Yes'
              icon='checkmark'
              inverted
              className='receipt-button-remove-left-border'
              onClick={() => {
                this.props.onOrderAdded(this.props.inputMap, this.props.ingredients, this.props.totalPrice, this.props.ingredientQueue);
                this.props.clearBuilder();
                this.props.itemClick('', { name: 'orders' });
                this.props.history.push('/orders');
              }}
            />
          </Modal.Actions>
        </Modal>

        <div className='boundary-toolbar-page-content' />
      </Aux>
    )
  }
};

const mapStateToProps = state => {
  return {
    ingredients: state.build.ingredients,
    ingredientQueue: state.build.ingredientQueue,
    totalPrice: state.build.totalPrice,
    inputMap: state.order.inputMap,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderDetailAdded: (orderDetails) => dispatch(ordersActions.orderDetailsAdded(orderDetails)),
    onOrderAdded: (orderDetails, burgerIngredients, burgerPrice, ingredientQueue) => dispatch(ordersActions.orderAdded(orderDetails, burgerIngredients, burgerPrice, ingredientQueue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
