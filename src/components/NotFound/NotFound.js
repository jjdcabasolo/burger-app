import React from 'react';
import { Container, Icon, Segment } from 'semantic-ui-react';

const notFound = (props) => {
  return (
    <Container className='boundary-toolbar-page-content'>
      <Segment basic textAlign='center' style={{ marginTop: '30%', backgroundColor: 'transparent' }} inverted={props.isNight}>
        <Icon inverted={props.isNight} name={props.iconName} size='massive'></Icon>
        <p
          className='primary-font font-large'
          style={{
            fontWeight: '600',
            marginTop: '1em',
          }}
        >
          {props.mainMessage.toUpperCase()}
        </p>
        <p
          className='secondary-font font-normal'
          style={{ marginTop: '-1em' }}
        >
          {props.subMessage}
        </p>
      </Segment>
    </Container>
  );
}

export default notFound;
