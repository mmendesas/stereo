import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '.';

storiesOf('Elements | Input', module).add('default', () => (
  <Input placeholder="type here!" />
));
