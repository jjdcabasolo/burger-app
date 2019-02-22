import React from 'react';

import { Divider, Grid, Header } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

import Aux from '../../../hoc/Auxilliary';

const ingredientComponent = (props) => {
  const contents = [
    {
      title: '4-title',
      content: (
        <Fade top>
          <Divider
            as='h2'
          
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
      ),
    },
    {
      title: '4-content-grid',
      content: (
        <Grid stackable centered columns='equal'>
          <Grid.Row>
            <Grid.Column textAlign='center' verticalAlign='middle'>
              <Fade left delay={1000}>
                <div className="Tomato" style={{ marginTop: '10px' }}></div>
              </Fade>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Fade left delay={1000}>
                <Header style={{ marginTop: '10px', marginBottom: '-2px' }} className='primary-font'>TOMATO</Header>
                <p className='home-ingredient-detail secondary-font'>\tə-ˈmā-(ˌ)tō \<br />Vegetable plant known for lycopene.</p>
              </Fade>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Fade right delay={1500}>
                <Header style={{ marginTop: '10px', marginBottom: '-2px' }} className='primary-font'>CHEESE</Header>
                <p className='home-ingredient-detail secondary-font'>\ˈchēz \<br />Dairy product derived from milk.</p>
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
                <Header style={{ marginTop: '10px', marginBottom: '-2px' }} className='primary-font'>MEAT</Header>
                <p className='home-ingredient-detail secondary-font'>\ˈmēt \<br />Cooked animal flesh.</p>
              </Fade>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Fade right delay={2500}>
                <Header style={{ marginTop: '10px', marginBottom: '-2px' }} className='primary-font'>SALAD</Header>
                <p className='home-ingredient-detail secondary-font'>\ˈsa-ləd \<br />Mixture of vegetables.</p>
              </Fade>
            </Grid.Column>
            <Grid.Column textAlign='center' verticalAlign='middle'>
              <Fade right delay={2500}>
                <div className="Salad" style={{ marginTop: '9px' }}></div>
              </Fade>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ),
    },
    {
      title: '4-content',
      content: (
        <Fade bottom delay={3000}>
          <Header
          
            content='Our signature fundamental ingredients.'
            style={{
              fontSize: '1.5em',
              fontWeight: 'normal',
              marginTop: '3em',
            }}
            className='secondary-font'
          />
        </Fade>
      ),
    },
  ];

  return (
    <Aux>
      {contents.map((element) => {
        return element.content;
      })
      }
    </Aux>
  );
}

export default ingredientComponent;
