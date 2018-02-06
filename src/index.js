import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import history from '../utils/history';
import { 
  Router,
  Route
 } from 'react-router-dom';

import requireAuth from './components/hoc/require_auth';
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
      <div>
        <Route path='/' component={App}/>
        <Route path='/resources' component={requireAuth(Resources)}/>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
