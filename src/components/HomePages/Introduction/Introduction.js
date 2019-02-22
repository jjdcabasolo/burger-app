import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Header, Icon } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

import Aux from '../../../hoc/Auxilliary';

const introduction = (props) => {
  const contents = [
    {
      title: "1-title",
      content: (
        <Header
          // inverted={props.isNight}
          as='h1'
          style={{
            fontSize: '6em',
            fontWeight: 'normal',
          }}
          className='primary-font'
        >
          <Fade delay={100} top cascade>
            BURGERS!
          </Fade>
        </Header>
      ),
    },
    {
      title: "1-subtitle",
      content: (
        <Header
          // inverted={props.isNight}
          as='h2'
          style={{
            fontSize: '2.25em',
            fontWeight: 'normal',
          }}
          className='secondary-font'
        >
          <Fade delay={1000}><span>Build. </span></Fade>
          <Fade delay={1500}><span>Order. </span></Fade>
          <Fade delay={2000}><span>Eat.</span></Fade>
        </Header>
      ),
    },
    {
      title: "1-content",
      content: (
        <Fade delay={2500}>
          <Header
            // inverted={props.isNight}
            content='Your do-it-yourself burger delivered right in front of your doorstep!'
            style={{
              fontSize: '1.5em',
              fontWeight: 'normal',
              marginTop: '1em',
              marginBottom: '2em',
            }}
            className='secondary-font'
          />
        </Fade>
      ),
    },
    {
      title: "1-start-button",
      content: (
        <Fade delay={3000}>
          <Link to='/builder'>
            <Button
              animated
              basic
              size='huge'
              name='builder'
              active={props.activeItem === 'builder'}
              onClick={props.itemClick}
              // inverted={props.isNight}
              className='primary-font'
              id='home-builder'
            >
              <Button.Content visible>GET STARTED</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Link>
        </Fade>
      ),
    },
  ];

  return (
    <Aux>
      {
        contents.map((element) => {
          return element.content;
        })
      }
    </Aux>
  );
}

export default introduction;
