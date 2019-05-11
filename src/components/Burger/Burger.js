import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = [];
  for (const ingredient in props.ingredients) {
    transformedIngredients.push(<BurgerIngredient key={ingredient} type={props.ingredients[ingredient]} />);
  }

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p style={{ margin: '1em 0 1em 0em', fontWeight: '500' }} className='secondary-font'>Please start adding ingredients.</p>;
  }

  return (
    <div>
      <Header
        block
        as='h5'
        attached='top'
        content='/ BURGER PREVIEW'
        style={props.isNight ? props.nightStyle[1] : null}
      />

      <Segment
        inverted={props.isNight}
        className='burger-preview-container'
        attached
      >
        <div className='Burger'>
          <BurgerIngredient type='bread-top' />
          {transformedIngredients}
          <BurgerIngredient type='bread-bottom' />
        </div>
      </Segment>

      <div className='boundary-burger-preview' />
    </div>
  );
};

export default burger;
