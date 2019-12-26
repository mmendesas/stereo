import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card, CardImage, CardBody, CardTitle, CardText } from '.';
import { Button } from '../Button';

storiesOf('Components | Card', module).add('default', () => (
  <Card>
    <CardImage noImage />
    <CardBody>
      <CardTitle>Card Title</CardTitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </CardText>
      <Button>Test!</Button>
    </CardBody>
  </Card>
));
