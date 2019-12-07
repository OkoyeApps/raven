
import React, { Component } from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storeConfig from './src/store/config'
import { View, Text } from 'react-native'
import { Root } from 'native-base'
import Rootscreen from './src/navigations'
import Welcome from './src/screens/Welcome/Welcome';
var { store, persistor } = storeConfig;


const App = (props) => {

  return (
    <Provider store={store}>
      <PersistGate loading={<Welcome />} persistor={persistor}>
        <Root>
          <Rootscreen />
        </Root>
      </PersistGate>
    </Provider>
  )
}

export default App;


