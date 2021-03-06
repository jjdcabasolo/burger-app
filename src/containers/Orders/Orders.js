import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Grid, Icon, Label, List, Table } from 'semantic-ui-react';
import './Orders.css';

import NotFound from '../../components/NotFound/NotFound';
import Order from './Order/Order';
import OrderTools from '../../components/Order/OrderTools/OrderTools';

import * as actions from '../../store/actions/index';

import Aux from '../../hoc/Auxilliary';

const labelColor = {
  salad: 'green',
  tomato: 'red',
  cheese: 'yellow',
  meat: 'brown',
}

class Orders extends Component {
  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        showCards: true
      });
    }, 10);
  }

  state = {
    activeLayout: 'card',
    activeSort: 'date',
    dateOrder: true,
    isSaladActive: true,
    isTomatoActive: true,
    isMeatActive: true,
    isCheeseActive: true,
    isMobileToolsOpen: true,
    isModalOpen: false,
    item: {
      date: null,
      details: null,
      ingredients: {},
      totalPrice: null,
    },
    showCards: false,
    priceOrder: true,
  }

  addContactDetails = (details) => {
    return (
      <List>
        <List.Item>
          <List.Icon name='home' />
          <List.Content>{details.address}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='phone' />
          <List.Content>{details.number}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='mail' />
          <List.Content>
            <a href={'mailto:' + details.email}>{details.email}</a>
          </List.Content>
        </List.Item>
      </List>
    );
  }

  filterIngredients = () => {
    let filteredOrders = [];
    let index = 0;

    this.props.ordersLocal.forEach((item) => {
      let toPush = false;
      if (item.ingredients.cheese > 0 && this.state.isCheeseActive) toPush = true;
      else if (item.ingredients.salad > 0 && this.state.isSaladActive) toPush = true;
      else if (item.ingredients.meat > 0 && this.state.isMeatActive) toPush = true;
      else if (item.ingredients.tomato > 0 && this.state.isTomatoActive) toPush = true;
      if (toPush) filteredOrders[index++] = item;
    })

    if (this.state.activeSort === 'date') {
      filteredOrders.sort((a, b) => {
        if (this.state.dateOrder) return new Date(a.date) - new Date(b.date);
        return new Date(b.date) - new Date(a.date);
      });
    }
    else {
      filteredOrders.sort((a, b) => {
        if (this.state.priceOrder) return a.totalPrice - b.totalPrice;
        return b.totalPrice - a.totalPrice;
      });
    }

    return filteredOrders;
  }

  toggleOrder = (e, { order }) => {
    this.resetView();
    this.setState({ [order]: !this.state[order] });
  }

  switchViewSortHandler = (e, { name, statename }) => {
    this.resetView();
    this.setState({ [statename]: name });
  }

  toggleIngredientHandler = (name) => {
    this.resetView();
    this.setState({ [name]: !this.state[name] });
  }

  toggleToolsHandler = () => {
    this.resetView();
    this.setState({ isMobileToolsOpen: !this.state.isMobileToolsOpen });
  }

  handleOpen = () => this.setState({ isModalOpen: true })
  handleClose = () => this.setState({ isModalOpen: false })
  updateItem = (item) => this.setState({ item: item })

  resetView = () => {
    this.setState({ showCards: false });
    setTimeout(() => {
      this.setState({ showCards: true });
    }, 50);
  }

  render() {
    let message = null;
    if (this.props.ordersLocal.length === 0) {
      message = (
        <NotFound
          isNight={this.props.isNight}
          nightStyle={this.props.nightStyle}
          iconName='exclamation triangle'
          mainMessage='Nothing here yet.'
          subMessage='List of recent orders will appear here as soon as an order is placed.'
        />
      );
    }

    const isCardView = this.state.activeLayout === 'card';

    let orders = this.filterIngredients();
    const orderStructure = (item, count) => {
      return (
        <Order
          {...this.props}
          addOrderDetails={this.addOrderDetails}
          count={count}
          handleOpen={this.handleOpen}
          isCardView={isCardView}
          isNight={this.props.isNight}
          itemClick={this.props.itemClick}
          item={item}
          key={count}
          nightStyle={this.props.nightStyle}
          orderRemoved={this.props.removeOrder}
          showCards={this.state.showCards}
          hideCards={this.hideCards}
          updateItem={this.updateItem}
          loadData={this.props.loadData}
          orders={orders}
        />
      );
    };

    return (
      <Container className='orders-container'>
        {message ?
          message

          :

          <Aux>
            {orders.length !== 0 ?
              isCardView ?
                <Grid stackable>
                  <Grid.Row>
                    {orders.map((item, count) => { return orderStructure(item, count); })}
                  </Grid.Row>
                </Grid>

                :

                <div className='orders-table'>
                  <Table basic='very' compact='very' selectable singleLine unstackable inverted={this.props.isNight} textAlign='center'>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell sorted='ascending'>
                          &nbsp; DATE
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                          &nbsp; TIME
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                          &nbsp; ORDER DETAILS
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                        </Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {orders.map((item, count) => { return orderStructure(item, count); })}
                    </Table.Body>
                  </Table>
                </div>

              :

              <NotFound
                isNight={this.props.isNight}
                nightStyle={this.props.nightStyle}
                iconName='frown outline'
                mainMessage='No results.'
                subMessage={'Nobody ordered a bun-only burger. Besides, it is not possible in the first place.'}
              />
            }

            <OrderTools
              activeLayout={this.state.activeLayout}
              activeSort={this.state.activeSort}
              dateOrder={this.state.dateOrder}
              isCheeseActive={this.state.isCheeseActive}
              isMeatActive={this.state.isMeatActive}
              isNight={this.props.isNight}
              isOpen={this.state.isMobileToolsOpen}
              isSaladActive={this.state.isSaladActive}
              isTomatoActive={this.state.isTomatoActive}
              priceOrder={this.state.priceOrder}
              toggleIngredient={this.toggleIngredientHandler}
              toggleOrder={this.toggleOrder}
              toggleTools={this.toggleToolsHandler}
              switchViewSort={this.switchViewSortHandler}
            />
          </Aux>
        }
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ordersLocal: state.order.ordersLocal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeOrder: (order) => dispatch(actions.orderRemove(order)),
    loadData: (order) => dispatch(actions.loadData(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
