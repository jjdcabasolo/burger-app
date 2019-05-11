import React, { PureComponent } from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

import './Home.css';
import '../../components/Burger/Burger.css';

import HomePages from '../../components/HomePages/HomePages';

class Home extends PureComponent {
  state = {
    animate: Array(5).fill(false),
  }

  animateOn = (index) => {
    const animateCopy = [...this.state.animate];
    animateCopy[index] = true;
    this.setState({ animate: animateCopy });
  }

  animateOff = (index) => {
    const animateCopy = [...this.state.animate];
    animateCopy[index] = false;
    this.setState({ animate: animateCopy });
  }

  render() {
    return (
      <div >
        <ReactFullpage
          render={({ _, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <HomePages 
                  fullpageApi={fullpageApi}
                  animateOn={this.animateOn}
                  animateOff={this.animateOff}
                  activeItem={this.props.activeItem}
                  itemClick={this.props.itemClick}
                />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Home;
