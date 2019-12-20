import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Reviews from '../components/Reviews';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/reviews' component={Reviews} />
  </Switch>
)