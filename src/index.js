import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store/index';
import App from './js/components/App.jsx';
import {addArticle} from './js/actions/index'

window.store = store;
window.addArticle = addArticle;

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);