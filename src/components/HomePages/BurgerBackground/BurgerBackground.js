import React from 'react';

import { Divider, Header } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

import Aux from '../../../hoc/Auxilliary';

const burgerBackground = (props) => {
  const contents = [
    {    
      key: '2-title',
      content: (
        <Fade top>
          <Divider
            as='h2'
            className='header primary-font'
            content='The Burger'
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
      key: '2-content',
      content: (
        <Fade bottom delay={500}>
          <Header
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi lectus, eleifend non varius sit amet, tristique eget leo. Duis ut tristique libero.'
            style={{
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

export default burgerBackground;
