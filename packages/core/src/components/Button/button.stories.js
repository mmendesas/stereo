import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '.';

storiesOf('Elements | Button', module)
  .add('default', () => <Button>First Button</Button>)
  .add('secondary', () => <Button secondary>Other Button</Button>)
  .add('loading', () => <Button loading />);
