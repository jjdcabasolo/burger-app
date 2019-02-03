import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState = {
  inputMap: [
    { name: 'fname', value: '', error: false, entry: 'First name' },
    { name: 'lname', value: '', error: false, entry: 'Last name' },
    { name: 'email', value: '', error: false, entry: 'Email' },
    { name: 'numbe', value: '', error: false, entry: 'Contact number' },
    { name: 'addre', value: '', error: false, entry: 'Delivery address' },
  ],
  ordersLocal: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER: return addOrder(state, action);
    case actionTypes.REMOVE_ORDER: return removeOrder(state, action);
    case actionTypes.ORDER_DETAILS: return addOrderDetails(state, action);
    default: return state;
  }
};

const addOrder = (state, action) => {
  const transformedOrder = {};
  for (const item in action.orderDetails) {
    transformedOrder[action.orderDetails[item].name] = action.orderDetails[item].value;
  }

  const address = transformedOrder.lotno + ' ' +
    transformedOrder.stree + ', ' +
    transformedOrder.brggy + ', ' +
    transformedOrder.cimun + ', ' +
    transformedOrder.provi;

  let newOrder = {
    ingredients: {
      salad: action.burgerIngredients.salad,
      tomato: action.burgerIngredients.tomato,
      cheese: action.burgerIngredients.cheese,
      meat: action.burgerIngredients.meat,
    },
    totalPrice: action.burgerPrice,
    details: {
      name: transformedOrder.fname + ' ' + transformedOrder.lname,
      email: transformedOrder.email,
      number: transformedOrder.numbe,
      address: address,
    },
    date: new Date(),
  }

  return updateObject(state, {
    ordersLocal: state.ordersLocal.concat(newOrder),
  });
};

const removeOrder = (state, action) => {
  const updatedOrders = [...state.ordersLocal];

  const answer = updatedOrders.find(order => {
    return order.date === action.order.date &&
      order.totalPrice === action.order.totalPrice &&
      order.ingredients.salad === action.order.ingredients.salad &&
      order.ingredients.meat === action.order.ingredients.meat &&
      order.ingredients.tomato === action.order.ingredients.tomato &&
      order.ingredients.cheese === action.order.ingredients.cheese;
  })

  const result = [];
  updatedOrders.map((order) => {
    if (order !== answer) result.push(order);
    return null;
  })

  return updateObject(state, {
    ordersLocal: result,
  });
};

const addOrderDetails = (state, action) => {
  return updateObject(state, {
    inputMap: action.orderDetails,
  });
}

export default reducer;