import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // let transformedIngredients = // array of burgerIngredient components
  //   Object
  //     .keys(props.ingredients)
  //     .map((ingredientKey) => { // mapping each keys of the given prop
  //       return [...Array(props.ingredients[ingredientKey])]  // create an array with size of number of ingredients
  //         .map((_, index) => { // for every ingredient and ingredient count, make a burgerIngredient component
  //           return ( 
  //             <BurgerIngredient
  //               key={ingredientKey + index}
  //               type={ingredientKey}
  //             />
  //           );
  //         });
  //     })
  //     .reduce((array, element) => { // transform array into something else
  //       return array.concat(element); // reduced value; added to initial value
  //     }, [] // initial value
  //   ); // array flattening

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

      <div className='boundary-toolbar-page-content' />
    </div>
  );
};

export default burger;
