import React from 'react';

import { Divider, Header } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

import Aux from '../../../hoc/Auxilliary';

const bunComponent = () => {
  const contents = [
    {
      key: '3-title',
      content: (
        <Fade top>
          <Divider
            as='h2'
            className='header primary-font'
            content='The Bun'
            horizontal
            style={{
              textTransform: 'uppercase',
              fontSize: '2.25em',
              marginBottom: '1em',
            }}
          />
        </Fade>
      ),
    },
    {
      key: '3-content-bread-top',
      content: (
        <Fade top delay={500}>
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
            <div className="Seeds3"></div>
            <div className="Seeds4"></div>
            <div className="Seeds5"></div>
            <div className="Seeds6"></div>
          </div>
        </Fade>
      ),
    },
    {
      key: '3-content-bread-bottom',
      content: (
        <Fade bottom delay={500}>
          <div className="BreadBottom"></div>
        </Fade>
      ),
    },
    {
      key: '3-content',
      content: (
        <Fade bottom delay={1500}>
          <Header
            content='Bread formed into rounded bun shape, split, and sandwiched to a stack of organic burger ingredients topped with fresh sesame seeds.'
            style={{
              marginTop: '2em',
              fontSize: '1.5em',
              fontWeight: 'normal',
            }}
            className='secondary-font'
          />
        </Fade>
      ),
    },
  ];

  return (
    <Aux>
      {
        contents.map((element) => {
          return (
            <Aux key={element.key}>
              {element.content}
            </Aux>
          );
        })
      }
    </Aux>
  );
}

export default bunComponent;
