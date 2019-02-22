import React from 'react';

import { Divider, Header } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

import Aux from '../../../hoc/Auxilliary';

const burgerBackground = (props) => {
  const contents = [
    {    
      title: '2-title',
      content: (
        <Fade top>
          <Divider
            as='h2'
            // inverted={this.props.isNight}
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
      title: '2-content',
      content: (
        <Fade bottom>
          <Header
            // inverted={this.props.isNight}
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi lectus, eleifend non varius sit amet, tristique eget leo. Duis ut tristique libero, quis iaculis velit. In in massa ante. Sed consectetur mollis lorem, sed bibendum erat volutpat non. Aenean enim purus, ornare vel porta vel, malesuada vitae massa. Integer volutpat porta enim quis maximus. Phasellus dignissim id dolor eget hendrerit. Cras placerat magna convallis imperdiet tristique. Nullam id rutrum justo. Phasellus bibendum a dolor at posuere. Vivamus ante sem, mattis a lorem nec, rhoncus maximus tortor. Pellentesque nisi velit, pellentesque non sapien nec, varius feugiat enim.'
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
      { contents.map((element) => {
          return element.content;
        })
      }
    </Aux>
  );
}

export default burgerBackground;
