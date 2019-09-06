import React from 'react';

import { Button, Label, List, Responsive, Segment, Icon } from 'semantic-ui-react';
import { Slide } from 'react-reveal';

import './OrderTools.css';

import Aux from '../../../hoc/Auxilliary';

const orderTools = (props) => {
  const sortBy = (isText) => {
    return (
      <Button.Group className='order-tools-btn-grp' id='order-tools-toggle' >
        <Button
          active={props.activeSort === 'date'}
          key='date'
          name='date'
          onClick={props.activeSort === 'date' ? props.toggleOrder : props.switchViewSort}
          order='dateOrder'
          statename='activeSort'
          className='order-tools-divider'
        >
          <Icon name={props.dateOrder ? 'arrow down' : 'arrow up'} />
          {isText ?
            <Icon name='calendar alternate' style={{ marginRight: '-0px' }} />

            :

            <Aux>
              <Responsive minWidth={1200} style={{ display: 'inline' }} className='secondary-font'>date</Responsive>
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
              <Responsive minWidth={1200} style={{ display: 'inline' }} className='secondary-font'>price</Responsive>
              <Responsive as={Icon} name='money bill alternate outline' style={{ marginRight: '-0px' }} maxWidth={1200} />
            </Aux>
          }
        </Button>
      </Button.Group>
    );
  }

  const ingredientSort = (hasContent) => {
    return (
      <Button.Group
        className='order-tools-btn-grp'
        buttons={[
          {
            key: 'salad',
            color: props.isSaladActive ? 'green' : null,
            icon: props.isSaladActive ? 'check' : 'remove',
            onClick: () => props.toggleIngredient('isSaladActive'),
            name: 'salad',
            className: 'secondary-font order-tools-divider',
          },
          {
            key: 'tomato',
            color: props.isTomatoActive ? 'red' : null,
            icon: props.isTomatoActive ? 'check' : 'remove',
            onClick: () => props.toggleIngredient('isTomatoActive'),
            name: 'tomato',
            className: 'secondary-font order-tools-divider',
          },
          {
            key: 'meat',
            color: props.isMeatActive ? 'brown' : null,
            icon: props.isMeatActive ? 'check' : 'remove',
            onClick: () => props.toggleIngredient('isMeatActive'),
            name: 'meat',
            className: 'secondary-font order-tools-divider',
          },
          {
            key: 'cheese',
            color: props.isCheeseActive ? 'yellow' : null,
            icon: props.isCheeseActive ? 'check' : 'remove',
            onClick: () => props.toggleIngredient('isCheeseActive'),
            name: 'cheese',
            className: 'secondary-font',
          },
        ]}
      />
    );
  };

  const changeLayout = (hasContent) => {
    return (
      <Button.Group
        className='order-tools-btn-grp'
        id='order-tools-toggle'
        buttons={[
          {
            active: props.activeLayout === 'card',
            key: 'card',
            icon: 'grid layout',
            content: hasContent ? 'card' : null,
            onClick: props.switchViewSort,
            name: 'card',
            statename: 'activeLayout',
            className: 'secondary-font order-tools-divider',
          },
          {
            active: props.activeLayout === 'list',
            key: 'list',
            icon: 'list',
            content: hasContent ? 'list' : null,
            onClick: props.switchViewSort,
            name: 'list',
            statename: 'activeLayout',
            className: 'secondary-font',
          },
        ]}
      />
    );
  };

  return (
    <div className='order-tools-container'>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment basic textAlign='right' id='order-tools-segment'>
          <Slide left>
            <Responsive minWidth={Responsive.onlyComputer.minWidth}>
              <div style={{ display: 'inline' }}>
                {changeLayout(true)}
              </div>
              <div style={{ display: 'inline' }}>
                {sortBy(false)}
              </div>
              <div style={{ display: 'inline' }}>
                {ingredientSort(true)}
              </div>
            </Responsive>
          </Slide>

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
    </div>
  );
}

export default orderTools;
