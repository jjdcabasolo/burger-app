import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import SidebarMobile from './components/Layout/SidebarMobile/SidebarMobile';
import Home from './containers/Home/Home';
import NotFound from './components/NotFound/NotFound';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';

const nightStyle = [
  { // segment
    backgroundColor: '#373737',
    borderStyle: 'none',
    color: 'white',
  },
  { // label headers
    backgroundColor: '#272727',
    borderColor: '#272727',
    borderRadius: '0.28571429rem 0.28571429rem 0.28571429rem 0.28571429rem',
    color: 'white',
    boxShadow: 'none',
  },
  { // buttons
    fontWeight: '600',
  },
  { // list
    backgroundColor: '#333333',
    borderStyle: 'none',
    color: 'white',
  },
];

class App extends Component {
  state = {
    activeItem: window.location.href.replace('http://localhost:3000/', ''),
    openSidebar: false,
    isNightMode: false,
    showScroll: true,
  }

  itemClickHandler = (e, { name }) => this.setState({ activeItem: name })
  sidebarHandler = () => this.setState({ openSidebar: !this.state.openSidebar })
  closeSidebar = () => this.setState({ openSidebar: false })
  nightModeHandler = () => this.setState({ isNightMode: !this.state.isNightMode })

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <SidebarMobile
          itemClick={this.itemClickHandler}
          activeItem={this.state.activeItem}
          openSidebar={this.sidebarHandler}
          closeSidebar={this.closeSidebar}
          sidebarVisible={this.state.openSidebar}
          isNight={this.state.isNightMode}
          toggleNight={this.nightModeHandler}
        >
          <Switch>
            <Route path='/builder' render={(props) =>
              <BurgerBuilder
                {...props}
                isNight={this.state.isNightMode}
                nightStyle={nightStyle}
                addOrder={this.addOrderHandler}
                itemClick={this.itemClickHandler}
                activeItem={this.state.activeItem}
              />
            } />

            <Route path='/orders' render={(props) =>
              <Orders
                {...props}
                isNight={this.state.isNightMode}
                nightStyle={nightStyle}
                itemClick={this.itemClickHandler}
              />
            } />

            <Route path='/help' render={(props) =>
              <NotFound
                isNight={this.state.isNightMode}
                nightStyle={nightStyle}
                iconName='help'
                mainMessage='Wala pa. Teka lang. Huhu.'
                subMessage={'Matatapos din \'tong page na to. Konting tulog na lang.'}
              />
            } />

            <Route path='/' exact render={(props) =>
              <Home
                {...props}
                isNight={this.state.isNightMode}
                nightStyle={nightStyle}
                itemClick={this.itemClickHandler}
              />
            } />

            <Route render={(props) =>
              <NotFound
                isNight={this.state.isNightMode}
                nightStyle={nightStyle}
                iconName='ban'
                mainMessage='Page not found.'
                subMessage='Try clicking the links in the navigation area for you to be redirected on an existing page.'
              />
            } />
          </Switch>
        </SidebarMobile>
      </div>
    );
  }
}

export default App;
