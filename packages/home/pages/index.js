import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import { Button, Header, Banner } from '@stereo/core';
import GlobalStyle from '~/styles/global';

const Title = styled.h1`
  font-size: 40px;
`;

const Text = styled.div`
  text-align: center;
`;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  padding: 5px;
`;

const Content = styled.div`
  padding: 5px;
`;

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />

    <Content>
      <Banner>
        <Text>
          <Title>Super Smash Promo</Title>
          <p>Buy what you want for really 30% off</p>
        </Text>
      </Banner>

      <Subtitle>You need to buy with us now</Subtitle>

      <Banner bgColor="#Fae" height="100px">
        <Text align="left">
          <Title>Buy this</Title>
        </Text>
      </Banner>

      <Banner bgColor="#0a0" height="100px">
        <Text>
          <p>Buy this</p>
        </Text>
      </Banner>

      <Subtitle>You need to buy with us now</Subtitle>
      <Banner bgColor="#a00" height="100px">
        <Text>
          <p>Buy this</p>
        </Text>
      </Banner>

      <Button>First Button</Button>
    </Content>
    <GlobalStyle />
  </>
);

export default Home;
