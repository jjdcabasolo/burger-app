import React from 'react';

import { Container, Segment, Visibility } from 'semantic-ui-react';

import Aux from './../../hoc/Auxilliary';

import Introduction from './Introduction/Introduction';
import BurgerBackground from './BurgerBackground/BurgerBackground';
import IngredientComponent from './IngredientComponent/IngredientComponent';
import BunComponent from './BunComponent/BunComponent';
import Footer from './Footer/Footer';

const homePages = (props) => {
  const pages = [
    (<Introduction activeItem={props.activeItem} itemClick={props.itemClick}/>),
    (<BurgerBackground />),
    (<BunComponent />),
    (<IngredientComponent />),
    (<Footer />),
  ];

  return (
    <Aux>
      { pages.map((element, index) => {
        return (
          <div className='section' key={index}>
            <Segment textAlign='center' vertical>
              <Container text>                
                {element}
              </Container>
            </Segment>
          </div>
        )})
      }
    </Aux>
  );
}

export default homePages;
