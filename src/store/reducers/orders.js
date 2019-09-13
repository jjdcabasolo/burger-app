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
  ordersLocal: [
    {
      date: new Date(),
      details: {name: "John Doe", email: "a", number: "a", address: "undefined"},
      ingredients: {salad: 1, tomato: 1, cheese: 1, meat: 1},
      ingredientQueue: ['salad', 'tomato', 'cheese', 'meat'],
      totalPrice: 4.7,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER: return addOrder(state, action);
    case actionTypes.REMOVE_ORDER: return removeOrder(state, action);
    case actionTypes.ADD_ORDER_DETAILS: return addOrderDetails(state, action);
    case actionTypes.REMOVE_ORDER_DETAILS: return removeOrderDetails(state, action);
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
    ingredientQueue: action.ingredientQueue,
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
  console.log("adding order deets", action.orderDetails)
  return updateObject(state, {
    inputMap: action.orderDetails,
  });
}

const removeOrderDetails = (state) => {
  const clearedInputMap = [...state.inputMap];

  clearedInputMap.forEach(e => {
    e.value = '';
  });

  return updateObject(state, {
    inputMap: clearedInputMap,
  });
}

export default reducer;
