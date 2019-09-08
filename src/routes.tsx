/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Router, Redirect } from '@reach/router';

// components
import { Navbar } from 'components';

// screens
import Characters from 'screens/characters';
import CharactersDetails from 'screens/characters-details';

export default () => (
  <>
    <Navbar />
    <Router>
      <Redirect from="/" to="/characters" />
      <Characters path="/characters" />
      <CharactersDetails path="/characters/:id" />
    </Router>
  </>
);
