import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import {
  Button,
  Header,
  Banner,
  Card,
  CardImage,
  CardTitle,
  CardBody,
  CardText,
} from '@stereo/core';
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

const items = Array(5).fill(0);
const ItemList = styled.div`
  display: flex;
`;

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />

    <Content>
      <Banner bgColor="#00cc99">
        <Text>
          <Title>Super Smash Promo</Title>
          <p>Buy what you want for really 30% off</p>
        </Text>
      </Banner>

      <Subtitle>You need to buy with us now</Subtitle>

      <Banner bgColor="#009973" height="100px">
        <Text align="left">
          <Title>Buy this one</Title>
        </Text>
      </Banner>

      <ItemList>
        {items.map(item => (
          <Card>
            <CardImage noImage />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Test!</Button>
            </CardBody>
          </Card>
        ))}
      </ItemList>

      <Banner bgColor="#00664d" height="100px">
        <Text>
          <h3>Or maybe this</h3>
        </Text>
      </Banner>

      <Subtitle>You need to buy with us now</Subtitle>
      <Banner bgColor="#66ffd9" height="100px">
        <Text>
          <h3 style={{ color: '#000' }}>Buy this now</h3>
        </Text>
      </Banner>

      <Button>First Button</Button>
    </Content>
    <GlobalStyle />
  </>
);

export default Home;
