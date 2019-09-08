/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Router } from '@reach/router';

// components
import { Navbar } from 'components';

// screens
import Characters from 'screens/characters';
import Welcome from 'screens/welcome';

export default () => (
  <>
    <Navbar />
    <Router>
      <Characters path="/" />
    </Router>
  </>
);
