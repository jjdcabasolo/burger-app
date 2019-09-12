import * as actionTypes from '../actions/actionTypes';

export const orderAdded = (orderDetails, burgerIngredients, burgerPrice, ingredientQueue) => {
  return {
    type: actionTypes.ADD_ORDER,
    orderDetails: orderDetails,
    burgerIngredients: burgerIngredients,
    burgerPrice: burgerPrice,
    ingredientQueue: ingredientQueue,
  };
}

export const orderRemove = (order) => {
  return {
    type: actionTypes.REMOVE_ORDER,
    order: order,
  }
}

export const orderDetailsAdded = (orderDetails) => {
  return {
    type: actionTypes.ORDER_DETAILS,
    orderDetails: orderDetails,
  };
}
