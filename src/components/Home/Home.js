import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Header, Icon, List, Segment, Visibility } from 'semantic-ui-react';

import { Fade } from 'react-reveal';
import ReactFullpage from '@fullpage/react-fullpage';

import '../Burger/Burger.css';
import './Home.css';

class Home extends Component {
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

  homeComponents = (componentName) => {
    switch (componentName) {
      case '1-title':
        return (
          <Header
            inverted={this.props.isNight}
            as='h1'
            style={{
              fontSize: '6em',
              fontWeight: 'normal',
            }}
            className='primary-font'
          >
            <Fade top cascade>
              BURGERS!
            </Fade>
          </Header>
        );

      case '1-subtitle':
        return (
          <Header
            inverted={this.props.isNight}
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
        );

      case '1-content':
        return (
          <Fade delay={2500}>
            <Header
              inverted={this.props.isNight}
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
        );

      case '1-start-button':
        return (
          <Fade delay={3000}>
            <Link to='/builder'>
              <Button
                animated
                basic
                size='huge'
                name='builder'
                active={this.props.activeItem === 'builder'}
                onClick={this.props.itemClick}
                inverted={this.props.isNight}
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
        );

      case '2-title':
        return (
          <Fade top>
            <Divider
              as='h2'
              inverted={this.props.isNight}
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
        );

      case '2-content':
        return (
          <Fade bottom>
            <Header
              inverted={this.props.isNight}
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi lectus, eleifend non varius sit amet, tristique eget leo. Duis ut tristique libero, quis iaculis velit. In in massa ante. Sed consectetur mollis lorem, sed bibendum erat volutpat non. Aenean enim purus, ornare vel porta vel, malesuada vitae massa. Integer volutpat porta enim quis maximus. Phasellus dignissim id dolor eget hendrerit. Cras placerat magna convallis imperdiet tristique. Nullam id rutrum justo. Phasellus bibendum a dolor at posuere. Vivamus ante sem, mattis a lorem nec, rhoncus maximus tortor. Pellentesque nisi velit, pellentesque non sapien nec, varius feugiat enim.'
              style={{
                fontSize: '1.5em',
                fontWeight: 'normal',
              }}
              className='secondary-font'
            />
          </Fade>
        );

      case '3-title':
        return (
          <Fade top>
            <Divider
              as='h2'
              inverted={this.props.isNight}
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
        );

      case '3-content-bread-top':
        return (
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
        );

      case '3-content-bread-bottom':
        return (
          <Fade bottom delay={500}>
            <div className="BreadBottom"></div>
          </Fade>
        );

      case '3-content':
        return (
          <Fade bottom delay={1500}>
            <Header
              inverted={this.props.isNight}
              content='Bread formed into rounded bun shape, split, and sandwiched to a stack of organic burger ingredients topped with fresh sesame seeds.'
              style={{
                marginTop: '2em',
                fontSize: '1.5em',
                fontWeight: 'normal',
              }}
              className='secondary-font'
            />
          </Fade>
        );

      case '4-title':
        return (
          <Fade top>
            <Divider
              as='h2'
              inverted={this.props.isNight}
              className='header primary-font'
              content='Ingredients'
              horizontal
              style={{
                textTransform: 'uppercase',
                fontSize: '2.25em',
                marginBottom: '1em',
              }}
            />
          </Fade>
        );

      case '4-content-grid':
        return (
          <Grid stackable centered columns='equal'>
            <Grid.Row>
              <Grid.Column textAlign='center' verticalAlign='middle'>
                <Fade left delay={1000}>
                  <div className="Tomato" style={{ marginTop: '10px' }}></div>
                </Fade>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <Fade left delay={1000}>
                  <Header inverted={this.props.isNight} style={{ marginTop: '10px', marginBottom: '-2px' }} className='primary-font'>TOMATO</Header>
                  <p className='home-ingredient-detail secondary-font' style={this.props.isNight ? { color: 'white' } : null}>\tə-ˈmā-(ˌ)tō \<br />Vegetable plant known for lycopene.</p>
                </Fade>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Fade right delay={1500}>
                  <Header inverted={this.props.isNight} style={{ marginTop: '10px', marginBottom: '-2px' }} className='primary-font'>CHEESE</Header>
                  <p className='home-ingredient-detail secondary-font' style={this.props.isNight ? { color: 'white' } : null}>\ˈchēz \<br />Dairy product derived from milk.</p>
                </Fade>
              </Grid.Column>
              <Grid.Column textAlign='center' verticalAlign='middle'>
                <Fade right delay={1500}>
                  <div className="Cheese" style={{ marginTop: '7px' }}></div>
                </Fade>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center' verticalAlign='middle'>
                <Fade left delay={2000}>
                  <div className="Meat"></div>
                </Fade>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <Fade left delay={2000}>
                  <Header inverted={this.props.isNight} style={{ marginTop: '10px', marginBottom: '-2px' }} className='primary-font'>MEAT</Header>
                  <p className='home-ingredient-detail secondary-font' style={this.props.isNight ? { color: 'white' } : null}>\ˈmēt \<br />Cooked animal flesh.</p>
                </Fade>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Fade right delay={2500}>
                  <Header inverted={this.props.isNight} style={{ marginTop: '10px', marginBottom: '-2px' }} className='primary-font'>SALAD</Header>
                  <p className='home-ingredient-detail secondary-font' style={this.props.isNight ? { color: 'white' } : null}>\ˈsa-ləd \<br />Mixture of vegetables.</p>
                </Fade>
              </Grid.Column>
              <Grid.Column textAlign='center' verticalAlign='middle'>
                <Fade right delay={2500}>
                  <div className="Salad" style={{ marginTop: '9px' }}></div>
                </Fade>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );


      case '4-content':
        return (
          <Fade bottom delay={3000}>
            <Header
              inverted={this.props.isNight}
              content='The four fundamental ingredients that institutionalized our worldwide DIY burger chains.'
              style={{
                fontSize: '1.5em',
                fontWeight: 'normal',
                marginTop: '3em',
              }}
              className='secondary-font'
            />
          </Fade>
        );

      case '5-title':
        return (
          <Segment
            inverted={this.props.isNight}
            vertical
            style={{
              marginTop: '40em',
              paddingTop: '5em',
              paddingBottom: '10em',
            }}>
            <Container>
              <Grid divided inverted={this.props.isNight} stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header
                      inverted={this.props.isNight} as='h4' content='1234' />
                    <List link inverted={this.props.isNight}>
                      <List.Item as='a'>qwer</List.Item>
                      <List.Item as='a'>asdf</List.Item>
                      <List.Item as='a'>zxcv</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header
                      inverted={this.props.isNight} as='h4' content='5678' />
                    <List link inverted={this.props.isNight}>
                      <List.Item as='a'>uiop</List.Item>
                      <List.Item as='a'>jkl;</List.Item>
                      <List.Item as='a'>bnm,</List.Item>
                      <List.Item as='a'>--</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Header
                      inverted={this.props.isNight} as='h4'>
                      90
            </Header>
                    <p style={this.props.isNight ? { color: 'rgba(255,255,255,.5)' } : { color: 'rgba(0,0,0,.4)' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur scelerisque odio non hendrerit. Integer mollis, nisl non efficitur tempus, leo lorem maximus metus, in pulvinar nulla quam volutpat neque. Suspendisse viverra vitae odio a bibendum. Nullam eleifend vel sapien eget lacinia. Ut dictum ac ex at pharetra. Curabitur ligula magna, interdum sed imperdiet non, vestibulum aliquam justo. Pellentesque viverra lacus ut laoreet convallis. Integer eget auctor elit.
            </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        );

      default:
        return <p>wutdufakmehn</p>;
    }
  }

  render() {
    return (
      <div >
        <ReactFullpage
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className='section'>
                  {/* <div className="section"> */}
                  <Visibility
                    updateOn='repaint'
                    continuous
                    onOnScreen={() => this.animateOn(1)}
                    onOffScreen={() => this.animateOff(1)}
                  >
                    <Segment textAlign='center' vertical>
                      <Container text>
                        {this.state.animate[1] ? this.homeComponents('1-title') : null}
                        {this.state.animate[1] ? this.homeComponents('1-subtitle') : null}
                        {this.state.animate[1] ? this.homeComponents('1-content') : null}
                        {this.state.animate[1] ? this.homeComponents('1-start-button') : null}
                      </Container>
                    </Segment>
                  </Visibility>
                </div>

                <div className='section'>
                  <Visibility
                    updateOn='repaint'
                    continuous
                    onOnScreen={() => this.animateOn(2)}
                    onOffScreen={() => this.animateOff(2)}
                  >
                    <Segment textAlign='center' vertical>
                      <Container text>
                        {this.state.animate[2] ? this.homeComponents('2-title') : null}
                        {this.state.animate[2] ? this.homeComponents('2-content') : null}
                      </Container>
                    </Segment>
                  </Visibility>
                </div>

                <div className='section'>
                  <Visibility
                    updateOn='repaint'
                    continuous
                    onOnScreen={() => this.animateOn(3)}
                    onOffScreen={() => this.animateOff(3)}
                  >
                    <Segment textAlign='center' vertical>
                      <Container text>
                        {this.state.animate[3] ? this.homeComponents('3-title') : null}
                        {this.state.animate[3] ? this.homeComponents('3-content-bread-top') : null}
                        {this.state.animate[3] ? this.homeComponents('3-content-bread-bottom') : null}
                        {this.state.animate[3] ? this.homeComponents('3-content') : null}
                      </Container>
                    </Segment>
                  </Visibility>
                </div>

                <div className='section'>
                  <Visibility
                    updateOn='repaint'
                    continuous
                    onOnScreen={() => this.animateOn(4)}
                    onOffScreen={() => this.animateOff(4)}
                  >
                    <Segment textAlign='center' vertical>
                      <Container text>
                        {this.state.animate[4] ? this.homeComponents('4-title') : null}
                        {this.state.animate[4] ? this.homeComponents('4-content-grid') : null}
                        {this.state.animate[4] ? this.homeComponents('4-content') : null}
                      </Container>
                    </Segment>
                  </Visibility>
                </div>

                <div className='section'>
                  <Visibility
                    updateOn='repaint'
                    continuous
                    onOnScreen={() => this.animateOn(5)}
                    onOffScreen={() => this.animateOff(5)}
                  >
                    <Segment textAlign='center' vertical>
                      {this.state.animate[5] ? this.homeComponents('5-title') : null}
                    </Segment>
                  </Visibility>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Home;