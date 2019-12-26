import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ secondary, loading, children, ...props }) {
  return (
    <Container secondary={secondary} loading={loading} {...props}>
      {loading ? <div>Loading...</div> : children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

export { Button };
