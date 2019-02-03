import * as actionTypes from './actionTypes';

export const ingredientAdded = (ingredientName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const ingredientRemoved = (ingredientName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const ingredientClear = (ingredientName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: ingredientName,
  };
};

export const ingredientsClear = () => {
  return {
    type: actionTypes.REMOVE_ALL_INGREDIENTS,
  };
};