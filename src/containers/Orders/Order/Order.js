import React, { Component } from 'react';

import { Button, Card, Grid, Label, List, Table, Transition } from 'semantic-ui-react';
import './Order.css';

import Aux from '../../../hoc/Auxilliary';

class Order extends Component {
  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        isVisible: true
      });
    }, 10);
  }

  state = {
    isVisible: false,
  }

  changeVisibility = () => this.setState({ isVisible: !this.state.isVisible });
  getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

  render() {
    const date = this.props.item.date.toLocaleString();
    const dateSplit = date.split(', ');
    const animationDuration = 600;

    return (
      <Aux>
        {this.props.isCardView ?
          <Transition
            visible={this.state.isVisible}
            animation='fade down'
            duration={{ hide: animationDuration, show: animationDuration }}
          >
            <Grid.Column style={{ marginTop: '28px' }} computer={4} tablet={8}>
              <Card style={this.props.isNight ? this.props.nightStyle[1] : null}>
                <Card.Content className='order-main-content'>
                  <Card.Header style={this.props.isNight ? { color: 'white' } : null} className='order-remove'>
                    <Button size='mini' icon='shop' onClick={() => {
                      this.props.handleOpen();
                      this.props.updateItem(this.props.item);
                    }} />
                    <Button size='mini' icon='close' onClick={() => {
                      this.changeVisibility();
                      setTimeout(() => {
                        this.props.orderRemoved(this.props.item);
                      }, animationDuration);
                    }} />
                  </Card.Header>
                  <Card.Description style={this.props.isNight ? { color: 'white' } : null}>
                    <List>
                      <List.Item>
                        <List.Icon name='calendar alternate' />
                        <List.Content>{dateSplit[0]}</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='clock outline' />
                        <List.Content>{dateSplit[1]}</List.Content>
                      </List.Item>
                    </List>
                    {this.props.addOrderDetails(this.props.item.ingredients, false)}
                  </Card.Description>
                </Card.Content>
                <Card.Content textAlign='right'>
                  <Card.Description>
                    <Label size='big' tag color={this.props.isNight ? 'grey' : null}>
                      $ {this.props.item.totalPrice.toFixed(2)}
                    </Label>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Transition>

          :

          <Transition
            visible={this.state.isVisible}
            animation='fade right'
            duration={{ hide: animationDuration, show: animationDuration }}
          >
            <Table.Row style={{ margin: '-15px 0' }}>
              <Table.Cell width={3}>
                {dateSplit[0]}
              </Table.Cell>
              <Table.Cell width={3}>
                {dateSplit[1]}
              </Table.Cell>
              <Table.Cell width={3}>
                &nbsp;$ {this.props.item.totalPrice.toFixed(2)}
              </Table.Cell>
              <Table.Cell width={6}>
                {this.props.addOrderDetails(this.props.item.ingredients)}
              </Table.Cell>
              <Table.Cell width={1}>
                <Button size='mini' icon='shop' onClick={() => {
                  this.props.handleOpen();
                  this.props.updateItem(this.props.item);
                }} />
                <Button size='mini' icon='close' onClick={() => {
                  this.changeVisibility();
                  setTimeout(() => {
                    this.props.orderRemoved(this.props.item);
                  }, animationDuration);
                }} />
              </Table.Cell>
            </Table.Row>
          </Transition>
        }
      </Aux>
    );
  }
}

export default Order;
