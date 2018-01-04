import React from 'react';
import ReactDOM from 'react-dom';
// import App from './index';
import CityWeather from './cityWeather';
import '../theme/index.less'
import '../../node_modules/antd/dist/antd.less';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from '../configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <CityWeather />
  </Provider>,
  document.getElementById('root')
)