import React from 'react'

import { Container } from './styles';

function Button({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Button;