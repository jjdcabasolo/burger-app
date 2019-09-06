import React, { Component } from 'react';

import { Button, Card, Grid, Label, List, Table, Transition } from 'semantic-ui-react';
import './Order.css';

import Aux from '../../../hoc/Auxilliary';
import Ingredients from '../../../components/UI/Ingredients/Ingredients';

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
    console.log(this.props)
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
              <Card style={this.props.isNight ? this.props.nightStyle[1] : null} className='order-card'>
                <Card.Content className='order-main-content'>
                  <Card.Header style={this.props.isNight ? { color: 'white' } : null} className='order-remove'>
                    <Button.Group
                      className='order-tools-btn-grp'
                      id='order-tools-toggle'
                      buttons={[
                        {
                          icon: 'shop',
                          key: 'shop',
                          onClick: () => {
                            this.props.handleOpen();
                            this.props.updateItem(this.props.item);
                          },
                        },
                        {
                          icon: 'minus',
                          key: 'less',
                          onClick: () => {
                            this.changeVisibility();
                            setTimeout(() => {
                              this.props.orderRemoved(this.props.item);
                            }, animationDuration);
                          }
                        },
                      ]}
                    />
                  </Card.Header>
                  <Card.Description style={this.props.isNight ? { color: 'white' } : null}>
                    <List>
                      <List.Item>
                        <List.Content className='secondary-font font-normal'>{dateSplit[0]}</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content className='secondary-font font-normal'>{dateSplit[1]}</List.Content>
                      </List.Item>
                    </List>
                    <Ingredients
                      ingredients={this.props.item.ingredients}
                      totalPrice={this.props.item.totalPrice}
                      showTotal
                    />
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
                <Button.Group
                  buttons={[
                    {
                      icon: 'shop',
                      key: 'shop',
                      onClick: () => {
                        this.props.handleOpen();
                        this.props.updateItem(this.props.item);
                      },
                    },
                    {
                      icon: 'minus',
                      key: 'less',
                      onClick: () => {
                        this.changeVisibility();
                        setTimeout(() => {
                          this.props.orderRemoved(this.props.item);
                        }, animationDuration);
                      }
                    },
                  ]}
                />
              </Table.Cell>
            </Table.Row>
          </Transition>
        }
      </Aux>
    );
  }
}

export default Order;
