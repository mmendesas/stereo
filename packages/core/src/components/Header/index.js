import React from 'react';
import { MdMenu, MdShoppingCart } from 'react-icons/md';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <MdMenu size={30} color="#fff" />
      <h1>Stereo App</h1>
      <MdShoppingCart size={30} color="#fff" />
    </Container>
  );
}
