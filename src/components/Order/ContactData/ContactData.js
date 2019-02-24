import React from 'react';
import { Form, Grid, TextArea } from 'semantic-ui-react';

import { Fade } from 'react-reveal';

import Aux from './../../../hoc/Auxilliary';
import './ContactData.css'

const contactData = (props) => {
  const { changeState, hasError, inputMap, isNight } = props;

  const contents = [
    {
      inputTitle: 'First Name',
      placeholder: '(and the rest, except the last)',
      type: 'text',
    },
    {
      inputTitle: 'Last Name',
      placeholder: 'multiple last name still applies',
      type: 'text',
    },
    {
      inputTitle: 'Email',
      placeholder: 'we prefer your gmail',
      type: 'email',
    },
    {
      inputTitle: 'Contact number',
      placeholder: 'mobile is waaaaaaaay better',
      type: 'text',
    },
    {
      inputTitle: 'Delivery address',
      placeholder: 'you do not want your burger to be delivered to the wrong address',
    },
  ];

  return (
    <Aux>
      <Form className='fluid' inverted={isNight}>
        <Grid className='font-normal'>
          {contents.map((element, index) => {

            let input = (
              <Form.Input
                className='secondary-font'
                error={inputMap[index].error}
                name={inputMap[index].name}
                onChange={changeState}
                placeholder={element.placeholder}
                type={element.type}
                value={inputMap[index].value} />
            )

            if (index === 4) {
              input = (
                <Form.Input
                  autoHeight
                  className='secondary-font'
                  control={TextArea}
                  error={inputMap[index].error}
                  name={inputMap[index].name}
                  onChange={changeState}
                  placeholder={element.placeholder}
                  value={inputMap[index].value} />
              )
            }

            return (
              <Grid.Row key={index}>
                <Grid.Column
                  width={4}
                  className='secondary-font'
                  verticalAlign='middle'
                  textAlign='right'>
                  {element.inputTitle}
                </Grid.Column>

                <Grid.Column width={12}>
                  {input}
                </Grid.Column>
              </Grid.Row>
            );
          })}
        </Grid>
      </Form>

      { hasError ?
        <Fade>
          <p className='secondary-font font-normal contactdata-form-message'>fields in red must be filled up to continue</p>
        </Fade>
        :
        null
      }
    </Aux>
  );
}

export default contactData;
