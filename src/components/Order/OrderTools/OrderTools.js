import React from 'react';

import { Button, Label, List, Responsive, Segment, Icon } from 'semantic-ui-react';
import './OrderTools.css';

import Aux from '../../../hoc/Auxilliary';

const orderTools = (props) => {
  const sortBy = (isText) => {
    return (
      <Aux>
        <Label style={{ marginRight: '10px' }}>Sort by</Label>
        <Button.Group>
          <Button
            active={props.activeSort === 'date'}
            key='date'
            name='date'
            onClick={props.activeSort === 'date' ? props.toggleOrder : props.switchViewSort}
            order='dateOrder'
            statename='activeSort'
          >
            <Icon name={props.dateOrder ? 'arrow down' : 'arrow up'} />
            {isText ?
              <Icon name='calendar alternate' style={{ marginRight: '-0px' }} />

              :

              <Aux>
                <Responsive minWidth={1200} style={{ display: 'inline' }}>Date</Responsive>
                <Responsive as={Icon} name='calendar alternate' style={{ marginRight: '-0px' }} maxWidth={1200} />
              </Aux>
            }
          </Button>
          <Button
            active={props.activeSort === 'price'}
            key='price'
            name='price'
            onClick={props.activeSort === 'price' ? props.toggleOrder : props.switchViewSort}
            order='priceOrder'
            statename='activeSort'
          >
            <Icon name={props.priceOrder ? 'arrow down' : 'arrow up'} />
            {isText ?
              <Icon name='money bill alternate outline' />

              :

              <Aux>
                <Responsive minWidth={1200} style={{ display: 'inline' }}>Price</Responsive>
                <Responsive as={Icon} name='money bill alternate outline' style={{ marginRight: '-0px' }} maxWidth={1200} />
              </Aux>
            }
          </Button>
        </Button.Group>
      </Aux>
    );
  }

  const ingredientSort = (hasContent) => {
    return (
      <Aux>
        <Label style={{ marginRight: '10px', marginLeft: '20px' }}>Ingredients</Label>
        <Button.Group
          buttons={[
            {
              key: 'salad',
              color: props.isSaladActive ? 'green' : null,
              content: hasContent ? 'salad' : null,
              icon: props.isSaladActive ? 'check' : 'remove',
              onClick: () => props.toggleIngredient('isSaladActive'),
              name: 'salad',
            },
            {
              key: 'tomato',
              color: props.isTomatoActive ? 'red' : null,
              content: hasContent ? 'tomato' : null,
              icon: props.isTomatoActive ? 'check' : 'remove',
              onClick: () => props.toggleIngredient('isTomatoActive'),
              name: 'tomato',
            },
            {
              key: 'meat',
              color: props.isMeatActive ? 'brown' : null,
              content: hasContent ? 'meat' : null,
              icon: props.isMeatActive ? 'check' : 'remove',
              onClick: () => props.toggleIngredient('isMeatActive'),
              name: 'meat',
            },
            {
              key: 'cheese',
              color: props.isCheeseActive ? 'yellow' : null,
              content: hasContent ? 'cheese' : null,
              icon: props.isCheeseActive ? 'check' : 'remove',
              onClick: () => props.toggleIngredient('isCheeseActive'),
              name: 'cheese',
            },
          ]}
        />
      </Aux>
    );
  };

  const changeLayout = (hasContent) => {
    return (
      <Aux>
        <Label style={{ marginRight: '10px', marginLeft: '20px' }}>Layout</Label>
        <Button.Group
          buttons={[
            {
              active: props.activeLayout === 'card',
              key: 'card',
              icon: 'grid layout',
              content: hasContent ? 'Card' : null,
              onClick: props.switchViewSort,
              name: 'card',
              statename: 'activeLayout',
            },
            {
              active: props.activeLayout === 'list',
              key: 'list',
              icon: 'list',
              content: hasContent ? 'List' : null,
              onClick: props.switchViewSort,
              name: 'list',
              statename: 'activeLayout',
            },
          ]}
        />
      </Aux>
    );
  };

  return (
    <Aux>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment basic textAlign='right' style={{ margin: '14px 0 0 0' }}>
          <Responsive minWidth={Responsive.onlyComputer.minWidth}>
            <div style={{ display: 'inline' }}>
              {sortBy(false)}
            </div>
            <div style={{ display: 'inline' }}>
              {ingredientSort(true)}
            </div>
            <div style={{ display: 'inline' }}>
              {changeLayout(true)}
            </div>
          </Responsive>

          <Responsive {...Responsive.onlyTablet}>
            {ingredientSort(false)}
            {changeLayout(false)}
          </Responsive>
        </Segment>
      </Responsive>

      <Responsive {...Responsive.onlyMobile}>
        <Segment textAlign='right' id='order-tools-mobile' inverted={props.isNight}>
          <List>
            <List.Item>
              <Button
                icon={props.isOpen ? 'arrow right' : 'arrow left'}
                onClick={() => {
                  props.toggleTools();
                  const position = props.isOpen ? '288px' : '0px';
                  document.getElementById('order-tools-mobile').style.transform = 'translate(' + position + ')';
                }}  
                style={{ marginRight: '16px' }}
              />
              {ingredientSort(false)}
            </List.Item>
          </List>
        </Segment>
      </Responsive>
    </Aux>
  );
}

export default orderTools;
