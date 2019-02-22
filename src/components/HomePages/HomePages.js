import React from 'react';

import { Container, Segment, Visibility } from 'semantic-ui-react';

import Aux from './../../hoc/Auxilliary';

import Introduction from './Introduction/Introduction';
import BurgerBackground from './BurgerBackground/BurgerBackground';
import IngredientComponent from './IngredientComponent/IngredientComponent';
import TheBun from './TheBun/TheBun';
import Footer from './Footer/Footer';

const homePages = (props) => {
  const pages = [
    (<Introduction activeItem={props.activeItem} itemClick={props.itemClick}/>),
    (<BurgerBackground />),
    (<TheBun />),
    (<IngredientComponent />),
    (<Footer />),
  ];
  
  return (
    <Aux>
      { pages.map((element, index) => {
        return (
          <div className='section'>
            <Visibility
              updateOn='repaint'
              continuous
              onOnScreen={() => props.animateOn(index + 1)}
              onOffScreen={() => props.animateOff(index + 1)}
            >
              <Segment textAlign='center' vertical>
                <Container text>                
                  {element}
                </Container>
              </Segment>
            </Visibility>
          </div>
        )})
      }
    </Aux>
  );
}

export default homePages;
