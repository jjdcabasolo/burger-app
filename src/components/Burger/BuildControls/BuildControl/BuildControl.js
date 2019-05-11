import React from 'react';

import { Button, Icon, List, Table } from 'semantic-ui-react';
import './BuildControl.css';

const buildControl = (props) => (
  <Table.Row>
    <Table.Cell>
      <List inverted={props.isNight}>
        <List.Item>
          <Icon name='right triangle' />
          <List.Content>
            <List.Header className='secondary-font font-normal'>
              {props.label}
            </List.Header>
            <List.Description className='secondary-font font-normal'>
              {props.description}
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Table.Cell>
    <Table.Cell textAlign='center' verticalAlign='middle' >
      <Button.Group
        buttons={[
          {
            disabled: props.disabled,
            icon: 'trash',
            key: 'clear',
            inverted: props.isNight,
            onClick: () => props.removeIngredient(props.label),
          },
          {
            disabled: props.disabled,
            icon: 'minus',
            key: 'less',
            inverted: props.isNight,
            onClick: props.removed,
          },
          {
            icon: 'add',
            inverted: props.isNight,
            key: 'add',
            onClick: props.added,
          },
        ]}
      />
    </Table.Cell>
  </Table.Row>
);

export default buildControl;
