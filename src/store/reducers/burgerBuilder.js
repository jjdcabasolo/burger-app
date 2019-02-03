import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const ingredientPrices = {
  salad: 0.50,
  tomato: 0.40,
  cheese: 1.30,
  meat: 0.70,
};

const initialState = {
  ingredients: {
    salad: 0,
    tomato: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
  ingredientQueue: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENTS: return removeIngredientInstances(state, action);
    case actionTypes.REMOVE_ALL_INGREDIENTS: return updateObject(state, initialState);
    default: return state;
  }
};

const addIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
    },
    totalPrice: state.totalPrice + ingredientPrices[action.ingredientName],
    ingredientQueue: state.ingredientQueue.concat(action.ingredientName),
  });
}

const removeIngredient = (state, action) => {
  let updatedIngredientQueue = [...state.ingredientQueue];
  updatedIngredientQueue = updatedIngredientQueue.reverse();
  const index = updatedIngredientQueue.indexOf(action.ingredientName);
  if (index !== -1) updatedIngredientQueue.splice(index, 1);
  updatedIngredientQueue = updatedIngredientQueue.reverse();

  return updateObject(state, {
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
    },
    totalPrice: state.totalPrice - ingredientPrices[action.ingredientName],
    ingredientQueue: updatedIngredientQueue,
  });
}

const removeIngredientInstances = (state, action) => {
  const lowercasedName = action.ingredientName.toLowerCase();
  const updatedArray = state.ingredientQueue.filter(result => result !== lowercasedName, []);

  return updateObject(state, {
    totalPrice: state.totalPrice - (ingredientPrices[lowercasedName] * state.ingredients[lowercasedName]),
    ingredients: {
      ...state.ingredients,
      [lowercasedName]: 0,
    },
    ingredientQueue: updatedArray,
  });
}

export default reducer;