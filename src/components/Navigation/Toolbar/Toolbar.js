import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

import './Toolbar.css';
import { Slide } from 'react-reveal';

const toolbar = (props) => {
  const isHome = props.activeItem === 'home' || props.activeItem === '';

  let currentPage;
  if (isHome) {
    currentPage = 'BURGERS! ¬';
  } else {
    currentPage = props.activeItem.toUpperCase() + ' ¬';
  }

  return (
    <Menu
      fixed='top'
      borderless
      size='large'
      inverted={props.isNight}
      id='toolbar-navbar'
    >
      <Container
        id={props.sidebarVisible ? 'toolbar-container-adjust' : null}
        className='toolbar-container'
      >
        <Menu.Item>
          <Button
            icon='sidebar'
            onClick={props.openSidebar}
            inverted={props.isNight}
            id='toolbar-button-icon'
            className='toolbar-sidebar'
          />
        </Menu.Item>

        {/* <Menu.Item>
          <Button
            icon={props.isNight?'sun':'moon'}
            onClick={props.toggleNight}
            inverted={props.isNight}
            id='toolbar-button-icon'
            className='toolbar-night-mode'
          />
        </Menu.Item> */}

        <Menu.Item
          header
          as='div'
          content={currentPage}
          active={true}
          id='toolbar-current-page'
        />

        <Slide
          right
          collapse
          opposite
          when={isHome}
          duration={300}>
          <Menu.Item
            header
            as='div'
            content='scroll!'
            icon='arrows alternate vertical'
            className='secondary-font'
            active={true}
            id='toolbar-scroll' />
        </Slide>
      </Container>
    </Menu>
  );
}

export default toolbar; 
