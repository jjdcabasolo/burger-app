import React from 'react';

import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

import Aux from '../../../hoc/Auxilliary';

const Footer = () => {
  const contents = [
    {
      key: '5-title',
      content: (
        <Segment
          vertical
          style = {{  marginTop: '60vh' }}
        >
          <Grid divided stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header
                  as='h4' content='1234' />
                <List link >
                  <List.Item as='a'>qwer</List.Item>
                  <List.Item as='a'>asdf</List.Item>
                  <List.Item as='a'>zxcv</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header
                  as='h4' content='5678' />
                <List link >
                  <List.Item as='a'>uiop</List.Item>
                  <List.Item as='a'>jkl;</List.Item>
                  <List.Item as='a'>bnm,</List.Item>
                  <List.Item as='a'>--</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as='h4'>
                  90
                </Header>
                <p style={{ color: 'rgba(0,0,0,.4)' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur scelerisque odio non hendrerit. Integer mollis, nisl non efficitur tempus, leo lorem maximus metus, in pulvinar nulla quam volutpat neque. Suspendisse viverra vitae odio a bibendum. Nullam eleifend vel sapien eget lacinia. Ut dictum ac ex at pharetra. Curabitur ligula magna, interdum sed imperdiet non, vestibulum aliquam justo. Pellentesque viverra lacus ut laoreet convallis. Integer eget auctor elit.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment >
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

export default Footer;
