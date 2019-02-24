import React from 'react';

import { Button, Divider, Header, List, Segment, Grid } from 'semantic-ui-react';

import Aux from '../../../hoc/Auxilliary';
import './Receipt.css';

const receipt = (props) => {
  return (
    <Aux>
      <Header
        block
        as='h5'
        attached='top'
        content='/ RECEIPT'
        style={props.isNight ? props.nightStyle[1] : null} />

      <Segment
        attached
        inverted={props.isNight}
        style={props.isNight ? props.nightStyle[0] : null} >

        <p className='secondary-font font-normal'>Almost done! Please double check the information you have provided before finally placing the order.</p>
        <Divider className='receipt-divider-space' />

        {props.form ?
          <Grid>
            <Grid.Column width={5} textAlign='right' verticalAlign='middle'>
              <span className='receipt-total'>{'$ ' + parseFloat(props.price).toFixed(2)}</span>
              <p className='font-normal'>cost</p>
            </Grid.Column>
            <Grid.Column width={11}>
              {props.inputMap.map((element) => {
                return (
                  <List id='receipt' inverted={props.isNight}>
                    <List.Item>
                      <List.Content>
                        <List.Header className='secondary-font receipt-value'>
                          {element.value}
                        </List.Header>
                        <List.Description className='secondary-font font-normal'>
                          {element.entry}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                );
              })}
            </Grid.Column>
          </Grid>
          :
          null
        }

        <Divider className='receipt-divider-space' />
        <p className='secondary-font font-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi lectus, eleifend non varius sit amet, tristique eget leo. Duis ut tristique libero. </p>
      </Segment>

      <Button.Group attached='bottom'>
        <Button
          content='Builder'
          icon='add'
          onClick={() => props.changeStep(1)}
          classname='receipt-builder-btn'
        />
        <Button
          content='Delivery'
          icon='truck'
          onClick={() => props.changeStep(3)}
        />
        <Button
          content='Place order'
          icon='checkmark'
          onClick={() => console.log('asdfasdfasdf')}
        />
      </Button.Group>

      <div className='boundary-toolbar-page-content' />
    </Aux>
  );
};

export default receipt;
