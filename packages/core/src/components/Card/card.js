import React from 'react';

import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardBody,
  CardText,
} from './styles';

function Card({ noImage, children, ...props }) {
  return (
    <CardWrapper noImage={noImage} {...props}>
      {children}
    </CardWrapper>
  );
}

export { Card, CardImage, CardBody, CardTitle, CardText };
