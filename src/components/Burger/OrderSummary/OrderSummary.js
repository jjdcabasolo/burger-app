import React from 'react';

import { Button, Header, List, Segment, Table } from 'semantic-ui-react';

import Aux from '../../../hoc/Auxilliary';
import './OrderSummary.css';

const orderSummary = (props) => {
  let ingredients = {
    ...props.ingredients,
  };

  if (!props.showCheckout) {
    ingredients = {
      ...ingredients,
      bun: 1,
      total: null,
    }
  }

  const ingredientSummary = Object
    .keys(ingredients)
    .map((ingredientKey) => {
      return (
        <Table.Row key={ingredientKey} className='secondary-font'>
          <Table.Cell className='font-normal'>
            <List as='ul' inverted={props.isNight}>
              <List.Item as='li' key={ingredientKey}>
                <List.Content>
                  <List.Header style={{ textTransform: 'capitalize' }} >
                    {ingredientKey}
                  </List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Table.Cell>

          <Table.Cell textAlign='center' verticalAlign='middle' className='font-normal'>
            {ingredients[ingredientKey]}
          </Table.Cell>

          <Table.Cell textAlign='center' verticalAlign='middle' className='font-normal'>
            <div>
              {ingredientKey === 'total' ?
                null
                :
                '$ ' + props.itemPrices[ingredientKey]
              }
            </div>
          </Table.Cell>

          <Table.Cell textAlign='center' verticalAlign='middle' className='ordersummary-total'>
            {ingredientKey === 'total' ?
              '$ ' + parseFloat(props.price).toFixed(2)
              :
              '$ ' + (ingredients[ingredientKey] * props.itemPrices[ingredientKey]).toFixed(2)
            }
          </Table.Cell>
        </Table.Row>
      )
    });

  return (
    <Aux>
      <Header
        block
        as='h5'
        attached='top'
        content='/ ORDER SUMMARY'
        style={props.isNight ? props.nightStyle[1] : null} />

      <Segment
        attached
        inverted={props.isNight}
        style={props.isNight ? props.nightStyle[0] : null} >

        <p className='secondary-font font-normal'>Your burger is ready! Please check the summary below.</p>

        <Table unstackable basic inverted={props.isNight} id='ordersummary-checkout'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className='secondary-font font-normal'>Ingredients</Table.HeaderCell>
              <Table.HeaderCell className='secondary-font font-normal' textAlign='center'>Quantity</Table.HeaderCell>
              <Table.HeaderCell className='secondary-font font-normal' textAlign='center'>Price per piece</Table.HeaderCell>
              <Table.HeaderCell className='secondary-font font-normal' textAlign='center'>Total</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {ingredientSummary}
          </Table.Body>
        </Table>
      </Segment>

      {props.stepNumber === 2 ?
        <Button.Group attached='bottom' className='segment-btn-grp'>
          <Button
            content='Cancel'
            icon='remove'
            inverted={props.isNight}
            onClick={() => props.changeStep(1)}
          />
          <Button
            content='Checkout'
            icon='checkmark'
            inverted={props.isNight}
            onClick={() => props.changeStep(3)}
          />
        </Button.Group>
        :
        null
      }

      <div className='boundary-toolbar-page-content' />
    </Aux>
  );
};

export default orderSummary;
