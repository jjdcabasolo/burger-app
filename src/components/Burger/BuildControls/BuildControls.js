import React from 'react';
import { Button, Header, Segment, Table } from 'semantic-ui-react';

import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
  {
    label: 'Salad',
    type: 'salad',
    description: 'Mixture of vegetables.',
  },
  {
    label: 'Tomato',
    type: 'tomato',
    description: 'Vegetable plant known for lycopene.',
  },
  {
    label: 'Cheese',
    type: 'cheese',
    description: 'Dairy product derived from milk.',
  },
  {
    label: 'Meat',
    type: 'meat',
    description: 'Cooked animal flesh.',
  },
];

const buildControls = (props) => (
  <div>
    <Header
      block
      as='h5'
      attached='top'
      content='/ MAKE YOUR BURGER'
      style={props.isNight ? props.nightStyle[1] : null}
    />

    <Segment
      attached
      inverted={props.isNight}
      style={props.isNight ? props.nightStyle[0] : null}
      textAlign='center'
    >
      <Table unstackable basic='very' inverted={props.isNight}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='secondary-font font-medium'>Ingredients</Table.HeaderCell>
            <Table.HeaderCell className='secondary-font font-medium' textAlign='center'>Quantity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {controls.map((element) => {
            return (
              <BuildControl
                key={element.label}
                label={element.label}
                description={element.description}
                added={() => props.ingredientAdded(element.type)}
                removed={() => props.ingredientRemoved(element.type)}
                removeIngredient={(label) => props.ingredientRemove(label)}
                disabled={props.disabled[element.type]}
                isNight={props.isNight}
                nightStyle={props.nightStyle}
              />
            );
          })}
        </Table.Body>
      </Table>

      <span className='secondary-font buildcontrols-total font-medium'>
        Total

        <Header
          as='h2'
          className='secondary-font'
          content={'$ ' + props.price.toFixed(2)}
          inverted={props.isNight} />
      </span>
    </Segment>

    {props.stepNumber === 1 ?
      <Button.Group attached='bottom'>
        <Button
          content='Clear'
          icon='trash'
          inverted={props.isNight}
          onClick={props.clear}
        />
        <Button
          content='Proceed'
          disabled={props.canOrder}
          icon='shop'
          inverted={props.isNight}
          onClick={() => props.changeStep(2)}
        />
      </Button.Group>
      :
      null
    }

    <div className='boundary-toolbar-page-content' />
  </div>
);

export default buildControls;
