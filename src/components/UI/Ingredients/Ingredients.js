import React from 'react';

import { Fade } from 'react-reveal';

import { Label } from 'semantic-ui-react';
import './Ingredients.css';

import Aux from '../../../hoc/Auxilliary';

const ingredients = (props) => {
  return (
    <Aux>
      {Object
        .keys(props.ingredients)
        .map((element, index) => {
          return (
            <Label
              className='ingredients-margin'
              image
              key={index}
              size='large' >
              {props.ingredients[element]} &nbsp;
              <Label.Detail>{element.toUpperCase()}</Label.Detail>
            </Label>
          );
        })
      }

      <Fade left when={props.showTotal}>
        <Label
          className='ingredients-margin ingredients-total'
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