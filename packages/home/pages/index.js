import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import { Button } from '@stereo/core';

import Header from "~/components/Header";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`
const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <Title>Home page</Title>
    <Subtitle>A simple message</Subtitle>
    <Button>First Button</Button>
  </>
)

export default Home;