import React from 'react';

import { Fade } from 'react-reveal';

import { Label } from 'semantic-ui-react';
import './Ingredients.css';

import Aux from '../../../hoc/Auxilliary';

const labelColor = {
  salad: 'green',
  tomato: 'red',
  cheese: 'yellow',
  meat: 'brown',
}

const ingredients = (props) => {
  return (
    <Aux>
      {Object
        .keys(props.ingredients)
        .map((element, index) => {
          return (
            <Label
              id={'ingredients-' + element}
              className={'ingredients-margin'}
              image
              key={index}
              size='large'
              color={labelColor[element]}
            >
              {props.ingredients[element]} &nbsp;
              <Label.Detail className='ingredient-details'>{element.toUpperCase()}</Label.Detail>
            </Label>
          );
        })
      }

      <Fade left when={props.showTotal}>
        <Label
          className='ingredients-margin'
          image
          size='large' >
          {'$ ' + parseFloat(props.totalPrice).toFixed(2)}
          <Label.Detail>BURGER COST</Label.Detail>
        </Label>
      </Fade>
    </Aux>
  );
}

export default ingredients;