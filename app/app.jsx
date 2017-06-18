let React = require('react');
let ReactDOM = require('react-dom');
let Main = require('Main');
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
