import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Grid } from 'semantic-ui-react';
import './BurgerBuilder.css';

import { Fade } from 'react-reveal';

import Aux from '../../hoc/Auxilliary';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Receipt from '../../components/Burger/Receipt/Receipt';
import Checkout from '../Checkout/Checkout';
import Ingredients from './../../components/UI/Ingredients/Ingredients';

import * as actions from '../../store/actions';

// mapping of prices
const INGREDIENT_PRICES = {
  salad: 0.50,
  tomato: 0.40,
  cheese: 1.30,
  meat: 0.70,
  bun: 4.00,
}

class BurgerBuilder extends Component {
  state = { stepNumber: 1, form: false, }

  updatePurchaseState = (ingredients, type) => {
    const sum = Object
      .keys(ingredients)
      .map((ingredientKey) => {
        return ingredients[ingredientKey];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);

    return (sum === 0);
  }

  changeStep = (index) => this.setState({ stepNumber: +index, });
  formComplete = (boolean) => this.setState({ form: boolean })

  render() {
    const disabledInfo = { ...this.props.ingredients, }

    for (let key in disabledInfo) { // replaces value with true or false (check if greater than 0)
      disabledInfo[key] = (disabledInfo[key] <= 0);
    }

    let rightPanelStyle = 'burgerbuilder-right-step-1';
    if (this.state.stepNumber === 2) rightPanelStyle = 'burgerbuilder-right-step-2';
    else if (this.state.stepNumber === 3) rightPanelStyle = 'burgerbuilder-right-step-3';
    else if (this.state.stepNumber === 4) rightPanelStyle = 'burgerbuilder-right-step-4';

    return (
      <Aux>
        <Container id='bugerbuilder-container'>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={7} textAlign='right'>
                <Fade down>
                  <Burger
                    ingredients={this.props.ingredientQueue}
                    isNight={this.props.isNight}
                    nightStyle={this.props.nightStyle}
                  />
                </Fade>

                <Fade down>
                  <Ingredients
                    ingredients={this.props.ingredients}
                    totalPrice={this.props.totalPrice}
                    showTotal={this.state.stepNumber > 2} />
                </Fade>
              </Grid.Column>

              <Grid.Column width={9} id={rightPanelStyle} className='burgerbuilder-right-steps'>
                <div className={this.state.stepNumber === 1 ? null : 'burgerbuilder-right-step-opacity'}>
                  <Fade up>
                    <BuildControls
                      ingredientAdded={this.props.onIngredientAdded}
                      ingredientRemoved={this.props.onIngredientRemoved}
                      ingredientRemove={this.props.onIngredientClear}
                      disabled={disabledInfo}
                      price={this.props.totalPrice}
                      ordered={this.purchaseHander}
                      clear={() => this.props.onIngredientsClear()}
                      canOrder={this.updatePurchaseState(this.props.ingredients, 'canOrder')}
                      isNight={this.props.isNight}
                      nightStyle={this.props.nightStyle}
                      visible={true}
                      changeStep={this.changeStep}
                      stepNumber={this.state.stepNumber}
                    />
                  </Fade>
                </div>

                <div className={this.state.stepNumber === 2 ? null : 'burgerbuilder-right-step-opacity'}>
                  <Fade up>
                    <OrderSummary
                      visible={true}
                      ingredients={this.props.ingredients}
                      itemPrices={INGREDIENT_PRICES}
                      isNight={this.props.isNight}
                      nightStyle={this.props.nightStyle}
                      price={this.props.totalPrice}
                      changeStep={this.changeStep}
                      stepNumber={this.state.stepNumber}
                    />
                  </Fade>
                </div>

                <div className={this.state.stepNumber === 3 ? null : 'burgerbuilder-right-step-opacity'}>
                  <Checkout
                    {...this.props}
                    visible={true}
                    isNight={this.props.isNight}
                    nightStyle={this.props.nightStyle}
                    cancelOrder={this.cancelOrderHander}
                    addOrder={this.props.addOrder}
                    burgerState={this.state}
                    itemClick={this.props.itemClick}
                    changeStep={this.changeStep}
                    stepNumber={this.state.stepNumber}
                    formComplete={this.formComplete}
                  />
                </div>

                <div className={this.state.stepNumber === 4 ? null : 'burgerbuilder-right-step-opacity'}>
                  <Receipt
                    {...this.props}
                    changeStep={this.changeStep}
                    isNight={this.props.isNight}
                    nightStyle={this.props.nightStyle}
                    price={this.props.totalPrice}
                    inputMap={this.props.inputMap}
                    addOrder={this.props.onOrderAdded}
                    itemClick={this.props.itemClick}
                    form={this.state.form}
                    clearBuilder={this.props.onIngredientsClear}
                  />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.build.ingredients,
    totalPrice: state.build.totalPrice,
    ingredientQueue: state.build.ingredientQueue,
    inputMap: state.order.inputMap,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingredientName) => dispatch(actions.ingredientAdded(ingredientName)),
    onIngredientRemoved: (ingredientName) => dispatch(actions.ingredientRemoved(ingredientName)),
    onIngredientClear: (ingredientName) => dispatch(actions.ingredientClear(ingredientName)),
    onIngredientsClear: () => dispatch(actions.ingredientsClear()),
    onOrderAdded: (orderDetails, burgerIngredients, burgerPrice) => dispatch(actions.orderAdded(orderDetails, burgerIngredients, burgerPrice)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
