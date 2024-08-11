import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
//    <Provider store={store}>
//    <App />
//  </Provider>,
  document.getElementById('root')
);






