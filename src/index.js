import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

import {  Provider, useSelector } from 'react-redux';

import store from './store';

import './index.css';

ReactDom.render(
<Provider store={store}>

<App />

</Provider>
, document.getElementById("root"));
