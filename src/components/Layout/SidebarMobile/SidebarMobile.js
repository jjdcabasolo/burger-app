import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon, Menu, Sidebar } from 'semantic-ui-react';

import Aux from '../../../hoc/Auxilliary';
import Toolbar from '../../Navigation/Toolbar/Toolbar';

import './SidebarMobile.css';

const sidebar = (props) => {
  return (
    <Aux>
      <Sidebar.Pushable style={{ overflowY: 'hidden', height: '100vh' }}>
        <Sidebar
          as={Menu}
          animation='push'
          vertical
          size='massive'
          visible={props.sidebarVisible}
          inverted={props.isNight}
          className='sidebarmobile-menu'
        >
          <Menu.Item className='sidebarmobile-title'>
            <Header
              as='h1'
              inverted={props.isNight}
              className='secondary-font'
            >
              Menu &nbsp;
              <Icon
                name='cancel'
                onClick={() => props.closeSidebar()}
                id='sidebarmobile-close'
              ></Icon>
            </Header>
          </Menu.Item>

          <Link to='/burger-app'>
            <Menu.Item
              as='div'
              content='HOME ¬'
              active={props.activeItem === 'home'}
              onClick={() => {
                props.itemClick('', { name: 'home' });
                props.closeSidebar();
              }}
              id='sidebarmobile-item-home'
            />
          </Link>

          <Link to='/burger-app/builder'>
            <Menu.Item
              as='div'
              content='BUILDER ¬'
              active={props.activeItem === 'builder'}
              onClick={() => {
                props.itemClick('', { name: 'builder' });
                props.closeSidebar();
              }}
              id='sidebarmobile-item-builder'
            />
          </Link>

          <Link to='/burger-app/orders'>
            <Menu.Item
              as='div'
              content='ORDERS ¬'
              active={props.activeItem === 'orders'}
              onClick={() => {
                props.itemClick('', { name: 'orders' });
                props.closeSidebar();
              }}
              id='sidebarmobile-item-orders'
            />
          </Link>

          <Link to='/burger-app/help'>
            <Menu.Item
              as='div'
              content='HELP ¬'
              active={props.activeItem === 'help'}
              onClick={() => {
                props.itemClick('', { name: 'help' });
                props.closeSidebar();
              }}
              id='sidebarmobile-item-help'
            />
          </Link>
        </Sidebar>

        <Toolbar
          itemClick={props.itemClick}
          activeItem={props.activeItem}
          openSidebar={props.openSidebar}
          sidebarVisible={props.sidebarVisible}
          isNight={props.isNight}
          toggleNight={props.toggleNight}
        />

        <Sidebar.Pusher
          onClick={props.closeSidebar}
          style={props.isNight ? { backgroundColor: '#333333' } : null}
        >
          <main className={props.activeItem === 'builder' ? 'sidebar-content-builder' : 'sidebar-content'}>
            {props.children}
          </main>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Aux>
  );
}

export default sidebar;
