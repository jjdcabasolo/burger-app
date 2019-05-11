import React from 'react';
import { Container, Icon, Segment } from 'semantic-ui-react';

const notFound = (props) => {
  return (
    <Container className='boundary-toolbar-page-content'>
      <Segment basic textAlign='center' style={{ marginTop: '30%', backgroundColor: 'transparent' }} inverted={props.isNight}>
        <Icon inverted={props.isNight} name={props.iconName} size='massive'></Icon>
        <p style={{
          fontSize: '1.5em',
          fontWeight: 'normal',
          marginTop: '1em',
        }}>
          {props.mainMessage}
        </p>
        <p style={{
          fontSize: '1em',
          fontWeight: 'normal',
          marginTop: '-1em',
        }}>
          {props.subMessage}
        </p>
      </Segment>
    </Container>
  );
}

export default notFound;
