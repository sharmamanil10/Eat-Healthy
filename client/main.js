import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//import { Switch } from 'react-router';
//import { BrowserRouter, Route } from 'react-router';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const routes = (
  <BrowserRouter>
  <div>
    <Route exact path='/signup' component={Signup}/>
    <Route exact path='/link' component={Link}/>
    <Route exact path='/' component={Login}/>
  </div>
  </BrowserRouter>
);



Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById('app'));
});
