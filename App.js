import React from 'react';
import {Provider} from 'react-redux';

import configStore from './src/redux/Store';

import Root from './src/screens/RootScreen';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configStore}>
        <Root/>
      </Provider>
    );
  }
}
