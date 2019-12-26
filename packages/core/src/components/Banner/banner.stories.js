import React from 'react';
import { storiesOf } from '@storybook/react';

import { Banner } from '.';

storiesOf('Elements | Banner', module)
  .add('default', () => <Banner>Banner Sample</Banner>)
  .add('with color', () => <Banner bgColor="#0a0">Another Banner</Banner>);
