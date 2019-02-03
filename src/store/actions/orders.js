mport * as actionTypes from '../actions/actionTypes';

export const orderAdded = (orderDetails, burgerIngredients, burgerPrice) => {
  return {
    type: actionTypes.ADD_ORDER,
    orderDetails: orderDetails,
    burgerIngredients: burgerIngredients,
    burgerPrice: burgerPrice,
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