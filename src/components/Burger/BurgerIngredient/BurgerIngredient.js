import React from 'react';
import PropTypes from 'prop-types';

import { Slide } from 'react-reveal';

import './BurgerIngredient.css'

const burgerIngredient = (props) => {
  switch (props.type) {
    case 'bread-bottom':
      return (
        <div className="BreadBottom"></div>
      );

    case 'bread-top':
      return (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
          <div className="Seeds3"></div>
          <div className="Seeds4"></div>
          <div className="Seeds5"></div>
          <div className="Seeds6"></div>
        </div>
      );

    case 'meat':
      return (
        <Slide left>
          <div className="Meat"></div>
        </Slide>
      );

    case 'cheese':
      return (
        <Slide left>
          <div className="Cheese">
            {/* <div className="CheeseDrip1"></div>
            <div className="CheeseDrip2"></div>
            <div className="CheeseDrip3"></div>
            <div className="CheeseDrip4"></div> */}
          </div>
        </Slide>
      );

    case 'salad':
      return (
        <Slide left>
          <div className="Salad">
            {/* <div className="SaladLeaf1"></div>
            <div className="SaladLeaf2"></div>
            <div className="SaladLeaf3"></div>
            <div className="SaladLeaf4"></div>
            <div className="SaladLeaf5"></div>
            <div className="SaladLeaf6"></div> */}
          </div>
        </Slide>
      );

    case 'tomato':
      return (
        <Slide left>
          <div className="Tomato"></div>
        </Slide>
      );

    default:
      break;
  }
}

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
}

export default burgerIngredient;
